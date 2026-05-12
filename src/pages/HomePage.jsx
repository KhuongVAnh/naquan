import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MessageCircle, BookOpen, Sparkles, Gamepad2, Clock, ChevronRight } from 'lucide-react';
import kamiAvatar from '../assets/KAMI_avatar.png';

const HomePage = () => {
  const navigate = useNavigate();
  const name = "Bi"; // In a real app, this would come from state/context

  const quickActions = [
    { to: '/chat', icon: MessageCircle, label: 'Trò chuyện', color: 'bg-primary-container', text: 'text-primary' },
    { to: '/story', icon: BookOpen, label: 'Kể chuyện', color: 'bg-secondary-container', text: 'text-secondary' },
    { to: '/learning', icon: Sparkles, label: 'Học vui', color: 'bg-tertiary-container', text: 'text-tertiary' },
    { to: '/peaceful', icon: Gamepad2, label: 'Bình yên', color: 'bg-surface-variant', text: 'text-on-surface-variant' },
  ];

  return (
    <div className="min-h-screen bg-background pb-10">
      {/* Hero Section */}
      <section className="px-margin pt-10 pb-6 bg-gradient-to-b from-primary-container/20 to-transparent rounded-b-[3rem]">
        <div className="flex items-center justify-between mb-lg">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h1 className="text-display-md font-quicksand text-on-surface leading-tight">
              Chào <span className="text-primary">{name}</span>!
            </h1>
            <p className="text-body-lg text-on-surface-variant font-bold mt-1">
              Hôm nay KAMI rất vui được gặp bé!
            </p>
          </motion.div>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="w-20 h-20 rounded-full bg-white shadow-lg overflow-hidden border-4 border-primary-container"
          >
            <img 
              src={kamiAvatar} 
              alt="KAMI Avatar" 
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>

        {/* Status Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-xl p-md shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-surface-container-highest"
        >
          <div className="flex items-center gap-md">
            <div className="w-12 h-12 rounded-full bg-tertiary-container flex items-center justify-center text-tertiary">
              <Sparkles size={24} />
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-label-lg text-on-surface">Cảm hứng hôm nay</h3>
              <p className="text-sm text-on-surface-variant">"Bé là một siêu anh hùng dũng cảm nhất!"</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Quick Actions Grid */}
      <section className="px-margin mt-lg">
        <div className="flex items-center justify-between mb-md">
          <h2 className="font-quicksand font-bold text-headline-md text-on-surface">Bé muốn làm gì nào?</h2>
        </div>
        <div className="grid grid-cols-2 gap-margin">
          {quickActions.map(({ to, icon: Icon, label, color, text }) => (
            <Link
              key={to}
              to={to}
              className="flex flex-col items-center gap-md p-md bg-white rounded-xl shadow-sm border-2 border-transparent hover:border-primary-container transition-all active:scale-95"
            >
              <div className={`w-16 h-16 rounded-full ${color} flex items-center justify-center ${text}`}>
                <Icon size={32} />
              </div>
              <span className="font-bold text-headline-md">{label}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Upcoming Reminder */}
      <section className="px-margin mt-xl">
        <div className="flex items-center justify-between mb-md">
          <h2 className="font-quicksand font-bold text-headline-md text-on-surface">Nhắc nhở sắp tới</h2>
          <Link to="/reminders" className="text-primary font-bold text-sm flex items-center gap-1">
            Xem tất cả <ChevronRight size={16} />
          </Link>
        </div>
        <div className="bg-primary-container/20 border-2 border-primary-container/30 rounded-xl p-md flex items-center gap-md">
          <div className="w-12 h-12 rounded-xl bg-white flex flex-col items-center justify-center shadow-sm">
            <span className="text-xs font-bold text-primary">12:00</span>
            <Clock size={16} className="text-primary" />
          </div>
          <div className="flex-1">
            <h3 className="font-bold text-on-surface">Uống nước</h3>
            <p className="text-xs text-on-surface-variant italic">"Mình uống một ngụm nước nhỏ nha."</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
