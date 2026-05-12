import React from 'react';
import { Info, Frown, CheckCircle2 } from 'lucide-react';
import kamiAvatar from '../assets/KAMI_avatar.png';
import { useNavigate } from 'react-router-dom';

const AlertPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center p-margin bg-background">
      <main className="w-full max-w-md bg-surface-container-lowest rounded-xl shadow-lg overflow-hidden flex flex-col border border-surface-container-low">
        {/* Header */}
        <div className="bg-primary-container px-margin py-lg rounded-t-xl flex flex-col items-center text-center relative overflow-hidden">
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary-fixed-dim/30 rounded-full blur-2xl"></div>
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-secondary-fixed/30 rounded-full blur-2xl"></div>
          <div className="w-16 h-16 bg-surface-container-lowest rounded-full flex items-center justify-center shadow-sm mb-4 z-10">
            <Info className="text-primary" size={32} />
          </div>
          <h1 className="font-quicksand font-bold text-headline-lg text-on-primary-container z-10">
            Lưu ý cho phụ huynh
          </h1>
          <p className="text-body-md text-on-primary-container/80 mt-2 z-10 font-bold">
            Ghi nhận tình trạng tâm lý
          </p>
        </div>

        {/* Content */}
        <div className="p-margin flex flex-col gap-margin bg-surface-container-lowest">
          {/* Insight Card */}
          <div className="bg-surface-container-low rounded-lg p-md flex items-start gap-4">
            <div className="bg-secondary-container w-10 h-10 rounded-full flex items-center justify-center shrink-0">
              <Frown className="text-on-secondary-container" size={20} />
            </div>
            <div>
              <h2 className="font-quicksand font-bold text-headline-md text-on-surface mb-1">
                Bé đã chọn "buồn" 3 lần trong hôm nay.
              </h2>
              <p className="text-sm text-on-surface-variant font-bold">
                Hệ thống ghi nhận dấu hiệu tâm lý cần sự chú ý của bạn.
              </p>
            </div>
          </div>

          {/* Suggestions */}
          <div className="flex flex-col gap-sm">
            <h3 className="font-bold text-label-lg text-primary uppercase tracking-wider mb-2">
              Gợi ý chăm sóc
            </h3>
            <ul className="space-y-sm">
              {[
                'Hỏi bé đang lo điều gì',
                'Cho bé nghỉ ngơi',
                'Báo nhân viên y tế nếu bé đau hoặc khó chịu nhiều',
              ].map((text, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="text-primary mt-0.5" size={18} />
                  <span className="text-body-md text-on-surface font-bold">{text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Illustration */}
          <div className="mt-4 flex justify-center">
            <img 
              alt="Companion Character" 
              className="w-48 h-auto object-contain" 
              src={kamiAvatar} 
            />
          </div>
        </div>

        {/* Action Button */}
        <div className="p-margin pt-0 bg-surface-container-lowest mt-auto">
          <button 
            onClick={() => navigate('/reports')}
            className="w-full bg-primary hover:bg-primary/90 text-on-primary font-bold py-4 rounded-full shadow-md transition-all active:scale-95"
          >
            Đã hiểu
          </button>
        </div>
      </main>
    </div>
  );
};

export default AlertPage;
