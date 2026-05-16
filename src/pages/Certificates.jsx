import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, Download, ExternalLink, ShieldCheck, Search, X, Eye } from 'lucide-react';
import Button from '../components/Button';

const Certificates = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  const certs = [
    { id: 1, title: 'Advanced React & Next.js AI Masterclass', date: 'Dec 12, 2025', idNum: 'UC-8291-BA22', color: 'text-primary', bg: 'bg-primary/5' },
    { id: 2, title: 'Enterprise Cloud Architecture', date: 'Nov 05, 2025', idNum: 'UC-1205-CX99', color: 'text-secondary', bg: 'bg-secondary/5' },
    { id: 3, title: 'Machine Learning for Finance', date: 'Oct 20, 2025', idNum: 'UC-4491-ZD12', color: 'text-accent', bg: 'bg-accent/5' },
  ];

  return (
    <div className="space-y-12">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
        <div>
          <h2 className="text-3xl font-black text-text tracking-tight mb-2">My Certificates</h2>
          <p className="text-sm text-text-secondary font-medium">Industry-recognized proofs of your expertise.</p>
        </div>
        <div className="relative group">
           <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted group-focus-within:text-primary transition-colors" />
           <input 
             type="text" 
             placeholder="Search certificates..." 
             className="w-72 bg-white border border-border rounded-full py-3.5 pl-12 pr-6 text-sm focus:outline-none focus:border-primary/40 transition-all font-bold"
           />
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {certs.map((cert, i) => (
          <motion.div 
            key={cert.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-white p-10 rounded-[3.5rem] border border-border relative overflow-hidden group hover:border-primary/20 hover:shadow-glass transition-all duration-500 flex flex-col"
          >
            <div className={`absolute top-0 right-0 w-32 h-32 ${cert.bg} blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700`}></div>
            <div className={`w-16 h-16 rounded-3xl ${cert.bg} ${cert.color} flex items-center justify-center mb-10 shadow-sm group-hover:scale-110 transition-transform`}>
               <Award className="w-8 h-8" />
            </div>
            
            <h3 className="text-xl font-black text-text mb-4 tracking-tight leading-snug group-hover:text-primary transition-colors flex-1">{cert.title}</h3>
            
            <div className="space-y-2 mb-10">
               <div className="flex items-center gap-2 text-xs font-black text-text-muted uppercase tracking-widest">
                  <ShieldCheck className="w-4 h-4 text-green-500" /> Verified
               </div>
               <div className="text-[10px] font-black text-text-muted uppercase tracking-[0.2em]">Issued: {cert.date}</div>
            </div>

            <div className="flex gap-4">
               <Button onClick={() => setSelectedCert(cert)} className="flex-1 h-14 bg-background-light text-primary hover:bg-primary hover:text-white border border-primary/10">
                  <Eye className="w-4.5 h-4.5" /> View
               </Button>
               <button className="w-14 h-14 rounded-2xl bg-primary/5 text-primary flex items-center justify-center hover:bg-primary hover:text-white transition-all border border-primary/10">
                  <Download className="w-5 h-5" />
               </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Certificate Modal */}
      <AnimatePresence>
        {selectedCert && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCert(null)}
              className="absolute inset-0 bg-text/40 backdrop-blur-sm"
            ></motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="w-full max-w-4xl bg-white rounded-[4rem] p-12 md:p-20 relative z-[110] shadow-2xl border border-white/20 overflow-hidden"
            >
               <button onClick={() => setSelectedCert(null)} className="absolute top-10 right-10 p-4 hover:bg-background-light rounded-full transition-all">
                  <X className="w-6 h-6" />
               </button>
               
               <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/5 blur-[120px] rounded-full"></div>
               
               <div className="relative z-10 text-center space-y-12">
                  <div className="flex justify-center">
                     <div className="w-24 h-24 rounded-[2.5rem] bg-premium-gradient flex items-center justify-center text-white shadow-violet-glow scale-125 mb-10">
                        <Award className="w-12 h-12" />
                     </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h2 className="text-sm font-black text-primary uppercase tracking-[0.4em]">Certificate of Completion</h2>
                    <h1 className="text-4xl md:text-6xl font-black text-text tracking-tight leading-tight">{selectedCert.title}</h1>
                  </div>

                  <div className="p-10 rounded-[3rem] bg-background-light inline-block border border-border">
                    <div className="text-xs font-black text-text-muted uppercase tracking-widest mb-2">Presented to</div>
                    <div className="text-3xl font-black text-text bg-clip-text text-transparent bg-premium-gradient">Student User</div>
                  </div>

                  <div className="flex flex-col md:flex-row items-center justify-center gap-16 pt-10">
                     <div className="text-center">
                        <div className="text-[10px] font-black text-text-muted uppercase tracking-widest mb-2">Issue Date</div>
                        <div className="text-base font-black text-text">{selectedCert.date}</div>
                     </div>
                     <div className="text-center">
                        <div className="text-[10px] font-black text-text-muted uppercase tracking-widest mb-2">Certificate ID</div>
                        <div className="text-base font-black text-text">{selectedCert.idNum}</div>
                     </div>
                  </div>

                  <div className="flex justify-center gap-6 pt-10">
                     <Button className="px-12 h-16 text-sm uppercase tracking-widest"><Download className="w-5 h-5" /> Download PDF</Button>
                     <Button variant="outline" className="px-12 h-16 text-sm uppercase tracking-widest"><ExternalLink className="w-5 h-5" /> Share Credential</Button>
                  </div>
               </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Certificates;
