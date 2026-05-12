import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BookOpen, Gamepad2, Heart, Sparkles, ArrowRight } from 'lucide-react';

const ActivitiesPage = () => {
  const activities = [
    { 
      to: '/dashboard/mood', 
      icon: Heart, 
      label: 'Cảm xúc', 
      desc: 'Chia sẻ niềm vui, nỗi buồn cùng KAMI',
      color: 'bg-primary', 
      light: 'bg-primary-container/40',
      text: 'text-primary' 
    },
    { 
      to: '/dashboard/story', 
      icon: BookOpen, 
      label: 'Kể chuyện', 
      desc: 'Nghe những câu chuyện cổ tích và bài học hay',
      color: 'bg-secondary', 
      light: 'bg-secondary-container/40',
      text: 'text-secondary' 
    },
    { 
      to: '/dashboard/learning', 
      icon: Sparkles, 
      label: 'Học vui', 
      desc: 'Vừa chơi vừa học những điều thú vị',
      color: 'bg-tertiary', 
      light: 'bg-tertiary-container/40',
      text: 'text-tertiary' 
    },
    { 
      to: '/dashboard/peaceful', 
      icon: Gamepad2, 
      label: 'Bình yên', 
      desc: 'Thư giãn với những bản nhạc và bài tập thở',
      color: 'bg-on-surface-variant', 
      light: 'bg-surface-variant/40',
      text: 'text-on-surface-variant' 
    },
  ];

  return (
    <div className="p-6 flex-1 pt-6 overflow-y-auto no-scrollbar">
      <motion.header 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-10 pt-4"
      >
        <h1 className="text-display-sm font-quicksand font-bold text-primary leading-tight">Hoạt động</h1>
        <p className="text-body-lg text-on-surface-variant font-bold mt-1">Hôm nay bé muốn chơi gì cùng KAMI?</p>
      </motion.header>

      <div className="grid grid-cols-1 gap-6">
        {activities.map(({ to, icon: Icon, label, desc, color, light, text }, idx) => (
          <motion.div
            key={to}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.1 }}
          >
            <Link
              to={to}
              className="flex items-center gap-5 p-5 bg-white/60 backdrop-blur-md rounded-[2.5rem] shadow-lg shadow-black/5 border-2 border-transparent hover:border-primary-container transition-all active:scale-95 group relative overflow-hidden"
            >
              {/* Decorative Circle in Card */}
              <div className={`absolute -right-4 -bottom-4 w-24 h-24 rounded-full opacity-10 ${color}`} />
              
              <div className={`w-16 h-16 rounded-[1.5rem] ${light} flex items-center justify-center ${text} shadow-sm group-hover:scale-110 transition-transform`}>
                <Icon size={32} />
              </div>
              
              <div className="flex-1">
                <span className="block font-quicksand font-bold text-headline-sm text-on-surface mb-1">
                  {label}
                </span>
                <p className="text-xs text-on-surface-variant font-medium leading-snug pr-4">
                  {desc}
                </p>
              </div>

              <div className="w-10 h-10 rounded-full bg-surface-container-low flex items-center justify-center text-outline-variant group-hover:bg-primary group-hover:text-white transition-all">
                <ArrowRight size={20} />
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ActivitiesPage;
