import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Play, Clock, ChevronRight, Search, Filter, BookOpen } from 'lucide-react';
import { courses } from '../data/dummy';
import Button from '../components/Button';

const MyLearning = () => {
  return (
    <div className="space-y-12">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
        <div>
          <h2 className="text-3xl font-black text-text tracking-tight mb-2">My Learning</h2>
          <p className="text-sm text-text-secondary font-medium">Continue where you left off and master your skills.</p>
        </div>
        <div className="flex items-center gap-4">
           <div className="relative group">
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted group-focus-within:text-primary transition-colors" />
              <input 
                type="text" 
                placeholder="Search my courses..." 
                className="w-64 bg-white border border-border rounded-full py-3 pl-12 pr-6 text-sm focus:outline-none focus:border-primary/40 transition-all font-bold"
              />
           </div>
           <Button variant="outline" className="h-12 px-6"><Filter className="w-4 h-4" /> Filter</Button>
        </div>
      </div>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
        {courses.map((course, i) => (
          <motion.div 
            key={course.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            className="bg-white rounded-[3rem] border border-border overflow-hidden group hover:border-primary/20 hover:shadow-glass transition-all duration-500"
          >
            <div className="aspect-video relative overflow-hidden">
               <img src={course.thumbnail} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Thumbnail" />
               <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-primary shadow-2xl">
                     <Play className="w-8 h-8 fill-current ml-1" />
                  </div>
               </div>
               <div className="absolute bottom-4 left-6 right-6">
                  <div className="h-2 w-full bg-white/20 backdrop-blur-md rounded-full overflow-hidden shadow-inner">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: `${course.progress || 0}%` }}
                      transition={{ duration: 1.5, delay: 0.5 }}
                      className="h-full bg-primary shadow-violet-glow"
                    ></motion.div>
                  </div>
               </div>
            </div>

            <div className="p-8">
               <div className="flex justify-between items-center mb-4">
                  <span className="text-[10px] font-black text-primary uppercase tracking-widest bg-primary/5 px-3 py-1 rounded-full border border-primary/10">{course.progress || 0}% Complete</span>
                  <div className="flex items-center gap-2 text-text-muted text-[10px] font-black uppercase tracking-widest">
                     <Clock className="w-3.5 h-3.5" /> 12h Left
                  </div>
               </div>
               <h3 className="text-xl font-black text-text mb-6 line-clamp-2 tracking-tight leading-snug group-hover:text-primary transition-colors">{course.title}</h3>
               <Link to={`/learn/${course.id}`}>
                 <Button className="w-full py-4 text-xs font-black uppercase tracking-widest h-14">Continue Watching</Button>
               </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default MyLearning;
