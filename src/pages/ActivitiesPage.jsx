import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Gamepad2, Heart, Sparkles } from 'lucide-react';

const ActivitiesPage = () => {
  const activities = [
    { to: '/mood', icon: Heart, label: 'Cảm xúc', color: 'bg-primary-container', text: 'primary' },
    { to: '/story', icon: BookOpen, label: 'Kể chuyện', color: 'bg-secondary-container', text: 'secondary' },
    { to: '/learning', icon: Sparkles, label: 'Học vui', color: 'bg-tertiary-container', text: 'tertiary' },
    { to: '/peaceful', icon: Gamepad2, label: 'Bình yên', color: 'bg-surface-variant', text: 'on-surface-variant' },
  ];

  return (
    <div className="p-margin">
      <header className="mb-lg">
        <h1 className="text-display-md font-quicksand text-primary">Hoạt động</h1>
        <p className="text-body-lg text-on-surface-variant">Hôm nay bé muốn chơi gì cùng KAMI?</p>
      </header>

      <div className="grid grid-cols-2 gap-margin">
        {activities.map(({ to, icon: Icon, label, color, text }) => (
          <Link
            key={to}
            to={to}
            className="flex flex-col items-center gap-md p-md bg-surface-container-lowest rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.04)] border-2 border-transparent hover:border-primary-container transition-all active:scale-95"
          >
            <div className={`w-16 h-16 rounded-full ${color} flex items-center justify-center text-on-${text}-container`}>
              <Icon size={32} />
            </div>
            <span className="font-bold text-headline-md">{label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ActivitiesPage;
