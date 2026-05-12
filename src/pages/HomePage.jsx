import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MessageCircle, Gamepad2, BarChart3, User, ChevronRight, Sparkles } from 'lucide-react';
import kamiAvatar from '../assets/KAMI_avatar.png';

const HomePage = () => {
  const navigate = useNavigate();
  const name = "Bi";
  const [selectedMood, setSelectedMood] = useState(null);

  const moods = [
    { emoji: '😊', label: 'Vui vẻ', color: 'bg-green-100', text: 'Tuyệt vời quá Bi ơi!' },
    { emoji: '😴', label: 'Buồn ngủ', color: 'bg-blue-100', text: 'Nghỉ ngơi một chút nhé.' },
    { emoji: '🤒', label: 'Hơi mệt', color: 'bg-orange-100', text: 'KAMI ở đây cùng Bi nè.' },
    { emoji: '🤔', label: 'Tò mò', color: 'bg-purple-100', text: 'Cùng khám phá thôi nào!' },
  ];

  const menuItems = [
    { to: '/dashboard/chat', label: 'Trò chuyện vs KAMI', icon: MessageCircle, color: 'bg-primary', text: 'text-on-primary', desc: 'Tâm sự cùng bạn nhỏ KAMI' },
    { to: '/dashboard/activities', label: 'Hoạt động của bé', icon: Gamepad2, color: 'bg-secondary', text: 'text-on-secondary', desc: 'Vui chơi và rèn luyện' },
    { to: '/dashboard/reports', label: 'Báo cáo sức khỏe', icon: BarChart3, color: 'bg-tertiary', text: 'text-on-tertiary', desc: 'Theo dõi tiến trình hồi phục' },
  ];

  return (
    <div className="flex-1 flex flex-col items-center px-margin pt-6 pb-10 overflow-y-auto no-scrollbar">
      {/* Header Profile */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-sm bg-white/40 backdrop-blur-md rounded-[3rem] p-6 border border-white/50 shadow-xl mb-8 text-center"
      >
        <div className="w-24 h-24 mx-auto mb-4 rounded-[2.5rem] bg-white shadow-inner overflow-hidden border-4 border-primary-container p-1">
          <img src={kamiAvatar} alt="KAMI" className="w-full h-full object-cover rounded-[2rem]" />
        </div>
        <h2 className="text-headline-md font-quicksand font-bold text-on-surface">
          Xin chào <span className="text-primary">{name}</span> !
        </h2>
        <p className="text-body-md text-on-surface-variant font-bold mt-1">
          Hôm nay Bi thấy thế nào?
        </p>
      </motion.div>

      {/* Mood Journal Section */}
      <div className="w-full max-w-sm mb-8">
        <div className="flex justify-between gap-2">
          {moods.map((mood) => (
            <button
              key={mood.label}
              onClick={() => setSelectedMood(mood)}
              className={`flex-1 flex flex-col items-center gap-1 p-3 rounded-2xl transition-all ${selectedMood?.label === mood.label
                ? 'bg-white shadow-lg scale-105 border-2 border-primary'
                : 'bg-white/60 hover:bg-white'
                }`}
            >
              <span className="text-2xl">{mood.emoji}</span>
              <span className="text-[10px] font-bold text-on-surface-variant uppercase">{mood.label}</span>
            </button>
          ))}
        </div>
        {selectedMood && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-4 p-4 bg-primary-container/30 rounded-2xl border border-primary/10 flex items-center gap-3"
          >
            <Sparkles className="text-primary" size={20} />
            <p className="text-sm font-bold text-primary">{selectedMood.text}</p>
          </motion.div>
        )}
      </div>

      {/* Main Menu */}
      <div className="w-full max-w-sm space-y-4">
        {menuItems.map((item, idx) => (
          <motion.div
            key={item.to}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.1 }}
          >
            <Link
              to={item.to}
              className="flex items-center gap-4 p-4 rounded-[2rem] bg-white shadow-lg shadow-black/5 border-2 border-transparent hover:border-primary/20 transition-all active:scale-95 group"
            >
              <div className={`w-14 h-14 rounded-2xl ${item.color} flex items-center justify-center ${item.text} shadow-lg group-hover:rotate-6 transition-transform`}>
                <item.icon size={28} />
              </div>
              <div className="flex-1">
                <h3 className="font-quicksand font-bold text-headline-sm text-on-surface">
                  {item.label}
                </h3>
                <p className="text-[10px] text-on-surface-variant font-bold uppercase tracking-wider">{item.desc}</p>
              </div>
              <div className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-outline-variant group-hover:bg-primary-container group-hover:text-primary transition-colors">
                <ChevronRight size={20} />
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Extra Info Card */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="w-full max-w-sm mt-8 p-6 bg-gradient-to-br from-secondary/10 to-tertiary/10 rounded-[2.5rem] border border-white/50 relative overflow-hidden"
      >
        <div className="relative z-10">
          <h4 className="font-bold text-secondary mb-1">Mẹo nhỏ từ KAMI</h4>
          <p className="text-xs text-on-surface-variant leading-relaxed">
            Bi biết không, uống đủ nước mỗi ngày sẽ giúp cơ thể Bi mạnh mẽ như một siêu anh hùng đấy! 💧
          </p>
        </div>
        <div className="absolute -right-4 -bottom-4 w-20 h-20 bg-white/20 rounded-full blur-2xl" />
      </motion.div>
    </div>
  );
};

export default HomePage;
