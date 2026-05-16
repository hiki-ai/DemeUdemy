import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Mail, Lock, User, ArrowRight, CheckCircle2 } from 'lucide-react';
import Button from '../components/Button';

const Signup = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-6 relative overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute top-0 left-0 w-[700px] h-[700px] bg-secondary/5 blur-[150px] rounded-full -translate-y-1/2 -translate-x-1/2"></div>
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-primary/5 blur-[120px] rounded-full translate-y-1/2 translate-x-1/2"></div>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-xl bg-white/70 backdrop-blur-2xl p-12 md:p-16 rounded-[4rem] border border-white/20 shadow-glass relative z-10"
      >
        <div className="text-center mb-16">
          <Link to="/" className="inline-flex items-center gap-3 mb-10 group">
            <div className="w-12 h-12 rounded-2xl bg-premium-gradient flex items-center justify-center shadow-violet-glow group-hover:rotate-6 transition-transform">
              <span className="text-white text-xl font-black">U</span>
            </div>
            <span className="text-2xl font-black text-text tracking-tight">UAcademy</span>
          </Link>
          <h1 className="text-4xl font-black text-text mb-4 tracking-tight leading-none">Join the Future</h1>
          <p className="text-text-secondary font-medium">Start your 7-day free trial and unlock everything.</p>
        </div>

        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          <div className="space-y-3">
            <label className="text-xs font-black text-text-muted uppercase tracking-widest ml-4">Full Name</label>
            <div className="relative group">
              <User className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-text-muted group-focus-within:text-primary transition-colors" />
              <input 
                type="text" 
                placeholder="John Doe"
                className="w-full bg-background-light border border-border rounded-[2rem] py-5 pl-16 pr-8 text-sm focus:outline-none focus:border-primary/40 focus:bg-white focus:ring-4 focus:ring-primary/5 transition-all text-text font-bold"
              />
            </div>
          </div>

          <div className="space-y-3">
            <label className="text-xs font-black text-text-muted uppercase tracking-widest ml-4">Email Address</label>
            <div className="relative group">
              <Mail className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-text-muted group-focus-within:text-primary transition-colors" />
              <input 
                type="email" 
                placeholder="name@example.com"
                className="w-full bg-background-light border border-border rounded-[2rem] py-5 pl-16 pr-8 text-sm focus:outline-none focus:border-primary/40 focus:bg-white focus:ring-4 focus:ring-primary/5 transition-all text-text font-bold"
              />
            </div>
          </div>

          <div className="space-y-3">
            <label className="text-xs font-black text-text-muted uppercase tracking-widest ml-4">Password</label>
            <div className="relative group">
              <Lock className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-text-muted group-focus-within:text-primary transition-colors" />
              <input 
                type="password" 
                placeholder="••••••••"
                className="w-full bg-background-light border border-border rounded-[2rem] py-5 pl-16 pr-8 text-sm focus:outline-none focus:border-primary/40 focus:bg-white focus:ring-4 focus:ring-primary/5 transition-all text-text font-bold"
              />
            </div>
          </div>

          <div className="flex items-center gap-3 px-4 py-2 opacity-70">
             <CheckCircle2 className="w-5 h-5 text-green-500" />
             <span className="text-xs font-bold text-text-secondary">I agree to the Terms and Privacy Policy</span>
          </div>

          <Button size="lg" className="w-full py-6 rounded-[2rem] text-lg uppercase tracking-widest shadow-violet-glow h-20">
            Create Account <ArrowRight className="w-5 h-5" />
          </Button>
        </form>

        <div className="mt-12 text-center text-sm font-bold text-text-muted">
          Already have an account? <Link to="/login" className="text-primary hover:underline">Sign In</Link>
        </div>
      </motion.div>
    </div>
  );
};

export default Signup;
