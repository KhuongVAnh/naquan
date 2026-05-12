import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import kamiAvatar from '../assets/KAMI_avatar.png';

const RegisterPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    password: '',
    age: ''
  });

  const handleRegister = (e) => {
    e.preventDefault();
    // Redirect to login after "registration"
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-background flex flex-col items-center px-margin pt-12 pb-10">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-sm text-center"
      >
        <div className="mb-lg">
          <h1 className="text-display-md font-quicksand text-primary font-bold mb-2">Tham gia KAMI</h1>
          <p className="text-body-lg text-on-surface-variant font-bold leading-tight">
            Tạo tài khoản để bắt đầu hành trình nhé!
          </p>
        </div>

        <div className="bg-white rounded-[2.5rem] p-lg shadow-sm border border-surface-container-highest">
          <h2 className="text-headline-md font-quicksand font-bold text-on-surface mb-lg">Đăng ký</h2>
          
          <form onSubmit={handleRegister} className="space-y-md">
            <div className="space-y-xs text-left">
              <label className="text-label-lg font-bold text-on-surface ml-4">Tên của bé:</label>
              <input 
                type="text" 
                required
                className="w-full px-6 py-4 rounded-full bg-surface-container-low border-2 border-transparent focus:border-primary-container outline-none font-bold text-on-surface transition-all"
                placeholder="Nhập tên bé..."
              />
            </div>

            <div className="space-y-xs text-left">
              <label className="text-label-lg font-bold text-on-surface ml-4">Tên TK:</label>
              <input 
                type="text" 
                required
                className="w-full px-6 py-4 rounded-full bg-surface-container-low border-2 border-transparent focus:border-primary-container outline-none font-bold text-on-surface transition-all"
                placeholder="Nhập tên tài khoản..."
              />
            </div>

            <div className="space-y-xs text-left">
              <label className="text-label-lg font-bold text-on-surface ml-4">Mật khẩu:</label>
              <input 
                type="password" 
                required
                className="w-full px-6 py-4 rounded-full bg-surface-container-low border-2 border-transparent focus:border-primary-container outline-none font-bold text-on-surface transition-all"
                placeholder="Nhập mật khẩu..."
              />
            </div>

            <button 
              type="submit"
              className="w-full py-4 bg-secondary text-on-secondary rounded-full font-bold text-label-lg shadow-lg hover:bg-secondary/90 active:scale-95 transition-all mt-4"
            >
              Đăng ký ngay
            </button>
          </form>

          <div className="mt-lg">
            <Link to="/" className="text-primary font-bold text-sm hover:underline">
              Đã có tài khoản? Đăng nhập tại đây
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default RegisterPage;
