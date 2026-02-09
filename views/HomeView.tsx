
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, Brain, ArrowRight, CheckCircle, 
  Award, FileText, Dna, Stethoscope, 
  CreditCard, Mail, Banknote, BadgeCheck,
  Heart, Camera, X, Baby
} from 'lucide-react';

const HomeView: React.FC = () => {
  const [currentHeroIndex, setCurrentHeroIndex] = useState(0);
  const [selectedService, setSelectedService] = useState<any>(null);

  const heroImages = [
    "/images/group.webp",
    "/images/cognitive.webp",
    "/images/women_health.webp",
  ];

  const services = [
    {
      title: 'Adult Psychiatry Services',
      icon: <Stethoscope />, 
      desc: "At Tranquil, we offer adult psychiatry services tailored to your mental health needs. Our dedicated team provides thorough screenings, medication maintenance, and therapy sessions to help you regain balance in your life. We care for the whole person, not just the symptoms.",
      image: "/images/adult.webp",
      longDesc: "Our comprehensive approach to adult psychiatry involves a deep dive into your unique situation. We utilize state-of-the-art diagnostic tools, including genetic testing where appropriate, to move beyond symptom management and address root causes. Treatment plans are collaborative, dynamic, and adjusted as you progress on your journey to wellness."
    },
    {
      title: 'Medication Management',
      icon: <Dna />,
      desc: "Our experienced psychiatrists provide thoughtful, evidence-based medication management. We create personalized care plans, closely monitoring for effectiveness and safety to optimize your mental health outcomes while minimizing side effects.",
      image: "/images/medication_management.webp",
      longDesc: "We view medication as one tool among many. Our philosophy is 'start low, go slow,' ensuring any intervention is both necessary and effective. We provide extensive education on your options, potential side effects, and how medication fits into your holistic wellness plan, including lifestyle and therapy."
    },
    {
      title: 'Cognitive Behavioral Therapy (CBT)',
      icon: <Brain />, 
      desc: "Cognitive Behavioral Therapy (CBT) is an evidence-based treatment focused on changing negative thought patterns and behaviors. Our therapists use this goal-oriented approach to help you manage anxiety, depression, and stress with practical skills.",
      image: "/images/cognitive.webp",
      longDesc: "CBT is an active, collaborative therapy. You'll work with your therapist to set clear goals and learn to challenge and reframe unhelpful thoughts. We provide worksheets, tools, and 'homework' to help you practice these skills in your daily life, leading to tangible and lasting change."
    },
    {
      title: 'Child & Adolescent Psychiatry',
      icon: <Heart />,
      desc: "We offer specialized psychiatric care for children and adolescents in a safe, supportive environment. Our experts diagnose and treat a range of disorders like ADHD, anxiety, and depression through comprehensive assessments, therapy, and medication management.",
      image: "/images/adolescent.webp",
      longDesc: "We create a warm, engaging, and family-centered environment for our youngest patients. Treatment involves not just the child but also parents and caregivers, providing education and strategies to support mental health at home and school. Our goal is to foster healthy development and set a foundation for lifelong well-being."
    },
    {
      title: 'Telepsychiatry',
      icon: <Camera />,
      desc: "Access our expert psychiatric care from home with Telepsychiatry. We offer high-quality consultations, therapy, and medication management through a secure online platform, making mental health services more accessible.",
      image: "/images/Telepsychiatry.webp",
      longDesc: "Our secure, HIPAA-compliant telepsychiatry platform is designed for ease of use and confidentiality. We ensure that the quality of care is identical to our in-person sessions, offering a convenient and effective alternative for busy individuals or those with mobility challenges, without compromising on the personal connection."
    },
    {
      title: 'Women’s Health & HRT',
      icon: <Award />,
      desc: "As part of our comprehensive women's health services, we offer Hormone Replacement Therapy (HRT). Our team provides personalized plans to restore hormonal balance and alleviate symptoms of menopause or other hormonal changes.",
      image: "/images/women_health.webp",
      longDesc: "Hormonal fluctuations can significantly impact mental health. Our integrated approach addresses both the physiological and psychological aspects of women's health. HRT plans are developed after thorough evaluation and are continuously monitored to ensure they align with your overall health and wellness goals, providing relief and enhancing quality of life."
    },
    {
      title: 'Perinatal Mood Disorder',
      icon: <Baby />,
      desc: "Providing compassionate care to promote emotional well-being during pregnancy and postpartum.",
      image: "/images/perintal.webp",
      longDesc: "We provide specialized care for perinatal mood and anxiety disorders, supporting women through the emotional transitions of pregnancy and postpartum. Our compassionate approach promotes well-being during this critical time."
    },
    {
      title: 'Women’s health including Hormone replacement therapy',
      icon: <Award />,
      desc: "As part of our comprehensive women's health services, we offer Hormone Replacement Therapy (HRT). Our team provides personalized plans to restore hormonal balance and alleviate symptoms of menopause or other hormonal changes.",
      image: "/images/replacement.webp",
      longDesc: "Hormonal fluctuations can significantly impact mental health. Our integrated approach addresses both the physiological and psychological aspects of women's health. HRT plans are developed after thorough evaluation and are continuously monitored to ensure they align with your overall health and wellness goals, providing relief and enhancing quality of life."
    }
  ];

  const insuranceLogos = [
    { name: 'Optum', src: '/images/Optum-logo.png' },
    { name: 'Aetna', src: '/images/aetna.png' },
    { name: 'Cigna', src: '/images/Cigna-Logo.png' },
    { name: 'Carelon', src: '/images/carelon-logo.png' },
    { name: 'Anthem', src: '/images/Anthem.png' },
    { name: 'United Healthcare', src: '/images/unitedhealthcare.webp' },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentHeroIndex((prev) => (prev + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [heroImages.length]);

  return (
    <div className="overflow-hidden">
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
        <div className="absolute inset-0 z-0 opacity-20 dark:opacity-2">
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
            {services.map((s, idx) => {
              return (
                <div key={idx} className="rounded-[2.5rem] bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 hover:border-primary-500/20 transition-all hover:-translate-y-2 group text-left overflow-hidden shadow-sm hover:shadow-xl animate-in fade-in zoom-in-95 duration-700" style={{ animationDelay: `${idx * 100}ms` }}>
                  <div className="h-48 overflow-hidden">
                    <img src={s.image} alt={s.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <div className="p-10">
                    <div className="w-20 h-20 shrink-0 bg-white dark:bg-slate-800 text-primary-600 rounded-2xl flex items-center justify-center shadow-sm group-hover:bg-primary-600 group-hover:text-white transition-all duration-500 -mt-20 mb-6 relative z-10 border-4 border-slate-50 dark:border-slate-900">
                      {React.cloneElement(s.icon as React.ReactElement<any>, { size: 36 })}
                    </div>
                    <h3 className="text-2xl font-black mb-4 dark:text-white tracking-tight">{s.title}</h3>
                    <p className="text-slate-500 dark:text-slate-400 leading-relaxed font-medium">{s.desc}</p>
                    
                    {/* Learn More Button */}
                    <button onClick={() => setSelectedService(s)} className="mt-6 text-primary-600 font-black text-sm uppercase tracking-widest hover:underline flex items-center gap-2 group/button">
                        <span>Learn More</span>
                        <ArrowRight size={16} className="group-hover/button:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Service Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          <div 
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity animate-in fade-in duration-300" 
            onClick={() => setSelectedService(null)}
          ></div>
          <div className="relative w-full max-w-2xl bg-white dark:bg-slate-900 rounded-[2.5rem] shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300 border border-slate-100 dark:border-slate-800 max-h-[90vh] overflow-y-auto flex flex-col">
            <div className="relative h-64 sm:h-80 shrink-0">
              <img src={selectedService.image} alt={selectedService.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
              <button 
                onClick={() => setSelectedService(null)}
                className="absolute top-6 right-6 w-10 h-10 bg-white/20 backdrop-blur-md text-white rounded-full flex items-center justify-center hover:bg-white hover:text-slate-900 transition-all"
              >
                <X size={20} />
              </button>
              <div className="absolute bottom-8 left-8 right-8">
                <div className="w-14 h-14 bg-primary-600 text-white rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                  {React.cloneElement(selectedService.icon as React.ReactElement<any>, { size: 28 })}
                </div>
                <h3 className="text-3xl font-black text-white tracking-tight">{selectedService.title}</h3>
              </div>
            </div>
            <div className="p-8 sm:p-10 overflow-y-auto">
              <div className="space-y-6 text-lg text-slate-500 dark:text-slate-400 font-medium leading-relaxed">
                <p className="text-slate-900 dark:text-slate-200 font-bold">{selectedService.desc}</p>
                <p>{selectedService.longDesc}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* About Us Section */}
      <section className="py-32 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6">
                <div className="rounded-[2.5rem] overflow-hidden shadow-xl aspect-[3/4] border-8 border-white dark:border-slate-800">
                  <img src="/images/group.webp" alt="Clinical Environment" className="w-full h-full object-cover" />
                </div>
                <div className="h-32 bg-primary-600 rounded-[2.5rem] flex items-center justify-center text-white">
                  <Award size={48} />
                </div>
              </div>
              <div className="space-y-6 pt-12">
                <div className="h-40 bg-slate-200 dark:bg-slate-800 rounded-[2.5rem] overflow-hidden">
                   <img src="/images/women_health.webp" alt="Detail" className="w-full h-full object-cover" />
                </div>
                <div className="rounded-[2.5rem] overflow-hidden shadow-xl aspect-[3/4] border-8 border-white dark:border-slate-800">
                  <img src="/images/cognitive.webp" alt="Therapy Session" className="w-full h-full object-cover" />
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

          <div className="mt-12 grid grid-cols-1 gap-8">
            <div className="p-8 bg-primary-50 dark:bg-primary-900/10 rounded-3xl border border-primary-100 dark:border-primary-800/20 flex gap-6 items-start">
              <CreditCard className="text-primary-600 shrink-0" size={32} />
              <div>
                <h5 className="font-black text-slate-900 dark:text-white mb-2">Cash Payment Options</h5>
                <p className="text-sm text-slate-500 dark:text-slate-400 font-medium leading-relaxed">
                  We accept private pay for all services. Please contact our administrative office to receive a detailed breakdown of costs and documentation for superbills.
                </p>
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
              <Link to="/booking" className="px-12 py-5 bg-white text-[#CC5500] rounded-[1.5rem] font-black text-xl hover:scale-105 transition-all shadow-xl">
                Book Evaluation
              </Link>
              <Link to="/contact" className="px-12 py-5 bg-[#B84D00] text-white border border-[#E06600]/50 rounded-[1.5rem] font-black text-xl hover:bg-[#A34400] transition-all">
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
