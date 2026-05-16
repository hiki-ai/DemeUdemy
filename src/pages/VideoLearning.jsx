import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ChevronLeft, PlayCircle, CheckCircle, Download, ShieldAlert, FileText, Settings, Maximize, Video, ChevronRight, Share2, Info, Zap, X } from 'lucide-react';
import { motion } from 'framer-motion';

const VideoLearning = () => {
   const { courseId } = useParams();
   const [activeTab, setActiveTab] = useState('overview');
   const [isSidebarOpen, setIsSidebarOpen] = useState(true);

   return (
      <div className="h-screen bg-background text-text flex flex-col overflow-hidden font-sans selection:bg-primary/20 selection:text-primary">
         {/* Premium Video Header */}
         <header className="h-20 bg-white border-b border-border flex items-center justify-between px-8 shrink-0 relative z-50 shadow-sm">
            <div className="flex items-center gap-6">
               <Link to="/dashboard/MyLearning" className="w-10 h-10 rounded-xl hover:bg-background-light flex items-center justify-center transition-all group border border-transparent hover:border-border">
                  <ChevronLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform text-text-secondary" />
               </Link>
               <div className="h-8 w-px bg-border"></div>
               <div>
                  <h1 className="text-base font-black tracking-tight line-clamp-1">Advanced React & Next.js Architecture Masterclass</h1>
                  <div className="flex items-center gap-3 text-[10px] font-black text-primary uppercase tracking-widest mt-0.5">
                     <Zap className="w-3.5 h-3.5 fill-current" /> Module 4: Performance Optimization
                  </div>
               </div>
            </div>

            <div className="flex items-center gap-4">
               <div className="hidden md:flex items-center gap-2 px-4 py-2 bg-green-500/10 text-green-600 rounded-full text-[10px] font-black uppercase tracking-widest border border-green-500/20 shadow-sm">
                  <ShieldAlert className="w-3.5 h-3.5" /> DRM Protected
               </div>
               <button className="flex items-center gap-2 px-6 py-2.5 bg-primary text-white rounded-xl text-xs font-black uppercase tracking-widest hover:bg-primary-hover shadow-violet-glow transition-all">
                  <Share2 className="w-4 h-4" /> Share
               </button>
               <button 
                  onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                  className="w-10 h-10 rounded-xl bg-background-light flex items-center justify-center text-text-secondary hover:text-primary transition-all lg:hidden"
               >
                  <X className={`w-6 h-6 transition-transform ${isSidebarOpen ? 'rotate-0' : 'rotate-180'}`} />
               </button>
            </div>
         </header>

         <div className="flex-1 flex overflow-hidden relative">
            {/* Video Player Area */}
            <div className="flex-1 flex flex-col bg-background-dark overflow-hidden relative group">
               <div className="flex-1 flex items-center justify-center relative bg-black/40">
                  <div className="w-full max-w-6xl mx-auto p-4 md:p-8">
                     <div className="aspect-video relative rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-black group-hover:shadow-violet-glow transition-all duration-700">
                        <iframe 
                           src="https://player.vdocipher.com/v2/?otp=20160313versASE3232E2QK0cHRueZBBnw8x3LQus7qQf0UY2BMaeXkEwiGo4ssO&playbackInfo=eyJ2aWRlb0lkIjoiYjFhZGViNWQzMDY0NGJjOWI2YTJkNjJmYzRiMTk4YzMifQ==" 
                           className="w-full h-full absolute inset-0"
                           style={{ border: 0 }}
                           allowFullScreen={true}
                           allow="encrypted-media"
                           title="Course Video"
                        ></iframe>

                        {/* Floating Watermark ID */}
                        <div className="absolute top-8 left-8 p-4 bg-black/40 backdrop-blur-md rounded-2xl border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-3 pointer-events-none">
                           <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                              <ShieldAlert className="w-4 h-4" />
                           </div>
                           <div className="text-white">
                              <div className="text-[8px] font-black uppercase tracking-widest opacity-60">Session ID</div>
                              <div className="text-[10px] font-black tracking-widest">UA-SID-8291-VDO</div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>

               {/* Player Bottom Bar */}
               <div className="h-20 bg-white border-t border-border flex items-center justify-between px-10 shrink-0 relative z-50">
                  <div className="flex items-center gap-8">
                     <button className="flex items-center gap-2 text-text-secondary hover:text-primary transition-all font-black text-sm group">
                        <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" /> Previous Lesson
                     </button>
                     <div className="h-6 w-px bg-border"></div>
                     <button className="flex items-center gap-2 text-primary transition-all font-black text-sm group">
                        Next Lesson <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                     </button>
                  </div>

                  <div className="flex items-center gap-6">
                     <button className="p-3 text-text-muted hover:text-primary transition-all hover:bg-background-light rounded-xl"><Settings className="w-5 h-5" /></button>
                     <button className="p-3 text-text-muted hover:text-primary transition-all hover:bg-background-light rounded-xl"><Maximize className="w-5 h-5" /></button>
                  </div>
               </div>
            </div>

            {/* Course Content Sidebar (Desktop) */}
            <aside 
               className={`bg-white border-l border-border flex flex-col shrink-0 transition-all duration-500 ease-in-out relative z-40 ${
                  isSidebarOpen ? 'w-[400px]' : 'w-0'
               } hidden lg:flex`}
            >
               <div className="p-8 border-b border-border">
                  <h2 className="text-xl font-black text-text tracking-tight mb-4 flex items-center justify-between">
                     Course Content
                     <button onClick={() => setIsSidebarOpen(false)} className="p-2 hover:bg-background-light rounded-lg text-text-muted"><X className="w-4 h-4" /></button>
                  </h2>
                  <div className="flex items-center justify-between text-[10px] font-black text-text-muted uppercase tracking-widest">
                     <span>45/120 Lessons</span>
                     <span className="text-primary font-black">35% Complete</span>
                  </div>
                  <div className="h-1.5 w-full bg-background-light rounded-full mt-4 overflow-hidden">
                     <div className="h-full bg-primary w-[35%]"></div>
                  </div>
               </div>

               <div className="flex-1 overflow-y-auto no-scrollbar">
                  {[1, 2, 3, 4, 5, 6].map((m) => (
                     <div key={m} className="border-b border-border">
                        <button className="w-full p-6 flex items-center justify-between hover:bg-background-light transition-all text-left group">
                           <div>
                              <div className="text-[10px] font-black text-primary uppercase tracking-widest mb-1">Module {m}</div>
                              <h3 className="text-sm font-black text-text tracking-tight group-hover:text-primary transition-colors">Introduction to Enterprise Patterns</h3>
                           </div>
                           <ChevronRight className="w-5 h-5 text-border group-hover:translate-x-1 transition-transform" />
                        </button>
                        {m === 1 && (
                           <div className="bg-background-light/30">
                              {[1, 2, 3].map((l) => (
                                 <div key={l} className={`p-5 pl-10 flex items-center gap-4 hover:bg-white transition-all cursor-pointer border-l-4 ${l === 1 ? 'border-primary bg-white' : 'border-transparent opacity-60'}`}>
                                    {l === 1 ? <PlayCircle className="w-5 h-5 text-primary" /> : <CheckCircle className="w-5 h-5 text-green-500" />}
                                    <div className="flex-1 min-w-0">
                                       <div className="text-xs font-bold text-text truncate">Course overview and goals</div>
                                       <div className="flex items-center gap-3 text-[9px] text-text-muted font-bold mt-1 uppercase tracking-widest">
                                          <Video className="w-3.5 h-3.5" /> 12:45
                                       </div>
                                    </div>
                                    <button className="p-2 text-text-muted hover:text-primary transition-all"><Download className="w-4 h-4" /></button>
                                 </div>
                              ))}
                           </div>
                        )}
                     </div>
                  ))}
               </div>
            </aside>

            {/* Floating Sidebar Toggle for Desktop */}
            {!isSidebarOpen && (
               <button 
                  onClick={() => setIsSidebarOpen(true)}
                  className="absolute right-0 top-1/2 -translate-y-1/2 w-8 h-20 bg-white border border-r-0 border-border rounded-l-2xl shadow-xl flex items-center justify-center text-primary hover:w-10 transition-all z-50 hidden lg:flex"
               >
                  <ChevronLeft className="w-6 h-6" />
               </button>
            )}
         </div>
      </div>
   );
};

export default VideoLearning;
