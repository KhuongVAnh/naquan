import React from 'react';
import { Menu, MessageCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const MoodPage = () => {
  const navigate = useNavigate();
  const moods = [
    { emoji: '😄', label: 'Vui', color: 'bg-tertiary-container', textColor: 'text-on-tertiary-container' },
    { emoji: '😐', label: 'Bình thường', color: 'bg-surface-container-high', textColor: 'text-on-surface' },
    { emoji: '😢', label: 'Buồn', color: 'bg-secondary-container', textColor: 'text-on-secondary-container' },
    { emoji: '😟', label: 'Lo lắng', color: 'bg-tertiary-container/60', textColor: 'text-on-tertiary-container' },
    { emoji: '🤕', label: 'Đau', color: 'bg-error-container', textColor: 'text-on-error-container' },
    { emoji: '🥱', label: 'Mệt', color: 'bg-surface-variant', textColor: 'text-on-surface-variant' },
    { emoji: '🥺', label: 'Nhớ mẹ', color: 'bg-primary-container', textColor: 'text-on-primary-container' },
    { emoji: '😠', label: 'Bực mình', color: 'bg-error', textColor: 'text-on-error' },
  ];

  return (
    <div className="flex-1 flex flex-col min-h-0 bg-background pt-4">
      {/* Header */}
      <header className="w-full flex items-center justify-between px-margin py-base z-10 shrink-0 bg-background/80 backdrop-blur-md">
        <button className="w-12 h-12 flex items-center justify-center rounded-full text-primary hover:bg-primary-container/20 transition-all active:scale-90">
          <Menu size={24} />
        </button>
        <h1 className="font-quicksand font-bold text-headline-md text-primary">Trạng thái của bé</h1>
        <div className="w-12 h-12 rounded-full overflow-hidden flex items-center justify-center bg-surface-container-high border-2 border-primary-container">
          <img 
            alt="Parent Profile" 
            className="w-full h-full object-cover" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCdQ1MtzIpgX6O7l5l3BP56YCttdBpWRINqmt7kKFOvVtyXPjEn8lN2vQPURBMb_jgFxE-6WwdwJhJ1BsQGDvGKlI-KIxxzJgCrk6DexZ3tGbbkfSuDOlwseBR9v5s6ly6vgnflRyLFd4BFXUg-WGr6N61DdnUKxHp0vUjdgD7_Gn1aJI_jeFPBOX9mV8_qzPQPwatgHQ7sqMdRwU1bHolvdBGZCx-eRQi5YM1UUq3_d117A5J0W5TIQ7ETkJWRZd5w1BcalIPBzZLj" 
          />
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 min-h-0 overflow-y-auto flex flex-col px-margin pb-10 pt-md no-scrollbar">
        <section className="mb-lg text-center">
          <h2 className="font-quicksand font-bold text-display-md text-primary mb-sm leading-tight">Hôm nay Bi cảm thấy sao?</h2>
          <p className="text-body-lg text-on-surface-variant">Chọn một cảm xúc để chia sẻ với KAMI nhé.</p>
        </section>

        {/* Mood Grid */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-gutter mb-xl">
          {moods.map((mood, idx) => (
            <button 
              key={idx} 
              onClick={() => navigate('/dashboard/chat')}
              className={`flex flex-col items-center justify-center p-md ${mood.color} rounded-xl shadow-sm hover:shadow-md transition-all duration-300 active:scale-95 border-2 border-transparent focus:border-secondary`}
            >
              <div className="w-20 h-20 mb-sm flex items-center justify-center rounded-full bg-white/40 shadow-sm">
                <span className="text-5xl">{mood.emoji}</span>
              </div>
              <span className={`font-quicksand font-bold text-headline-md ${mood.textColor}`}>{mood.label}</span>
            </button>
          ))}
        </section>

        <div className="mt-auto flex justify-center">
          <button 
            onClick={() => navigate('/dashboard/chat')}
            className="bg-primary text-on-primary font-quicksand font-bold text-headline-md py-md px-xl rounded-full shadow-lg hover:bg-primary/90 transition-all active:scale-95 flex items-center gap-sm w-full max-w-md justify-center"
          >
            <MessageCircle size={24} />
            Nói với KAMI
          </button>
        </div>
      </main>
    </div>
  );
};

export default MoodPage;
