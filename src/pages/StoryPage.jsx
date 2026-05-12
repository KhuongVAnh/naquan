import React from 'react';
import { ChevronLeft, ChevronRight, Info } from 'lucide-react';
import { Link } from 'react-router-dom';

const StoryPage = () => {
  const stories = [
    { emoji: '🐰', title: 'Bạn thỏ dũng cảm', subtitle: 'Giúp bé tự tin hơn khi đến nơi mới', color: 'bg-orange-100' },
    { emoji: '🚀', title: 'Chuyến bay lên mặt trăng', subtitle: 'Chuyến phiêu lưu vào giấc ngủ', color: 'bg-indigo-100' },
    { emoji: '🦖', title: 'Khủng long đi khám bệnh', subtitle: 'Bác sĩ không hề đáng sợ', color: 'bg-green-100' },
    { emoji: '🦸‍♂️', title: 'Siêu nhân uống thuốc', subtitle: 'Sức mạnh đến từ thuốc đắng', color: 'bg-red-100' },
    { emoji: '🐟', title: 'Cá nhỏ không sợ nữa', subtitle: 'Vượt qua nỗi sợ tiêm', color: 'bg-blue-100' },
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col font-nunito">
      {/* Header */}
      <header className="bg-white shadow-sm px-4 py-4 flex items-center sticky top-0 z-10">
        <Link to="/dashboard/activities" className="p-2 -ml-2 rounded-full hover:bg-gray-100 transition-colors">
          <ChevronLeft size={24} className="text-gray-600" />
        </Link>
        <h1 className="text-xl font-bold text-center flex-1 pr-8 text-primary font-quicksand">KAMI kể chuyện</h1>
      </header>

      {/* Main Content */}
      <main className="flex-1 p-4 pb-10">
        {/* Intro Text */}
        <div className="mb-6 text-center">
          <p className="text-on-surface-variant font-bold text-lg">Chọn một câu chuyện nhé! ✨</p>
          <p className="text-sm text-outline mt-1">Mỗi chuyện dài khoảng 1-3 phút.</p>
        </div>

        {/* Story List */}
        <div className="space-y-4">
          {stories.map((story, idx) => (
            <button 
              key={idx} 
              className="w-full bg-surface-container-lowest rounded-2xl p-4 shadow-sm flex items-center space-x-4 border border-surface-container-highest hover:shadow-md hover:border-primary/30 transition-all active:scale-[0.98] text-left"
            >
              <div className={`${story.color} p-3 rounded-full flex-shrink-0`}>
                <span className="text-2xl">{story.emoji}</span>
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-on-surface text-lg font-quicksand">{story.title}</h3>
                <p className="text-sm text-on-surface-variant line-clamp-1">{story.subtitle}</p>
              </div>
              <ChevronRight size={20} className="text-outline-variant" />
            </button>
          ))}
        </div>

        {/* Info Note */}
        <div className="mt-8 bg-secondary-container/20 rounded-xl p-4 flex items-start space-x-3 border border-secondary-container/30">
          <Info size={24} className="text-secondary flex-shrink-0 mt-0.5" />
          <p className="text-sm text-on-secondary-container">
            Những câu chuyện này giúp bé dễ dàng hợp tác hơn trong các tình huống như đi khám bệnh, uống thuốc hay chờ đợi bác sĩ.
          </p>
        </div>
      </main>
    </div>
  );
};

export default StoryPage;
