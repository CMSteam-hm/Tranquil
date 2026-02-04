
import React from 'react';
import { Shield, Scale, FileText, UserCheck, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface PolicyViewProps {
  type: 'hipaa' | 'rights' | 'privacy' | 'terms';
}

const PolicyView: React.FC<PolicyViewProps> = ({ type }) => {
  const content = {
    hipaa: {
      title: "HIPAA Policy",
      subtitle: "Health Insurance Portability and Accountability Act",
      icon: <Shield className="text-primary-600" size={32} />,
      lastUpdated: "January 15, 2024",
      sections: [
        {
          heading: "Our Commitment to Privacy",
          text: "At Tranquil Mental Health and Wellness, we understand that your medical information is private and confidential. We are committed to protecting your health information and following all federal and state laws regarding privacy."
        },
        {
          heading: "Use and Disclosure of Health Information",
          text: "We may use your health information for treatment, payment, and health care operations. For treatment, this includes sharing information with other healthcare providers involved in your care. For payment, this includes submitting claims to your insurance company. For operations, this includes quality assessment and improvement activities."
        },
        {
          heading: "Your Rights Under HIPAA",
          text: "You have the right to: 1) Inspect and copy your protected health information. 2) Request an amendment to your records if you believe they are incorrect. 3) Request a restriction on certain uses and disclosures. 4) Receive an accounting of disclosures we have made of your information."
        },
        {
          heading: "Security Measures",
          text: "We implement physical, technical, and administrative safeguards to protect your data. All electronic communications are encrypted, and our staff receives regular training on privacy protocols."
        }
      ]
    },
    rights: {
      title: "Patient Rights",
      subtitle: "Your Partnership in Care",
      icon: <UserCheck className="text-primary-600" size={32} />,
      lastUpdated: "January 15, 2024",
      sections: [
        {
          heading: "Dignity and Respect",
          text: "You have the right to receive considerate, respectful care at all times and under all circumstances, with recognition of your personal dignity and autonomy."
        },
        {
          heading: "Informed Participation",
          text: "You have the right to participate in the development and implementation of your plan of care. This includes the right to be informed of your health status, be involved in care planning and treatment, and be able to request or refuse treatment."
        },
        {
          heading: "Privacy and Confidentiality",
          text: "You have the right to personal privacy and confidentiality of your clinical records. Consultation, examination, and treatment are confidential and should be conducted discreetly."
        },
        {
          heading: "Access to Information",
          text: "You have the right to access information contained in your clinical records within a reasonable time frame as permitted by law."
        },
        {
          heading: "Grievances",
          text: "You have the right to voice complaints or grievances regarding your care and to receive a timely response from the practice management without fear of discrimination or reprisal."
        }
      ]
    },
    privacy: {
      title: "Privacy Notice",
      subtitle: "How We Handle Your Information",
      icon: <FileText className="text-primary-600" size={32} />,
      lastUpdated: "January 15, 2024",
      sections: [
        {
          heading: "Information Collection",
          text: "We collect information you provide directly to us through forms, scheduling tools, and clinical consultations. This may include contact details, insurance information, and medical history."
        },
        {
          heading: "Data Usage",
          text: "Your data is used primarily to provide psychiatric services, process payments, and improve our clinical offerings. We do not sell or lease your personal information to third parties for marketing purposes."
        },
        {
          heading: "Third-Party Services",
          text: "We may share information with trusted third-party service providers (such as laboratory partners or telehealth platforms) who assist us in operating our practice, provided they agree to maintain strict confidentiality."
        },
        {
          heading: "Cookies and Tracking",
          text: "Our website uses essential technical cookies to maintain secure sessions and comply with HIPAA logging requirements. We do not use invasive tracking or advertising pixels."
        }
      ]
    },
    terms: {
      title: "Terms of Service",
      subtitle: "Practice Guidelines & Agreements",
      icon: <Scale className="text-primary-600" size={32} />,
      lastUpdated: "January 15, 2024",
      sections: [
        {
          heading: "Nature of Services",
          text: "Tranquil Mental Health and Wellness provides psychiatric consultation, medication management, and therapeutic services. These services are provided by licensed medical professionals."
        },
        {
          heading: "Telehealth Agreement",
          text: "By using our telehealth services, you acknowledge that while digital care is highly effective, it has unique limitations. You agree to ensure a private location and a secure internet connection for your sessions."
        },
        {
          heading: "Cancellation Policy",
          text: "We require at least 24 hours' notice for all appointment cancellations. Failure to provide notice may result in a late cancellation fee."
        },
        {
          heading: "Code of Conduct",
          text: "We maintain a zero-tolerance policy for harassment or abuse of our staff. We reserve the right to terminate the provider-patient relationship if clinical boundaries or safety protocols are violated."
        },
        {
          heading: "Emergency Situations",
          text: "Our website and portal are not for emergency use. In the event of a medical or mental health emergency, you must call 911, 988, or visit the nearest emergency room."
        }
      ]
    }
  };

  const current = content[type];

  return (
    <div className="min-h-screen pt-24 pb-20 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="w-16 h-16 bg-primary-50 dark:bg-primary-900/30 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm">
            {current.icon}
          </div>
          <h1 className="text-4xl font-black text-slate-900 dark:text-white tracking-tight mb-2">
            {current.title}
          </h1>
          <p className="text-lg text-slate-500 dark:text-slate-400 font-medium italic">
            {current.subtitle}
          </p>
          <div className="mt-4 flex items-center justify-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-400">
            <span>Last Updated: {current.lastUpdated}</span>
            <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
            <span>Version 2.4.0</span>
          </div>
        </div>

        {/* Content Body */}
        <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] shadow-xl border border-slate-100 dark:border-slate-800/50 p-8 md:p-12 space-y-12">
          {current.sections.map((section, idx) => (
            <div key={idx} className="space-y-4 animate-in fade-in slide-in-from-bottom-4" style={{ animationDelay: `${idx * 100}ms` }}>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-slate-50 dark:bg-slate-800 rounded-lg flex items-center justify-center text-primary-600 font-black text-sm">
                  {idx + 1}
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  {section.heading}
                </h3>
              </div>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed pl-11">
                {section.text}
              </p>
            </div>
          ))}

          {/* Contact Hook */}
          <div className="mt-16 pt-12 border-t border-slate-100 dark:border-slate-800 text-center">
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">
              Questions regarding these policies? Please contact our compliance officer.
            </p>
            <Link 
              to="/contact" 
              className="inline-flex items-center gap-2 px-8 py-3 bg-primary-600 text-white rounded-xl font-bold hover:bg-primary-700 transition-all shadow-lg shadow-primary-500/20"
            >
              Contact Support <ChevronRight size={18} />
            </Link>
          </div>
        </div>

        {/* Back Link */}
        <div className="mt-8 text-center">
          <Link to="/" className="text-slate-400 hover:text-primary-600 font-bold text-sm transition-colors">
            Return to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PolicyView;
