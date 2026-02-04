
import React from 'react';
import { Star, Quote, CheckCircle, ShieldCheck } from 'lucide-react';

const testimonials = [
  {
    initials: "A.S.",
    location: "California",
    content: "The level of clinical care here is unmatched. They took the time to understand my history through genetic testing, which finally helped us find the right medication balance.",
    rating: 5,
    date: "Feb 2024"
  },
  {
    initials: "J.M.",
    location: "Oregon",
    content: "I've seen several psychiatrists over the years, but the approach at Tranquil is different. It's not just a 15-minute med check; it's a deep, therapeutic partnership.",
    rating: 5,
    date: "Jan 2024"
  },
  {
    initials: "L.K.",
    location: "Washington",
    content: "Their neuropsychological testing for my child was professional, thorough, and empathetic. We finally have a roadmap for school support.",
    rating: 5,
    date: "Dec 2023"
  },
  {
    initials: "R.B.",
    location: "California",
    content: "The digital portal is so easy to use. I can message the office and book my follow-ups in seconds. Very modern and professional service.",
    rating: 4,
    date: "Nov 2023"
  },
  {
    initials: "M.H.",
    location: "California",
    content: "I was hesitant about telehealth, but Tranquil made it feel personal and safe. I highly recommend them to anyone seeking precision psychiatry.",
    rating: 5,
    date: "Oct 2023"
  }
];

const TestimonialView: React.FC = () => {
  return (
    <div className="min-h-screen pt-32 pb-24 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary-50 dark:bg-primary-900/30 text-primary-600 rounded-full text-[10px] font-black uppercase tracking-widest border border-primary-100 dark:border-primary-800/20">
            <CheckCircle size={14} /> HIPAA Verified Success
          </div>
          <h1 className="text-5xl lg:text-6xl font-black text-slate-900 dark:text-white tracking-tighter">Voices of <span className="text-primary-600">Wellness.</span></h1>
          <p className="text-lg text-slate-500 dark:text-slate-400 font-medium leading-relaxed">
            Every journey at Tranquil is unique. Here is what our patients share about their progress and clinical experience. All testimonials are shared with full consent.
          </p>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {testimonials.map((t, idx) => (
            <div key={idx} className="break-inside-avoid bg-white dark:bg-slate-900 p-10 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all group">
              <div className="flex justify-between items-start mb-8">
                <div className="w-14 h-14 bg-primary-600 text-white rounded-2xl flex items-center justify-center font-black text-xl shadow-lg shadow-primary-500/20">
                  {t.initials}
                </div>
                <div className="flex gap-1">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} size={14} className="fill-amber-400 text-amber-400" />
                  ))}
                </div>
              </div>
              
              <div className="relative">
                <Quote className="absolute -top-4 -left-4 text-slate-100 dark:text-slate-800 -z-10" size={64} />
                <p className="text-slate-600 dark:text-slate-300 font-medium leading-relaxed italic mb-8">
                  "{t.content}"
                </p>
              </div>

              <div className="pt-6 border-t border-slate-50 dark:border-slate-800 flex justify-between items-center">
                <div>
                  <p className="text-xs font-black text-slate-900 dark:text-white uppercase tracking-wider">{t.location}</p>
                  <p className="text-[10px] text-slate-400 font-bold">{t.date}</p>
                </div>
                <div className="flex items-center gap-2 text-[10px] font-black text-primary-600 uppercase tracking-widest">
                  <ShieldCheck size={12} /> Verified
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 bg-primary-600 rounded-[3.5rem] p-12 lg:p-20 text-center text-white relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
          <h2 className="text-3xl md:text-5xl font-black mb-8 relative tracking-tight">Ready to start your own story?</h2>
          <p className="text-primary-100 text-lg mb-10 max-w-2xl mx-auto relative font-medium">
            Take the first step toward lasting change. Our clinicians are here to support your mental health journey with precision and compassion.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6 relative">
            <a href="#/booking" className="px-10 py-4 bg-white text-[#CC5500] rounded-2xl font-black text-lg shadow-xl hover:scale-105 transition-all">Schedule Evaluation</a>
            <a href="#/contact" className="px-10 py-4 bg-[#B84D00] text-white rounded-2xl font-black text-lg border border-[#E06600]/50 hover:bg-[#A34400] transition-all">Submit Feedback</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialView;
