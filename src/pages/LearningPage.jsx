import React from 'react';
import { ChevronLeft, ChevronRight, Lightbulb } from 'lucide-react';
import { Link } from 'react-router-dom';

const LearningPage = () => {
  const categories = [
    { emoji: '🪐', title: 'Vũ trụ', subtitle: 'Khám phá các vì sao', color: 'bg-purple-50', borderColor: 'border-purple-100', textColor: 'text-purple-900', subColor: 'text-purple-600' },
    { emoji: '🐶', title: 'Động vật', subtitle: 'Thế giới muôn loài', color: 'bg-orange-50', borderColor: 'border-orange-100', textColor: 'text-orange-900', subColor: 'text-orange-600' },
    { emoji: '🌈', title: 'Màu sắc', subtitle: 'Sắc màu rực rỡ', color: 'bg-pink-50', borderColor: 'border-pink-100', textColor: 'text-pink-900', subColor: 'text-pink-600' },
    { emoji: '🔢', title: 'Đếm số', subtitle: 'Làm quen với những con số', color: 'bg-blue-50', borderColor: 'border-blue-100', textColor: 'text-blue-900', subColor: 'text-blue-600' },
    { emoji: '🧩', title: 'Câu đố nhẹ', subtitle: 'Luyện trí não xíu nào', color: 'bg-green-50', borderColor: 'border-green-100', textColor: 'text-green-900', subColor: 'text-green-600' },
  ];

  return (
    <div className="flex-1 flex flex-col min-h-0 bg-[#F9FAFB] font-nunito">
      {/* Header */}
      <header className="shrink-0 z-10 bg-white/80 backdrop-blur-md px-6 py-4 flex items-center justify-between shadow-sm">
        <Link to="/activities" className="p-2 -ml-2 rounded-full hover:bg-gray-100 transition-colors">
          <ChevronLeft size={24} className="text-gray-600" />
        </Link>
        <h1 className="text-xl font-bold text-gray-800 tracking-tight flex-1 text-center mr-6 font-quicksand">Học vui 5 phút</h1>
      </header>

      {/* Main Content */}
      <main className="flex-1 min-h-0 overflow-y-auto px-6 py-6 no-scrollbar flex flex-col gap-6 pb-10">
        <section className="text-center space-y-2">
          <h2 className="text-2xl font-extrabold text-primary font-quicksand">Hôm nay Bi muốn khám phá gì?</h2>
          <p className="text-sm text-on-surface-variant font-bold">Chọn một chủ đề để vừa chơi vừa học nhé!</p>
        </section>

        {/* Categories List */}
        <div className="flex flex-col gap-4 mt-4">
          {categories.map((cat, idx) => (
            <button 
              key={idx} 
              className={`w-full flex items-center p-4 ${cat.color} rounded-2xl shadow-sm border ${cat.borderColor} hover:opacity-90 transition-all active:scale-95 group`}
            >
              <div className="w-12 h-12 flex items-center justify-center bg-white rounded-full shadow-sm text-2xl group-hover:scale-110 transition-transform">
                {cat.emoji}
              </div>
              <div className="ml-4 flex-1 text-left">
                <h3 className={`text-lg font-bold font-quicksand ${cat.textColor}`}>{cat.title}</h3>
                <p className={`text-xs font-bold ${cat.subColor}`}>{cat.subtitle}</p>
              </div>
              <ChevronRight className={cat.subColor} size={20} />
            </button>
          ))}
        </div>

        {/* Example Context */}
        <section className="mt-4 p-5 bg-tertiary-container/30 rounded-2xl border border-tertiary-container/50">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-full bg-tertiary-container flex items-center justify-center flex-shrink-0">
              <Lightbulb size={18} className="text-on-tertiary-container" />
            </div>
            <div>
              <h4 className="font-bold text-on-tertiary-container text-sm mb-1">Ví dụ câu đố vui:</h4>
              <p className="text-on-surface text-sm italic">"Con gì có vòi dài và tai to?"</p>
              <p className="text-on-surface text-sm italic mt-1 font-bold text-primary">"Đúng rồi, là con voi! Bi giỏi quá!"</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default LearningPage;
