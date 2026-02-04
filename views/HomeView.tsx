
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, Brain, ArrowRight, CheckCircle, 
  Award, FileText, Dna, Stethoscope, 
  CreditCard, Mail, Banknote, BadgeCheck
} from 'lucide-react';

const HomeView: React.FC = () => {
  const [currentHeroIndex, setCurrentHeroIndex] = useState(0);

  const heroImages = [
    "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1200&q=80",
  ];

  const services = [
    { 
      title: 'Psychiatric Evaluation', 
      icon: <FileText />, 
      desc: 'Comprehensive in-depth mental health evaluation exploring symptoms, origins, and impact to provide a clear diagnosis and individualized treatment plan.' 
    },
    { 
      title: 'Medication Management with Psychotherapy', 
      icon: <Stethoscope />, 
      desc: 'Selection of effective evidence-based medication with close monitoring. We incorporate lab studies, lifestyle coaching, and genetic testing to address all facets of wellness.' 
    },
    { 
      title: 'Cognitive Behavioral Therapy', 
      icon: <Dna />, 
      desc: 'Evidence-based techniques to improve mental health conditions' 
    },
    { 
      title: 'Neuropsychological Testing', 
      icon: <Brain />, 
      desc: 'Specialized testing services for adults and children. We provide detailed cost estimates prior to assessment based on specific diagnostic needs.' 
    },
    { 
      title: 'Group Therapy', 
      icon: <Brain />, 
      desc: 'Collaborative therapy sessions providing support and shared experiences' 
    },
  ];

  const insuranceLogos = [
    { name: 'Optum', src: '/images/Optum-logo.png' },
    { name: 'Aetna', src: '/images/aetna.png' },
    { name: 'Cigna', src: '/images/Cigna-Logo.png' },
    { name: 'Carelon', src: '/images/carelon-logo.png' },
    { name: 'Anthem', src: '/images/Anthem.png' },
  ];

  const allInsurancePlans = [
    "Aetna", "Allied Benefit System-Aetna", "Anthem Blue Shield", "Christian Brothers Services",
    "Cigna and Evernorth", "Health Scope-Aetna", "Horizon Blue Cross and Blue Shield",
    "Magellan", "Meritain Health", "Nippon", "Optum", "Oscar Health", "Oxford",
    "Trustmark Health Benefits-Aetna", "Trustmark Health Benefits-Cigna",
    "Trustmark Small Business-Aetna", "UnitedHealthcare UHC | UBH"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentHeroIndex((prev) => (prev + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [heroImages.length]);

  return (
    <div className="overflow-hidden">
      {/* Top Notification Bar: Cash Payment Options */}
      <div className="bg-primary-600/10 border-b border-primary-100 dark:border-primary-900/20 py-3">
        <div className="max-w-7xl mx-auto px-4 flex justify-center items-center gap-3">
          <Banknote size={16} className="text-primary-600" />
          <span className="text-[11px] font-black uppercase tracking-[0.2em] text-primary-700 dark:text-primary-400">
            Cash Payment Options Available — <Link to="/contact" className="underline decoration-primary-600/30 hover:text-primary-800 transition-colors">Enquire About Private Pay Rates</Link>
          </span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative pt-32 pb-48 flex items-center min-h-[85vh] overflow-hidden">
        {/* Background Images */}
        <div className="absolute inset-0 z-0">
          {heroImages.map((img, idx) => (
            <div 
              key={idx} 
              className={`absolute inset-0 transition-opacity duration-[2s] ease-in-out ${
                idx === currentHeroIndex ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img src={img} alt="Clinical Scene" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/70 to-slate-950/30"></div>
            </div>
          ))}
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 w-full">
          <div className="max-w-3xl space-y-10 animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <div className="flex flex-wrap gap-3">
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white/10 backdrop-blur-md text-white rounded-2xl shadow-sm border border-white/20 font-black text-[10px] uppercase tracking-[0.2em]">
                <ShieldCheck size={16} />
                <span>Clinical Excellence</span>
              </div>
              
              {/* Premium Psychology Today Badge */}
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-[#1A1A1A] text-white rounded-2xl shadow-lg border border-slate-800 font-black text-[10px] uppercase tracking-[0.2em]">
                <div className="w-5 h-5 bg-[#C5A059] rounded-full flex items-center justify-center text-[#1A1A1A] shrink-0">
                  <BadgeCheck size={14} />
                </div>
                <span>Verified by Psychology Today</span>
              </div>
            </div>

            <h1 className="text-6xl lg:text-8xl font-black text-white leading-[0.95] tracking-tighter">
              Revitalize Your Mind at <span className="text-primary-500">Tranquil Mental</span> Health and Wellness.
            </h1>
            <p className="text-xl text-slate-200 max-w-lg leading-relaxed font-medium">
              Empowering you towards mental wellness. Discover your path to mental health today.
            </p>
            <div className="flex flex-wrap gap-5 pt-4">
              <Link to="/booking" className="px-10 py-5 bg-primary-600 text-white rounded-[1.5rem] font-black text-lg hover:bg-primary-700 hover:scale-105 transition-all shadow-xl flex items-center group">
                Schedule Evaluation
                <ArrowRight size={22} className="ml-3 group-hover:translate-x-2 transition-transform" />
              </Link>
              <div className="flex flex-col justify-center">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">New Patient?</p>
                <Link to="/forms" className="text-white font-black text-sm hover:underline">Complete Intake Forms</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement Section */}
      <section className="py-20 bg-primary-600 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -mr-48 -mt-48 blur-3xl"></div>
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-[15px] font-black uppercase tracking-[0.5em] mb-8 opacity-80">Welcome to Tranquil Mental Health and Wellness</h2>
          <p className="text-2 md:text-4x font-bold leading-tight tracking-tight">
            "At Tranquil mental health and wellness, we bring a wealth of knowledge and expertise to our practice.
            <br/>
            We prioritize creating a safe, non-judgmental environment where our patients feel heard and supported while delivering evidence based treatments"
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32 bg-white dark:bg-slate-700 relative">
        <div className="absolute inset-0 z-0 opacity-3 dark:opacity-3">
            <img src="https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=2070&q=80" alt="Services Background" className="w-full h-full object-cover" />
        </div>
        <div className="max-w-7xl mx-auto px-4 relative">
          <div className="max-w-3xl mb-24 space-y-4">
             <h6 className="text-primary-600 font-black uppercase tracking-[0.3em] text-[10px]">Clinical Services</h6>
             <h2 className="text-4xl lg:text-5xl font-white text-slate-900 dark:text-black tracking-tight">Our Comprehensive Psychiatric Services.</h2>
             <p className="text-slate-500 dark:text-slate-400 font-medium text-lg">
               Specialized psychiatric interventions designed to treat the whole person through scientific precision and therapeutic empathy.
             </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((s, idx) => (
              <div key={idx} className="p-10 rounded-[2.5rem] bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 hover:border-primary-500/20 transition-all hover:-translate-y-2 group text-left flex flex-col md:flex-row gap-8">
                <div className="w-20 h-20 shrink-0 bg-white dark:bg-slate-800 text-primary-600 rounded-2xl flex items-center justify-center shadow-sm group-hover:bg-primary-600 group-hover:text-white transition-all duration-500">
                  {React.cloneElement(s.icon as React.ReactElement<any>, { size: 36 })}
                </div>
                <div>
                  <h3 className="text-2xl font-black mb-4 dark:text-white tracking-tight">{s.title}</h3>
                  <p className="text-slate-500 dark:text-slate-400 leading-relaxed font-medium">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-32 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6">
                <div className="rounded-[2.5rem] overflow-hidden shadow-xl aspect-[3/4] border-8 border-white dark:border-slate-800">
                  <img src="https://images.unsplash.com/photo-1559839734-2b71f1536783?auto=format&fit=crop&w=600&q=80" alt="Clinical Environment" className="w-full h-full object-cover" />
                </div>
                <div className="h-32 bg-primary-600 rounded-[2.5rem] flex items-center justify-center text-white">
                  <Award size={48} />
                </div>
              </div>
              <div className="space-y-6 pt-12">
                <div className="h-40 bg-slate-200 dark:bg-slate-800 rounded-[2.5rem] overflow-hidden">
                   <img src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=600&q=80" alt="Detail" className="w-full h-full object-cover" />
                </div>
                <div className="rounded-[2.5rem] overflow-hidden shadow-xl aspect-[3/4] border-8 border-white dark:border-slate-800">
                  <img src="https://images.unsplash.com/photo-1590611380053-da6447021fbb?auto=format&fit=crop&w=600&q=80" alt="Therapy Session" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
            <div className="space-y-8">
              <h6 className="text-primary-600 font-black uppercase tracking-[0.3em] text-[10px]">The Tranquil Story</h6>
              <h2 className="text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-none">About Our Practice</h2>
              <p className="text-lg text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
                At Tranquil Mental Health and Wellness, we are dedicated to providing expert psychiatric care. Our team of experienced professionals is committed to helping you navigate your mental health journey with compassion and expertise. From anxiety and depression to more complex psychiatric conditions, our services are tailored to meet your unique needs. We invite you to explore our website, learn about our comprehensive range of services, and take the first step towards a healthier, more balanced life. Your mental well-being is our top priority, and we're here to support you every step of the way.
              </p>
              <p className="text-lg text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
                Our clinicians combine years of psychiatric expertise with a genuine commitment to understanding the unique journey of every patient. From the moment you enter our practice, our focus is on creating a safe sanctuary where healing can begin.
              </p>
              <div className="pt-6 grid grid-cols-2 gap-8 border-t border-slate-200 dark:border-slate-800">
                <div>
                  <h4 className="text-2xl font-black text-primary-600">Board Certified</h4>
                  <p className="text-xs text-slate-400 font-bold uppercase tracking-widest mt-1">Clinical Leadership</p>
                </div>
                <div>
                  <h4 className="text-2xl font-black text-primary-600">Patient Centered</h4>
                  <p className="text-xs text-slate-400 font-bold uppercase tracking-widest mt-1">Care Philosophy</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Insurance & Payment Section */}
      <section className="py-32 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
            <h6 className="text-primary-600 font-black uppercase tracking-[0.3em] text-[10px] mb-4">Financial Accessibility</h6>
            <h2 className="text-4xl font-black text-slate-900 dark:text-white tracking-tight">In-Network Insurance Plans</h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 mb-20">
            {insuranceLogos.map((logo, idx) => (
              <div 
                key={idx} 
                className="group bg-slate-50 dark:bg-slate-900 p-6 md:p-10 rounded-[2rem] border border-slate-100 dark:border-slate-800 flex items-center justify-center transition-all duration-500 hover:bg-white dark:hover:bg-slate-800 hover:shadow-xl hover:shadow-primary-600/5 hover:-translate-y-2"
              >
                <img 
                  src={logo.src} 
                  alt={`${logo.name} Insurance Logo`} 
                  className="max-h-16 w-auto transition-all duration-700" 
                  loading="lazy"
                />
              </div>
            ))}
          </div>

          <div className="bg-slate-50 dark:bg-slate-900 rounded-[3rem] p-12 border border-slate-100 dark:border-slate-800">
            <h4 className="font-black text-xl mb-8 text-center text-slate-900 dark:text-white">Full List of Accepted In-Network Plans</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-4">
              {allInsurancePlans.map((plan, idx) => (
                <div key={idx} className="flex items-center gap-3 py-2 border-b border-slate-200 dark:border-slate-800 last:border-0">
                  <CheckCircle size={14} className="text-primary-600 shrink-0" />
                  <span className="text-sm font-bold text-slate-600 dark:text-slate-400">{plan}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 bg-primary-50 dark:bg-primary-900/10 rounded-3xl border border-primary-100 dark:border-primary-800/20 flex gap-6 items-start">
              <CreditCard className="text-primary-600 shrink-0" size={32} />
              <div>
                <h5 className="font-black text-slate-900 dark:text-white mb-2">Cash Payment Options</h5>
                <p className="text-sm text-slate-500 dark:text-slate-400 font-medium leading-relaxed">
                  We accept private pay for all services. Please contact our administrative office to receive a detailed breakdown of costs and documentation for superbills.
                </p>
              </div>
            </div>
            <div className="p-8 bg-slate-50 dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800 flex gap-6 items-start">
              <Mail className="text-primary-600 shrink-0" size={32} />
              <div>
                <h5 className="font-black text-slate-900 dark:text-white mb-2">Financial Inquiry</h5>
                <p className="text-sm text-slate-500 dark:text-slate-400 font-medium leading-relaxed mb-4">
                  Need further information on billing or out-of-network benefits?
                </p>
                <Link to="/contact" className="text-primary-600 font-black text-sm uppercase tracking-widest hover:underline">Contact Billing Dept →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32">
        <div className="max-w-5xl mx-auto px-4">
          <div className="bg-primary-600 rounded-[4rem] p-16 md:p-24 text-center text-white relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full -mr-40 -mt-40 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-400 rounded-full -ml-32 -mb-32 blur-3xl opacity-30"></div>
            <h2 className="text-4xl md:text-6xl font-black mb-8 relative tracking-tighter">Why Tranquil Mental Health <br/>and Wellness Stands Apart.</h2>
            <p className="text-primary-100 text-lg mb-12 max-w-2xl mx-auto relative font-medium leading-relaxed">
              Choose Tranquil Mental Health and Wellness for a compassionate, evidence-based approach to mental health care. Our dedicated team and personalized services make us a trusted choice in Merced.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6 relative">
              <Link to="/booking" className="px-12 py-5 bg-white text-primary-600 rounded-[1.5rem] font-black text-xl hover:scale-105 transition-all shadow-xl">
                Book Evaluation
              </Link>
              <Link to="/contact" className="px-12 py-5 bg-primary-700 text-white border border-primary-500/50 rounded-[1.5rem] font-black text-xl hover:bg-primary-800 transition-all">
                Questions? Email Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeView;
