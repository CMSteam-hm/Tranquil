
import React from 'react';
import { Briefcase, MapPin, Clock, ArrowRight, Heart, Users, ShieldCheck, Zap } from 'lucide-react';

const jobs = [
  {
    title: "Psychiatric Mental Health Nurse Practitioner",
    type: "Full-Time / Remote",
    location: "California (State License Required)",
    desc: "Join our clinical team providing medication management and psychotherapy. Requires board certification and 2+ years experience.",
    tags: ["Clinical", "High-Priority"]
  },
  {
    title: "Licensed Clinical Psychologist",
    type: "Contract / Hybrid",
    location: "Sacramento, CA",
    desc: "Perform comprehensive neuropsychological evaluations and therapeutic interventions for children and adults.",
    tags: ["Testing", "Child-Specialty"]
  },
  {
    title: "Medical Office Administrator",
    type: "Full-Time",
    location: "In-Person",
    desc: "Oversee HIPAA-compliant patient communication, billing cycles, and practice logistics in a high-growth environment.",
    tags: ["Admin", "Management"]
  },
  {
    title: "Clinical Intake Coordinator",
    type: "Part-Time / Hybrid",
    location: "Remote",
    desc: "Manage the initial screening process for new patients, ensuring clinical suitability and correct administrative placement.",
    tags: ["Admin", "Support"]
  }
];

const CareerView: React.FC = () => {
  return (
    <div className="min-h-screen pt-32 pb-24 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary-50 dark:bg-primary-900/30 text-primary-600 rounded-full text-[10px] font-black uppercase tracking-widest border border-primary-100 dark:border-primary-800/20">
              <Users size={14} /> Join Our Mission
            </div>
            <h1 className="text-5xl lg:text-7xl font-black text-slate-900 dark:text-white tracking-tighter leading-[0.95]">
              Heal <span className="text-primary-600">Hearts.</span> <br/>Advance <span className="text-primary-600">Science.</span>
            </h1>
            <p className="text-xl text-slate-500 dark:text-slate-400 font-medium leading-relaxed max-w-lg">
              We are expanding our team of compassionate clinicians and dedicated administrative professionals. Work in a cutting-edge practice where technology meets human empathy.
            </p>
            <div className="flex gap-4">
              <a href="#vacancies" className="px-8 py-4 bg-[#CC5500] text-white rounded-2xl font-black shadow-xl shadow-[#E06600]/20 hover:scale-105 transition-all">View Vacancies</a>
              <a href="#/contact" className="px-8 py-4 bg-white dark:bg-slate-900 text-slate-900 dark:text-white rounded-2xl font-black border border-slate-100 dark:border-slate-800 hover:bg-slate-50 transition-all">General Inquiry</a>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-10 bg-primary-400/10 blur-[100px] rounded-full"></div>
            <img 
              src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=1200&q=80" 
              alt="Team at work" 
              className="relative rounded-[3.5rem] shadow-2xl border-8 border-white dark:border-slate-800 aspect-[4/3] object-cover"
            />
          </div>
        </div>

        {/* Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-32">
          {[
            { icon: <Heart className="text-pink-500" />, title: "Full Benefits", desc: "Comprehensive health, dental, and vision insurance for full-time staff." },
            { icon: <ShieldCheck className="text-teal-500" />, title: "Liability Coverage", desc: "Malpractice and liability insurance provided for all clinicians." },
            { icon: <Clock className="text-blue-500" />, title: "Flexible Flow", desc: "Work-life balance with customizable schedules and remote options." },
            { icon: <Zap className="text-amber-500" />, title: "Growth Capital", desc: "Continuing education stipends and professional development paths." },
          ].map((b, i) => (
            <div key={i} className="bg-white dark:bg-slate-900 p-8 rounded-[2.5rem] border border-slate-100 dark:border-slate-800">
              <div className="w-12 h-12 bg-slate-50 dark:bg-slate-800 rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                {b.icon}
              </div>
              <h4 className="font-black text-lg mb-2 dark:text-white">{b.title}</h4>
              <p className="text-sm text-slate-500 dark:text-slate-400 font-medium leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>

        {/* Vacancies */}
        <div id="vacancies" className="space-y-12">
          <div className="flex justify-between items-end">
            <div>
              <h2 className="text-4xl font-black text-slate-900 dark:text-white tracking-tight">Open Vacancies</h2>
              <p className="text-slate-500 mt-2 font-medium">Join our growing practice in California and Oregon.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {jobs.map((job, idx) => (
              <div key={idx} className="bg-white dark:bg-slate-900 p-10 rounded-[3rem] border border-slate-100 dark:border-slate-800 hover:border-primary-500/30 transition-all group flex flex-col lg:flex-row lg:items-center gap-10">
                <div className="shrink-0">
                  <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/20 text-primary-600 rounded-2xl flex items-center justify-center shadow-sm">
                    <Briefcase size={28} />
                  </div>
                </div>
                <div className="flex-grow space-y-3">
                  <div className="flex flex-wrap gap-2">
                    {job.tags.map(tag => (
                      <span key={tag} className="text-[10px] font-black uppercase tracking-widest px-3 py-1 bg-slate-50 dark:bg-slate-800 text-slate-400 rounded-lg">{tag}</span>
                    ))}
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 dark:text-white group-hover:text-primary-600 transition-colors">{job.title}</h3>
                  <div className="flex flex-wrap items-center gap-6 text-sm font-bold text-slate-400 uppercase tracking-wider">
                    <span className="flex items-center gap-2"><Clock size={16} /> {job.type}</span>
                    <span className="flex items-center gap-2"><MapPin size={16} /> {job.location}</span>
                  </div>
                  <p className="text-slate-500 dark:text-slate-400 max-w-2xl font-medium leading-relaxed">
                    {job.desc}
                  </p>
                </div>
                <div className="shrink-0">
                  <a href="#/contact" className="px-8 py-4 bg-slate-900 dark:bg-slate-800 text-white rounded-2xl font-black text-sm flex items-center gap-2 hover:bg-[#CC5500] transition-all">
                    Apply Now <ArrowRight size={18} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-32 p-12 bg-slate-900 rounded-[3.5rem] text-center text-white relative overflow-hidden">
           <p className="text-xs font-black uppercase tracking-[0.5em] mb-4 opacity-50">General Applications</p>
           <h3 className="text-3xl font-black mb-6">Don't see the right role?</h3>
           <p className="text-slate-400 max-w-xl mx-auto mb-10 font-medium">We are always looking for talented psychiatric professionals. Send your CV to <span className="text-primary-400">careers@tranquilmentalhealth.com</span> for future consideration.</p>
           <a href="#/contact" className="inline-flex items-center gap-2 px-10 py-4 bg-[#CC5500] text-white rounded-2xl font-black text-lg hover:bg-[#B84D00] transition-all">Send Your CV</a>
        </div>
      </div>
    </div>
  );
};

export default CareerView;
