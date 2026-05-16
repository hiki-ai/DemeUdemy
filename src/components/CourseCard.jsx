import { motion } from 'framer-motion';
import { Star, Heart, Play } from 'lucide-react';
import { Link } from 'react-router-dom';

const CourseCard = ({ course }) => {
  return (
    <Link to={`/course/${course.id}`} className="block h-full">
      <motion.div 
        whileHover={{ y: -5 }}
        className="flex flex-col h-full group"
      >
        {/* Image Container */}
        <div className="relative aspect-video rounded-xl overflow-hidden border border-border mb-3">
          <img 
            src={course.thumbnail} 
            alt={course.title} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
          />
          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
             <div className="w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-primary shadow-xl">
                <Play className="w-5 h-5 fill-current ml-1" />
             </div>
          </div>
          
          {/* Wishlist Button */}
          <button className="absolute top-3 right-3 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-text-muted hover:text-red-500 transition-all opacity-0 group-hover:opacity-100 shadow-sm border border-border">
            <Heart className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col">
                <h3 className="text-sm md:text-lg font-bold text-text leading-tight mb-1 line-clamp-2 group-hover:text-primary transition-colors">
            {course.title}
          </h3>
          <div className="text-[12px] text-text-secondary mb-1">
            {course.instructor}
          </div>
          
          <div className="flex items-center gap-1.5 mb-1">
            <span className="text-[14px] font-black text-text">{course.rating}</span>
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  className={`w-3.5 h-3.5 ${i < Math.floor(course.rating) ? 'text-yellow-500 fill-current' : 'text-gray-300'}`} 
                />
              ))}
            </div>
            <span className="text-[12px] text-text-muted font-medium">({course.reviews.toLocaleString()})</span>
          </div>

                <div className="flex items-center gap-2 mb-3">
                  <span className="text-lg md:text-2xl font-black text-text">${course.price}</span>
                  <span className="text-[12px] text-text-muted line-through font-medium">${course.originalPrice}</span>
                </div>

          <div className="flex flex-wrap gap-2 mt-auto">
            {course.bestseller && (
                    <span className="px-3 py-1 bg-[#eceb98] text-[#3d3c0a] text-[10px] font-black uppercase tracking-wider rounded-sm">
                Bestseller
              </span>
            )}
                  <span className="px-3 py-1 bg-primary/5 text-primary text-[10px] font-black uppercase tracking-wider rounded-sm border border-primary/10">
              {course.level}
            </span>
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

export default CourseCard;
