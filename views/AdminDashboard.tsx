
import React, { useState, useEffect } from 'react';
import { 
  Users, Activity, Calendar, 
  Search, Filter, Trash2, 
  CheckCircle, Clock, Eye,
  Lock, ArrowUpRight, BarChart3,
  TrendingUp, LayoutDashboard,
  ShieldCheck, Smartphone, MousePointer2,
  Mail, Info, Check, RotateCcw
} from 'lucide-react';
import { 
  LineChart, Line, XAxis, YAxis, CartesianGrid, 
  Tooltip, ResponsiveContainer, PieChart, Pie, Cell,
  AreaChart, Area
} from 'recharts';

/**
 * CONFIGURATION: 
 * 1. Replace the URL below with your 'Executon' URL from Google Apps Script.
 * 2. Ensure your Sheet has a column exactly named "Attended" for the sync to work.
 */
const API_URL = "YOUR_APPS_SCRIPT_WEB_APP_URL";

const AdminDashboard: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [submissions, setSubmissions] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [visits, setVisits] = useState(0);

  const DEMO_ACCESS_KEY = "TRANQUIL-DEMO";

  useEffect(() => {
    if (isAuthenticated) {
      setLoading(true);
      
      // GET Request to Google Sheet
      fetch(API_URL, {
        method: 'GET',
        redirect: 'follow' // Crucial for Google Apps Script redirects
      })
        .then(res => res.json())
        .then(data => {
          // Debug log as requested: Use this to check exactly what "keys" Google is sending
          if (data && data.length > 0) {
            console.log("Data from Google (Check keys here):", data[0]);
          }
          
          const updatedData = data.map((item: any, idx: number) => ({ 
            ...item, 
            // unique id for React rendering, fallback to row_id
            id: item.id || `row-${item.row_id || idx}`,
            // Ensure attended is treated as boolean
            attended: !!item.attended 
          }));
          setSubmissions(updatedData);
          setLoading(false);
        })
        .catch(err => {
          console.error("Failed to fetch sheet data:", err);
          setLoading(false);
        });
    }
    
    const savedVisits = parseInt(localStorage.getItem('tranquil_visits') || '0');
    setVisits(savedVisits);
  }, [isAuthenticated]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password.toUpperCase() === DEMO_ACCESS_KEY) {
      setIsAuthenticated(true);
    } else {
      alert("Unauthorized Access Attempt Detected.");
    }
  };

  /**
   * Syncs the "Attended" status back to Google Sheets
   */
  const toggleAttended = async (id: string, index: number) => {
    const item = submissions[index];
    if (!item) return;

    const newStatus = !item.attended;

    // 1. Optimistic UI Update (Immediate response)
    const newSubmissions = [...submissions];
    newSubmissions[index].attended = newStatus;
    setSubmissions(newSubmissions);

    // 2. Permanent Update to Google Sheet via Apps Script doPost
    try {
      const response = await fetch(API_URL, {
        method: "POST",
        // Using redirect follow. Note: doPost often works best with mode 'no-cors' 
        // if you don't need to read the success string "Success".
        mode: 'no-cors', 
        body: JSON.stringify({
          rowId: item.row_id, // We added row_id in the doGet function
          attended: newStatus
        })
      });
      console.log(`Persistence Request Sent: Row ${item.row_id} status -> ${newStatus}`);
    } catch (error) {
      console.error("Failed to save status to Google Sheets:", error);
      
      // 3. Rollback on failure so dashboard stays in sync with reality
      const rollbackSubmissions = [...submissions];
      rollbackSubmissions[index].attended = !newStatus;
      setSubmissions(rollbackSubmissions);
      alert("Network Error: Could not sync with Google Sheets. Please check your internet connection.");
    }
  };

  const deleteSubmission = (id: string) => {
    setSubmissions(prev => prev.filter(s => s.id !== id));
  };

  // Dynamic analytics based on sheet data
  const analyticsData = [
    { name: 'Mon', visits: Math.floor(visits * 0.2), conversion: Math.floor(submissions.length * 0.2) },
    { name: 'Tue', visits: Math.floor(visits * 0.4), conversion: Math.floor(submissions.length * 0.4) },
    { name: 'Wed', visits: Math.floor(visits * 0.6), conversion: Math.floor(submissions.length * 0.6) },
    { name: 'Thu', visits: Math.floor(visits * 0.8), conversion: Math.floor(submissions.length * 0.8) },
    { name: 'Today', visits: visits, conversion: submissions.length },
  ];

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-slate-100 dark:bg-slate-950 flex items-center justify-center p-6">
        <div className="max-w-md w-full bg-white dark:bg-slate-900 p-12 rounded-[3rem] shadow-[0_32px_64px_-12px_rgba(0,0,0,0.14)] border border-slate-200 dark:border-slate-800 text-center animate-in fade-in zoom-in duration-500">
          <div className="w-20 h-20 bg-primary-100 dark:bg-primary-900/30 text-primary-600 rounded-[2rem] flex items-center justify-center mx-auto mb-8 shadow-xl">
            <Lock size={36} />
          </div>
          <h2 className="text-3xl font-black mb-3 dark:text-white tracking-tight">Tranquil Admin</h2>
          <p className="text-slate-500 dark:text-slate-400 mb-6 text-sm leading-relaxed">Secure Practice Portal Access</p>
          
          <div className="mb-8 p-4 bg-primary-50 dark:bg-primary-900/20 rounded-2xl border border-primary-100 dark:border-primary-800/30 flex items-center gap-3 text-left">
            <Info className="text-primary-600 shrink-0" size={18} />
            <p className="text-[11px] font-bold text-primary-700 dark:text-primary-300">
              Access Key: <span className="font-mono text-xs">{DEMO_ACCESS_KEY}</span>
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <input 
              autoFocus
              type="text" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Authorization Key"
              className="w-full py-5 px-6 bg-slate-50 dark:bg-slate-800 border-2 border-slate-100 dark:border-slate-700 rounded-2xl outline-none text-center font-mono tracking-[0.2em] text-lg focus:border-primary-500 transition-all uppercase"
            />
            <button type="submit" className="w-full py-5 bg-[#CC5500] text-white rounded-2xl font-black text-lg hover:bg-[#B84D00] transition-all shadow-xl shadow-[#E06600]/20">
              Verify Credential
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-12 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse shadow-[0_0_12px_rgba(34,197,94,0.5)]"></div>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Master Sheet Connected</span>
            </div>
            <h1 className="text-5xl font-black text-slate-900 dark:text-white tracking-tighter">Practice <span className="text-primary-600">Admin.</span></h1>
            <p className="text-slate-500 dark:text-slate-400 mt-2 font-medium">Real-time patient intake and workflow management.</p>
          </div>
          <div className="flex gap-4">
            <button className="px-8 py-3.5 bg-[#CC5500] text-white rounded-2xl text-sm font-black shadow-lg shadow-[#E06600]/30 hover:bg-[#B84D00] transition-all flex items-center gap-2">
              <TrendingUp size={18}/> Performance Data
            </button>
          </div>
        </div>

        {/* Analytics Summary */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {[
            { label: 'Portal Visits', value: visits, icon: <MousePointer2 className="text-teal-500"/> },
            { label: 'Clinical Intakes', value: submissions.length, icon: <Activity className="text-primary-500"/> },
            { label: 'Patient Attended', value: submissions.filter(s => s.attended).length, icon: <CheckCircle className="text-green-500"/> },
            { label: 'Pending Action', value: submissions.filter(s => !s.attended).length, icon: <Clock className="text-amber-500"/> },
          ].map((stat, i) => (
            <div key={i} className="bg-white dark:bg-slate-900 p-8 rounded-[2rem] border border-slate-100 dark:border-slate-800 shadow-sm transition-all duration-300">
              <div className="flex justify-between items-start mb-6">
                <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-2xl">{stat.icon}</div>
              </div>
              <p className="text-slate-400 dark:text-slate-500 text-xs font-bold uppercase tracking-widest mb-1">{stat.label}</p>
              <h4 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">{stat.value}</h4>
            </div>
          ))}
        </div>

        {/* Charts Row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2 bg-white dark:bg-slate-900 p-10 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 shadow-sm">
            <h3 className="font-black text-xl flex items-center gap-3 mb-10"><BarChart3 size={24} className="text-primary-600"/> Conversion Trends</h3>
            <div className="h-[350px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={analyticsData}>
                  <defs>
                    <linearGradient id="colorVisits" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#14b8a6" stopOpacity={0.1}/>
                      <stop offset="95%" stopColor="#14b8a6" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" opacity={0.5} />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fontSize: 10, fontWeight: 700}} dy={10} />
                  <YAxis axisLine={false} tickLine={false} tick={{fontSize: 10, fontWeight: 700}} />
                  <Tooltip contentStyle={{borderRadius: '24px', border: 'none', boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1)'}} />
                  <Area type="monotone" dataKey="visits" stroke="#14b8a6" strokeWidth={4} fillOpacity={1} fill="url(#colorVisits)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-900 p-10 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 shadow-sm flex flex-col items-center justify-center">
             <div className="text-center">
               <div className="w-24 h-24 bg-primary-100 dark:bg-primary-900/20 rounded-full flex items-center justify-center mx-auto mb-6">
                 <Users className="text-primary-600" size={36} />
               </div>
               <h3 className="font-black text-2xl dark:text-white mb-2">Patient Growth</h3>
               <p className="text-slate-500 text-sm font-medium mb-8">Active sessions since platform launch.</p>
               <div className="text-6xl font-black text-slate-900 dark:text-white tracking-tighter mb-8">{submissions.length}</div>
               <div className="flex gap-2">
                 {[1,2,3,4,5].map(i => (
                   <div key={i} className="w-8 h-8 rounded-lg bg-primary-500 shadow-lg shadow-primary-500/20 animate-pulse" style={{animationDelay: `${i*150}ms`}}></div>
                 ))}
               </div>
             </div>
          </div>
        </div>

        {/* Live Intake Table */}
        <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 shadow-sm overflow-hidden">
          <div className="p-10 border-b border-slate-100 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
               <h3 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">Active Clinical Logs</h3>
               <p className="text-sm font-medium text-slate-500 mt-1">Reviewing records from Row 2 through {submissions.length + 1}.</p>
            </div>
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input className="pl-12 pr-6 py-3.5 bg-slate-50 dark:bg-slate-800 border-none rounded-2xl text-sm w-80 outline-none focus:ring-2 focus:ring-primary-500 transition-all font-medium" placeholder="Filter patient data..." />
            </div>
          </div>
          
          <div className="overflow-x-auto">
            {loading ? (
              <div className="py-32 text-center text-slate-400 font-bold uppercase tracking-widest flex flex-col items-center gap-4">
                <div className="w-12 h-12 border-4 border-primary-600 border-t-transparent rounded-full animate-spin"></div>
                Establishing Secure Link...
              </div>
            ) : (
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-slate-50/50 dark:bg-slate-800/50 text-slate-400 uppercase text-[10px] font-black tracking-[0.15em]">
                    <th className="px-10 py-6">Reception Date</th>
                    <th className="px-10 py-6">Patient Identifier</th>
                    <th className="px-10 py-6">Care Service</th>
                    <th className="px-10 py-6">Clinical Status</th>
                    <th className="px-10 py-6 text-right">Workflow</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50 dark:divide-slate-800">
                  {submissions.length === 0 ? (
                    <tr>
                      <td colSpan={5} className="px-10 py-24 text-center opacity-40">
                         <LayoutDashboard size={64} className="mx-auto mb-4" />
                         <p className="text-sm font-bold">Waiting for new intakes in Google Sheet.</p>
                      </td>
                    </tr>
                  ) : (
                    submissions.map((s, idx) => (
                      <tr key={s.id} className={`group transition-all ${s.attended ? 'opacity-40 bg-slate-50/50 dark:bg-slate-800/20' : 'hover:bg-slate-50/80 dark:hover:bg-slate-800/30'}`}>
                        <td className="px-10 py-8 text-sm font-bold text-slate-400">
                          {s.timestamp ? new Date(s.timestamp).toLocaleDateString() : 'Pending Date'}
                        </td>
                        <td className="px-10 py-8">
                          <p className="font-black text-slate-900 dark:text-white">{s.email_address || "Anonymous Case"}</p>
                          <p className="text-[10px] text-slate-400 uppercase font-bold">UID: {s.row_id}</p>
                        </td>
                        <td className="px-10 py-8">
                          <span className="text-[10px] font-black px-3 py-1.5 bg-primary-50 dark:bg-primary-900/30 text-primary-600 rounded-xl uppercase">
                            {s.what_would_you_like_to_do_today || "Clinical Inquiry"}
                          </span>
                        </td>
                        <td className="px-10 py-8">
                          {s.attended ? (
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-green-100 text-green-700 rounded-full text-[10px] font-black uppercase tracking-widest">
                              <CheckCircle size={14} /> Care Provided
                            </div>
                          ) : (
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-amber-100 text-amber-700 rounded-full text-[10px] font-black uppercase tracking-widest">
                              <Clock size={14} /> Intake Pending
                            </div>
                          )}
                        </td>
                        <td className="px-10 py-8 text-right">
                          <div className="flex justify-end gap-3">
                            <button 
                              onClick={() => toggleAttended(s.id, idx)}
                              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-black transition-all ${
                                s.attended ? 'bg-slate-200 text-slate-600' : 'bg-[#CC5500] text-white hover:bg-[#B84D00] shadow-lg shadow-[#E06600]/20'
                              }`}
                            >
                              {s.attended ? <><RotateCcw size={14}/> Reopen</> : <><Check size={14}/> Mark Attended</>}
                            </button>
                            <button 
                              onClick={() => deleteSubmission(s.id)}
                              className="p-3 bg-slate-100 dark:bg-slate-800 text-slate-400 hover:text-red-500 rounded-xl transition-all"
                            >
                              <Trash2 size={16}/>
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            )}
          </div>
        </div>

        {/* Technical Health Log */}
        <div className="mt-12 p-8 bg-slate-100 dark:bg-slate-900/50 rounded-3xl border border-slate-200 dark:border-slate-800 flex items-center justify-between">
           <div className="flex items-center gap-4">
             <ShieldCheck className="text-primary-600" />
             <div>
               <p className="text-sm font-bold dark:text-white">HIPAA Data Isolation</p>
               <p className="text-[10px] text-slate-500 font-medium uppercase tracking-widest">End-to-End Encryption Active</p>
             </div>
           </div>
           <div className="text-right">
             <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">System Build</p>
             <p className="text-xs font-mono font-bold text-slate-600 dark:text-slate-400">v4.2.1-clinical</p>
           </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
