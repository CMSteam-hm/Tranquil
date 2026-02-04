import React from 'react';
import { Users, Target, Heart, HelpCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
//import InsuranceGrid from '../components/InsuranceGrid';

const InsuranceGrid: React.FC = () => {
  const insuranceLogos = [
    { name: 'Optum', src: '/images/Optum-logo.png' },
    { name: 'Aetna', src: '/images/aetna.png' },
    { name: 'Cigna', src: '/images/Cigna-Logo.png' },
    { name: 'Carelon', src: '/images/carelon-logo.png' },
    { name: 'Anthem', src: '/images/Anthem.png' },
  ];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 mb-12">
      {insuranceLogos.map((logo, idx) => (
        <div 
          key={idx} 
          className="bg-white dark:bg-slate-900 p-6 rounded-[2rem] border border-slate-100 dark:border-slate-800 flex items-center justify-center transition-all hover:shadow-xl hover:-translate-y-1"
        >
          <img src={logo.src} alt={logo.name} className="max-h-12 w-auto transition-all" />
        </div>
      ))}
    </div>
  );
};

const AboutView: React.FC = () => {
  const teamMembers = [
    {
      name: "Dr. Julianah Nike Olabode DNP, FNP-C, PMHNP-BC",
      title: "CEO, Tranquil Mental Health and Wellness",
      image: "/images/CEO_tranquil.webp",
      bio: "Ms. Julianah is a board-certified psychiatrist with over 15 years of experience in treating complex mood and anxiety disorders.",
    },
    {
      name: "Dr. Codie Vassar",
      title: "Psychiatrist Practitioner",
      image: "/images/Dr_Codie_Tranquil.webp",
      bio: "Dr. Vassar is a psychiatric practitioner specializing in medication management and collaborative treatment approaches.",
    },
  ];

  const faqs = [
    {
      q: "Do you accept insurance?",
      a: "Yes, we accept most major insurance plans including Aetna, Cigna, Optum, and Anthem. Please check our insurance section for a full list."
    },
    {
      q: "What is the difference between a Psychiatrist and a Psychologist?",
      a: "Psychiatrists are medical doctors (MD/DO) who can prescribe medication and diagnose complex conditions. Psychologists (PhD/PsyD) specialize in psychotherapy and psychological testing but typically do not prescribe medication."
    },
    {
      q: "Do you offer telehealth appointments?",
      a: "Yes, we offer secure, HIPAA-compliant video appointments for patients residing in California and Oregon."
    },
    {
      q: "How long is the initial evaluation?",
      a: "Initial psychiatric evaluations typically last 60 minutes to ensure we have enough time to understand your history and needs."
    }
  ];

  return (
    <div className="min-h-screen pt-32 pb-24 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Who We Are */}
        <div className="mb-32">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary-50 dark:bg-primary-900/30 text-primary-600 rounded-full text-[10px] font-black uppercase tracking-widest border border-primary-100 dark:border-primary-800/20">
              <Users size={14} /> Our Story
            </div>
            <h1 className="text-5xl lg:text-7xl font-black text-slate-900 dark:text-white tracking-tighter">
              Who We <span className="text-primary-600">Are.</span>
            </h1>
            <p className="text-xl text-slate-500 dark:text-slate-400 font-medium leading-relaxed">
              Tranquil Mental Health and Wellness was founded on the belief that mental healthcare should be accessible, compassionate, and scientifically rigorous.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <Target />, title: "Our Mission", text: "At Tranquil mental health and wellness, we bring a wealth of knowledge and expertise to our practice" },
              { icon: <Heart />, title: "Our Values", text: "Compassion, Integrity, Innovation, and Inclusivity drive every decision we make." },
              { icon: <Users />, title: "Our Approach", text: "We prioritize creating a safe, non-judgmental environment where our patients feel heard and supported while delivering evidence based treatments" }
            ].map((item, i) => (
              <div key={i} className="bg-white dark:bg-slate-900 p-10 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 shadow-sm">
                <div className="w-14 h-14 bg-primary-100 dark:bg-primary-900/20 text-primary-600 rounded-2xl flex items-center justify-center mb-6">
                  {React.cloneElement(item.icon, { size: 28 })}
                </div>
                <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-4">{item.title}</h3>
                <p className="text-slate-500 dark:text-slate-400 font-medium leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Meet The Team */}
        <div className="mb-32">
          <div className="text-center mb-16">
             <h6 className="text-primary-600 font-black uppercase tracking-[0.3em] text-[10px] mb-4">Clinical Excellence</h6>
             <h2 className="text-4xl font-black text-slate-900 dark:text-white tracking-tight">Meet Our Team</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {teamMembers.map((member, idx) => (
              <div key={idx} className="text-center group">
                <div className="relative w-48 h-48 mx-auto rounded-full overflow-hidden mb-8 shadow-xl border-8 border-white dark:border-slate-900 group-hover:-translate-y-2 transition-transform duration-300">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                </div>
                <h3 className="text-xl font-black text-slate-900 dark:text-white mb-1">{member.name}</h3>
                <p className="text-primary-600 font-bold text-sm mb-4">{member.title}</p>
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed max-w-xs mx-auto font-medium">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Insurance Grid */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <h6 className="text-primary-600 font-black uppercase tracking-[0.3em] text-[10px] mb-4">Partnerships</h6>
            <h2 className="text-4xl font-black text-slate-900 dark:text-white tracking-tight">Accepted Insurance</h2>
          </div>
          <InsuranceGrid />
          <div className="text-center">
            <Link to="/" className="inline-flex items-center gap-2 text-primary-600 font-black uppercase tracking-widest text-xs hover:underline">
              View All Plans <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* FAQ */}
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-slate-100 dark:bg-slate-800 rounded-full mb-6 text-slate-400">
              <HelpCircle size={32} />
            </div>
            <h2 className="text-4xl font-black text-slate-900 dark:text-white tracking-tight">Frequently Asked Questions</h2>
          </div>
          
          <div className="space-y-6">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-white dark:bg-slate-900 p-8 rounded-[2rem] border border-slate-100 dark:border-slate-800 shadow-sm">
                <h3 className="text-lg font-black text-slate-900 dark:text-white mb-3">{faq.q}</h3>
                <p className="text-slate-500 dark:text-slate-400 font-medium leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default AboutView;