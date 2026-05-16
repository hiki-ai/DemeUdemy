import { motion } from 'framer-motion';
import { Play, Award, Clock, Flame, Target, ArrowRight, Zap, Info, Calendar, Users, CheckCircle2 } from 'lucide-react';
import { courses } from '../data/dummy';
import Button from '../components/Button';

const StudentDashboard = () => {
  const continueCourses = courses.slice(0, 2);
  
  const stats = [
    { label: 'Learning Streak', value: '12 Days', icon: <Flame className="w-5 h-5" />, color: 'text-orange-500', bg: 'bg-orange-500/10' },
    { label: 'Courses Done', value: '08', icon: <Award className="w-5 h-5" />, color: 'text-primary', bg: 'bg-primary/10' },
    { label: 'Hours Watched', value: '45.5h', icon: <Clock className="w-5 h-5" />, color: 'text-secondary', bg: 'bg-secondary/10' },
    { label: 'Points Earned', value: '2,450', icon: <Target className="w-5 h-5" />, color: 'text-green-500', bg: 'bg-green-500/10' },
  ];

  const featuredVideos = [
    {
      id: 1,
      title: "Mastering React Server Components",
      duration: "18:45",
      progress: 65,
      status: "In Progress",
      otp: "20160313versASE32321wLC5zZL0d5ydH7ti56QEYA1xrY9kQj3AvRK9jCMNcm4l",
      playbackInfo: "eyJ2aWRlb0lkIjoiYjFhZGViNWQzMDY0NGJjOWI2YTJkNjJmYzRiMTk4YzMifQ=="
    },
    {
      id: 2,
      title: "Advanced Tailwind CSS Layouts",
      duration: "22:10",
      progress: 30,
      status: "New",
      otp: "20160313versASE3232ikGRIsW5g5doH69BBJlxdKBLPMykUWFqLdH7X1oTIfu1T",
      playbackInfo: "eyJ2aWRlb0lkIjoiMmMxMGQzMDI1YjY3NDFlYjlmNjI0YjgxYjY1MWMzMzgifQ=="
    },
    {
      id: 3,
      title: "AI Integration in Modern Apps",
      duration: "45:30",
      progress: 85,
      status: "Continuing",
      otp: "20160313versASE3232CwJiwAz719IYdcMkgv3q3qkCmi0oKxEBzncZZVAQ8sLVq",
      playbackInfo: "eyJ2aWRlb0lkIjoiMjI5NTNhZjhkNjc2NDk1OWI1ZDUwMDEzYWI3YjdjOGMifQ=="
    },
    {
      id: 4,
      title: "Building Scalable SaaS Platforms",
      duration: "35:15",
      progress: 10,
      status: "Just Started",
      otp: "20160313versASE32327lw7vKvMZXUcSTD1Wan3JcSIhUv0cQdJrfFITHtm7L67C",
      playbackInfo: "eyJ2aWRlb0lkIjoiZTY0ODg2ZGZmMzdjNDFkZDk0YzZkOGJjMmFhZTY0N2MifQ=="
    }
  ];

  return (
    <div className="space-y-12 pb-12">
      {/* Stats Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        {stats.map((stat, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-white p-6 md:p-8 rounded-[2.5rem] border border-border relative overflow-hidden group hover:border-primary/20 transition-all duration-500 shadow-sm"
          >
            <div className={`absolute top-0 right-0 w-24 h-24 ${stat.bg} blur-3xl -translate-y-1/2 translate-x-1/2`}></div>
            <div className="flex items-center gap-5 relative z-10">
              <div className={`w-12 h-12 md:w-14 md:h-14 rounded-2xl ${stat.bg} ${stat.color} flex items-center justify-center shrink-0`}>
                {stat.icon}
              </div>
              <div>
                <div className="text-[10px] font-black text-text-muted uppercase tracking-[0.2em] mb-1">{stat.label}</div>
                <div className="text-xl md:text-2xl font-black text-text">{stat.value}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-12">
        {/* Left Column */}
        <div className="lg:col-span-2 space-y-12">
          
          {/* Featured Learning Videos Section */}
          <div className="space-y-8">
            <div className="flex items-center justify-between">
               <h2 className="text-2xl md:text-3xl font-black text-text tracking-tight flex items-center gap-3">
                  🔥 Featured Learning Videos
               </h2>
               <div className="hidden sm:flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/5 border border-primary/10 text-[10px] font-black text-primary uppercase tracking-widest">
                  <Zap className="w-3 h-3 fill-current" /> Premium Learning
               </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               {featuredVideos.map((video, i) => (
                 <motion.div 
                   key={video.id}
                   initial={{ opacity: 0, scale: 0.95 }}
                   whileInView={{ opacity: 1, scale: 1 }}
                   viewport={{ once: true }}
                   transition={{ delay: i * 0.1 }}
                   className="group relative bg-white/50 backdrop-blur-xl rounded-[3rem] border border-border overflow-hidden hover:border-primary/40 transition-all duration-500 shadow-lg hover:shadow-neon-purple"
                 >
                    {/* Neon Glow Border Effect */}
                    <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/20 rounded-[3rem] pointer-events-none transition-all duration-500"></div>
                    
                    {/* Video Container */}
                    <div className="aspect-video relative overflow-hidden rounded-t-[2.8rem] bg-black group-hover:shadow-2xl transition-all">
                       <iframe 
                         src={`https://player.vdocipher.com/v2/?otp=${video.otp}&playbackInfo=${video.playbackInfo}`}
                         className="w-full h-full absolute inset-0"
                         style={{ border: 0 }}
                         allowFullScreen={true}
                         allow="encrypted-media"
                         title={video.title}
                       ></iframe>
                       
                       {/* Watch Status Badge */}
                       <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-primary/90 backdrop-blur-md text-[9px] font-black text-white uppercase tracking-widest shadow-lg z-10">
                          {video.status}
                       </div>
                    </div>

                    {/* Content */}
                    <div className="p-8 space-y-6 bg-gradient-to-b from-transparent to-primary/5">
                       <div className="flex justify-between items-start">
                          <h3 className="text-lg font-black text-text leading-tight line-clamp-2 group-hover:text-primary transition-colors">
                             {video.title}
                          </h3>
                          <div className="flex items-center gap-1.5 text-text-muted font-black text-[10px] uppercase tracking-widest shrink-0 mt-1">
                             <Clock className="w-3.5 h-3.5" /> {video.duration}
                          </div>
                       </div>

                       <div className="space-y-3">
                          <div className="flex justify-between text-[10px] font-black text-text-muted uppercase tracking-widest">
                             <span>Course Progress</span>
                             <span className="text-primary">{video.progress}%</span>
                          </div>
                          <div className="h-1.5 w-full bg-background-light rounded-full overflow-hidden shadow-inner">
                             <motion.div 
                               initial={{ width: 0 }}
                               whileInView={{ width: `${video.progress}%` }}
                               transition={{ duration: 1.5, delay: 0.5 }}
                               className="h-full bg-premium-gradient shadow-violet-glow relative"
                             >
                                <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                             </motion.div>
                          </div>
                       </div>

                       <Button className="w-full py-4 h-14 text-xs font-black uppercase tracking-[0.2em] shadow-violet-glow group-hover:scale-[1.02]">
                          Continue Learning <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                       </Button>
                    </div>
                 </motion.div>
               ))}
            </div>
          </div>

          <div className="flex items-center justify-between pt-8">
            <h2 className="text-2xl md:text-3xl font-black text-text tracking-tight">Continue Course Learning</h2>
            <button className="text-primary text-xs md:text-sm font-black flex items-center gap-2 hover:gap-3 transition-all uppercase tracking-widest">
              My Library <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {continueCourses.map((course, i) => (
              <motion.div 
                key={course.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-5 rounded-[2.5rem] border border-border flex gap-5 items-center group hover:border-primary/20 hover:shadow-glass transition-all duration-500"
              >
                <div className="w-24 h-24 md:w-32 md:h-24 rounded-2xl overflow-hidden relative shrink-0">
                  <img src={course.thumbnail} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Course" />
                  <div className="absolute inset-0 bg-text/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Play className="w-8 h-8 text-white fill-current" />
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm md:text-base font-black text-text mb-3 truncate group-hover:text-primary transition-colors tracking-tight leading-none">{course.title}</h3>
                  <div className="flex justify-between text-[9px] md:text-[10px] text-text-muted mb-2 font-black uppercase tracking-tight">
                    <span>{course.progress}% Complete</span>
                    <span className="hidden sm:inline">12/45 Lessons</span>
                  </div>
                  <div className="h-1.5 w-full bg-background-light rounded-full overflow-hidden shadow-inner">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: `${course.progress}%` }}
                      transition={{ duration: 1.5, delay: 0.5 }}
                      className="h-full bg-premium-gradient shadow-violet-glow"
                    ></motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-12">
          {/* Calendar Widget */}
          <div className="bg-white p-10 rounded-[3.5rem] border border-border shadow-sm text-center relative overflow-hidden group">
             <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 blur-2xl rounded-full translate-x-1/2 -translate-y-1/2"></div>
             <Calendar className="w-10 h-10 text-primary mx-auto mb-6" />
             <h3 className="text-xl font-black text-text mb-2 tracking-tight">Daily Goal</h3>
             <p className="text-sm text-text-secondary font-medium mb-8">You're 2 hours away from reaching your weekly target.</p>
             <div className="flex justify-center gap-3">
                {[1, 2, 3, 4, 5, 6, 7].map(d => (
                  <div key={d} className={`w-8 h-8 rounded-lg flex items-center justify-center text-[10px] font-black ${d <= 4 ? 'bg-primary text-white shadow-violet-glow' : 'bg-background-light text-text-muted'}`}>{d}</div>
                ))}
             </div>
          </div>

          {/* Achievement Badges */}
          <div className="bg-white p-10 rounded-[3.5rem] border border-border shadow-sm">
             <div className="flex items-center justify-between mb-10">
                <h3 className="text-xl font-black text-text tracking-tight">Recent Badges</h3>
                <Award className="w-6 h-6 text-primary" />
             </div>
             <div className="grid grid-cols-3 gap-6">
                {[1, 2, 3].map(i => (
                  <motion.div 
                    key={i} 
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="aspect-square rounded-2xl bg-background-light border border-border flex items-center justify-center text-primary hover:border-primary/30 transition-all cursor-help group shadow-sm"
                  >
                    <Award className="w-8 h-8 group-hover:scale-110 transition-transform" />
                  </motion.div>
                ))}
             </div>
             <Button variant="outline" className="w-full mt-10 h-14 text-xs font-black uppercase tracking-widest border-primary/10 text-primary hover:bg-primary/5">View All Badges</Button>
          </div>

          {/* Tips Section */}
          <div className="bg-background-dark p-10 rounded-[3.5rem] relative overflow-hidden group shadow-2xl">
             <div className="absolute inset-0 bg-premium-gradient opacity-10"></div>
             <Info className="w-8 h-8 text-primary-light mb-6 relative z-10" />
             <h4 className="text-lg font-black text-white mb-4 tracking-tight relative z-10">Pro Learning Tip</h4>
             <p className="text-sm text-white/60 leading-relaxed font-medium mb-8 relative z-10">"Batching your study sessions into 45-minute blocks increases retention by 30%."</p>
             <button className="text-[10px] font-black text-primary-light uppercase tracking-[0.2em] underline underline-offset-8 relative z-10 hover:text-white transition-colors">Efficiency Guide</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
