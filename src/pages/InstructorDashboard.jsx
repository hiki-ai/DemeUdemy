import { motion } from 'framer-motion';
import { DollarSign, Users, Video, Star, Plus, BarChart3, TrendingUp, MessageSquare, Edit3, Eye, Trash2 } from 'lucide-react';
import Button from '../components/Button';

const InstructorDashboard = () => {
  const stats = [
    { label: 'Total Revenue', value: '$12,450.00', change: '+12.5%', icon: <DollarSign className="w-5 h-5" />, color: 'text-green-500', bg: 'bg-green-500/10' },
    { label: 'Total Students', value: '1,240', change: '+8.2%', icon: <Users className="w-5 h-5" />, color: 'text-primary', bg: 'bg-primary/10' },
    { label: 'Course Ratings', value: '4.9', change: '+0.1', icon: <Star className="w-5 h-5" />, color: 'text-yellow-500', bg: 'bg-yellow-500/10' },
    { label: 'Watch Time', value: '450h', change: '+15.3%', icon: <Video className="w-5 h-5" />, color: 'text-secondary', bg: 'bg-secondary/10' },
  ];

  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
        <div>
          <h2 className="text-3xl font-black text-text tracking-tight mb-2">Instructor Studio</h2>
          <p className="text-sm text-text-secondary font-medium">Manage your content, analyze performance, and grow your audience.</p>
        </div>
        <Button className="h-16 px-10 shadow-violet-glow text-lg">
          <Plus className="w-6 h-6" /> Create New Course
        </Button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((stat, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-white p-8 rounded-[2.5rem] border border-border relative overflow-hidden group hover:border-primary/20 transition-all duration-500"
          >
            <div className={`absolute top-0 right-0 w-24 h-24 ${stat.bg} blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700`}></div>
            <div className="flex flex-col gap-6 relative z-10">
              <div className="flex items-center justify-between">
                <div className={`w-14 h-14 rounded-2xl ${stat.bg} ${stat.color} flex items-center justify-center`}>
                  {stat.icon}
                </div>
                <div className={`text-xs font-black px-3 py-1.5 rounded-full ${stat.change.startsWith('+') ? 'bg-green-500/10 text-green-600' : 'bg-red-500/10 text-red-600'}`}>
                  {stat.change}
                </div>
              </div>
              <div>
                <div className="text-[10px] font-black text-text-muted uppercase tracking-[0.2em] mb-1">{stat.label}</div>
                <div className="text-3xl font-black text-text">{stat.value}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-12">
        {/* Course Table */}
        <div className="lg:col-span-2 space-y-8">
          <h3 className="text-2xl font-black text-text tracking-tight">Your Courses</h3>
          <div className="bg-white border border-border rounded-[3rem] overflow-hidden shadow-sm">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-background-light text-[10px] font-black text-text-muted uppercase tracking-[0.2em]">
                  <th className="px-10 py-6">Course Name</th>
                  <th className="px-10 py-6">Students</th>
                  <th className="px-10 py-6">Status</th>
                  <th className="px-10 py-6">Rating</th>
                  <th className="px-10 py-6">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {[1, 2, 3].map((id) => (
                  <tr key={id} className="group hover:bg-background-light/30 transition-colors">
                    <td className="px-10 py-8 font-black text-text group-hover:text-primary transition-colors">Advanced Next.js Architecture {id}</td>
                    <td className="px-10 py-8 text-sm font-bold text-text-secondary">4,520</td>
                    <td className="px-10 py-8">
                      <span className="px-4 py-1.5 rounded-full bg-green-500/10 text-green-600 text-[10px] font-black uppercase tracking-widest border border-green-500/20">Published</span>
                    </td>
                    <td className="px-10 py-8 flex items-center gap-1.5 font-black text-text">
                       <Star className="w-4 h-4 text-yellow-400 fill-current" /> 4.9
                    </td>
                    <td className="px-10 py-8">
                      <div className="flex items-center gap-2">
                         <button className="p-3 hover:bg-primary/10 rounded-xl text-text-muted hover:text-primary transition-all"><Edit3 className="w-4.5 h-4.5" /></button>
                         <button className="p-3 hover:bg-secondary/10 rounded-xl text-text-muted hover:text-secondary transition-all"><Eye className="w-4.5 h-4.5" /></button>
                         <button className="p-3 hover:bg-red-500/10 rounded-xl text-text-muted hover:text-red-500 transition-all"><Trash2 className="w-4.5 h-4.5" /></button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Activity Feed */}
        <div className="space-y-8">
           <h3 className="text-2xl font-black text-text tracking-tight">Recent Activity</h3>
           <div className="bg-white p-10 rounded-[3.5rem] border border-border space-y-10 shadow-sm">
              {[
                { type: 'Sale', text: 'New enrollment in "Next.js Architecture"', time: '2 mins ago', icon: <DollarSign className="w-4 h-4" />, color: 'text-green-600', bg: 'bg-green-500/10' },
                { type: 'Review', text: '5-star review from Priya M.', time: '45 mins ago', icon: <Star className="w-4 h-4" />, color: 'text-yellow-600', bg: 'bg-yellow-500/10' },
                { type: 'Question', text: 'New question in Module 3', time: '2 hours ago', icon: <MessageSquare className="w-4 h-4" />, color: 'text-primary', bg: 'bg-primary/10' },
              ].map((activity, i) => (
                <div key={i} className="flex gap-6 group">
                   <div className={`w-12 h-12 rounded-2xl ${activity.bg} flex items-center justify-center ${activity.color} shrink-0 group-hover:scale-110 transition-transform`}>
                      {activity.icon}
                   </div>
                   <div>
                      <div className="text-sm font-black text-text group-hover:text-primary transition-colors leading-snug tracking-tight">{activity.text}</div>
                      <div className="text-xs text-text-muted mt-2 font-bold uppercase tracking-widest">{activity.time}</div>
                   </div>
                </div>
              ))}
              <Button variant="outline" className="w-full mt-6 h-14 text-sm uppercase tracking-widest">View Full Activity</Button>
           </div>

           {/* Growth Tips */}
           <div className="bg-primary/5 p-10 rounded-[3.5rem] border border-primary/10 relative overflow-hidden group">
              <TrendingUp className="w-10 h-10 text-primary mb-6 animate-pulse" />
              <h4 className="text-xl font-black text-text mb-4 tracking-tight">Growth Tip</h4>
              <p className="text-sm text-text-secondary leading-relaxed font-medium mb-8">Courses with closed captions see 40% higher global enrollment. Consider adding them to your latest course.</p>
              <button className="text-[10px] font-black text-primary uppercase tracking-[0.2em] underline underline-offset-8">Analyze Reach</button>
           </div>
        </div>
      </div>
    </div>
  );
};

export default InstructorDashboard;
