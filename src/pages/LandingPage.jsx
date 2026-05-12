import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Heart, BookOpen, Bell, MessageSquare, Play, Mail, Globe, Share2 } from 'lucide-react';
import kamiAvatar from '../assets/KAMI_avatar.png';
import kamiMobilePreview from '../assets/kami_mobile_preview.png';

const LandingPage = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: Heart,
      title: "Theo dõi sức khỏe",
      desc: "Giám sát sự phát triển, tiêm chủng và thể chất của bé.",
      gradient: "from-[#FFF1F1] to-[#FFE4E4]",
      iconColor: "text-red-400"
    },
    {
      icon: BookOpen,
      title: "Kiến thức y khoa",
      desc: "Các bài viết, mẹo vả và kiến thức nuôi dạy con từ chuyên gia.",
      gradient: "from-[#F1F9F6] to-[#E2F2ED]",
      iconColor: "text-green-400"
    },
    {
      icon: Bell,
      title: "Lời nhắc nhở",
      desc: "Thông báo lịch uống thuốc, hẹn khám và các cột mốc quan trọng.",
      gradient: "from-[#FFF9F1] to-[#FFF2E2]",
      iconColor: "text-orange-400"
    },
    {
      icon: MessageSquare,
      title: "Chăm sóc trực tiếp",
      desc: "Kết nối trực tiếp với bác sĩ nhi khoa và các chuyên gia.",
      gradient: "from-[#F1F7F9] to-[#E2EEF2]",
      iconColor: "text-teal-400"
    }
  ];

  return (
    <div className="min-h-screen bg-[#FDFCF8] text-[#1D1D1D] font-quicksand overflow-x-hidden">
      {/* Navigation */}
      <nav className="max-w-7xl mx-auto px-6 md:px-8 py-4 md:py-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 md:w-10 md:h-10 bg-[#7BC4B2] rounded-lg md:rounded-xl flex items-center justify-center text-white font-bold text-xl md:text-2xl">K</div>
          <span className="text-xl md:text-2xl font-bold tracking-tight text-[#7BC4B2]">KAMI</span>
        </div>
        <div className="hidden md:flex items-center gap-10 font-bold text-sm text-[#4A4A4A]">
          <a href="#" className="hover:text-[#7BC4B2] transition-colors">Trang chủ</a>
          <a href="#" className="hover:text-[#7BC4B2] transition-colors">Tính năng</a>
          <a href="#" className="hover:text-[#7BC4B2] transition-colors">Cộng đồng</a>
        </div>
        <div className="flex items-center gap-4 md:gap-6">
          <button onClick={() => navigate('/login')} className="font-bold text-xs md:text-sm text-[#4A4A4A]">Đăng nhập</button>
          <button onClick={() => navigate('/login')} className="bg-[#7BC4B2] text-white px-5 md:px-8 py-2.5 md:py-3 rounded-full font-bold text-xs md:text-sm shadow-lg shadow-[#7BC4B2]/20 hover:scale-105 transition-all">
            Tải ứng dụng
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 pt-8 md:pt-12 pb-16 md:pb-24 flex flex-col lg:flex-row items-center gap-10 lg:gap-0">
        <div className="flex-1 space-y-6 md:space-y-8 text-center lg:text-left order-2 lg:order-1">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-[5.5rem] font-bold leading-[1.2] lg:leading-[1.1] tracking-tight text-[#1D1D1D]"
          >
            Người bạn đồng hành <br className="hidden md:block" /> trong <span className="text-[#7BC4B2]">chăm sóc nhi khoa.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-base md:text-lg text-[#6A6A6A] max-w-xl mx-auto lg:mx-0 font-medium leading-relaxed px-4 lg:px-0"
          >
            Hỗ trợ phụ huynh bằng các công cụ hiện đại, lời khuyên từ chuyên gia và sự thấu cảm giúp bé luôn khỏe mạnh và hạnh phúc.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
          >
            <button onClick={() => navigate('/login')} className="w-full sm:w-auto bg-[#7BC4B2] text-white px-8 md:px-10 py-4 md:py-5 rounded-2xl md:rounded-3xl font-bold text-base md:text-lg shadow-xl shadow-[#7BC4B2]/20 hover:scale-105 transition-all">
              Tải KAMI App ngay
            </button>
            <button className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white shadow-lg flex items-center justify-center text-[#7BC4B2] hover:scale-110 transition-all border border-gray-100">
              <Play fill="currentColor" size={18} md:size={20} />
            </button>
          </motion.div>
        </div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex-1 relative order-1 lg:order-2 w-full max-w-[400px] lg:max-w-none mx-auto"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] h-[100%] md:w-[120%] md:h-[120%] bg-[#F0F7F5] rounded-full -z-10 blur-2xl md:blur-3xl"></div>
          <img src={kamiAvatar} alt="KAMI Mascot" className="w-full max-w-[300px] md:max-w-[550px] mx-auto drop-shadow-[0_15px_40px_rgba(123,196,178,0.25)] rounded-[3rem]" />
        </motion.div>
      </section>

      {/* Features Grid Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-24">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-10 md:mb-16 text-[#1D1D1D] text-center lg:text-left">Chăm sóc ngay trong tầm tay</h2>
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 w-full order-2 lg:order-1">
            {features.map((f, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`p-6 md:p-10 rounded-[2rem] md:rounded-[2.5rem] bg-gradient-to-br ${f.gradient} border border-white shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1`}
              >
                <div className={`w-10 h-10 md:w-14 md:h-14 bg-white rounded-xl md:rounded-2xl flex items-center justify-center shadow-sm mb-6 md:mb-8`}>
                  <f.icon className={f.iconColor} size={20} md:size={28} />
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-4 text-[#1D1D1D]">{f.title}</h3>
                <p className="text-sm md:text-base text-[#6A6A6A] font-medium leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
          <div className="flex-1 relative group order-1 lg:order-2 w-full max-w-[280px] md:max-w-[320px] mx-auto">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#7BC4B2]/20 to-transparent blur-3xl -z-10 rounded-full"></div>
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="relative"
            >
              <img 
                src={kamiMobilePreview} 
                alt="KAMI Mobile App" 
                className="w-full drop-shadow-[0_20px_50px_rgba(0,0,0,0.1)] hover:scale-105 transition-transform duration-500 rounded-[2.5rem]"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="max-w-7xl mx-auto px-6 md:px-8 py-10 md:py-16 border-t border-gray-100">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-wrap justify-center gap-6 md:gap-10 font-bold text-xs md:text-sm text-[#4A4A4A]">
            <a href="#" className="hover:text-[#7BC4B2]">Trang chủ</a>
            <a href="#" className="hover:text-[#7BC4B2]">Tính năng</a>
            <a href="#" className="hover:text-[#7BC4B2]">Cộng đồng</a>
            <a href="#" className="hover:text-[#7BC4B2]">Đăng nhập</a>
          </div>
          <div className="flex gap-4 md:gap-6">
            <a href="#" className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-[#7BC4B2] hover:text-white transition-all"><Mail size={16} md:size={18} /></a>
            <a href="#" className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-gray-100 flex items-center justify-center text-gray-600 hover:bg-[#7BC4B2] hover:text-white transition-all"><Globe size={16} md:size={18} /></a>
            <a href="#" className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-gray-100 flex items-center justify-center text-gray-600 hover:bg-[#7BC4B2] hover:text-white transition-all"><Share2 size={16} md:size={18} /></a>
          </div>
        </div>
        <div className="mt-8 md:mt-12 text-center text-xs text-gray-400 font-medium">
          © 2026 KAMI Pediatric Health. Bảo lưu mọi quyền.
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
