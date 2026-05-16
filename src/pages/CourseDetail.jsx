import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Star, Clock, Video, FileText, CheckCircle, Shield, PlayCircle, Globe, ChevronRight, Zap, Heart, Share2, Award, Users } from 'lucide-react';
import { courses } from '../data/dummy';
import Button from '../components/Button';

const CourseDetail = () => {
  const { id } = useParams();
  const course = courses.find(c => c.id === parseInt(id)) || courses[0];

  return (
    <div className="pb-32 bg-white">
      {/* 1. Premium Header Section (Responsive) */}
      <section className="bg-background-dark py-12 md:py-24 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/10 blur-[150px] rounded-full translate-x-1/3 -translate-y-1/3"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-3 gap-12 lg:gap-20">
            <div className="lg:col-span-2 space-y-8">
               <div className="flex items-center gap-3 text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-primary-light">
                  <Link to="/" className="hover:text-white transition-colors">Courses</Link>
                  <ChevronRight className="w-4 h-4" />
                  <span>{course.category}</span>
               </div>
               <h1 className="text-3xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight">{course.title}</h1>
               <p className="text-lg md:text-xl text-white/70 max-w-2xl font-medium leading-relaxed">
                 Master the most in-demand skills of 2026. This comprehensive course covers everything from fundamentals to advanced enterprise patterns.
               </p>
               
               <div className="flex flex-wrap items-center gap-6 md:gap-8 py-2">
                  <div className="flex items-center gap-2">
                     <Star className="w-5 h-5 text-yellow-400 fill-current" />
                     <span className="font-black text-lg md:text-xl">{course.rating}</span>
                     <span className="text-white/50 font-bold text-sm">({course.reviews.toLocaleString()} ratings)</span>
                  </div>
                  <div className="flex items-center gap-2 text-white/70 font-bold text-sm">
                     <Users className="w-5 h-5" />
                     <span>{course.students.toLocaleString()} students</span>
                  </div>
                  <div className="flex items-center gap-2 text-white/70 font-bold text-sm">
                     <Globe className="w-5 h-5" />
                     <span>English [CC]</span>
                  </div>
               </div>

               <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                  <img src={course.instructorAvatar || "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&q=80"} className="w-12 h-12 md:w-14 md:h-14 rounded-full border-2 border-white/20" alt="Instructor" />
                  <div>
                     <div className="text-white/40 text-[10px] font-black uppercase tracking-widest">Created by</div>
                     <div className="text-base md:text-lg font-black">{course.instructor}</div>
                  </div>
                  <div className="ml-auto flex items-center gap-4">
                     <button className="flex items-center gap-2 text-white/60 hover:text-white transition-colors text-xs font-black uppercase tracking-widest">
                        <Share2 className="w-4 h-4" /> Share
                     </button>
                     <button className="flex items-center gap-2 text-white/60 hover:text-white transition-colors text-xs font-black uppercase tracking-widest">
                        <Heart className="w-4 h-4" /> Wishlist
                     </button>
                  </div>
               </div>
            </div>

            {/* Sticky/Side Purchase Card (Mobile Responsive: Stacks on mobile) */}
            <div className="relative">
               <div className="lg:absolute lg:top-0 lg:w-full bg-white rounded-[2.5rem] p-8 md:p-10 shadow-2xl border border-white/20 text-text">
                  <div className="aspect-video rounded-3xl overflow-hidden mb-8 relative group cursor-pointer shadow-inner">
                     <img src={course.thumbnail} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Preview" />
                     <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/20 transition-all">
                        <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-primary shadow-2xl border border-white/20">
                           <PlayCircle className="w-10 h-10 fill-current ml-1" />
                        </div>
                     </div>
                     <div className="absolute bottom-4 left-0 right-0 text-center text-white text-[10px] font-black uppercase tracking-[0.2em] drop-shadow-md">Preview this course</div>
                  </div>

                  <div className="flex items-baseline gap-4 mb-8">
                     <span className="text-4xl md:text-5xl font-black text-text">${course.price}</span>
                     <span className="text-lg text-text-muted line-through font-bold">${course.originalPrice}</span>
                     <span className="ml-auto text-green-600 font-black text-sm uppercase tracking-widest bg-green-50 px-3 py-1 rounded-md">90% OFF</span>
                  </div>

                  <div className="space-y-4 mb-10">
                     <Button size="lg" className="w-full h-16 text-base md:text-lg shadow-violet-glow uppercase tracking-widest font-black">Add to Cart</Button>
                     <Button variant="outline" size="lg" className="w-full h-16 text-base md:text-lg border-primary/20 text-primary uppercase tracking-widest font-black">Buy Now</Button>
                  </div>

                  <div className="space-y-6">
                     <div className="text-[11px] font-black text-text-muted uppercase tracking-[0.2em] text-center border-b border-border pb-4">This course includes:</div>
                     <div className="grid gap-5">
                        {[
                          { icon: <Video className="w-4.5 h-4.5" />, text: '32 hours on-demand video' },
                          { icon: <FileText className="w-4.5 h-4.5" />, text: '15 coding exercises' },
                          { icon: <Zap className="w-4.5 h-4.5" />, text: 'Full lifetime access' },
                          { icon: <Globe className="w-4.5 h-4.5" />, text: 'Certificate of completion' },
                          { icon: <Award className="w-4.5 h-4.5" />, text: 'Verified Credentials' },
                        ].map((item, i) => (
                          <div key={i} className="flex items-center gap-4 text-sm font-bold text-text-secondary">
                             <div className="text-primary/60 shrink-0">{item.icon}</div>
                             <span className="leading-tight">{item.text}</span>
                          </div>
                        ))}
                     </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Course Content & Curriculum (Responsive) */}
      <section className="container mx-auto px-6 mt-20 md:mt-32">
        <div className="grid lg:grid-cols-3 gap-16 lg:gap-24">
          <div className="lg:col-span-2 space-y-20">
             {/* What you'll learn */}
             <div>
                <h2 className="text-2xl md:text-3xl font-black text-text mb-10 tracking-tight">What you'll learn</h2>
                <div className="grid md:grid-cols-2 gap-x-12 gap-y-6 p-8 md:p-12 bg-background-light rounded-[3rem] border border-primary/5 shadow-inner">
                   {[
                     "Build fullstack AI applications using Next.js 15 and OpenAI API.",
                     "Master advanced state management and performance optimization.",
                     "Deploy enterprise-scale applications to AWS and Vercel.",
                     "Implement secure authentication with Auth.js and Clerk.",
                     "Create high-performance vector databases with Pinecone.",
                     "Modern UI/UX principles with Tailwind CSS and Framer Motion."
                   ].map((text, i) => (
                     <div key={i} className="flex items-start gap-4 group">
                        <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                        <span className="text-sm font-bold text-text-secondary leading-relaxed">{text}</span>
                     </div>
                   ))}
                </div>
             </div>

             {/* Curriculum */}
             <div>
                <div className="flex items-center justify-between mb-10">
                   <h2 className="text-2xl md:text-3xl font-black text-text tracking-tight">Course Content</h2>
                   <div className="text-sm font-black text-text-muted uppercase tracking-widest">
                      12 Sections • 145 Lectures • 32h Total
                   </div>
                </div>
                <div className="space-y-4">
                   {[
                     { title: "Introduction & Setup", lessons: 12, time: "2h 15m" },
                     { title: "React Fundamentals Refresher", lessons: 15, time: "4h 30m" },
                     { title: "Mastering Next.js 15 App Router", lessons: 24, time: "8h 10m" },
                     { title: "AI Integration & API Mastery", lessons: 18, time: "6h 45m" },
                     { title: "Database Architecture for AI", lessons: 20, time: "5h 20m" },
                   ].map((mod, i) => (
                     <div key={i} className="p-6 md:p-8 bg-white border border-border rounded-3xl flex items-center justify-between hover:border-primary/30 transition-all cursor-pointer group shadow-sm">
                        <div className="flex items-center gap-6">
                           <div className="w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-background-light flex items-center justify-center text-text-muted group-hover:bg-primary group-hover:text-white transition-all shadow-sm">
                              <Video className="w-5 h-5" />
                           </div>
                           <div>
                              <div className="text-base md:text-lg font-black text-text group-hover:text-primary transition-colors tracking-tight leading-none mb-2">{mod.title}</div>
                              <div className="text-[10px] text-text-muted font-black uppercase tracking-widest flex items-center gap-3">
                                 <span>{mod.lessons} Lessons</span>
                                 <span className="w-1 h-1 bg-border rounded-full"></span>
                                 <span>{mod.time}</span>
                              </div>
                           </div>
                        </div>
                        <ChevronRight className="w-6 h-6 text-border group-hover:text-primary group-hover:translate-x-1 transition-all" />
                     </div>
                   ))}
                </div>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CourseDetail;
