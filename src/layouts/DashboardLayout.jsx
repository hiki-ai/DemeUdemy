import { useState, useEffect } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, BookOpen, Video, Settings, FileText, LogOut, Bell, Search, User, Menu, X, ChevronRight, Zap, Play } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const DashboardLayout = () => {
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Auto-close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navItems = [
    { name: 'Dashboard', path: '/dashboard/student', icon: <LayoutDashboard className="w-5 h-5" /> },
    { name: 'My Learning', path: '/dashboard/MyLearning', icon: <BookOpen className="w-5 h-5" /> },
    { name: 'Instructor Studio', path: '/dashboard/instructor', icon: <Video className="w-5 h-5" /> },
    { name: 'Admin Panel', path: '/dashboard/admin', icon: <Settings className="w-5 h-5" /> },
    { name: 'Certificates', path: '/dashboard/certificates', icon: <FileText className="w-5 h-5" /> },
  ];

  return (
    <div className="min-h-screen bg-background flex text-text font-sans overflow-hidden h-screen">
      {/* Desktop Sidebar */}
      <aside
        className={`${isSidebarOpen ? 'w-80' : 'w-24'
          } bg-white border-r border-border m-4 rounded-[3rem] hidden md:flex flex-col transition-all duration-500 relative z-[100] shadow-sm`}
      >
        <div className="p-10 flex items-center justify-between">
          {isSidebarOpen && (
            <Link to="/" className="text-xl font-black flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-2xl bg-premium-gradient flex items-center justify-center shadow-violet-glow group-hover:rotate-6 transition-transform">
                <span className="text-white text-sm">U</span>
              </div>
              <span className="text-text group-hover:text-primary transition-colors tracking-tight">UAcademy</span>
            </Link>
          )}
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="p-3 rounded-2xl hover:bg-background-light transition-colors text-text-muted hover:text-primary"
          >
            {isSidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        <nav className="flex-1 px-6 space-y-2 mt-6 overflow-y-auto no-scrollbar">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.name}
                to={item.path}
                className={`flex items-center gap-4 px-5 py-4 rounded-[1.5rem] transition-all relative group ${isActive
                    ? 'text-primary'
                    : 'text-text-secondary hover:bg-background-light hover:text-text'
                  }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-primary/5 rounded-[1.5rem] border border-primary/10"
                  />
                )}
                <div className={`relative z-10 transition-transform duration-300 ${isActive ? 'scale-110 text-primary' : 'group-hover:scale-110'}`}>
                  {item.icon}
                </div>
                {isSidebarOpen && (
                  <span className={`text-sm font-bold relative z-10 ${isActive ? 'text-primary' : ''}`}>{item.name}</span>
                )}
              </Link>
            );
          })}
        </nav>

        <div className="p-8 border-t border-border mt-auto">
          <div className={`flex items-center gap-4 p-4 rounded-3xl bg-background-light ${!isSidebarOpen && 'justify-center'}`}>
            <div className="w-12 h-12 rounded-full bg-premium-gradient flex items-center justify-center shrink-0 shadow-violet-glow border-2 border-white overflow-hidden">
              <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&q=80" className="w-full h-full object-cover" alt="User" />
            </div>
            {isSidebarOpen && (
              <div className="flex-1 overflow-hidden">
                <div className="text-sm font-black text-text truncate">Student User</div>
                <div className="text-[10px] text-primary font-black uppercase tracking-widest">Pro Learner</div>
              </div>
            )}
          </div>
          {isSidebarOpen && (
            <button className="w-full mt-6 flex items-center gap-4 px-6 py-4 rounded-2xl text-text-muted hover:text-red-500 transition-all hover:bg-red-50 group font-bold text-sm">
              <LogOut className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              <span>Log out</span>
            </button>
          )}
        </div>
      </aside>

      {/* Mobile Sidebar Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-text/40 backdrop-blur-sm z-[200] md:hidden"
            />
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 left-0 bottom-0 w-[280px] bg-white z-[201] md:hidden flex flex-col p-6"
            >
              <div className="flex items-center justify-between mb-12">
                <Link to="/" className="text-xl font-black flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-premium-gradient flex items-center justify-center text-white">U</div>
                  <span>UAcademy</span>
                </Link>
                <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 bg-background-light rounded-lg"><X className="w-5 h-5" /></button>
              </div>

              <nav className="flex-1 space-y-2">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`flex items-center gap-4 px-5 py-4 rounded-2xl transition-all ${location.pathname === item.path ? 'bg-primary/5 text-primary' : 'text-text-secondary'
                      }`}
                  >
                    {item.icon}
                    <span className="text-sm font-black">{item.name}</span>
                  </Link>
                ))}
              </nav>

              <div className="pt-6 border-t border-border">
                <div className="flex items-center gap-4 mb-8">
                  <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&q=80" className="w-12 h-12 rounded-full border-2 border-primary/20" alt="Avatar" />
                  <div>
                    <div className="text-sm font-black text-text">Student User</div>
                    <div className="text-[10px] text-primary font-black uppercase tracking-widest">Pro Learner</div>
                  </div>
                </div>
                <button className="w-full flex items-center gap-4 px-6 py-4 rounded-2xl text-red-500 bg-red-50 font-black text-sm">
                  <LogOut className="w-5 h-5" />
                  <span>Log out</span>
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col relative overflow-hidden">
        {/* Animated Background Blobs */}
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-primary/5 blur-[120px] rounded-full pointer-events-none animate-pulse-slow"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-secondary/5 blur-[100px] rounded-full pointer-events-none animate-float"></div>

        {/* Top Header */}
        <header className="h-20 md:h-28 flex items-center justify-between px-6 md:px-12 relative z-[50] bg-white/50 backdrop-blur-md border-b border-border/50 shrink-0">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="p-2 md:hidden bg-white border border-border rounded-lg text-text hover:text-primary transition-all"
            >
              <Menu className="w-6 h-6" />
            </button>
            <div>
              <h1 className="text-xl md:text-3xl font-black text-text leading-none mb-1 md:mb-2 tracking-tight line-clamp-1">Dashboard</h1>
              <p className="hidden md:block text-sm text-text-secondary font-medium">Keep up the good work! Top <span className="text-primary font-black">5%</span> of learners.</p>
            </div>
          </div>

          <div className="flex items-center gap-3 md:gap-8">
            <div className="relative hidden lg:block group">
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted group-focus-within:text-primary transition-colors" />
              <input
                type="text"
                placeholder="Search courses..."
                className="w-80 bg-white border border-border rounded-full py-3 pl-12 pr-6 text-sm focus:outline-none focus:border-primary/40 focus:ring-4 focus:ring-primary/5 transition-all text-text font-bold"
              />
            </div>

            <button className="w-10 h-10 md:w-12 md:h-12 bg-white border border-border rounded-xl md:rounded-2xl flex items-center justify-center text-text-muted hover:text-primary transition-all relative group shadow-sm">
              <Bell className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              <span className="absolute top-2.5 right-2.5 md:top-3 md:right-3 w-2.5 h-2.5 bg-primary rounded-full border-2 border-white shadow-sm"></span>
            </button>

            <button className="hidden sm:flex w-10 h-10 md:w-12 md:h-12 bg-white border border-border rounded-xl md:rounded-2xl items-center justify-center text-text-muted hover:text-primary transition-all shadow-sm">
              <Settings className="w-5 h-5 hover:rotate-90 transition-transform duration-700" />
            </button>

            <Link to="/learn/1" className="flex items-center gap-2 px-4 py-2 md:px-5 md:py-2.5 bg-primary text-white rounded-xl text-xs font-black uppercase tracking-widest shadow-violet-glow hover:bg-primary-hover transition-all shrink-0">
              <Play className="w-3.5 h-3.5 fill-current" />
              <span className="hidden xs:inline">Resume</span>
            </Link>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto p-6 md:p-12 relative z-10 no-scrollbar pb-24 md:pb-12">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
