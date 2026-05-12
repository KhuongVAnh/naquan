import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Pencil, Trash2, Plus, CheckCircle2, X, Clock, Droplets, Pill, Moon, ArrowLeft } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useToast } from '../context/ToastContext';

const RemindersPage = () => {
  const navigate = useNavigate();
  const { showToast } = useToast();
  const [reminders, setReminders] = useState([
    { id: 1, time: '09:00', title: 'Uống thuốc buổi sáng', desc: '"Siêu nhân Bi nạp năng lượng nhé!"', icon: Pill, color: 'text-error', done: false },
    { id: 2, time: '12:00', title: 'Uống nước', desc: '"Mình uống một ngụm nước nhỏ nha."', icon: Droplets, color: 'text-primary', done: true },
    { id: 3, time: '20:30', title: 'Chuẩn bị ngủ', desc: '"KAMI kể Bi nghe một chuyện nhẹ nhé."', icon: Moon, color: 'text-secondary', done: false },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState(null);
  const [formData, setFormData] = useState({ title: '', desc: '', time: '09:00' });

  const toggleDone = (id) => {
    setReminders(prev => prev.map(r => r.id === id ? { ...r, done: !r.done } : r));
    const item = reminders.find(r => r.id === id);
    if (!item.done) showToast("Giỏi quá Bi ơi! 🌟");
  };

  const deleteReminder = (id) => {
    setReminders(prev => prev.filter(r => r.id !== id));
    showToast("Đã xóa nhắc nhở");
  };

  const openAddModal = () => {
    setEditingItem(null);
    setFormData({ title: '', desc: '', time: '09:00' });
    setIsModalOpen(true);
  };

  const openEditModal = (item) => {
    setEditingItem(item);
    setFormData({ title: item.title, desc: item.desc, time: item.time });
    setIsModalOpen(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingItem) {
      setReminders(prev => prev.map(r => r.id === editingItem.id ? { ...r, ...formData } : r));
      showToast("Đã cập nhật!");
    } else {
      const newRem = {
        id: Date.now(),
        ...formData,
        icon: Clock,
        color: 'text-tertiary',
        done: false
      };
      setReminders([...reminders, newRem]);
      showToast("Thêm mới thành công! ✨");
    }
    setIsModalOpen(false);
  };

  return (
    <div className="flex-1 flex flex-col min-h-0 bg-background font-nunito">
      <header className="px-margin pt-10 pb-6 flex items-start gap-4 shrink-0">
        <button onClick={() => navigate(-1)} className="mt-1 p-3 bg-white rounded-2xl shadow-sm text-primary hover:bg-primary-container/20 transition-all active:scale-90 border border-surface-container-highest">
          <ArrowLeft size={24} />
        </button>
        <div>
          <h1 className="font-quicksand font-bold text-display-md text-primary leading-tight">Lời nhắc</h1>
          <p className="text-body-lg text-on-surface-variant font-bold mt-1">Bé ơi, xem hôm nay mình có gì vui nào! 🌟</p>
        </div>
      </header>

      <main className="flex-1 min-h-0 overflow-y-auto px-margin space-y-md pb-10 no-scrollbar">
        <AnimatePresence>
          {reminders.map((item, idx) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className={`bg-white rounded-[2rem] p-md shadow-sm border-2 transition-all relative overflow-hidden ${item.done ? 'border-primary-container/30 bg-primary-container/5 opacity-70' : 'border-surface-container-highest shadow-[0_8px_20px_rgba(0,0,0,0.03)]'}`}
            >
              <div className="flex items-center justify-between mb-md">
                <div className="flex items-center gap-2">
                  <div className={`w-12 h-12 rounded-2xl ${item.done ? 'bg-primary-container/50' : 'bg-surface-container-low'} flex items-center justify-center`}>
                    <item.icon className={item.color} size={28} />
                  </div>
                  <span className={`font-bold text-label-lg px-4 py-2 rounded-full ${item.done ? 'bg-primary-container text-primary' : 'bg-white shadow-inner text-on-surface-variant border border-surface-container-highest'}`}>
                    {item.time}
                  </span>
                </div>
                <div className="flex gap-1">
                  <button onClick={() => openEditModal(item)} className="p-2 text-on-surface-variant hover:bg-surface-container rounded-full transition-colors">
                    <Pencil size={18} />
                  </button>
                  <button onClick={() => deleteReminder(item.id)} className="p-2 text-error hover:bg-error-container/20 rounded-full transition-colors">
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>
              
              <div className="flex items-start gap-md">
                <button 
                  onClick={() => toggleDone(item.id)} 
                  className={`mt-1 w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all ${item.done ? 'bg-primary border-primary text-on-primary' : 'bg-white border-outline-variant hover:border-primary'}`}
                >
                  {item.done ? <CheckCircle2 size={24} /> : <div className="w-5 h-5 rounded-full" />}
                </button>
                <div className="flex-1">
                  <h2 className={`font-quicksand font-bold text-headline-md leading-tight mb-1 ${item.done ? 'line-through text-on-surface-variant' : 'text-on-surface'}`}>
                    {item.title}
                  </h2>
                  <p className="text-body-md italic text-on-surface-variant font-bold leading-snug">{item.desc}</p>
                </div>
              </div>

              {/* Decorative circle */}
              <div className={`absolute -right-6 -bottom-6 w-24 h-24 rounded-full opacity-5 pointer-events-none ${item.color.replace('text-', 'bg-')}`} />
            </motion.div>
          ))}
        </AnimatePresence>

        <button 
          onClick={openAddModal}
          className="w-full py-5 border-4 border-dashed border-primary-container/40 rounded-[2rem] flex items-center justify-center gap-3 text-primary font-bold text-headline-sm hover:bg-primary-container/10 transition-all active:scale-95 group"
        >
          <div className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center group-hover:scale-110 transition-transform">
            <Plus size={24} />
          </div>
          Thêm nhắc nhở mới
        </button>
      </main>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center p-6">
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }} 
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-black/40 backdrop-blur-sm" 
            />
            <motion.div
              initial={{ scale: 0.9, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 20, opacity: 0 }}
              className="bg-white w-full max-w-sm rounded-[2.5rem] p-lg shadow-2xl z-10 relative overflow-hidden"
            >
              <div className="flex items-center justify-between mb-lg">
                <h2 className="text-headline-lg font-quicksand font-bold text-primary">
                  {editingItem ? 'Sửa nhắc nhở' : 'Thêm nhắc nhở'}
                </h2>
                <button onClick={() => setIsModalOpen(false)} className="p-2 rounded-full bg-surface-container-low text-on-surface-variant">
                  <X size={20} />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-md">
                <div className="space-y-xs">
                  <label className="text-label-lg font-bold text-on-surface ml-2">Việc cần làm:</label>
                  <input 
                    type="text" 
                    required
                    value={formData.title}
                    onChange={e => setFormData({...formData, title: e.target.value})}
                    className="w-full px-6 py-4 rounded-2xl bg-surface-container-low border-2 border-transparent focus:border-primary/20 outline-none font-bold"
                    placeholder="VD: Uống nước, Đi ngủ..."
                  />
                </div>
                <div className="space-y-xs">
                  <label className="text-label-lg font-bold text-on-surface ml-2">Lời nhắn cho bé:</label>
                  <input 
                    type="text" 
                    value={formData.desc}
                    onChange={e => setFormData({...formData, desc: e.target.value})}
                    className="w-full px-6 py-4 rounded-2xl bg-surface-container-low border-2 border-transparent focus:border-primary/20 outline-none font-bold"
                    placeholder="VD: Siêu nhân Bi ơi..."
                  />
                </div>
                <div className="space-y-xs">
                  <label className="text-label-lg font-bold text-on-surface ml-2">Thời gian:</label>
                  <input 
                    type="time" 
                    required
                    value={formData.time}
                    onChange={e => setFormData({...formData, time: e.target.value})}
                    className="w-full px-6 py-4 rounded-2xl bg-surface-container-low border-2 border-transparent focus:border-primary/20 outline-none font-bold"
                  />
                </div>
                <button type="submit" className="w-full py-4 bg-primary text-on-primary rounded-full font-bold text-label-lg shadow-lg mt-4">
                  {editingItem ? 'Lưu thay đổi' : 'Xác nhận'}
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default RemindersPage;
