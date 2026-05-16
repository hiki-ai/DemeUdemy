import { motion } from 'framer-motion';
import { Briefcase, BarChart, Users, Shield, Zap, CheckCircle2 } from 'lucide-react';
import Button from '../components/Button';

const BusinessLanding = () => {
  return (
    <div className="overflow-hidden">
      <section className="relative py-40 flex items-center bg-background-dark text-white">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/10 blur-[150px] rounded-full translate-x-1/3 -translate-y-1/3"></div>
        <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-20 items-center">
           <motion.div 
             initial={{ opacity: 0, x: -30 }}
             animate={{ opacity: 1, x: 0 }}
             className="space-y-12"
           >
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/10">
                 <Briefcase className="w-5 h-5 text-primary-light" />
                 <span className="text-xs font-black text-white/80 uppercase tracking-widest">UAcademy for Business</span>
              </div>
              <h1 className="text-6xl md:text-8xl font-black leading-tight tracking-tight">Upskill Your <span className="bg-clip-text text-transparent bg-premium-gradient">Global</span> Team.</h1>
              <p className="text-xl text-white/60 font-medium leading-relaxed max-w-xl">Join 12,500+ top companies that use our enterprise learning platform to stay competitive and innovative.</p>
              <div className="flex flex-wrap gap-6">
                 <Button size="lg" className="px-12 h-20 text-lg">Request Demo</Button>
                 <Button variant="outline" size="lg" className="px-12 h-20 text-lg border-white/20 text-white hover:bg-white/10">View Solutions</Button>
              </div>
           </motion.div>
           <motion.div 
             initial={{ opacity: 0, scale: 0.9 }}
             animate={{ opacity: 1, scale: 1 }}
             className="relative"
           >
              <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full"></div>
              <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=80" className="rounded-[4rem] shadow-2xl relative z-10 border border-white/10" alt="Business" />
           </motion.div>
        </div>
      </section>

      <section className="py-40 bg-white">
        <div className="container mx-auto px-6 text-center">
           <h2 className="text-4xl font-black text-text mb-24 tracking-tight">Enterprise Features</h2>
           <div className="grid md:grid-cols-3 gap-12">
              {[
                { icon: <BarChart className="w-10 h-10" />, title: 'Advanced Analytics', desc: 'Detailed insights into team progress and performance.' },
                { icon: <Users className="w-10 h-10" />, title: 'User Management', desc: 'Easily manage thousands of users with SSO and API access.' },
                { icon: <Zap className="w-10 h-10" />, title: 'Custom Paths', desc: 'Build tailored learning roadmaps for every department.' },
              ].map((feat, i) => (
                <div key={i} className="p-12 bg-background-light rounded-[3rem] border border-border group hover:border-primary/20 transition-all duration-500">
                   <div className="w-20 h-20 rounded-3xl bg-primary/5 flex items-center justify-center text-primary mx-auto mb-10 group-hover:bg-primary group-hover:text-white transition-all shadow-sm">
                      {feat.icon}
                   </div>
                   <h3 className="text-2xl font-black text-text mb-6 tracking-tight">{feat.title}</h3>
                   <p className="text-text-secondary font-medium leading-relaxed">{feat.desc}</p>
                </div>
              ))}
           </div>
        </div>
      </section>
    </div>
  );
};

export default BusinessLanding;
