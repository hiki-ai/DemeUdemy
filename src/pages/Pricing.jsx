import { motion } from 'framer-motion';
import { Check, Zap, Shield, Award, ArrowRight } from 'lucide-react';
import Button from '../components/Button';

const Pricing = () => {
  const plans = [
    {
      name: 'Personal Plan',
      price: '$14.99',
      period: '/month',
      description: 'Perfect for individual learners looking to upskill.',
      features: ['Access to 11,000+ top courses', 'Certification for every course', 'AI Learning Assistant', 'Ad-free experience'],
      button: 'Start Free Trial',
      highlight: false
    },
    {
      name: 'Team Plan',
      price: '$360',
      period: '/year',
      description: 'Ideal for small teams and corporate departments.',
      features: ['Everything in Personal', 'Analytics & reports', 'Admin control center', 'Custom learning paths', 'Up to 20 users'],
      button: 'Get for Team',
      highlight: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'Scalable learning for large global organizations.',
      features: ['Everything in Team', 'SSO integration', 'Dedicated success manager', 'API access', 'Custom branding'],
      button: 'Contact Sales',
      highlight: false
    }
  ];

  return (
    <div className="py-32">
      <div className="container mx-auto px-6 text-center mb-32">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-6xl font-black text-text mb-8 tracking-tighter"
        >
          Simple, <span className="text-primary">Transparent</span> Pricing.
        </motion.h1>
        <p className="text-xl text-text-secondary max-w-2xl mx-auto font-medium leading-relaxed">Choose the plan that fits your learning journey. All plans include 7-day free trial.</p>
      </div>

      <div className="container mx-auto px-6 grid lg:grid-cols-3 gap-10">
        {plans.map((plan, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className={`p-12 rounded-[4rem] border ${plan.highlight ? 'border-primary bg-primary/5 shadow-violet-glow scale-105' : 'border-border bg-white'} relative overflow-hidden flex flex-col`}
          >
            {plan.highlight && (
              <div className="absolute top-10 right-10 bg-primary text-white text-[10px] font-black px-4 py-2 rounded-full tracking-widest uppercase">Popular</div>
            )}
            
            <h3 className="text-2xl font-black text-text mb-4 tracking-tight">{plan.name}</h3>
            <div className="flex items-baseline gap-2 mb-8">
               <span className="text-5xl font-black text-text">{plan.price}</span>
               <span className="text-lg text-text-muted font-bold">{plan.period}</span>
            </div>
            <p className="text-text-secondary font-medium mb-12 leading-relaxed">{plan.description}</p>
            
            <div className="space-y-6 mb-16 flex-1">
               {plan.features.map((feature, j) => (
                 <div key={j} className="flex items-center gap-4 text-sm font-bold text-text-secondary">
                    <div className="w-6 h-6 rounded-lg bg-green-500/10 text-green-600 flex items-center justify-center shrink-0">
                       <Check className="w-4 h-4" />
                    </div>
                    <span>{feature}</span>
                 </div>
               ))}
            </div>

            <Button variant={plan.highlight ? 'primary' : 'outline'} size="lg" className="w-full h-16 text-lg tracking-widest">
              {plan.button}
            </Button>
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-6 mt-40">
         <div className="grid md:grid-cols-3 gap-16 text-center opacity-70">
            <div className="space-y-6">
               <Shield className="w-12 h-12 text-primary mx-auto" />
               <h4 className="text-lg font-black text-text uppercase tracking-widest">Secure Payments</h4>
               <p className="text-sm text-text-muted font-medium">128-bit encryption for every transaction.</p>
            </div>
            <div className="space-y-6">
               <Zap className="w-12 h-12 text-primary mx-auto" />
               <h4 className="text-lg font-black text-text uppercase tracking-widest">Instant Access</h4>
               <p className="text-sm text-text-muted font-medium">Start learning within seconds of purchase.</p>
            </div>
            <div className="space-y-6">
               <Award className="w-12 h-12 text-primary mx-auto" />
               <h4 className="text-lg font-black text-text uppercase tracking-widest">Verified Certs</h4>
               <p className="text-sm text-text-muted font-medium">Certificates valid and verifiable worldwide.</p>
            </div>
         </div>
      </div>
    </div>
  );
};

export default Pricing;
