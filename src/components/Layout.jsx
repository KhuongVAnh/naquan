import React from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { House, MessageCircle, Gamepad2, Bell, User } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Layout = () => {
  const location = useLocation();
  
  const navItems = [
    { to: '/dashboard', icon: House, label: 'Trang chủ' },
    { to: '/dashboard/chat', icon: MessageCircle, label: 'KAMI Chat' },
    { to: '/dashboard/activities', icon: Gamepad2, label: 'Hoạt động' },
    { to: '/dashboard/reminders', icon: Bell, label: 'Lời nhắc' },
    { to: '/dashboard/profile', icon: User, label: 'Của bé' },
  ];

  return (
    <div className="h-full bg-background flex flex-col max-w-md mx-auto relative shadow-2xl overflow-hidden border-x border-gray-100">
      {/* Global Background Decorations */}
      <div className="absolute inset-0 bg-pattern pointer-events-none" />
      <div className="floating-blob bg-primary/10 w-64 h-64 -top-20 -left-20" />
      <div className="floating-blob bg-secondary/10 w-48 h-48 top-1/2 -right-10" />
      <div className="floating-blob bg-tertiary/10 w-56 h-56 -bottom-10 left-10" />

      {/* Main Content Area */}
      <div className="flex-1 relative z-10 flex flex-col min-h-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="flex-1 flex flex-col min-h-0 overflow-hidden"
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Bottom Navigation */}
      <nav className="bg-white/95 backdrop-blur-xl border-t border-surface-container-highest px-2 pb-4 pt-2 z-50 shrink-0">
        <div className="flex justify-around items-center max-w-md mx-auto">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `flex flex-col items-center justify-center gap-1 transition-all px-3 py-2 rounded-2xl ${
                  isActive 
                    ? 'text-primary bg-primary-container/40' 
                    : 'text-on-surface-variant hover:bg-surface-container-high/30'
                }`
              }
            >
              {({ isActive }) => (
                <React.Fragment>
                  <item.icon size={22} strokeWidth={isActive ? 2.5 : 2} />
                  <span className={`text-[10px] font-bold uppercase tracking-tighter ${isActive ? 'opacity-100' : 'opacity-70'}`}>
                    {item.label}
                  </span>
                </React.Fragment>
              )}
            </NavLink>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default Layout;
