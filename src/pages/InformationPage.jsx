import { motion } from 'framer-motion';
import { Info, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const InformationPage = ({ title }) => {
  return (
    <div className="min-h-[70vh] py-32 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <Link to="/" className="inline-flex items-center gap-2 text-primary hover:text-primary-hover mb-12 transition-colors font-black text-xs uppercase tracking-widest">
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>

          <h1 className="text-5xl md:text-7xl font-black text-dark mb-12 leading-tight">{title}</h1>
          
          <div className="glass p-10 md:p-16 rounded-[3rem] border border-primary/10 space-y-8 text-slate-500 leading-relaxed text-lg font-medium shadow-sm">
            <p>This is the official <span className="text-dark font-black">{title}</span> portal for the platform. We are currently evolving our documentation to reflect our transition to a next-generation AI-powered learning ecosystem.</p>
            
            <p>Our commitment to excellence remains unwavering. Whether you are exploring career opportunities, reading about our latest technological breakthroughs, or reviewing our legal framework, we ensure that our community receives the most precise and transparent information available.</p>
            
            <div className="p-10 rounded-[2rem] bg-primary/5 border border-primary/5 mt-16 group hover:border-primary/30 transition-all shadow-inner">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6 shadow-sm group-hover:bg-primary group-hover:text-white transition-all shadow-violet-glow">
                 <Info className="w-8 h-8" />
              </div>
              <h2 className="text-2xl font-black text-dark mb-4">Under Active Development</h2>
              <p className="text-base text-slate-500">Our team is meticulously crafting the final details of this section to align with our new premium SaaS aesthetic and functional standards. We appreciate your patience during this exciting transformation.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default InformationPage;
