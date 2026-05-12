import React from 'react';
import { ChevronLeft, Wind, BookOpen, Music, ChevronRight, Heart, MailOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

const PeacefulPage = () => {
  const activities = [
    { title: 'Hít thở cùng KAMI', subtitle: 'Bài tập hít thở 1 phút', icon: Wind, color: 'bg-green-100', iconColor: 'text-green-600' },
    { title: 'Nghe truyện nhẹ nhàng', subtitle: 'Những câu chuyện chữa lành', icon: BookOpen, color: 'bg-blue-100', iconColor: 'text-blue-500' },
    { title: 'Nghe âm thanh thư giãn', subtitle: 'Tiếng mưa, tiếng suối reo...', icon: Music, color: 'bg-purple-100', iconColor: 'text-purple-500' },
  ];

  return (
    <div className="min-h-screen bg-[#FDFBF7] flex flex-col font-quicksand">
      {/* Header */}
      <header className="w-full px-6 py-5 flex items-center justify-between bg-white/80 backdrop-blur-md sticky top-0 z-10 border-b border-surface-container-highest">
        <Link to="/activities" className="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-sm text-on-surface hover:bg-gray-50 transition-colors">
          <ChevronLeft size={24} />
        </Link>
        <h1 className="text-xl font-bold text-on-surface tracking-wide">Góc bình yên</h1>
        <div className="w-10 h-10"></div>
      </header>

      {/* Main Content */}
      <main className="flex-1 px-6 pb-10 overflow-y-auto">
        <section className="mt-8 mb-10 text-center">
          <h2 className="text-2xl font-bold text-on-surface mb-2 flex items-center justify-center gap-2">
            KAMI ở đây với Bi nha 
            <Heart className="text-pink-300 animate-pulse" fill="currentColor" size={24} />
          </h2>
          <p className="text-on-surface-variant text-sm mt-2">Hãy hít một hơi thật sâu và thư giãn nhé.</p>
        </section>

        {/* Activity Options */}
        <section className="space-y-4 mb-12">
          {activities.map((activity, idx) => (
            <button 
              key={idx} 
              className="w-full bg-white rounded-2xl p-5 flex items-center gap-5 shadow-sm border border-surface-container-highest hover:border-primary transition-all group active:scale-95"
            >
              <div className={`w-14 h-14 rounded-full ${activity.color} flex items-center justify-center text-2xl shadow-inner group-hover:scale-110 transition-transform`}>
                <activity.icon className={activity.iconColor} size={28} />
              </div>
              <div className="flex-1 text-left">
                <h3 className="font-bold text-lg text-on-surface">{activity.title}</h3>
                <p className="text-sm text-on-surface-variant mt-1">{activity.subtitle}</p>
              </div>
              <ChevronRight className="text-outline-variant group-hover:text-primary transition-colors" size={20} />
            </button>
          ))}
        </section>

        {/* Encouragement Card */}
        <section className="bg-gradient-to-br from-pink-50 to-orange-50 rounded-xl p-6 border border-pink-100 shadow-sm relative overflow-hidden">
          <div className="absolute -top-4 -right-4 w-20 h-20 bg-white rounded-full opacity-50"></div>
          <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-pink-100 rounded-full opacity-50"></div>
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-white p-2 rounded-xl shadow-sm">
                <MailOpen className="text-pink-400" size={20} />
              </div>
              <h3 className="font-bold text-on-surface text-lg">Lời động viên hôm nay</h3>
            </div>
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-5 text-center mt-2 border border-white">
              <p className="text-on-surface-variant text-sm mb-2">Câu hôm nay:</p>
              <p className="text-xl font-bold text-on-surface italic leading-relaxed">
                "Bi đã rất cố gắng rồi."
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default PeacefulPage;
