import React from 'react';
import { ArrowLeft, Edit2, Star, Heart, Ban, VolumeX, Droplets, Mic2, Save, Rocket, Plus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import kamiAvatar from '../assets/KAMI_avatar.png';

const ProfilePage = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-background pt-20">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md">
        <div className="flex items-center justify-between px-margin py-base w-full max-w-7xl mx-auto">
          <button 
            onClick={() => navigate(-1)}
            className="flex items-center justify-center p-2 rounded-full hover:bg-primary-container/20 transition-all active:scale-90"
          >
            <ArrowLeft className="text-primary" size={24} />
          </button>
          <h1 className="font-quicksand font-bold text-headline-md text-primary tracking-tight">
            Hồ sơ của bé
          </h1>
          <div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center overflow-hidden border-2 border-primary-container">
            <img 
              alt="Avatar" 
              className="w-full h-full object-cover" 
              src={kamiAvatar} 
            />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="px-margin w-full max-w-3xl mx-auto space-y-md mt-sm">
        {/* Hero Card */}
        <div className="bg-surface-container-lowest rounded-xl p-lg shadow-sm border border-surface-variant flex flex-col md:flex-row items-center gap-lg">
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-xl bg-tertiary-container/30 overflow-hidden shrink-0 flex items-center justify-center relative shadow-inner">
            <img 
              src={kamiAvatar} 
              alt="KAMI" 
              className="w-full h-full object-cover"
            />
            <button className="absolute bottom-2 right-2 bg-primary text-on-primary rounded-full p-2 shadow-md hover:bg-primary/90 transition-colors">
              <Edit2 size={14} />
            </button>
          </div>
          <div className="flex-grow text-center md:text-left space-y-sm">
            <div className="space-y-1">
              <h2 className="font-quicksand font-bold text-headline-lg text-on-surface">Bi</h2>
              <p className="text-body-lg text-on-surface-variant">7 Tuổi</p>
            </div>
            <div className="inline-flex items-center gap-2 bg-primary-container/40 px-4 py-2 rounded-full mt-2">
              <Star className="text-primary" size={16} />
              <span className="font-bold text-label-lg text-primary">Siêu nhân Bi</span>
            </div>
          </div>
        </div>

        {/* Preferences Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
          {/* Likes */}
          <div className="bg-surface-container-low rounded-xl p-md shadow-sm border border-surface-variant/50 flex flex-col gap-sm relative overflow-hidden">
            <div className="absolute -right-4 -top-4 opacity-10">
              <Heart className="text-primary" size={120} />
            </div>
            <div className="flex items-center gap-2 relative z-10">
              <div className="bg-primary-container p-2 rounded-full text-on-primary-container">
                <SmileIcon />
              </div>
              <h3 className="font-quicksand font-bold text-headline-md text-on-surface">Bé thích</h3>
            </div>
            <div className="flex flex-wrap gap-xs relative z-10 mt-2">
              <Tag icon={Rocket} label="Vũ trụ" color="bg-primary-fixed-dim/20" />
              <Tag icon={AnimalIcon} label="Khủng long" color="bg-tertiary-container/30" />
              <button className="bg-surface-container-highest text-on-surface-variant px-3 py-2 rounded-full border border-dashed border-outline-variant hover:bg-surface-variant transition-colors">
                <Plus size={16} />
              </button>
            </div>
          </div>

          {/* Dislikes */}
          <div className="bg-error-container/20 rounded-xl p-md shadow-sm border border-error-container/50 flex flex-col gap-sm relative overflow-hidden">
            <div className="absolute -right-4 -top-4 opacity-10">
              <Ban className="text-error" size={120} />
            </div>
            <div className="flex items-center gap-2 relative z-10">
              <div className="bg-error-container p-2 rounded-full text-on-error-container">
                <SadIcon />
              </div>
              <h3 className="font-quicksand font-bold text-headline-md text-on-surface">Bé không thích</h3>
            </div>
            <div className="flex flex-wrap gap-xs relative z-10 mt-2">
              <Tag icon={VolumeX} label="Tiếng lớn" color="bg-error-container/40" />
              <Tag icon={Droplets} label="Câu chuyện buồn" color="bg-error-container/40" />
              <button className="bg-surface-container-highest text-on-surface-variant px-3 py-2 rounded-full border border-dashed border-outline-variant hover:bg-surface-variant transition-colors">
                <Plus size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Voice Selector */}
        <div className="bg-secondary-container/20 rounded-xl p-md shadow-sm border border-secondary-container/30 flex flex-col sm:flex-row items-center justify-between gap-md">
          <div className="flex items-center gap-sm">
            <div className="w-12 h-12 rounded-full bg-secondary-container flex items-center justify-center text-secondary shrink-0">
              <Mic2 size={24} />
            </div>
            <div>
              <h3 className="font-quicksand font-bold text-headline-md text-on-surface">Giọng KAMI</h3>
              <p className="text-body-md text-on-surface-variant">Chọn giọng đọc phù hợp với bé</p>
            </div>
          </div>
          <select className="w-full sm:w-48 bg-surface-container-lowest border-2 border-primary-container text-on-surface font-bold rounded-full px-6 py-3 shadow-inner outline-none focus:border-primary transition-all cursor-pointer">
            <option value="diu_dang">Dịu dàng</option>
            <option value="vui_nhon">Vui nhộn</option>
            <option value="truyen_cam">Truyền cảm</option>
          </select>
        </div>

        {/* Save Button */}
        <div className="pt-lg pb-10 flex justify-center">
          <button className="bg-primary text-on-primary font-bold px-8 py-4 rounded-full shadow-lg hover:bg-primary/90 transition-all active:scale-95 flex items-center gap-2">
            <Save size={20} />
            Lưu Thay Đổi
          </button>
        </div>
      </main>
    </div>
  );
};

const Tag = ({ icon: Icon, label, color }) => (
  <div className={`${color} text-on-surface px-4 py-2 rounded-full font-bold text-label-lg border border-black/5 flex items-center gap-2`}>
    <Icon size={14} />
    {label}
  </div>
);

const UserIcon = () => (
  <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-tertiary opacity-50">
    <path d="M18 20a6 6 0 0 0-12 0" /><circle cx="12" cy="10" r="4" /><circle cx="12" cy="12" r="10" />
  </svg>
);

const SmileIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>
);

const SadIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M16 16s-1.5-2-4-2-4 2-4 2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>
);

const AnimalIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 5c1.5 4 2 11 0 11H8c-2 0-1.5-7 0-11s5-2 8 0z"/><path d="M12 16v5"/><path d="M9 21h6"/><path d="M6 8c-2 1-3 4-3 6s1 4 3 4"/><path d="M18 8c2 1 3 4 3 6s-1 4-3 4"/></svg>
);

export default ProfilePage;
