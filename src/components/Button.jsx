import { motion } from 'framer-motion';

const Button = ({ children, variant = 'primary', size = 'md', className = '', ...props }) => {
  const variants = {
    primary: 'bg-premium-gradient text-white shadow-violet-glow hover:shadow-violet-glow/40',
    secondary: 'bg-primary/5 text-primary hover:bg-primary/10 border border-primary/10',
    outline: 'bg-transparent border border-border text-text hover:border-primary/30 hover:bg-background-light',
    ghost: 'bg-transparent text-text-secondary hover:text-primary hover:bg-primary/5',
    accent: 'bg-secondary text-white hover:bg-secondary/hover shadow-lg shadow-secondary/20',
  };

  const sizes = {
    sm: 'px-4 py-2 text-xs',
    md: 'px-6 py-3 text-sm',
    lg: 'px-10 py-4 text-base',
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`rounded-2xl font-bold transition-all duration-300 flex items-center justify-center gap-2 whitespace-nowrap ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;
