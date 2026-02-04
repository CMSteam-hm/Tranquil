
import React, { useRef, useState } from 'react';
import { FormType } from '../types';
import { ShieldCheck, Info, MessageCircle, Banknote } from 'lucide-react';
import { Link } from 'react-router-dom';

interface FormViewProps {
  type: FormType;
}

const FormView: React.FC<FormViewProps> = ({ type }) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const WHATSAPP_NUMBER = "1234567890";
  const BOOKING_WHATSAPP_MESSAGE = encodeURIComponent("Hello! I'm trying to book a psychiatric evaluation on your website and had a few questions about availability.");

  const getFormTitle = () => {
    switch(type) {
      case FormType.INTAKE: return "New Patient Intake";
      case FormType.BOOKING: return "Schedule Consultation";
      case FormType.SCREENING: return "Clinical Self-Screening";
      case FormType.FEEDBACK: return "Patient Feedback";
      case FormType.CONTACT: return "Office Enquiry";
      default: return "Secure Portal";
    }
  };

  const handleIframeLoad = () => {
    if (iframeRef.current) {
      window.scrollTo({
        top: iframeRef.current.offsetTop - 100,
        behavior: 'smooth'
      });
    }
  };

  const handlePHPSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    const formData = new FormData(e.currentTarget);
    
    try {
      const response = await fetch('/process.php', {
        method: 'POST',
        body: formData
      });
      
      if (response.ok) {
        setFormStatus('success');
      } else {
        setFormStatus('error');
      }
    } catch (err) {
      setFormStatus('error');
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-24 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-4xl mx-auto px-4">
        {/* Top Notification: Cash Payment Options */}
        {type === FormType.BOOKING && (
          <div className="max-w-[750px] mx-auto mb-10 text-center animate-in fade-in slide-in-from-top-4 duration-500">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl shadow-sm">
              <Banknote size={20} className="text-primary-600" />
              <p className="text-xs font-black uppercase tracking-widest text-slate-700 dark:text-slate-300">
                Cash Payment Options Available — <Link to="/contact" className="text-primary-600 hover:underline">Request Rates</Link>
              </p>
            </div>
          </div>
        )}

        <div className="mb-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary-50 dark:bg-primary-900/30 text-primary-600 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
             <ShieldCheck size={14} /> HIPAA Secure Connection
          </div>
          <h2 className="text-4xl font-black text-slate-900 dark:text-white tracking-tight">
            {getFormTitle()}
          </h2>
          <p className="mt-2 text-slate-500 dark:text-slate-400 text-sm font-medium">
            Please complete the clinical assessment below. Your data is processed securely.
          </p>
        </div>

        {/* Updated WhatsApp Notification for Booking Page with SOS Styling */}
        {type === FormType.BOOKING && (
          <div className="max-w-[750px] mx-auto mb-8 animate-in fade-in slide-in-from-top-4 duration-500 delay-150">
            <div className="bg-rose-50 dark:bg-rose-900/10 border border-rose-200 dark:border-rose-800/30 rounded-[2rem] p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 shadow-sm">
              <div className="w-16 h-16 bg-red-600 text-white rounded-2xl flex items-center justify-center shrink-0 shadow-lg shadow-red-500/20">
                <MessageCircle size={32} />
              </div>
              <div className="flex-grow text-center md:text-left">
                <h4 className="text-lg font-black text-slate-900 dark:text-white mb-1 uppercase tracking-tight">Priority Clinical Inquiry</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
                  Experiencing issues with the booking portal? Our coordinators provide SOS technical and clinical support on WhatsApp.
                </p>
              </div>
              <a 
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${BOOKING_WHATSAPP_MESSAGE}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-8 py-4 bg-red-600 text-white rounded-xl text-xs font-black shadow-xl hover:bg-red-700 hover:scale-105 transition-all animate-pulse whitespace-nowrap"
              >
                SOS SUPPORT
              </a>
            </div>
          </div>
        )}

        {/* User Provided Google Form Wrapper */}
        <div className="relative max-w-[750px] mx-auto bg-white dark:bg-slate-800 rounded-[2rem] shadow-[0_32px_64px_-12px_rgba(0,0,0,0.1)] border border-slate-100 dark:border-slate-700 overflow-hidden animate-in fade-in slide-in-from-bottom-8 duration-700">
          {type === FormType.CONTACT ? (
            <div className="p-8 md:p-12">
              {formStatus === 'success' ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <ShieldCheck size={40} />
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-2">Message Sent!</h3>
                  <p className="text-slate-500 dark:text-slate-400">Thank you for contacting us. We will respond shortly.</p>
                  <button onClick={() => setFormStatus('idle')} className="mt-8 text-primary-600 font-bold hover:underline">Send another message</button>
                </div>
              ) : (
                <form onSubmit={handlePHPSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Full Name</label>
                    <input 
                      type="text" 
                      name="name" 
                      required 
                      className="w-full px-6 py-4 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl outline-none focus:ring-2 focus:ring-primary-500 transition-all"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Email Address</label>
                    <input 
                      type="email" 
                      name="email" 
                      required 
                      className="w-full px-6 py-4 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl outline-none focus:ring-2 focus:ring-primary-500 transition-all"
                      placeholder="name@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Message</label>
                    <textarea 
                      name="message" 
                      required 
                      rows={5}
                      className="w-full px-6 py-4 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl outline-none focus:ring-2 focus:ring-primary-500 transition-all resize-none"
                      placeholder="How can we help you?"
                    ></textarea>
                  </div>
                  <button 
                    type="submit" 
                    disabled={formStatus === 'submitting'}
                    className="w-full py-4 bg-[#CC5500] text-white rounded-xl font-black text-lg hover:bg-[#B84D00] transition-all shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {formStatus === 'submitting' ? 'Sending...' : 'Send Message'}
                  </button>
                  {formStatus === 'error' && (
                    <p className="text-center text-red-500 text-sm font-bold">Failed to send message. Please try again.</p>
                  )}
                </form>
              )}
            </div>
          ) : (
            <>
              <div className="p-4 bg-amber-50 dark:bg-amber-900/10 border-b border-amber-100 dark:border-amber-800/20 flex items-center gap-3">
                <Info className="text-amber-600" size={16} />
                <span className="text-[10px] font-black uppercase tracking-widest text-amber-800 dark:text-amber-400">
                  Do not refresh this page until you see the confirmation message.
                </span>
              </div>
              <iframe 
                ref={iframeRef}
                onLoad={handleIframeLoad}
                className="w-full h-[1000px] md:h-[1050px] border-none block"
                src="https://docs.google.com/forms/d/e/1FAIpQLSdMZ0WWvyNRxpuo-e8Vzb5pGDkI1rwRcLhaXuAzdbh7ODyIGQ/viewform?embedded=true" 
                title="Tranquil Clinical Form"
              >
                Loading clinical form…
              </iframe>
            </>
          )}
        </div>

        <div className="mt-12 text-center max-w-lg mx-auto">
          <p className="text-[10px] text-slate-400 font-bold uppercase tracking-[0.2em] leading-relaxed">
            If you encounter any technical difficulties with the digital portal, please contact our administrative team directly at support@tranquilwellness.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default FormView;
