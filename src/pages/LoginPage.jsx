import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import kamiAvatar from '../assets/KAMI_avatar.png';
import { useToast } from '../context/ToastContext';

const LoginPage = () => {
  const navigate = useNavigate();
  const { showToast } = useToast();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    showToast("Đăng nhập thành công! 👋");
    // Redirect regardless of input as per requirements
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-background flex flex-col items-center px-margin pt-16">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-sm text-center"
      >
        <div className="mb-lg">
          <h1 className="text-display-md font-quicksand text-primary font-bold mb-2">Trang chủ</h1>
          <p className="text-body-lg text-on-surface-variant font-bold leading-tight">
            Đăng nhập/đăng ký để sử dụng KAMI
          </p>
        </div>

        <div className="w-32 h-32 mx-auto mb-xl rounded-[2.5rem] bg-primary-container/20 flex items-center justify-center border-4 border-white shadow-lg overflow-hidden">
          <img src={kamiAvatar} alt="KAMI" className="w-full h-full object-cover" />
        </div>

        <div className="bg-white rounded-[2.5rem] p-lg shadow-sm border border-surface-container-highest">
          <h2 className="text-headline-md font-quicksand font-bold text-on-surface mb-lg">Đăng nhập</h2>
          
          <form onSubmit={handleLogin} className="space-y-md">
            <div className="space-y-xs text-left">
              <label className="text-label-lg font-bold text-on-surface ml-4">Tên TK:</label>
              <input 
                type="text" 
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-6 py-4 rounded-full bg-surface-container-low border-2 border-transparent focus:border-primary-container outline-none font-bold text-on-surface transition-all"
                placeholder="Nhập tên tài khoản..."
              />
            </div>

            <div className="space-y-xs text-left">
              <label className="text-label-lg font-bold text-on-surface ml-4">Mật khẩu:</label>
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-6 py-4 rounded-full bg-surface-container-low border-2 border-transparent focus:border-primary-container outline-none font-bold text-on-surface transition-all"
                placeholder="Nhập mật khẩu..."
              />
            </div>

            <button 
              type="submit"
              className="w-full py-4 bg-primary text-on-primary rounded-full font-bold text-label-lg shadow-lg hover:bg-primary/90 active:scale-95 transition-all mt-4"
            >
              Đăng nhập
            </button>
          </form>

          <div className="mt-lg">
            <Link to="/register" className="text-primary font-bold text-sm hover:underline">
              Chưa có tk thì ấn đăng ký tại đây
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default LoginPage;
