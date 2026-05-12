import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, User, Smile, Meh, Frown, AlertCircle, MessageCircle, Book, School, Sparkles, BriefcaseMedical } from 'lucide-react';
import kamiAvatar from '../assets/KAMI_avatar.png';

const SetupPage = () => {
  const navigate = useNavigate();
  const [selectedMood, setSelectedMood] = React.useState(0);
  const [selectedMode, setSelectedMode] = React.useState(0);
  const [name, setName] = React.useState('Bi');

  const moodItems = [
    { icon: Smile, label: 'Vui', color: 'bg-primary-container', text: 'on-primary-container' },
    { icon: Meh, label: 'Bình thường', color: 'bg-surface-variant', text: 'on-surface-variant' },
    { icon: Frown, label: 'Buồn', color: 'bg-secondary-container', text: 'on-secondary-container' },
    { icon: AlertCircle, label: 'Lo lắng', color: 'bg-error-container', text: 'on-error-container' },
  ];

  const modeItems = [
    { icon: MessageCircle, label: 'Bạn trò chuyện', color: 'text-primary' },
    { icon: Book, label: 'Kể chuyện nhẹ nhàng', color: 'text-secondary' },
    { icon: School, label: 'Học vui 5 phút', color: 'text-tertiary' },
    { icon: Sparkles, label: 'An ủi & thư giãn', color: 'text-primary' },
    { icon: BriefcaseMedical, label: 'Nhắc uống thuốc', color: 'text-error' },
  ];

  return (
    <div className="bg-background text-on-background font-nunito min-h-screen pb-10">
      {/* Header */}
      <header className="w-full bg-background flex items-center justify-between px-margin py-base z-40 sticky top-0 border-b border-surface-container-highest">
        <button onClick={() => navigate(-1)} className="w-10 h-10 flex items-center justify-center text-on-surface-variant rounded-full hover:bg-surface-variant transition-colors active:scale-90">
          <ArrowLeft size={24} />
        </button>
        <h1 className="font-quicksand font-bold text-headline-md text-primary">KAMI Setup</h1>
        <div className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center text-on-primary-container overflow-hidden border-2 border-primary">
          <img src={kamiAvatar} alt="KAMI" className="w-full h-full object-cover" />
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-margin pt-sm pb-xl">
        <div className="text-center mb-lg">
          <h2 className="font-quicksand font-bold text-headline-lg text-primary mb-xs">Hôm nay KAMI sẽ đồng hành cùng bé như thế nào?</h2>
          <p className="text-body-lg text-on-surface-variant font-bold">Xin chào, mình là KAMI | Hôm nay KAMI sẽ chơi với ai?</p>
        </div>

        {/* Input Form */}
        <div className="bg-surface-container-lowest rounded-xl p-md shadow-sm mb-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-margin">
            <div className="flex flex-col gap-xs">
              <label className="font-bold text-label-lg text-on-surface">Tên bé</label>
              <input 
                className="w-full rounded-full border-none bg-surface-container-low px-margin py-sm text-body-md text-on-surface focus:ring-2 focus:ring-secondary-container shadow-inner outline-none font-bold" 
                placeholder="Nhập tên bé..." 
                type="text" 
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-xs">
              <label className="font-bold text-label-lg text-on-surface">Tuổi</label>
              <input 
                className="w-full rounded-full border-none bg-surface-container-low px-margin py-sm text-body-md text-on-surface focus:ring-2 focus:ring-secondary-container shadow-inner outline-none font-bold" 
                placeholder="Nhập tuổi bé..." 
                type="number" 
                defaultValue={7}
              />
            </div>
          </div>
        </div>

        {/* Mood Selection */}
        <div className="mb-lg">
          <h3 className="font-quicksand font-bold text-headline-md text-primary mb-md">Hôm nay bé đang</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-sm">
            {moodItems.map((item, idx) => (
              <button 
                key={idx} 
                onClick={() => setSelectedMood(idx)}
                className={`bg-surface-container-lowest border-2 ${selectedMood === idx ? 'border-primary shadow-md' : 'border-surface-variant'} rounded-xl p-sm flex flex-col items-center gap-xs hover:bg-primary-container/10 transition-all active:scale-95`}
              >
                <div className={`w-16 h-16 rounded-full ${selectedMood === idx ? item.color : 'bg-surface-container'} flex items-center justify-center ${selectedMood === idx ? item.text : 'text-on-surface-variant'} mb-xs transition-colors`}>
                  <item.icon size={32} />
                </div>
                <span className={`font-bold text-label-lg ${selectedMood === idx ? 'text-primary' : 'text-on-surface'}`}>{item.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Mode Selection */}
        <div className="mb-lg">
          <h3 className="font-quicksand font-bold text-headline-md text-primary mb-md">Chọn chế độ KAMI</h3>
          <div className="flex flex-col gap-sm">
            {modeItems.map((item, idx) => (
              <label 
                key={idx} 
                onClick={() => setSelectedMode(idx)}
                className={`flex items-center gap-md p-md bg-surface-container-lowest rounded-xl border-2 ${selectedMode === idx ? 'border-primary shadow-sm' : 'border-surface-variant'} cursor-pointer hover:border-primary/50 transition-all`}
              >
                <input 
                  checked={selectedMode === idx}
                  onChange={() => {}}
                  className="text-primary focus:ring-primary h-6 w-6 border-surface-variant" 
                  name="KAMI_mode" 
                  type="radio" 
                />
                <div className="flex-1">
                  <div className={`font-bold text-label-lg flex items-center gap-xs ${selectedMode === idx ? 'text-primary' : 'text-on-surface'}`}>
                    <item.icon className={selectedMode === idx ? 'text-primary' : item.color} size={20} /> {item.label}
                  </div>
                </div>
              </label>
            ))}
          </div>
        </div>

        {/* Start Button */}
        <button 
          onClick={() => navigate('/')}
          className="w-full py-md bg-primary text-on-primary rounded-full font-bold text-label-lg shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all"
        >
          Bắt đầu với KAMI
        </button>
      </main>
    </div>
  );
};

export default SetupPage;
