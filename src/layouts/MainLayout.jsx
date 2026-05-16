import { useState, useEffect, useRef } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { Search, ShoppingCart, Globe, ChevronDown, Menu, X, ChevronRight, UserCircle, LayoutDashboard, Settings, Heart, Bell } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../components/Button';
import CategoriesMenu from '../components/CategoriesMenu';

const MainLayout = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();
  const globeRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setActiveDropdown(null);
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  const portals = [
    { name: 'Student Portal', path: '/dashboard/student', icon: <UserCircle className="w-5 h-5" />, color: 'text-primary' },
    { name: 'Instructor Portal', path: '/dashboard/instructor', icon: <LayoutDashboard className="w-5 h-5" />, color: 'text-secondary' },
    { name: 'Admin Portal', path: '/dashboard/admin', icon: <Settings className="w-5 h-5" />, color: 'text-accent' },
    { name: 'Preview Portal', path: '/preview', icon: <Settings className="w-5 h-5" />, color: 'text-accent' },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans bg-background selection:bg-primary/20 selection:text-primary">
      {/* Premium Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-300 border-b ${isScrolled
          ? 'bg-white/95 backdrop-blur-md border-border py-2 shadow-sm'
          : 'bg-white border-border py-3'
          }`}
      >
        <div className="container mx-auto px-4 lg:px-8 flex items-center justify-between gap-4 md:gap-8">
          {/* Logo */}
          <Link to="/" className="text-2xl font-black shrink-0 flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-lg bg-premium-gradient flex items-center justify-center group-hover:rotate-6 transition-transform shadow-violet-glow">
              <span className="text-white text-lg font-black">U</span>
            </div>
            <span className="text-xl font-black text-text tracking-tighter hidden sm:block">UAcademy</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-4 flex-1">
            <CategoriesMenu />

            {/* Prominent Search Bar */}
            <div className="flex-1 relative group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-[18px] h-[18px] text-text-muted group-focus-within:text-primary transition-colors" />
              <input
                type="text"
                placeholder="Search for anything (React, AI, Design...)"
                className="w-full bg-background-light border border-border rounded-full py-3 pl-12 pr-6 text-[14px] focus:outline-none focus:border-primary/40 focus:bg-white focus:ring-4 focus:ring-primary/5 transition-all text-text font-medium placeholder:text-text-muted/60"
              />
            </div>

            <div className="flex items-center gap-6 shrink-0">
              <Link to="/business" className="text-sm font-medium text-text hover:text-primary transition-colors">Business</Link>
              <Link to="/teach" className="text-sm font-medium text-text hover:text-primary transition-colors">Teach</Link>

              <div className="flex items-center gap-3">
                <button className="p-2 text-text-secondary hover:text-primary transition-all relative">
                  <Heart className="w-[22px] h-[22px]" />
                </button>
                <button className="p-2 text-text-secondary hover:text-primary transition-all relative">
                  <ShoppingCart className="w-[22px] h-[22px]" />
                  <span className="absolute top-1 right-1 w-4.5 h-4.5 bg-primary text-[10px] flex items-center justify-center rounded-full text-white font-black shadow-violet-glow border-2 border-white">0</span>
                </button>
                <button className="p-2 text-text-secondary hover:text-primary transition-all">
                  <Bell className="w-[22px] h-[22px]" />
                </button>
              </div>

              <div className="flex items-center gap-2 border-l border-border pl-4">
                <div className="relative" ref={globeRef}>
                  <button
                    onClick={() => setActiveDropdown(activeDropdown === 'globe' ? null : 'globe')}
                    className={`w-10 h-10 rounded-xl border border-border flex items-center justify-center transition-all ${activeDropdown === 'globe' ? 'bg-primary text-white border-primary shadow-violet-glow' : 'hover:bg-background-light text-text-secondary'
                      }`}
                  >
                    <Globe className="w-[20px] h-[20px]" />
                  </button>

                  <AnimatePresence>
                    {activeDropdown === 'globe' && (
                      <motion.div
                        initial={{ opacity: 0, y: 15, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 15, scale: 0.95 }}
                        className="absolute top-full right-0 mt-4 w-64 bg-white p-2 rounded-2xl shadow-premium border border-border"
                      >
                        {portals.map((portal, i) => (
                          <Link
                            key={i}
                            to={portal.path}
                            className="flex items-center gap-4 p-3 rounded-xl hover:bg-background-light group transition-all"
                          >
                            <div className={`w-9 h-9 rounded-lg bg-background-light flex items-center justify-center ${portal.color} shadow-sm group-hover:scale-110 transition-transform`}>
                              {portal.icon}
                            </div>
                            <span className="text-sm font-bold text-text group-hover:text-primary transition-colors">{portal.name}</span>
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <Link to="/login" className="px-4 py-2 text-sm font-black text-text hover:text-primary transition-all">Log in</Link>
                <Link to="/signup">
                  <Button className="h-10 px-6 text-sm">Sign up</Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex lg:hidden items-center gap-4">
            <button className="p-2 text-text-secondary"><Search className="w-6 h-6" /></button>
            <button className="p-2 text-text-secondary relative">
              <ShoppingCart className="w-6 h-6" />
              <span className="absolute top-1 right-1 w-4 h-4 bg-primary text-[9px] flex items-center justify-center rounded-full text-white font-black">0</span>
            </button>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 text-text hover:bg-background-light rounded-lg transition-all">
              {isMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {isMenuOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsMenuOpen(false)}
                className="fixed inset-0 bg-text/20 backdrop-blur-sm z-[998]"
              />
              <motion.div
                initial={{ x: '-100%' }}
                animate={{ x: 0 }}
                exit={{ x: '-100%' }}
                transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                className="fixed top-0 left-0 bottom-0 w-[300px] bg-white z-[999] shadow-2xl flex flex-col"
              >
                <div className="p-6 border-b border-border flex items-center justify-between">
                  <Link to="/" className="text-xl font-black flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-premium-gradient flex items-center justify-center text-white">U</div>
                    <span>UAcademy</span>
                  </Link>
                  <button onClick={() => setIsMenuOpen(false)} className="p-2 text-text-muted hover:text-primary transition-all"><X className="w-6 h-6" /></button>
                </div>

                <div className="flex-1 overflow-y-auto py-6">
                  <div className="px-6 mb-8">
                    <div className="text-[11px] font-black text-text-muted uppercase tracking-[0.2em] mb-4">Portals</div>
                    <div className="grid gap-2">
                      {portals.map((portal, i) => (
                        <Link key={i} to={portal.path} className="flex items-center gap-4 p-3 rounded-xl bg-background-light text-sm font-bold text-text">
                          <div className={portal.color}>{portal.icon}</div>
                          {portal.name}
                        </Link>
                      ))}
                    </div>
                  </div>

                  <div className="px-6 space-y-6">
                    <div className="text-[11px] font-black text-text-muted uppercase tracking-[0.2em]">Quick Links</div>
                    <nav className="flex flex-col gap-4">
                      <Link to="/business" className="text-base font-bold text-text">Udemy Business</Link>
                      <Link to="/teach" className="text-base font-bold text-text">Teach on Platform</Link>
                      <Link to="/pricing" className="text-base font-bold text-text">Pricing Plans</Link>
                    </nav>
                  </div>
                </div>

                <div className="p-6 border-t border-border space-y-4">
                  <Link to="/login" className="block"><Button variant="outline" className="w-full h-14">Log in</Button></Link>
                  <Link to="/signup" className="block"><Button className="w-full h-14">Sign up</Button></Link>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </nav>

      <main className="flex-1 pt-[72px] lg:pt-[80px]">
        <Outlet />
      </main>

      {/* Premium Footer */}
      <footer className="bg-background-dark pt-20 pb-10 text-white relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 mb-16 border-b border-white/10 pb-16">
            <div className="max-w-md">
              <h3 className="text-2xl font-black mb-4 tracking-tight">Top companies choose UAcademy Business to build in-demand career skills.</h3>
              <p className="text-white/60 font-medium">Join 12,500+ top companies that use our platform to stay competitive.</p>
            </div>
            <div className="flex flex-wrap gap-12 opacity-50 grayscale brightness-200">
              {['GOOGLE', 'AMAZON', 'CISCO', 'SAMSUNG', 'VOLKSWAGEN'].map(b => (
                <span key={b} className="text-xl font-black tracking-tighter">{b}</span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-20">
            <div className="col-span-2 lg:col-span-1">
              <Link to="/" className="text-2xl font-black flex items-center gap-3 mb-8">
                <div className="w-9 h-9 rounded-lg bg-premium-gradient flex items-center justify-center">
                  <span className="text-white text-base">U</span>
                </div>
                <span className="text-white tracking-tight">UAcademy</span>
              </Link>
              <button className="flex items-center gap-3 px-6 py-3 rounded-lg border border-white/20 bg-white/5 hover:bg-white/10 transition-all text-white text-sm font-black shadow-sm group">
                <Globe className="w-4 h-4 text-primary group-hover:rotate-12 transition-transform" /> English
              </button>
            </div>

            {[
              { title: 'Platform', links: [{ n: 'UAcademy Business', p: '/business' }, { n: 'Teach on UAcademy', p: '/teach' }, { n: 'Pricing', p: '/pricing' }, { n: 'About us', p: '/about' }, { n: 'Contact us', p: '/contact' }] },
              { title: 'Resources', links: [{ n: 'Careers', p: '/careers' }, { n: 'Blog', p: '/blog' }, { n: 'Help and Support', p: '/help' }, { n: 'Affiliate', p: '/affiliate' }, { n: 'Investors', p: '/investors' }] },
              { title: 'Legal', links: [{ n: 'Terms', p: '/terms' }, { n: 'Privacy policy', p: '/privacy' }, { n: 'Cookie settings', p: '/cookies' }, { n: 'Sitemap', p: '/sitemap' }] },
            ].map((group, i) => (
              <div key={i} className="space-y-6">
                <h4 className="text-xs font-black uppercase tracking-[0.2em] opacity-40">{group.title}</h4>
                <nav className="flex flex-col gap-3">
                  {group.links.map(l => (
                    <Link key={l.n} to={l.p} className="text-[14px] text-white/70 hover:text-white transition-colors">{l.n}</Link>
                  ))}
                </nav>
              </div>
            ))}
          </div>

          <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-[13px] text-white/40 font-bold">
              © 2026 UAcademy, Inc. All rights reserved.
            </div>
            <div className="flex items-center gap-8 text-[13px] text-white/60">
              <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MainLayout;
