
import React, { useState, useEffect } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { 
  Menu, Moon, Sun, Accessibility, Cookie, 
  Calendar, Home, ShieldCheck, ArrowRight,
  MessageCircle, Info,
  Instagram, Twitter, Linkedin, Facebook
} from 'lucide-react';
import HomeView from './views/HomeView';
import FormView from './views/FormView';
import PolicyView from './views/PolicyView';
import AdminPortal from './views/AdminPortal';
import { FormType } from './types';

// Enhanced Tooltip Component
const Tooltip: React.FC<{ text: string; children: React.ReactNode }> = ({ text, children }) => {
  return (
    <div className="relative group flex items-center">
      {children}
      <div className="absolute top-full mt-3 left-1/2 -translate-x-1/2 px-4 py-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-[11px] font-black rounded-xl opacity-0 group-hover:opacity-100 transition-all pointer-events-none whitespace-nowrap z-[100] shadow-2xl scale-95 group-hover:scale-100">
        {text}
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 border-[6px] border-transparent border-bottom-slate-900 dark:border-bottom-white rotate-180"></div>
      </div>
    </div>
  );
};

const App: React.FC = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [showCookies, setShowCookies] = useState(true);
  const [adaActive, setAdaActive] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const savedTheme = localStorage.getItem('tranquil_theme') as 'light' | 'dark';
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('tranquil_theme', theme);
  }, [theme]);

  useEffect(() => {
    const visits = parseInt(localStorage.getItem('tranquil_visits') || '0');
    localStorage.setItem('tranquil_visits', (visits + 1).toString());
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const toggleTheme = () => setTheme(prev => prev === 'light' ? 'dark' : 'light');

  const navLinks = [
    { 
      name: 'Home', 
      path: '/', 
      tooltip: 'Return to our primary mental health practice overview',
      icon: <Home size={18} /> 
    },
    { 
      name: 'HIPAA Policy', 
      path: '/hipaa', 
      tooltip: 'View our strict federal medical privacy guidelines',
      icon: <ShieldCheck size={18} /> 
    },
  ];

  return (
    <div className={`min-h-screen flex flex-col transition-all duration-500 bg-slate-50 dark:bg-slate-950 ${adaActive ? 'text-xl' : 'text-base'}`}>
      {/* Navigation Header */}
      <header className="sticky top-0 z-50 glass border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-24 items-center">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="w-10 h-10 bg-primary-600 rounded-xl flex items-center justify-center text-white font-black shadow-lg group-hover:scale-105 transition-transform">T</div>
              <div className="flex flex-col">
                <span className="text-lg font-black tracking-tight text-slate-900 dark:text-white leading-none">Tranquil</span>
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-1">Mental Health & Wellness</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              {navLinks.map(link => (
                <Tooltip key={link.path} text={link.tooltip}>
                  <Link 
                    to={link.path}
                    className={`text-sm font-bold transition-all px-3 py-2 rounded-xl ${
                      location.pathname === link.path 
                      ? 'text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/10' 
                      : 'text-slate-600 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-300'
                    }`}
                  >
                    {link.name}
                  </Link>
                </Tooltip>
              ))}

              <div className="h-6 w-px bg-slate-200 dark:bg-slate-800 mx-2"></div>

              {/* WhatsApp Button */}
              <Tooltip text="Initiate an instant encrypted chat with our care team">
                <a 
                  href="https://wa.me/1234567890" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 bg-green-500/10 text-green-600 dark:text-green-400 rounded-xl text-xs font-black hover:bg-green-500 hover:text-white transition-all border border-green-500/20"
                >
                  <MessageCircle size={16} />
                  WhatsApp
                </a>
              </Tooltip>

              {/* Book Now Button */}
              <Tooltip text="Schedule your clinical psychiatric consultation via our secure portal">
                <Link 
                  to="/booking"
                  className="px-6 py-3 bg-primary-600 text-white rounded-xl text-xs font-black shadow-lg shadow-primary-500/30 hover:bg-primary-700 hover:scale-105 transition-all flex items-center gap-2"
                >
                  <Calendar size={16} />
                  Book Now
                </Link>
              </Tooltip>

              <Tooltip text={theme === 'dark' ? 'Enable bright light mode for better visibility' : 'Enable eye-friendly dark mode'}>
                <button 
                  onClick={toggleTheme}
                  className="p-3 bg-slate-100 dark:bg-slate-800 rounded-xl text-slate-600 dark:text-slate-400 hover:text-primary-600 transition-colors"
                  aria-label="Toggle Theme"
                >
                  {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                </button>
              </Tooltip>
            </div>

            {/* Mobile Interaction */}
            <div className="md:hidden flex items-center gap-2">
               <button onClick={toggleTheme} className="p-2.5 bg-slate-100 dark:bg-slate-800 rounded-xl">{theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}</button>
               <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2.5 bg-primary-600 text-white rounded-xl shadow-lg"><Menu size={20} /></button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className="md:hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 py-6 px-6 space-y-3 animate-in slide-in-from-top-4">
            {navLinks.map(link => (
              <Link 
                key={link.path} 
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center gap-4 px-4 py-3 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-2xl font-bold transition-all"
              >
                {link.icon} {link.name}
              </Link>
            ))}
            <a 
              href="https://wa.me/1234567890" 
              className="flex items-center gap-4 px-4 py-3 text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20 rounded-2xl font-bold"
            >
              <MessageCircle size={18} /> WhatsApp Care
            </a>
            <Link 
              to="/booking"
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center gap-4 px-4 py-4 bg-primary-600 text-white rounded-2xl font-black shadow-lg"
            >
              <Calendar size={18} /> Book Now
            </Link>
          </div>
        )}
      </header>

      {/* Main Viewport */}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/forms" element={<FormView type={FormType.INTAKE} />} />
          <Route path="/booking" element={<FormView type={FormType.BOOKING} />} />
          <Route path="/screening" element={<FormView type={FormType.SCREENING} />} />
          <Route path="/contact" element={<FormView type={FormType.CONTACT} />} />
          <Route path="/feedback" element={<FormView type={FormType.FEEDBACK} />} />
          <Route path="/hipaa" element={<PolicyView type="hipaa" />} />
          <Route path="/rights" element={<PolicyView type="rights" />} />
          <Route path="/privacy" element={<PolicyView type="privacy" />} />
          <Route path="/terms" element={<PolicyView type="terms" />} />
          
          {/* HIDDEN ADMIN ROUTE */}
          <Route path="/internal-clinical-management" element={<AdminPortal />} />
        </Routes>
      </main>

      {/* Global Footer */}
      <footer className="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 pt-20 pb-12">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-24">
          <div className="space-y-6">
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-9 h-9 bg-primary-600 rounded-xl flex items-center justify-center text-white font-black">T</div>
              <span className="text-xl font-black dark:text-white">Tranquil</span>
            </Link>
            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed font-medium">
              Empowering mental wellness through clinical evidence and empathetic psychiatric oversight.
            </p>
            <div className="flex space-x-3 pt-2">
              {[Twitter, Linkedin, Facebook, Instagram].map((Icon, idx) => (
                <a key={idx} href="#" className="w-10 h-10 bg-slate-50 dark:bg-slate-800 rounded-xl flex items-center justify-center text-slate-400 hover:text-primary-600 hover:bg-primary-50 transition-all border border-slate-100 dark:border-slate-700">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-black mb-8 dark:text-white uppercase tracking-widest text-[10px] text-slate-400">Services</h4>
            <ul className="space-y-4 text-sm font-bold text-slate-600 dark:text-slate-400">
              <li><Link to="/forms" className="hover:text-primary-600 transition-colors">Digital Registration</Link></li>
              <li><Link to="/booking" className="hover:text-primary-600 transition-colors">Booking Portal</Link></li>
              <li><Link to="/screening" className="hover:text-primary-600 transition-colors">Self-Screening</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-black mb-8 dark:text-white uppercase tracking-widest text-[10px] text-slate-400">Transparency</h4>
            <ul className="space-y-4 text-sm font-bold text-slate-600 dark:text-slate-400">
              <li><Link to="/hipaa" className="hover:text-primary-600 transition-colors">HIPAA Policy</Link></li>
              <li><Link to="/privacy" className="hover:text-primary-600 transition-colors">Privacy Rights</Link></li>
              <li><Link to="/terms" className="hover:text-primary-600 transition-colors">Terms of Use</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-black mb-8 dark:text-white uppercase tracking-widest text-[10px] text-slate-400">Emergency</h4>
            <div className="space-y-5">
              <div className="p-4 bg-red-50 dark:bg-red-900/10 border border-red-100 dark:border-red-900/30 rounded-2xl text-center">
                <p className="text-xs font-black text-red-600 uppercase tracking-wider mb-1">Immediate Crisis</p>
                <p className="text-lg font-black text-slate-900 dark:text-slate-200">911 / 988</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* FOOTER BOTTOM WITH HIDDEN ACCESS LINK */}
        <div className="max-w-7xl mx-auto px-4 mt-20 pt-8 border-t border-slate-100 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">&copy; {new Date().getFullYear()} Tranquil Mental Health. HIPAA Secure.</p>
          
          <Tooltip text="Authorized Management Access: Testing and Analytics Environment">
            <Link 
              to="/internal-clinical-management" 
              className="text-[10px] font-black text-slate-200 dark:text-slate-800 hover:text-primary-600 uppercase tracking-[0.2em] transition-colors"
            >
              Management Console
            </Link>
          </Tooltip>
        </div>
      </footer>

      {/* Consent Overlay */}
      {showCookies && <CookieBanner onClose={() => setShowCookies(false)} />}
      
      {/* ADA Accessibility Toggle */}
      <Tooltip text="Modify display settings for ADA accessibility compliance">
        <button 
          onClick={() => setAdaActive(!adaActive)}
          className="fixed bottom-6 left-6 z-50 w-12 h-12 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-2xl shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all group"
        >
          <Accessibility size={22} className="group-hover:rotate-12 transition-transform" />
        </button>
      </Tooltip>

      {/* Persistent WhatsApp Floating Button */}
      <Tooltip text="Chat with our office manager on WhatsApp">
        <a 
          href="https://wa.me/1234567890" 
          target="_blank" 
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all"
        >
          <MessageCircle size={28} />
        </a>
      </Tooltip>
    </div>
  );
};

const CookieBanner = ({ onClose }: { onClose: () => void }) => (
  <div className="fixed bottom-24 right-8 left-8 md:left-auto md:w-[420px] z-[100] bg-white dark:bg-slate-800 p-8 rounded-[2.5rem] shadow-[0_32px_64px_-12px_rgba(0,0,0,0.2)] border border-slate-100 dark:border-slate-700 animate-in slide-in-from-bottom-12">
    <div className="flex gap-4 mb-6">
      <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 text-primary-600 rounded-2xl flex items-center justify-center shrink-0">
        <Cookie size={24} />
      </div>
      <div>
        <h5 className="font-black text-slate-900 dark:text-white tracking-tight">Clinical Privacy Notice</h5>
        <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">Our portal uses secure cookies to maintain HIPAA sessions.</p>
      </div>
    </div>
    <div className="flex gap-3">
      <button onClick={onClose} className="flex-1 bg-primary-600 text-white py-3.5 rounded-2xl text-xs font-black hover:bg-primary-700 transition-all shadow-lg shadow-primary-500/20">Accept</button>
      <button onClick={onClose} className="flex-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-white py-3.5 rounded-2xl text-xs font-bold hover:bg-slate-200">Necessary</button>
    </div>
  </div>
);

export default App;
