import { motion } from 'framer-motion';
import { ChevronRight, Layers, Brain, Globe, Database, Cloud, Shield, Palette, TrendingUp, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';
import { categories } from '../data/dummy';

const iconMap = {
  Brain: <Brain className="w-4 h-4" />,
  Globe: <Globe className="w-4 h-4" />,
  Database: <Database className="w-4 h-4" />,
  Cloud: <Cloud className="w-4 h-4" />,
  Shield: <Shield className="w-4 h-4" />,
  Palette: <Palette className="w-4 h-4" />,
  TrendingUp: <TrendingUp className="w-4 h-4" />,
  Briefcase: <Briefcase className="w-4 h-4" />,
};

const CategoriesMenu = () => {
  return (
    <div className="relative group">
      <button className="flex items-center gap-2 py-4 text-sm font-medium text-text hover:text-primary transition-colors">
        Categories
      </button>

      {/* Mega Menu Dropdown */}
      <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-[100]">
        <motion.div 
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="w-[280px] bg-white border border-border shadow-premium py-4"
        >
          {categories.map((cat) => (
            <Link 
              key={cat.id} 
              to={`/category/${cat.id}`}
              className="flex items-center justify-between px-6 py-3 hover:bg-background-light text-sm font-medium text-text transition-all group/item"
            >
              <div className="flex items-center gap-4">
                <span className="text-text-muted group-hover/item:text-primary transition-colors">
                  {iconMap[cat.icon] || <Layers className="w-4 h-4" />}
                </span>
                {cat.name}
              </div>
              <ChevronRight className="w-4 h-4 text-border group-hover/item:text-primary group-hover/item:translate-x-1 transition-all" />
            </Link>
          ))}
          
          <div className="mt-4 pt-4 border-t border-border px-6">
            <Link to="/categories" className="text-xs font-black text-primary uppercase tracking-widest hover:underline">
              Browse all categories
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CategoriesMenu;
