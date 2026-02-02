
import React, { useRef } from 'react';
import { FormType } from '../types';
import { ShieldCheck, Info } from 'lucide-react';

interface FormViewProps {
  type: FormType;
}

const FormView: React.FC<FormViewProps> = ({ type }) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);

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

  return (
    <div className="min-h-screen pt-24 pb-24 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-4xl mx-auto px-4">
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

        {/* User Provided Google Form Wrapper */}
        <div className="relative max-w-[750px] mx-auto bg-white dark:bg-slate-800 rounded-[2rem] shadow-[0_32px_64px_-12px_rgba(0,0,0,0.1)] border border-slate-100 dark:border-slate-700 overflow-hidden animate-in fade-in slide-in-from-bottom-8 duration-700">
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
