
import React, { useState, useEffect } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { 
  Menu, Moon, Sun, Accessibility, Cookie, 
  Calendar, Home, ShieldCheck, 
  MessageCircle, Star, Users, Briefcase,
  Instagram, Twitter, Linkedin, Facebook, Camera,
  X, Type, Languages, AlignLeft, LetterText, Maximize, RotateCcw
} from 'lucide-react';
import HomeView from './views/HomeView';
import FormView from './views/FormView';
import PolicyView from './views/PolicyView';
import AboutView from './views/AboutView';
import AdminPortal from './views/AdminPortal';
import TestimonialView from './views/TestimonialView';
import CareerView from './views/CareerView';
import { FormType } from './types';

// Accessibility Settings Interface
interface AdaSettings {
  fontSize: 'normal' | 'large' | 'extra';
  contrast: 'normal' | 'high';
  spacing: 'normal' | 'wide' | 'extra';
  letterSpacing: 'normal' | 'wide';
  dyslexicFont: boolean;
}

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

// Accessibility Control Panel Component
const AccessibilityMenu: React.FC<{ 
  settings: AdaSettings; 
  onUpdate: (settings: AdaSettings) => void; 
  onClose: () => void 
}> = ({ settings, onUpdate, onClose }) => {
  const resetSettings = () => {
    onUpdate({
      fontSize: 'normal',
      contrast: 'normal',
      spacing: 'normal',
      letterSpacing: 'normal',
      dyslexicFont: false
    });
  };

  return (
    <div className="fixed bottom-24 left-6 z-[100] w-[340px] bg-white dark:bg-slate-900 rounded-[2.5rem] shadow-2xl border border-slate-100 dark:border-slate-800 p-8 animate-in slide-in-from-bottom-4 duration-300">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-sm font-black uppercase tracking-widest text-slate-900 dark:text-white flex items-center gap-2">
          <Accessibility size={18} className="text-primary-600" /> Compliance Suite
        </h3>
        <button onClick={onClose} className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors">
          <X size={18} />
        </button>
      </div>

      <div className="space-y-6">
        {/* Font Size */}
        <div>
          <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest mb-3 block">Text Size</label>
          <div className="grid grid-cols-3 gap-2">
            {(['normal', 'large', 'extra'] as const).map(size => (
              <button 
                key={size}
                onClick={() => onUpdate({...settings, fontSize: size})}
                className={`py-2 text-[10px] font-bold rounded-xl border transition-all ${settings.fontSize === size ? 'bg-primary-600 border-primary-600 text-white' : 'border-slate-100 dark:border-slate-800 hover:bg-slate-50'}`}
              >
                {size.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        {/* Contrast */}
        <div>
          <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest mb-3 block">Visual Contrast</label>
          <div className="grid grid-cols-2 gap-2">
            {(['normal', 'high'] as const).map(mode => (
              <button 
                key={mode}
                onClick={() => onUpdate({...settings, contrast: mode})}
                className={`py-2 text-[10px] font-bold rounded-xl border transition-all ${settings.contrast === mode ? 'bg-primary-600 border-primary-600 text-white' : 'border-slate-100 dark:border-slate-800 hover:bg-slate-50'}`}
              >
                {mode === 'high' ? 'YELLOW/BLACK' : 'DEFAULT'}
              </button>
            ))}
          </div>
        </div>

        {/* Dyslexic Font Toggle */}
        <div className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-800/50 rounded-2xl">
          <div>
            <p className="text-xs font-black dark:text-white">Dyslexia Friendly</p>
            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-tight">Open-Dyslexic Stack</p>
          </div>
          <button 
            onClick={() => onUpdate({...settings, dyslexicFont: !settings.dyslexicFont})}
            className={`w-12 h-6 rounded-full relative transition-colors ${settings.dyslexicFont ? 'bg-primary-600' : 'bg-slate-200 dark:bg-slate-700'}`}
          >
            <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${settings.dyslexicFont ? 'left-7' : 'left-1'}`}></div>
          </button>
        </div>

        {/* Spacing Controls */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest mb-2 block">Line Height</label>
            <button 
              onClick={() => onUpdate({...settings, spacing: settings.spacing === 'normal' ? 'wide' : settings.spacing === 'wide' ? 'extra' : 'normal'})}
              className="w-full py-2 bg-slate-50 dark:bg-slate-800 rounded-xl text-[10px] font-bold"
            >
              {settings.spacing.toUpperCase()}
            </button>
          </div>
          <div>
            <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest mb-2 block">Word Space</label>
            <button 
              onClick={() => onUpdate({...settings, letterSpacing: settings.letterSpacing === 'normal' ? 'wide' : 'normal'})}
              className="w-full py-2 bg-slate-50 dark:bg-slate-800 rounded-xl text-[10px] font-bold"
            >
              {settings.letterSpacing.toUpperCase()}
            </button>
          </div>
        </div>

        <button 
          onClick={resetSettings}
          className="w-full py-4 border border-slate-100 dark:border-slate-800 text-[10px] font-black uppercase tracking-widest rounded-2xl hover:bg-slate-50 transition-all flex items-center justify-center gap-2"
        >
          <RotateCcw size={14} /> Reset Preferences
        </button>
      </div>
    </div>
  );
};

// Global Horizontal Scrolling Gallery Component
const GlobalGallery: React.FC = () => {
  const images = [
    "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1505751172107-596225244506?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1499209974431-9dac3adaf471?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1528715471579-d1bcf0ba5e83?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1559839734-2b71f1536783?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=600&q=80",
  ];

  return (
    <section className="py-20 bg-white dark:bg-slate-950 overflow-hidden border-t border-slate-100 dark:border-slate-900">
      <div className="max-w-7xl mx-auto px-4 mb-10 flex justify-between items-center">
        <div className="flex items-center gap-3">
           <Camera className="text-primary-600" size={20} />
           <span className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400">Clinical Sanctuary</span>
        </div>
        <div className="hidden md:block h-px flex-grow mx-8 bg-slate-100 dark:bg-slate-800"></div>
        <div className="text-[10px] font-black uppercase tracking-[0.2em] text-primary-600/50">Infinite Scroll</div>
      </div>
      
      {/* Marquee Container */}
      <div className="relative flex overflow-hidden select-none">
        <div className="animate-marquee-scroll flex gap-8 whitespace-nowrap will-change-transform py-4">
          {[...images, ...images].map((img, idx) => (
            <div key={idx} className="w-[300px] md:w-[450px] shrink-0 aspect-[16/10] rounded-[2.5rem] overflow-hidden shadow-2xl shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-slate-800 group relative">
              <img 
                src={img} 
                alt="Clinical Gallery" 
                className="w-full h-full object-cover transition-all duration-700 grayscale-[40%] group-hover:grayscale-0 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const App: React.FC = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [showCookies, setShowCookies] = useState(true);
  const [isAdaMenuOpen, setIsAdaMenuOpen] = useState(false);
  const [adaSettings, setAdaSettings] = useState<AdaSettings>({
    fontSize: 'normal',
    contrast: 'normal',
    spacing: 'normal',
    letterSpacing: 'normal',
    dyslexicFont: false
  });
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Load saved settings
  useEffect(() => {
    const savedTheme = localStorage.getItem('tranquil_theme') as 'light' | 'dark';
    if (savedTheme) setTheme(savedTheme);

    const savedAda = localStorage.getItem('tranquil_ada_settings');
    if (savedAda) {
      try { setAdaSettings(JSON.parse(savedAda)); } catch(e) { console.error(e); }
    }
  }, []);

  // Sync settings
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('tranquil_theme', theme);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem('tranquil_ada_settings', JSON.stringify(adaSettings));
  }, [adaSettings]);

  useEffect(() => {
    const visits = parseInt(localStorage.getItem('tranquil_visits') || '0');
    localStorage.setItem('tranquil_visits', (visits + 1).toString());
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const toggleTheme = () => setTheme(prev => prev === 'light' ? 'dark' : 'light');

  const navLinks = [
    { name: 'Home', path: '/', tooltip: 'Main overview', icon: <Home size={18} /> },
    { name: 'About', path: '/about', tooltip: 'Who we are', icon: <Users size={18} /> },
    { name: 'Testimonials', path: '/testimonials', tooltip: 'Patient experiences', icon: <Star size={18} /> },
    { name: 'Careers', path: '/careers', tooltip: 'Join our team', icon: <Briefcase size={18} /> },
    { name: 'HIPAA', path: '/hipaa', tooltip: 'Privacy policy', icon: <ShieldCheck size={18} /> },
  ];

  // Map settings to CSS classes
  const getAdaClasses = () => {
    let classes = [];
    if (adaSettings.fontSize === 'large') classes.push('text-lg');
    if (adaSettings.fontSize === 'extra') classes.push('text-xl');
    if (adaSettings.contrast === 'high') classes.push('high-contrast-ada');
    if (adaSettings.spacing === 'wide') classes.push('leading-relaxed');
    if (adaSettings.spacing === 'extra') classes.push('leading-loose');
    if (adaSettings.letterSpacing === 'wide') classes.push('tracking-widest');
    if (adaSettings.dyslexicFont) classes.push('dyslexic-font');
    return classes.join(' ');
  };

  const WHATSAPP_NUMBER = "1234567890";
  const GLOBAL_WHATSAPP_MESSAGE = encodeURIComponent("Hello Tranquil Mental Health! I have some questions about your services.");

  // Determine if we should show the "SOS" color for WhatsApp
  const isBookingPage = location.pathname === '/booking' || location.pathname === '/contact';

  return (
    <div className={`min-h-screen flex flex-col transition-all duration-500 bg-slate-50 dark:bg-slate-950 ${getAdaClasses()}`}>
      <style>{`
        /* Optimized Marquee Scroll */
        @keyframes marquee-scroll {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-50%, 0, 0); }
        }

        .animate-marquee-scroll {
          animation: marquee-scroll 60s linear infinite;
        }

        .animate-marquee-scroll:hover {
          animation-play-state: paused;
        }

        .high-contrast-ada {
          background-color: #000 !important;
          color: #ffff00 !important;
        }
        .high-contrast-ada * {
          background-color: #000 !important;
          color: #ffff00 !important;
          border-color: #ffff00 !important;
          box-shadow: none !important;
        }
        .dyslexic-font {
          font-family: 'Open-Dyslexic', 'Comic Sans MS', cursive !important;
        }
        @font-face {
          font-family: 'Open-Dyslexic';
          src: url('https://cdn.jsdelivr.net/npm/open-dyslexic@1.0.3/OpenDyslexic-Regular.otf');
        }
      `}</style>

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

              <Tooltip text="Book psychiatric evaluation">
                <Link 
                  to="/booking"
                  className="px-6 py-3 bg-primary-600 text-white rounded-xl text-xs font-black shadow-lg shadow-primary-500/30 hover:bg-primary-700 hover:scale-105 transition-all flex items-center gap-2"
                >
                  <Calendar size={16} />
                  Book Now
                </Link>
              </Tooltip>

              <button 
                onClick={toggleTheme}
                className="p-3 bg-slate-100 dark:bg-slate-800 rounded-xl text-slate-600 dark:text-slate-400 hover:text-primary-600 transition-colors"
              >
                {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>

            <div className="md:hidden flex items-center gap-2">
               <button onClick={toggleTheme} className="p-2.5 bg-slate-100 dark:bg-slate-800 rounded-xl">{theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}</button>
               <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2.5 bg-primary-600 text-white rounded-xl shadow-lg"><Menu size={20} /></button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 py-6 px-6 space-y-3">
            {navLinks.map(link => (
              <Link key={link.path} to={link.path} onClick={() => setIsMenuOpen(false)} className="flex items-center gap-4 px-4 py-3 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-2xl font-bold transition-all">
                {link.icon} {link.name}
              </Link>
            ))}
            <Link to="/booking" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-4 px-4 py-4 bg-primary-600 text-white rounded-2xl font-black shadow-lg">
              <Calendar size={18} /> Book Now
            </Link>
          </div>
        )}
      </header>

      {/* Main Viewport */}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/about" element={<AboutView />} />
          <Route path="/testimonials" element={<TestimonialView />} />
          <Route path="/careers" element={<CareerView />} />
          <Route path="/forms" element={<FormView type={FormType.INTAKE} />} />
          <Route path="/booking" element={<FormView type={FormType.BOOKING} />} />
          <Route path="/screening" element={<FormView type={FormType.SCREENING} />} />
          <Route path="/contact" element={<FormView type={FormType.CONTACT} />} />
          <Route path="/feedback" element={<FormView type={FormType.FEEDBACK} />} />
          <Route path="/hipaa" element={<PolicyView type="hipaa" />} />
          <Route path="/rights" element={<PolicyView type="rights" />} />
          <Route path="/privacy" element={<PolicyView type="privacy" />} />
          <Route path="/terms" element={<PolicyView type="terms" />} />
          <Route path="/internal-clinical-management" element={<AdminPortal />} />
        </Routes>
      </main>

      {/* HORIZONTAL GALLERY BEFORE FOOTER */}
      <GlobalGallery />

      {/* Global Footer */}
      <footer className="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 pt-20 pb-12">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-24">
          <div className="space-y-6">
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-9 h-9 bg-primary-600 rounded-xl flex items-center justify-center text-white font-black">T</div>
              <span className="text-xl font-black dark:text-white">Tranquil</span>
            </Link>
            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed font-bold italic">
              "At Tranquil Mental Health and Wellness, we specialize in providing comprehensive psychiatric care with a focus on individualized treatment."
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
            <h4 className="font-black mb-8 dark:text-white uppercase tracking-widest text-[10px] text-slate-400">Practice</h4>
            <ul className="space-y-4 text-sm font-bold text-slate-600 dark:text-slate-400">
              <li><Link to="/testimonials" className="hover:text-primary-600 transition-colors">Testimonials</Link></li>
              <li><Link to="/careers" className="hover:text-primary-600 transition-colors">Career Openings</Link></li>
              <li><Link to="/contact" className="hover:text-primary-600 transition-colors">Contact Us</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-black mb-8 dark:text-white uppercase tracking-widest text-[10px] text-slate-400">Compliance</h4>
            <ul className="space-y-4 text-sm font-bold text-slate-600 dark:text-slate-400">
              <li><Link to="/hipaa" className="hover:text-primary-600 transition-colors">HIPAA Policy</Link></li>
              <li><Link to="/privacy" className="hover:text-primary-600 transition-colors">Privacy Rights</Link></li>
              <li><Link to="/terms" className="hover:text-primary-600 transition-colors">Terms of Use</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-black mb-8 dark:text-white uppercase tracking-widest text-[10px] text-slate-400">Crisis Support</h4>
            <div className="p-4 bg-red-50 dark:bg-red-900/10 border border-red-100 dark:border-red-900/30 rounded-2xl text-center">
              <p className="text-xs font-black text-red-600 uppercase tracking-wider mb-1">Immediate Help</p>
              <p className="text-lg font-black text-slate-900 dark:text-slate-200">911 / 988</p>
            </div>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 mt-20 pt-8 border-t border-slate-100 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">&copy; {new Date().getFullYear()} Tranquil Mental Health. HIPAA Secure.</p>
          <Link to="/internal-clinical-management" className="text-[10px] font-black text-slate-200 dark:text-slate-800 hover:text-primary-600 uppercase tracking-[0.2em]">Management</Link>
        </div>
      </footer>

      {showCookies && <CookieBanner onClose={() => setShowCookies(false)} />}
      
      {/* Accessibility Trigger */}
      <button 
        onClick={() => setIsAdaMenuOpen(!isAdaMenuOpen)}
        className="fixed bottom-6 left-6 z-50 w-12 h-12 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-2xl shadow-2xl flex items-center justify-center hover:scale-110 transition-all border-2 border-primary-600/20"
      >
        <Accessibility size={22} />
      </button>

      {isAdaMenuOpen && (
        <AccessibilityMenu 
          settings={adaSettings} 
          onUpdate={setAdaSettings} 
          onClose={() => setIsAdaMenuOpen(false)} 
        />
      )}

      {/* Enhanced WhatsApp Button with Conditional SOS Color */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2 group">
        <span className="bg-white dark:bg-slate-800 text-slate-900 dark:text-white px-4 py-2 rounded-xl text-xs font-black shadow-xl border border-slate-100 dark:border-slate-700 opacity-0 group-hover:opacity-100 transition-opacity transform -translate-y-2 group-hover:translate-y-0 duration-300">
          {isBookingPage ? 'Priority Support' : 'Chat with us'}
        </span>
        <a 
          href={`https://wa.me/${WHATSAPP_NUMBER}?text=${GLOBAL_WHATSAPP_MESSAGE}`} 
          target="_blank" 
          rel="noopener noreferrer"
          className={`w-14 h-14 text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-all border-4 border-white dark:border-slate-900 ${
            isBookingPage ? 'bg-red-600 animate-pulse' : 'bg-green-500'
          }`}
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle size={28} />
        </a>
      </div>
    </div>
  );
};

const CookieBanner = ({ onClose }: { onClose: () => void }) => (
  <div className="fixed bottom-24 right-8 left-8 md:left-auto md:w-[420px] z-[100] bg-white dark:bg-slate-800 p-8 rounded-[2.5rem] shadow-2xl border border-slate-100 dark:border-slate-700">
    <div className="flex gap-4 mb-6">
      <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 text-primary-600 rounded-2xl flex items-center justify-center shrink-0">
        <Cookie size={24} />
      </div>
      <div>
        <h5 className="font-black text-slate-900 dark:text-white">Clinical Privacy</h5>
        <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">We use secure cookies to maintain HIPAA sessions.</p>
      </div>
    </div>
    <div className="flex gap-3">
      <button onClick={onClose} className="flex-1 bg-primary-600 text-white py-3 rounded-2xl text-xs font-black shadow-lg">Accept</button>
      <button onClick={onClose} className="flex-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-white py-3 rounded-2xl text-xs font-bold">Necessary</button>
    </div>
  </div>
);

export default App;
