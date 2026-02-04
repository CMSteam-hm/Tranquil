
import React, { useState } from 'react';
import { 
  Lock, 
  ExternalLink, 
  ShieldCheck, 
  Database, 
  Users, 
  Activity, 
  ArrowRight,
  Info,
  Server,
  Mail,
  UserCheck
} from 'lucide-react';

const AdminPortal: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [emailInput, setEmailInput] = useState("");
  const appsheetUrl = "https://www.appsheet.com/start/ae5af05b-7346-401f-99a1-af7729fcc533";

  // LIST OF AUTHORIZED EMAILS
  const AUTHORIZED_EMAILS = [
    "admin@tranquil.com",
    "doctor@tranquil.com",
    "manager@tranquil.com",
    "clinical.lead@tranquil.com",
    "info@tranquilmentalhealthandwellness.com"
  ];

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const formattedEmail = emailInput.trim().toLowerCase();
    
    if (AUTHORIZED_EMAILS.includes(formattedEmail)) {
      setIsAuthenticated(true);
    } else {
      alert("Access Denied: This email address is not authorized for clinical management.");
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-slate-100 dark:bg-slate-950 flex items-center justify-center p-6 pt-24">
        <div className="max-w-md w-full bg-white dark:bg-slate-900 p-12 rounded-[3rem] shadow-[0_32px_64px_-12px_rgba(0,0,0,0.14)] border border-slate-200 dark:border-slate-800 text-center animate-in fade-in zoom-in duration-500">
          <div className="w-20 h-20 bg-primary-100 dark:bg-primary-900/30 text-primary-600 rounded-[2rem] flex items-center justify-center mx-auto mb-8 shadow-xl">
            <UserCheck size={36} />
          </div>
          <h2 className="text-3xl font-black mb-3 dark:text-white tracking-tight leading-tight">Personnel Verification</h2>
          <p className="text-slate-500 dark:text-slate-400 mb-8 text-sm leading-relaxed font-medium">Please enter your authorized clinical email to proceed.</p>
          
          <div className="mb-8 p-4 bg-primary-50 dark:bg-primary-900/20 rounded-2xl border border-primary-100 dark:border-primary-800/30 flex flex-col gap-2 text-left">
            <div className="flex items-center gap-2">
              <Info className="text-primary-600 shrink-0" size={16} />
              <p className="text-[10px] font-black text-primary-700 dark:text-primary-300 uppercase tracking-widest">Authorized mail only:</p>
            </div>
            <ul className="text-[10px] font-mono text-slate-500 dark:text-slate-400 space-y-1 pl-6 list-disc">
              <li>Personel at adminitrative level</li>
              <li>only Tranquil Official mail are accepted</li>
            </ul>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div className="relative">
              <div className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400">
                <Mail size={20} />
              </div>
              <input 
                autoFocus
                type="email" 
                value={emailInput}
                onChange={(e) => setEmailInput(e.target.value)}
                placeholder="work@tranquil.com"
                className="w-full py-5 pl-14 pr-6 bg-slate-50 dark:bg-slate-800 border-2 border-slate-100 dark:border-slate-700 rounded-2xl outline-none font-bold text-slate-900 dark:text-white focus:border-primary-500 transition-all placeholder:text-slate-300 dark:placeholder:text-slate-600"
                required
              />
            </div>
            <button type="submit" className="w-full py-5 bg-[#CC5500] text-white rounded-2xl font-black text-lg hover:bg-[#B84D00] transition-all shadow-xl shadow-[#E06600]/20 active:scale-95">
              Verify Identity
            </button>
          </form>
          
          <p className="mt-8 text-[10px] text-slate-400 font-bold uppercase tracking-widest flex items-center justify-center gap-2">
            <ShieldCheck size={12} /> HIPAA Secure Gateway
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 pt-32 pb-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Welcome Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 animate-in fade-in slide-in-from-top-4 duration-700">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-500/10 text-green-600 rounded-full text-[10px] font-black uppercase tracking-widest mb-4 border border-green-500/20">
               <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
               Session Secure
            </div>
            <h1 className="text-5xl font-black text-slate-900 dark:text-white tracking-tighter">Clinical <span className="text-primary-600">Hub.</span></h1>
            <p className="text-slate-500 dark:text-slate-400 mt-2 font-medium text-lg">Select a management tool to begin your workflow.</p>
          </div>
          <div className="text-right hidden md:block">
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Authenticated As</p>
            <p className="text-sm font-bold dark:text-white">{emailInput.toLowerCase()}</p>
          </div>
        </div>

        {/* Action Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Main AppSheet Button */}
          <div className="md:col-span-2 group relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#CC5500] to-sky-600 rounded-[3rem] blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <a 
              href={appsheetUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="relative flex flex-col items-center justify-center p-12 bg-white dark:bg-slate-900 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 shadow-xl hover:-translate-y-2 transition-all duration-500 text-center overflow-hidden"
            >
              <div className="w-24 h-24 bg-[#CC5500] text-white rounded-3xl flex items-center justify-center mb-8 shadow-2xl shadow-[#E06600]/40 group-hover:scale-110 transition-transform duration-500">
                <Database size={48} />
              </div>
              <h3 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight mb-4">Launch AppSheet Clinical Manager</h3>
              <p className="text-slate-500 dark:text-slate-400 max-w-md mx-auto mb-10 font-medium leading-relaxed text-lg">
                Access patient records, appointment schedules, and diagnostic logs in the full-featured clinical management environment.
              </p>
              <div className="flex items-center gap-3 px-8 py-4 bg-[#CC5500] text-white rounded-2xl font-black text-lg shadow-lg">
                Enter Dashboard <ExternalLink size={20} />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 p-8 opacity-5">
                <Server size={120} />
              </div>
            </a>
          </div>

          {/* Secondary Tools */}
          <div className="p-8 bg-white dark:bg-slate-900 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 shadow-sm flex items-center gap-6 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors cursor-pointer group">
            <div className="w-16 h-16 bg-sky-100 dark:bg-sky-900/30 text-sky-600 rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
              <Users size={28} />
            </div>
            <div>
              <h4 className="font-black dark:text-white">Patient Roster</h4>
              <p className="text-xs text-slate-500 font-medium mt-1">Review active clinical cases</p>
            </div>
            <ArrowRight className="ml-auto text-slate-300 group-hover:translate-x-1 transition-transform" size={20} />
          </div>

          <div className="p-8 bg-white dark:bg-slate-900 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 shadow-sm flex items-center gap-6 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors cursor-pointer group">
            <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/30 text-primary-600 rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
              <Activity size={28} />
            </div>
            <div>
              <h4 className="font-black dark:text-white">Clinical Analytics</h4>
              <p className="text-xs text-slate-500 font-medium mt-1">Data-driven outcome reports</p>
            </div>
            <ArrowRight className="ml-auto text-slate-300 group-hover:translate-x-1 transition-transform" size={20} />
          </div>
        </div>

        {/* Footer Metadata */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-12 border-t border-slate-200 dark:border-slate-800 gap-6 opacity-60">
          <div className="flex items-center gap-3">
            <ShieldCheck className="text-primary-600" />
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">HIPAA Data Isolation Level 4</p>
          </div>
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">System Build: v4.9.1-Personnel</p>
        </div>

        <div className="mt-20 text-center">
          <p className="text-[10px] font-black text-slate-300 dark:text-slate-700 uppercase tracking-[0.4em]">
            SYSTEM CLASSIFICATION: CONFIDENTIAL / CLINICAL USE ONLY
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdminPortal;
