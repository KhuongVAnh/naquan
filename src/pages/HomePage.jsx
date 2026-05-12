import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MessageCircle, Gamepad2, BarChart3, User, ChevronRight } from 'lucide-react';
import kamiAvatar from '../assets/KAMI_avatar.png';

const HomePage = () => {
  const navigate = useNavigate();
  const name = "Bi";

  const menuItems = [
    { to: '/dashboard/chat', label: 'Trò chuyện vs KAMI', icon: MessageCircle, color: 'bg-primary', text: 'text-on-primary' },
    { to: '/dashboard/activities', label: 'Hoạt động của bé', icon: Gamepad2, color: 'bg-secondary', text: 'text-on-secondary' },
    { to: '/dashboard/reports', label: 'Báo cáo', icon: BarChart3, color: 'bg-tertiary', text: 'text-on-tertiary' },
    { to: '/dashboard/profile', label: 'Thông tin của bé', icon: User, color: 'bg-surface-container-highest', text: 'text-on-surface' },
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col items-center px-margin pt-10 pb-10">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-sm text-center mb-lg"
      >
        <h1 className="text-display-md font-quicksand text-primary font-bold mb-lg">Trang chủ</h1>
        
        <div className="w-24 h-24 mx-auto mb-md rounded-full bg-white shadow-md overflow-hidden border-4 border-primary-container">
          <img src={kamiAvatar} alt="KAMI" className="w-full h-full object-cover" />
        </div>

        <div className="space-y-1">
          <h2 className="text-headline-md font-quicksand font-bold text-on-surface">
            Xin chào <span className="text-primary">{name}</span> !
          </h2>
          <p className="text-body-lg text-on-surface-variant font-bold leading-tight px-4">
            Hôm nay {name} muốn làm gì nào?
          </p>
        </div>
      </motion.div>

      <div className="w-full max-w-sm space-y-margin">
        {menuItems.map((item, idx) => (
          <motion.div
            key={item.to}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.1 }}
          >
            <Link
              to={item.to}
              className={`flex items-center gap-md p-5 rounded-full shadow-md border-2 border-transparent hover:border-primary-container transition-all active:scale-95 w-full bg-white group`}
            >
              <div className={`w-12 h-12 rounded-full ${item.color} flex items-center justify-center ${item.text} shadow-sm group-hover:scale-110 transition-transform`}>
                <item.icon size={24} />
              </div>
              <span className="flex-1 font-quicksand font-bold text-headline-sm text-on-surface text-left">
                {item.label}
              </span>
              <ChevronRight size={20} className="text-outline-variant group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
