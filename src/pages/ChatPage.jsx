import React, { useState } from 'react';
import { ArrowLeft, Send, Smile, Mic, MoreVertical, BookOpen, Users } from 'lucide-react';
import kamiAvatar from '../assets/KAMI_avatar.png';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const ChatPage = () => {
  const navigate = useNavigate();
  const [messages, setMessages] = useState([
    { id: 1, text: "Chào Bi! Hôm nay Bi cảm thấy thế nào? KAMI ở đây để lắng nghe Bi nè. ✨", sender: 'KAMI', time: '09:00' }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = (text = inputText) => {
    const messageToSend = typeof text === 'string' ? text : inputText;
    if (!messageToSend.trim()) return;

    const newUserMsg = {
      id: messages.length + 1,
      text: messageToSend,
      sender: 'user',
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, newUserMsg]);
    setInputText('');
    setIsTyping(true);

    // Mock AI Reply
    setTimeout(() => {
      let replyText = "KAMI hiểu rồi! Bi giỏi quá khi chia sẻ với KAMI. Mình cùng làm gì đó vui nhé? 🌈";
      if (messageToSend.toLowerCase().includes('đau')) {
        replyText = "Ôi, KAMI thương Bi quá. Bi đã nói với ba mẹ hoặc bác sĩ chưa? Để KAMI báo ba mẹ nhé. 🫂";
      } else if (messageToSend.toLowerCase().includes('vui')) {
        replyText = "Tuyệt vời! KAMI cũng thấy vui lây nè. Bi muốn chơi game hay nghe truyện nào? 🎈";
      }

      const KAMIReply = {
        id: Date.now(),
        text: replyText,
        sender: 'KAMI',
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, KAMIReply]);
      setIsTyping(false);
    }, 1500);
  };

  const emotions = [
    { emoji: '😄', label: 'Vui' },
    { emoji: '😢', label: 'Buồn' },
    { emoji: '🤕', label: 'Đau' },
    { emoji: '😨', label: 'Sợ' },
    { emoji: '🥱', label: 'Chán' },
    { emoji: '👩‍👧', label: 'Nhớ mẹ' },
  ];

  return (
    <div className="flex flex-col flex-1 min-h-0 bg-background font-nunito">
      {/* Header */}
      <header className="bg-white border-b border-surface-container-highest px-4 py-3 flex items-center justify-between shrink-0 z-50">
        <div className="flex items-center gap-3">
          <button onClick={() => navigate(-1)} className="p-2 rounded-full hover:bg-surface-container transition-colors">
            <ArrowLeft size={24} className="text-on-surface-variant" />
          </button>
          <div className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center text-primary relative shadow-sm border-2 border-primary-fixed">
            <img 
              alt="KAMI Avatar" 
              className="object-cover w-full h-full rounded-full" 
              src={kamiAvatar} 
            />
            <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
          </div>
          <div>
            <h1 className="font-quicksand font-bold text-headline-md text-on-surface leading-tight">KAMI</h1>
            <p className="text-[10px] text-green-600 font-bold uppercase tracking-wider">Đang lắng nghe Bi...</p>
          </div>
        </div>
        <button className="p-2 rounded-full hover:bg-surface-container transition-colors">
          <MoreVertical size={24} className="text-on-surface-variant" />
        </button>
      </header>

      {/* Chat Area */}
      <main className="flex-1 min-h-0 overflow-y-auto p-4 space-y-4 no-scrollbar bg-[#F8FAFC]">
        <AnimatePresence initial={false}>
          {messages.map((msg) => (
            <motion.div 
              key={msg.id}
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`max-w-[85%] p-4 rounded-2xl shadow-sm border ${
                msg.sender === 'user' 
                ? 'bg-primary text-on-primary rounded-tr-none border-primary' 
                : 'bg-white text-on-surface rounded-tl-none border-surface-container-highest'
              }`}>
                <p className="text-body-md font-bold leading-relaxed">{msg.text}</p>
                <p className={`text-[10px] mt-1 opacity-70 font-bold ${msg.sender === 'user' ? 'text-right' : 'text-left'}`}>
                  {msg.time}
                </p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
        
        {isTyping && (
          <div className="flex justify-start">
            <div className="bg-white p-4 rounded-2xl rounded-tl-none border border-surface-container-highest shadow-sm">
              <div className="flex gap-1">
                <div className="w-2 h-2 bg-primary/40 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-primary/60 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                <div className="w-2 h-2 bg-primary/80 rounded-full animate-bounce [animation-delay:0.4s]"></div>
              </div>
            </div>
          </div>
        )}
        
        {/* Quick Actions (only show if no messages yet or after some time) */}
        {!isTyping && messages.length > 1 && (
          <div className="flex flex-wrap gap-2 justify-center pt-4">
             <button onClick={() => navigate('/dashboard/story')} className="bg-secondary-container/50 text-secondary font-bold text-xs px-4 py-2 rounded-full border border-secondary/20 flex items-center gap-1">
               <BookOpen size={14} /> KAMI kể chuyện
             </button>
             <button onClick={() => navigate('/dashboard/alerts')} className="bg-error-container/50 text-error font-bold text-xs px-4 py-2 rounded-full border border-error/20 flex items-center gap-1">
               <Users size={14} /> Con cần người lớn
             </button>
          </div>
        )}
      </main>

      {/* Input Area */}
      <footer className="bg-white border-t border-surface-container-highest p-4 space-y-4 shrink-0">
        {/* Quick Emotions */}
        <div className="flex gap-3 overflow-x-auto no-scrollbar pb-1">
          {emotions.map((item, idx) => (
            <button 
              key={idx}
              onClick={() => handleSend(`Con thấy ${item.label.toLowerCase()}`)}
              className="flex flex-col items-center gap-1 bg-surface-container-low px-3 py-2 rounded-xl border border-surface-container-highest hover:bg-primary-container/20 transition-all active:scale-95 shrink-0"
            >
              <span className="text-xl">{item.emoji}</span>
              <span className="text-[10px] font-bold text-on-surface-variant uppercase">{item.label}</span>
            </button>
          ))}
        </div>

        {/* Text Input */}
        <div className="flex items-center gap-2 bg-surface-container-low p-2 rounded-full shadow-inner border-2 border-transparent focus-within:border-primary/20 transition-all">
          <button className="p-2 text-primary hover:bg-primary-container/20 rounded-full transition-colors">
            <Smile size={24} />
          </button>
          <input 
            className="flex-1 bg-transparent border-none focus:ring-0 text-body-md py-2 px-1 font-bold placeholder:text-outline-variant" 
            placeholder="Nhắn gì đó với KAMI..." 
            type="text" 
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
          />
          <button 
            onClick={() => handleSend()}
            className="bg-primary text-on-primary p-3 rounded-full shadow-md hover:bg-primary/90 active:scale-95 transition-all"
          >
            <Send size={20} />
          </button>
        </div>
      </footer>
    </div>
  );
};

export default ChatPage;
