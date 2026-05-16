import { motion } from 'framer-motion';
import { Settings, Users, ShieldAlert, Activity, BarChart3, Search, CheckCircle2, XCircle, MoreVertical, Server } from 'lucide-react';
import Button from '../components/Button';

const AdminDashboard = () => {
  const stats = [
    { label: 'System Health', value: '99.9%', status: 'Operational', icon: <Server className="w-5 h-5" />, color: 'text-green-500', bg: 'bg-green-500/10' },
    { label: 'Total Users', value: '45.2k', status: '+1.2k today', icon: <Users className="w-5 h-5" />, color: 'text-primary', bg: 'bg-primary/10' },
    { label: 'Platform Revenue', value: '$842k', status: '+15.2%', icon: <Activity className="w-5 h-5" />, color: 'text-secondary', bg: 'bg-secondary/10' },
    { label: 'Security Alerts', value: '02', status: 'Action required', icon: <ShieldAlert className="w-5 h-5" />, color: 'text-accent', bg: 'bg-accent/10' },
  ];

  const pendingApprovals = [
    { id: 1, name: 'Machine Learning Masterclass', instructor: 'Dr. Sarah Chen', date: '2 hours ago', category: 'Data Science' },
    { id: 2, name: 'Blockchain Fundamentals', instructor: 'James Doe', date: '5 hours ago', category: 'Finance' },
    { id: 3, name: 'UI Design for SaaS', instructor: 'Elena Rodriguez', date: '1 day ago', category: 'Design' },
  ];

  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
        <div>
          <h2 className="text-3xl font-black text-text tracking-tight mb-2">Admin Control Center</h2>
          <p className="text-sm text-text-secondary font-medium">Manage platform security, approvals, and system-wide configurations.</p>
        </div>
        <div className="flex gap-4">
           <Button variant="outline" className="h-16 px-8 flex items-center gap-3">
              <Settings className="w-5 h-5" /> Settings
           </Button>
           <Button className="h-16 px-8 flex items-center gap-3 shadow-violet-glow">
              <ShieldAlert className="w-5 h-5" /> Security Audit
           </Button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((stat, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            className="bg-white p-8 rounded-[3rem] border border-border relative overflow-hidden group hover:border-primary/20 transition-all duration-500"
          >
            <div className={`absolute top-0 right-0 w-32 h-32 ${stat.bg} blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700`}></div>
            <div className="flex flex-col gap-6 relative z-10">
              <div className={`w-14 h-14 rounded-2xl ${stat.bg} ${stat.color} flex items-center justify-center`}>
                {stat.icon}
              </div>
              <div>
                <div className="text-[10px] font-black text-text-muted uppercase tracking-[0.2em] mb-1">{stat.label}</div>
                <div className="text-3xl font-black text-text">{stat.value}</div>
                <div className={`text-[10px] font-bold mt-2 ${stat.color} uppercase tracking-widest`}>{stat.status}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Pending Approvals */}
        <div className="space-y-8">
          <div className="flex items-center justify-between">
             <h3 className="text-2xl font-black text-text tracking-tight">Course Approvals</h3>
             <span className="px-4 py-1.5 rounded-full bg-accent/10 text-accent text-[10px] font-black uppercase tracking-widest border border-accent/20">3 Pending</span>
          </div>
          
          <div className="space-y-4">
             {pendingApprovals.map((item, i) => (
                <motion.div 
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white p-6 rounded-[2.5rem] border border-border flex items-center justify-between group hover:border-primary/30 transition-all duration-500"
                >
                   <div className="flex items-center gap-6">
                      <div className="w-16 h-16 rounded-2xl bg-background-light flex items-center justify-center text-primary shadow-sm group-hover:bg-primary group-hover:text-white transition-all">
                         <BarChart3 className="w-8 h-8" />
                      </div>
                      <div>
                         <div className="text-lg font-black text-text group-hover:text-primary transition-colors tracking-tight leading-none mb-2">{item.name}</div>
                         <div className="flex items-center gap-4 text-[10px] text-text-muted font-black uppercase tracking-widest">
                            <span>{item.instructor}</span>
                            <span className="w-1 h-1 bg-border rounded-full"></span>
                            <span>{item.category}</span>
                            <span className="w-1 h-1 bg-border rounded-full"></span>
                            <span>{item.date}</span>
                         </div>
                      </div>
                   </div>
                   <div className="flex items-center gap-3">
                      <button className="w-12 h-12 rounded-2xl bg-green-500/10 text-green-600 flex items-center justify-center hover:bg-green-500 transition-all border border-green-500/20 hover:text-white shadow-sm"><CheckCircle2 className="w-5 h-5" /></button>
                      <button className="w-12 h-12 rounded-2xl bg-red-500/10 text-red-600 flex items-center justify-center hover:bg-red-500 transition-all border border-red-500/20 hover:text-white shadow-sm"><XCircle className="w-5 h-5" /></button>
                   </div>
                </motion.div>
             ))}
          </div>
        </div>

        {/* System Activity */}
        <div className="space-y-8">
           <h3 className="text-2xl font-black text-text tracking-tight">System Activity</h3>
           <div className="bg-white p-12 rounded-[4rem] border border-border relative overflow-hidden shadow-sm">
              <div className="space-y-10 relative z-10">
                 {[
                   { event: 'Database Backup', time: '10 mins ago', status: 'Success', detail: 'Primary cluster automated backup complete' },
                   { event: 'New Security Rule', time: '1 hour ago', status: 'Configured', detail: 'Rate limiting updated for API endpoints' },
                   { event: 'Payment Gateway', time: '3 hours ago', status: 'Maintenance', detail: 'Stripe integration API v3 migration' },
                 ].map((log, i) => (
                    <div key={i} className="relative pl-10 border-l-2 border-border group">
                       <div className="absolute top-0 left-[-6px] w-2.5 h-2.5 rounded-full bg-primary shadow-violet-glow transition-transform group-hover:scale-150"></div>
                       <div className="flex items-center justify-between mb-2">
                          <div className="text-base font-black text-text group-hover:text-primary transition-colors tracking-tight leading-none">{log.event}</div>
                          <div className="text-[10px] text-text-muted font-black uppercase tracking-tighter">{log.time}</div>
                       </div>
                       <div className="text-sm text-text-secondary leading-relaxed font-medium">{log.detail}</div>
                    </div>
                 ))}
              </div>
              <Button variant="outline" className="w-full mt-12 h-16 text-sm uppercase tracking-widest font-black">View Detailed Logs</Button>
           </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
