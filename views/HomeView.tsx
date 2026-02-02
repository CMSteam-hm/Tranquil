
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// Added missing ShieldCheck import from lucide-react
import { Shield, ShieldCheck, Brain, Activity, Clock, Star, ArrowRight, CheckCircle, Users, Camera, Heart, Zap, Award } from 'lucide-react';

const HomeView: React.FC = () => {
  const [currentHeroIndex, setCurrentHeroIndex] = useState(0);

  const heroImages = [
    "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1527613426441-4da17471b66d?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1516585427167-9f4af9627e6c?auto=format&fit=crop&w=1200&q=80",
  ];

  const services = [
    { title: 'Diagnostic Psychiatry', icon: <Award />, desc: 'Comprehensive assessments for Anxiety, Depression, and adult ADHD using modern evidence-based protocols.' },
    { title: 'Holistic Psychotherapy', icon: <Heart />, desc: 'Personalized talk therapy focusing on emotional regulation, trauma recovery, and cognitive restructuring.' },
    { title: 'Clinical Precision', icon: <Shield />, desc: 'Careful pharmacological oversight ensuring optimal medication efficacy with minimal systemic impact.' },
    { title: 'Executive Wellness', icon: <Zap />, desc: 'Specialized programs for professionals navigating high-stress environments and burnout.' },
  ];

  const testimonials = [
    { name: "Julian R.", role: "Patient", content: "The transition to telehealth was seamless. Tranquil Mental Health and Wellness provides a level of support I haven't found anywhere else.", rating: 5 },
    { name: "Dr. Elena S.", role: "Referring MD", content: "As a colleague, I trust Tranquil with my most complex cases. Their clinical documentation and outcomes are exceptional.", rating: 5 },
    { name: "Marcus T.", role: "Patient", content: "Finally, a clinic that respects my time and my intelligence. The online portal makes everything simple.", rating: 5 },
    { name: "Sarah L.", role: "Patient", content: "Empathetic, professional, and results-driven. They helped me find clarity during the hardest year of my life.", rating: 5 },
  ];

  const galleryImages = [
    "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1528333147000-061214e0445d?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1493666438817-866a91353ca9?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1511174511562-5f7f185854c8?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1499209974431-9dac3e74a134?auto=format&fit=crop&w=600&q=80",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentHeroIndex((prev) => (prev + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [heroImages.length]);

  return (
    <div className="overflow-hidden">
      <style>{`
        @keyframes scroll { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        .animate-scroll-slow { animation: scroll 70s linear infinite; }
        .animate-scroll-gallery { animation: scroll 45s linear infinite; }
        .animate-scroll-slow:hover, .animate-scroll-gallery:hover { animation-play-state: paused; }
      `}</style>

      {/* Hero Section */}
      <section className="relative pt-24 pb-40 bg-gradient-to-br from-primary-50 to-white dark:from-slate-900 dark:to-slate-950">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-10 animate-in fade-in slide-in-from-left-8 duration-1000">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white dark:bg-slate-800 text-primary-600 dark:text-primary-400 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 font-black text-[10px] uppercase tracking-[0.2em]">
              <ShieldCheck size={16} />
              <span>Accredited Clinical Excellence</span>
            </div>
            <h1 className="text-6xl lg:text-8xl font-black text-slate-900 dark:text-white leading-[0.95] tracking-tighter">
              A Path to <span className="text-primary-600">Healing</span> and Growth.
            </h1>
            <p className="text-xl text-slate-500 dark:text-slate-400 max-w-lg leading-relaxed font-medium">
              Tranquil Mental Health and Wellness specializes in personalized psychiatric care, helping you navigate life's challenges with clinical clarity and profound resilience.
            </p>
            <div className="flex flex-wrap gap-5 pt-4">
              <Link to="/booking" className="px-10 py-5 bg-primary-600 text-white rounded-[1.5rem] font-black text-lg hover:bg-primary-700 hover:scale-105 transition-all shadow-[0_20px_40px_-10px_rgba(20,184,166,0.3)] flex items-center group">
                Begin Consultation
                <ArrowRight size={22} className="ml-3 group-hover:translate-x-2 transition-transform" />
              </Link>
              <Link to="/forms" className="px-10 py-5 bg-white dark:bg-slate-800 text-slate-900 dark:text-white border-2 border-slate-100 dark:border-slate-700 rounded-[1.5rem] font-black text-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-all shadow-sm">
                Portal Intake
              </Link>
            </div>
            <div className="flex items-center space-x-6 pt-8">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="w-12 h-12 rounded-full border-4 border-white dark:border-slate-900 bg-slate-200 overflow-hidden shadow-sm">
                    <img src={`https://picsum.photos/100/100?random=${i+10}`} alt="User" />
                  </div>
                ))}
              </div>
              <p className="text-xs text-slate-400 uppercase font-black tracking-widest">
                Trusted by <span className="text-slate-900 dark:text-white">500+ professionals</span>
              </p>
            </div>
          </div>
          
          <div className="relative animate-in fade-in zoom-in duration-1000 delay-300">
            <div className="absolute -inset-10 bg-primary-400/10 blur-[100px] rounded-full"></div>
            <div className="relative overflow-hidden rounded-[3.5rem] shadow-[0_48px_80px_-16px_rgba(0,0,0,0.15)] bg-white dark:bg-slate-800 h-[450px] lg:h-[700px] border-[12px] border-white dark:border-slate-800">
              {heroImages.map((img, idx) => (
                <div 
                  key={idx} 
                  className={`absolute inset-0 transition-opacity duration-[1.5s] ease-in-out ${
                    idx === currentHeroIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
                  }`}
                >
                  <img src={img} alt="Clinical Scene" className="w-full h-full object-cover scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent"></div>
                </div>
              ))}
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-3">
                {heroImages.map((_, idx) => (
                  <button key={idx} onClick={() => setCurrentHeroIndex(idx)} className={`h-1.5 rounded-full transition-all duration-500 ${idx === currentHeroIndex ? 'w-10 bg-white' : 'w-2 bg-white/40'}`} />
                ))}
              </div>
            </div>
            
            <div className="absolute -bottom-10 -left-10 bg-white dark:bg-slate-800 p-8 rounded-[2rem] shadow-2xl border border-slate-100 dark:border-slate-700 hidden md:block z-30 animate-bounce-slow">
              <div className="text-4xl font-black text-primary-600 mb-1 leading-none tracking-tighter">99.2%</div>
              <div className="text-[10px] text-slate-400 font-black uppercase tracking-widest">Clinical Outcome Success</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Transferred Copy */}
      <section className="py-32 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto mb-24 space-y-4">
             <h6 className="text-primary-600 font-black uppercase tracking-[0.3em] text-[10px]">Specialized Expertise</h6>
             <h2 className="text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight">Healing Through Science & Empathy.</h2>
             <p className="text-slate-500 dark:text-slate-400 font-medium text-lg leading-relaxed">
               Our multi-disciplinary approach combines the latest pharmacological research with compassionate therapeutic models to treat the whole individual.
             </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((s, idx) => (
              <div key={idx} className="p-10 rounded-[2.5rem] bg-slate-50 dark:bg-slate-900 border border-transparent hover:border-primary-500/20 transition-all hover:-translate-y-3 group text-left">
                <div className="w-16 h-16 bg-white dark:bg-slate-800 text-primary-600 rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:bg-primary-600 group-hover:text-white transition-all duration-500">
                  {React.cloneElement(s.icon as React.ReactElement<any>, { size: 30 })}
                </div>
                <h3 className="text-xl font-black mb-4 dark:text-white tracking-tight">{s.title}</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-medium">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 p-24 opacity-5"><Brain size={300} /></div>
        <div className="max-w-7xl mx-auto px-4 mb-20 relative">
          <h2 className="text-4xl font-black tracking-tight mb-4">Clinical Partners & Patient Feedback</h2>
          <p className="text-slate-400 font-medium">The voices of those we've had the honor to support at Tranquil.</p>
        </div>

        <div className="relative">
          <div className="flex w-max animate-scroll-slow">
            {[...testimonials, ...testimonials].map((t, i) => (
              <div key={i} className="w-[400px] md:w-[500px] bg-white/5 backdrop-blur-md p-10 rounded-[2.5rem] border border-white/10 flex flex-col mx-5 transition-transform duration-500 hover:bg-white/10">
                <div className="flex text-primary-400 mb-8">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <Star key={idx} size={20} fill={idx < t.rating ? "currentColor" : "none"} />
                  ))}
                </div>
                <p className="text-xl text-slate-200 font-medium mb-10 flex-grow leading-relaxed italic">"{t.content}"</p>
                <div className="flex items-center space-x-5">
                  <div className="w-14 h-14 rounded-2xl bg-primary-600 overflow-hidden shrink-0 border-2 border-white/20">
                    <img src={`https://picsum.photos/100/100?u=${i + 100}`} alt={t.name} />
                  </div>
                  <div>
                    <h5 className="font-black tracking-tight">{t.name}</h5>
                    <p className="text-[10px] text-slate-400 uppercase font-black tracking-widest">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32">
        <div className="max-w-5xl mx-auto px-4">
          <div className="bg-primary-600 rounded-[4rem] p-16 md:p-24 text-center text-white relative overflow-hidden shadow-[0_40px_100px_-20px_rgba(20,184,166,0.5)]">
            <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full -mr-40 -mt-40 blur-3xl"></div>
            <h2 className="text-4xl md:text-6xl font-black mb-8 relative tracking-tighter">Your Mental Health is <br/>Our Sole Priority.</h2>
            <p className="text-primary-100 text-lg mb-12 max-w-2xl mx-auto relative font-medium leading-relaxed">
              Take the first step toward a more tranquil life. Our digital registration is fully secure, HIPAA-compliant, and takes less than 5 minutes.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6 relative">
              <Link to="/booking" className="px-12 py-5 bg-white text-primary-600 rounded-[1.5rem] font-black text-xl hover:scale-105 transition-all shadow-xl">
                Book a Visit
              </Link>
              <Link to="/contact" className="px-12 py-5 bg-primary-700 text-white border border-primary-500/50 rounded-[1.5rem] font-black text-xl hover:bg-primary-800 transition-all">
                Contact Office
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Tour */}
      <section className="pb-40 pt-10 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 mb-16 text-center lg:text-left">
           <h2 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight mb-2">The Sanctuary.</h2>
           <p className="text-slate-500 dark:text-slate-400 font-medium">A glimpse into our clinical environment designed for serenity and safety.</p>
        </div>
        <div className="flex w-max animate-scroll-gallery">
          {[...galleryImages, ...galleryImages].map((img, idx) => (
            <div key={idx} className="w-[350px] h-[250px] lg:w-[450px] lg:h-[300px] mx-4 shrink-0 overflow-hidden rounded-[2.5rem] border-[6px] border-slate-50 dark:border-slate-900 shadow-lg group">
              <img src={img} alt={`Facility ${idx}`} className="w-full h-full object-cover transition-all duration-1000 grayscale-[0.3] group-hover:grayscale-0 group-hover:scale-110" />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomeView;
