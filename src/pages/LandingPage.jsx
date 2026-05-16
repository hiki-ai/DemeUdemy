import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Search, Play, Award, Shield, Users, ArrowRight, Zap, Brain, Globe, Database, Cloud, Palette, TrendingUp, ChevronLeft, ChevronRight, Star } from 'lucide-react';
import CourseCard from '../components/CourseCard';
import Button from '../components/Button';
import { courses, testimonials, categories, companies, heroSlides } from '../data/dummy';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const LandingPage = () => {
  return (
    <div className="overflow-hidden bg-white">
      {/* 1. Near-Identical Udemy Hero Slider */}
      <section className="relative">
        <Swiper
          modules={[Navigation, Autoplay, EffectFade]}
          effect="fade"
          loop={true}
          autoplay={{ delay: 6000, disableOnInteraction: false }}
          navigation={{
            prevEl: '.hero-prev',
            nextEl: '.hero-next',
          }}
          className="h-[280px] md:h-[500px] lg:h-[600px]"
        >
          {heroSlides.map((slide, i) => (
            <SwiperSlide key={i}>
              <div className="relative h-full w-full overflow-hidden">
                <img src={slide.image} className="w-full h-full object-cover" alt={slide.title} />
                <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
                <div className="container mx-auto px-6 lg:px-12 h-full flex items-center relative z-10">
                  <motion.div 
                    initial={{ x: -30, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="bg-white p-6 md:p-12 rounded-lg shadow-premium max-w-full sm:max-w-md border border-border"
                  >
                    <h1 className="text-2xl md:text-5xl font-black text-text mb-4 md:mb-6 tracking-tight leading-tight">{slide.title}</h1>
                    <p className="text-sm md:text-lg text-text-secondary font-medium mb-6 md:mb-8 leading-relaxed">{slide.subtitle}</p>
                      <Link to={slide.link}>
                        <Button size="lg" className="w-full sm:w-auto h-12 md:h-14 px-6 text-sm">{slide.cta}</Button>
                      </Link>
                  </motion.div>
                </div>
              </div>
            </SwiperSlide>
          ))}
          
          {/* Custom Arrows */}
          <button className="hero-prev absolute left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-black/80 text-white flex items-center justify-center hover:bg-black transition-all shadow-xl opacity-0 group-hover:opacity-100 hidden lg:flex">
             <ChevronLeft className="w-6 h-6" />
          </button>
          <button className="hero-next absolute right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-black/80 text-white flex items-center justify-center hover:bg-black transition-all shadow-xl opacity-0 group-hover:opacity-100 hidden lg:flex">
             <ChevronRight className="w-6 h-6" />
          </button>
        </Swiper>
      </section>

      {/* 2. Professional Social Proof Section */}
        <section className="py-12 bg-background-light/30 border-b border-border">
        <div className="container mx-auto px-6 text-center">
          <p className="text-[15px] text-text-muted font-medium mb-10 opacity-70">Trusted by over 15,000+ companies and millions of learners worldwide</p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 lg:gap-32 opacity-30 grayscale hover:grayscale-0 transition-all duration-700">
             {companies.map(brand => (
               <span key={brand.name} className="text-2xl md:text-3xl font-black text-text tracking-tighter cursor-default">{brand.logo}</span>
             ))}
          </div>
        </div>
      </section>

      {/* 3. A broad selection of courses */}
        <section className="py-16">
         <div className="container mx-auto px-6">
            <h2 className="text-3xl font-black text-text mb-4 tracking-tight">A broad selection of courses</h2>
            <p className="text-xl text-text-secondary mb-12 max-w-3xl">Choose from over 210,000 online video courses with new additions published every month</p>
            
            {/* Category Tabs (Simulated) */}
            <div className="flex gap-3 mb-6 pb-4 overflow-x-auto no-scrollbar -mx-3 px-3">
              {['Web Development', 'AI & Machine Learning', 'Data Science', 'Design', 'Marketing', 'Business', 'Personal Development'].map((tab, i) => (
                <button key={tab} className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-black tracking-tight whitespace-nowrap transition-all ${i === 0 ? 'bg-primary text-white' : 'bg-white border border-border text-text-muted hover:bg-primary/5 hover:text-text'}`}>
                  {tab}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
               {courses.slice(0, 4).map(course => (
                 <CourseCard key={course.id} course={course} />
               ))}
            </div>
         </div>
      </section>

      {/* 4. AI Career Banner (Dark Premium Section) */}
        <section className="py-16">
         <div className="container mx-auto px-6">
            <div className="bg-background-dark rounded-[3rem] p-12 md:p-24 relative overflow-hidden group shadow-2xl">
               <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 blur-[150px] rounded-full translate-x-1/2 -translate-y-1/2"></div>
               <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary/10 blur-[120px] rounded-full -translate-x-1/2 translate-y-1/2"></div>
               
               <div className="relative z-10 grid lg:grid-cols-2 gap-20 items-center">
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="space-y-10"
                  >
                     <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 border border-white/10">
                        <Zap className="w-5 h-5 text-primary-light fill-current" />
                        <span className="text-xs font-black text-white/80 uppercase tracking-widest">Next-Gen AI Platform</span>
                     </div>
                     <h2 className="text-4xl md:text-6xl font-black text-white leading-tight tracking-tight">Accelerate your <span className="bg-clip-text text-transparent bg-premium-gradient">career</span> with AI.</h2>
                     <p className="text-xl text-white/60 font-medium leading-relaxed">Our AI-powered platform identifies your skills gaps and creates a personalized learning roadmap to get you to your goal faster.</p>
                     <div className="flex flex-wrap gap-6 pt-4">
                        <div className="w-full sm:w-auto flex gap-4 flex-col sm:flex-row">
                          <Link to="/signup" className="w-full sm:w-auto">
                            <Button size="lg" className="w-full sm:w-auto h-16 px-12 text-lg shadow-violet-glow">Try AI Tutor Free</Button>
                          </Link>
                          <Link to="/help" className="w-full sm:w-auto">
                            <Button variant="outline" size="lg" className="w-full sm:w-auto h-16 px-12 text-lg border-white/20 text-white hover:bg-white/10">How it works</Button>
                          </Link>
                        </div>
                     </div>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="relative hidden lg:block"
                  >
                     <div className="grid grid-cols-2 gap-6 p-8">
                        {[
                          { icon: <Brain />, title: 'Personalized' },
                          { icon: <Globe />, title: 'Global Certs' },
                          { icon: <Shield />, title: 'Verified' },
                          { icon: <Database />, title: 'Huge Library' }
                        ].map((item, i) => (
                          <div key={i} className="p-8 bg-white/5 border border-white/10 rounded-3xl backdrop-blur-sm flex flex-col items-center gap-4 group hover:border-primary/40 transition-all">
                             <div className="text-primary-light group-hover:scale-110 transition-transform">{item.icon}</div>
                             <span className="text-sm font-black text-white/80 uppercase tracking-widest">{item.title}</span>
                          </div>
                        ))}
                     </div>
                  </motion.div>
               </div>
            </div>
         </div>
      </section>

      {/* 5. Trending Categories Swiper */}
        <section className="py-16 bg-background-light/50">
         <div className="container mx-auto px-6">
            <h2 className="text-3xl font-black text-text mb-16 tracking-tight">Top categories</h2>
            <Swiper
              modules={[Navigation, Autoplay]}
              spaceBetween={20}
              slidesPerView={2}
              navigation
              breakpoints={{
                640: { slidesPerView: 3 },
                1024: { slidesPerView: 5 },
                1280: { slidesPerView: 7 },
              }}
              className="pb-12"
            >
               {categories.map((cat, i) => (
                 <SwiperSlide key={i}>
                   <motion.div
                     whileHover={{ y: -5 }}
                     className="bg-white p-10 border border-border group hover:border-primary/20 hover:shadow-glass transition-all duration-500 cursor-pointer text-center"
                   >
                     <div className="w-16 h-16 rounded-2xl bg-primary/5 flex items-center justify-center text-primary mx-auto mb-6 group-hover:bg-primary group-hover:text-white transition-all">
                        {/* Fallback icons */}
                        <Layers className="w-8 h-8" />
                     </div>
                     <h3 className="text-sm font-black text-text tracking-tight group-hover:text-primary transition-colors">{cat.name}</h3>
                   </motion.div>
                 </SwiperSlide>
               ))}
            </Swiper>
         </div>
      </section>

      {/* 6. Learners are viewing Swiper */}
        <section className="py-16">
         <div className="container mx-auto px-6">
            <h2 className="text-3xl font-black text-text mb-12 tracking-tight">Learners are viewing</h2>
            <Swiper
              modules={[Navigation, Autoplay]}
              spaceBetween={24}
              slidesPerView={1}
              navigation
              breakpoints={{
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
                1280: { slidesPerView: 4 },
              }}
              className="pb-16"
            >
               {courses.map(course => (
                 <SwiperSlide key={course.id}>
                   <CourseCard course={course} />
                 </SwiperSlide>
               ))}
            </Swiper>
         </div>
      </section>

      {/* 7. Testimonials Section */}
        <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
           <h2 className="text-4xl md:text-5xl font-black text-text mb-20 text-center tracking-tight">How learners like you are <br/> achieving their <span className="text-primary">goals</span></h2>
           <div className="grid md:grid-cols-3 gap-10">
              {testimonials.map((t, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-background-light p-10 rounded-3xl border border-border relative group hover:border-primary/20 transition-all"
                >
                   <div className="text-primary-light/10 absolute top-4 right-8"><Users className="w-24 h-24" /></div>
                   <p className="text-[17px] text-text font-medium mb-10 relative z-10 italic leading-relaxed">"{t.text}"</p>
                   <div className="flex items-center gap-4 relative z-10">
                      <img src={t.avatar} className="w-12 h-12 rounded-full border-2 border-primary/20" alt={t.user} />
                      <div>
                         <div className="text-[15px] font-black text-text">{t.user}</div>
                         <div className="text-[12px] text-text-muted font-bold">{t.role}</div>
                      </div>
                   </div>
                </motion.div>
              ))}
           </div>
        </div>
      </section>

      {/* 8. Final CTA (Premium Udemy Business Style) */}
        <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-20">
             <div className="flex-1 space-y-8">
                <h2 className="text-4xl md:text-5xl font-black text-text tracking-tight leading-tight">Become an instructor</h2>
                <p className="text-xl text-text-secondary leading-relaxed">Instructors from around the world teach millions of learners on UAcademy. We provide the tools and platform to teach what you love.</p>
                <Link to="/teach">
                   <Button size="lg" className="h-16 px-12">Start teaching today</Button>
                </Link>
             </div>
             <div className="flex-1">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRgRHI9TQnekJFvER6PG-YJUfwk3aXlwJEAQ&s" className="rounded-[3rem] shadow-premium" alt="Teach" />
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// Fallback component for icons in loops if needed
const Layers = ({ className }) => <Globe className={className} />;

export default LandingPage;
