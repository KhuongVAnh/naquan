import React from 'react';
import { ArrowLeft, Clock, Smile, Puzzle, MessageSquare, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ReportPage = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gray-50 pb-10">
      {/* Header */}
      <header className="pt-12 pb-4 px-6 bg-secondary text-white rounded-b-xl shadow-sm relative z-10">
        <div className="flex items-center justify-between">
          <button 
            onClick={() => navigate(-1)}
            className="p-2 -ml-2 rounded-full hover:bg-white/20 transition-colors active:scale-90"
          >
            <ArrowLeft size={24} />
          </button>
          <h1 className="text-xl font-bold font-quicksand tracking-wide">Trang dành cho phụ huynh</h1>
          <div className="w-10"></div>
        </div>
      </header>

      {/* Main Content */}
      <main className="px-margin pt-6 space-y-6">
        <div>
          <h2 className="text-2xl font-extrabold font-quicksand text-on-surface">Báo cáo hôm nay</h2>
          <p className="text-sm text-on-surface-variant font-medium">Tóm tắt hoạt động của bé</p>
        </div>

        {/* Summary Card */}
        <div className="bg-surface-container-lowest rounded-xl p-5 shadow-sm border border-surface-container-highest">
          <div className="space-y-4">
            {/* Interaction Time */}
            <div className="flex items-center justify-between border-b border-surface-container pb-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-secondary-container/30 flex items-center justify-center text-secondary">
                  <Clock size={20} />
                </div>
                <span className="font-semibold text-on-surface">Bé đã trò chuyện:</span>
              </div>
              <span className="font-bold text-secondary text-lg">18 phút</span>
            </div>

            {/* Main Mood */}
            <div className="flex items-center justify-between border-b border-surface-container pb-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-tertiary-container/30 flex items-center justify-center text-tertiary">
                  <Smile size={20} />
                </div>
                <span className="font-semibold text-on-surface">Cảm xúc chính:</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-on-surface">Bình thường</span>
                <span className="text-xl">😊</span>
              </div>
            </div>

            {/* Activities Count */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary-container/30 flex items-center justify-center text-primary">
                  <Puzzle size={20} />
                </div>
                <span className="font-semibold text-on-surface">Số hoạt động:</span>
              </div>
              <span className="font-bold text-primary text-lg">2</span>
            </div>
          </div>
        </div>

        {/* Topics Section */}
        <div>
          <h3 className="text-lg font-bold font-quicksand text-on-surface mb-3 flex items-center gap-2">
            <MessageSquare size={20} className="text-secondary" />
            Chủ đề bé nói nhiều:
          </h3>
          <div className="flex flex-wrap gap-2">
            <TopicTag label="Nhớ mẹ" color="bg-secondary-container/40 text-secondary" />
            <TopicTag label="Hơi đau" color="bg-error-container/40 text-error" />
            <TopicTag label="Muốn nghe truyện" color="bg-primary-container/40 text-primary" />
          </div>
        </div>

        {/* Suggestions Box */}
        <div className="bg-gradient-to-br from-tertiary-container/20 to-orange-100/30 rounded-xl p-5 border border-tertiary-container/30 relative overflow-hidden">
          <h3 className="text-lg font-bold font-quicksand text-tertiary mb-2 flex items-center gap-2">
            <Sparkles size={20} className="text-tertiary" />
            Gợi ý cho phụ huynh:
          </h3>
          <div className="bg-surface-container-lowest rounded-xl p-4 shadow-sm border border-white">
            <p className="text-on-surface italic font-medium leading-relaxed">
              "Hôm nay bé có nhắc đến đau. Ba/mẹ nên hỏi bé thêm nhé."
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

const TopicTag = ({ label, color }) => (
  <span className={`px-4 py-2 ${color} rounded-full text-sm font-bold shadow-sm border border-black/5`}>
    {label}
  </span>
);

export default ReportPage;
