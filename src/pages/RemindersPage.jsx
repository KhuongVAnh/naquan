import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Pencil, Trash2, Plus, CheckCircle2, Circle, Clock, Droplets, Pill, Moon, ArrowLeft } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const RemindersPage = () => {
  const navigate = useNavigate();
  const [reminders, setReminders] = useState([
    { id: 1, time: '09:00', title: 'Uống thuốc buổi sáng', desc: '"Siêu nhân Bi nạp năng lượng nhé!"', icon: Pill, color: 'text-error', done: false },
    { id: 2, time: '12:00', title: 'Uống nước', desc: '"Mình uống một ngụm nước nhỏ nha."', icon: Droplets, color: 'text-primary', done: true },
    { id: 3, time: '20:30', title: 'Chuẩn bị ngủ', desc: '"KAMI kể Bi nghe một chuyện nhẹ nhé."', icon: Moon, color: 'text-secondary', done: false },
  ]);

  const toggleDone = (id) => {
    setReminders(prev => prev.map(r => r.id === id ? { ...r, done: !r.done } : r));
  };

  const deleteReminder = (id) => {
    setReminders(prev => prev.filter(r => r.id !== id));
  };

  const addReminder = () => {
    const newRem = {
      id: Date.now(),
      time: '15:00',
      title: 'Hoạt động mới',
      desc: '"KAMI cùng chơi với Bi nào!"',
      icon: Clock,
      color: 'text-tertiary',
      done: false
    };
    setReminders([...reminders, newRem]);
  };

  return (
    <div className="min-h-screen bg-background font-nunito pb-10">
      <header className="px-margin pt-10 pb-6 flex items-start gap-4">
        <button onClick={() => navigate(-1)} className="mt-1 p-2 bg-white rounded-full shadow-sm text-primary hover:bg-primary-container/20 transition-all active:scale-90">
          <ArrowLeft size={24} />
        </button>
        <div>
          <h1 className="font-quicksand font-bold text-display-md text-on-surface leading-tight">Nhắc nhở hôm nay</h1>
          <p className="text-body-lg text-on-surface-variant font-bold mt-2">Bé ơi, xem hôm nay mình có gì vui nào! 🌟</p>
        </div>
      </header>

      <main className="px-margin space-y-4">
        <AnimatePresence>
          {reminders.map((item) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className={`bg-white rounded-2xl p-4 shadow-sm border-2 transition-all ${item.done ? 'border-primary-container/30 bg-primary-container/5 opacity-70' : 'border-transparent'}`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className={`font-bold text-label-lg px-3 py-1 rounded-full ${item.done ? 'bg-primary-container text-primary' : 'bg-surface-container text-on-surface-variant'}`}>
                  {item.time}
                </span>
                <div className="flex gap-2">
                  <button className="p-2 text-on-surface-variant hover:bg-surface-container rounded-full transition-colors">
                    <Pencil size={18} />
                  </button>
                  <button onClick={() => deleteReminder(item.id)} className="p-2 text-error hover:bg-error-container/20 rounded-full transition-colors">
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <button onClick={() => toggleDone(item.id)} className="mt-1">
                  {item.done ? <CheckCircle2 className="text-primary" size={28} /> : <Circle className="text-outline-variant" size={28} />}
                </button>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <item.icon className={item.color} size={20} />
                    <h2 className={`font-quicksand font-bold text-headline-md leading-tight ${item.done ? 'line-through text-on-surface-variant' : 'text-on-surface'}`}>
                      {item.title}
                    </h2>
                  </div>
                  <p className="text-sm italic text-on-surface-variant font-bold">{item.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        <button 
          onClick={addReminder}
          className="w-full py-4 border-2 border-dashed border-primary-container rounded-2xl flex items-center justify-center gap-2 text-primary font-bold hover:bg-primary-container/10 transition-all active:scale-95"
        >
          <Plus size={20} />
          Thêm nhắc nhở mới
        </button>
      </main>
    </div>
  );
};

export default RemindersPage;
