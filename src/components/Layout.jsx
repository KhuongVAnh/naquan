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
    <div className="flex flex-col min-h-screen bg-background text-on-background font-nunito pb-20 overflow-x-hidden">
      <main className="flex-1 relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="w-full"
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>
      
      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-md border-t border-surface-container-highest px-2 py-2 z-50 flex justify-around items-center shadow-[0_-4px_24px_rgba(41,105,86,0.08)] rounded-t-2xl">
        {navItems.map(({ to, icon: Icon, label }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) => 
              `flex flex-col items-center gap-1 p-2 rounded-2xl transition-all duration-300 relative ${
                isActive 
                ? 'text-primary' 
                : 'text-on-surface-variant'
              }`
            }
          >
            {({ isActive }) => (
              <>
                {isActive && (
                  <motion.div 
                    layoutId="nav-pill"
                    className="absolute inset-0 bg-primary-container/30 rounded-2xl -z-10"
                    transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
                  />
                )}
                <Icon size={24} className={`transition-transform ${isActive ? 'scale-110' : 'scale-100 hover:scale-110'}`} />
                <span className="text-[10px] font-bold font-nunito">{label}</span>
              </>
            )}
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default Layout;
