"use client";
import React, { useState, useEffect } from 'react';
import { 
  Search, User, ShieldCheck, PlayCircle, Home, 
  Play, X, TrendingUp, MessageSquare
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function MobileView() {
  const [activeNav, setActiveNav] = useState('Recommend');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // 1. Insight 沉浸流数据
  const insightVideos = Array(5).fill(null).map((_, i) => ({
    id: i,
    factory: "Hamlix Verified Node #" + (1024 + i),
    desc: "Precision CNC Machining - Aluminum Alloy 6061-T6 High Speed Production Line.",
    tags: ["CNC", "ISO9001", "24H Live"],
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-industrial-robotic-arm-in-factory-4416-large.mp4",
  }));

  const banners = [
    { id: 1, title: "Global Sourcing 2026: AI Integration", img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800" },
    { id: 2, title: "Direct Factory Access: Real-time Nodes", img: "https://images.unsplash.com/photo-1565891741441-64926e441838?q=80&w=800" },
  ];

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (activeNav === 'Recommend') {
      const timer = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % banners.length);
      }, 5000);
      return () => clearInterval(timer);
    }
  }, [banners.length, activeNav]);

  return (
    <div className="font-roboto flex flex-col h-screen bg-[#fafafa] text-gray-900 antialiased overflow-hidden">
      
      {/* 1. 动态 Header (Insight 模式隐藏) */}
      <AnimatePresence>
        {activeNav === 'Recommend' && (
          <motion.header 
            initial={{ y: -100 }} animate={{ y: 0 }} exit={{ y: -100 }}
            className="fixed top-0 z-50 w-full bg-white shadow-sm pb-2 shrink-0"
          >
            <div className="flex items-center gap-3 px-4 pt-2">
              {!isSearchFocused && (
                <div className="flex flex-shrink-0 select-none">
                  <span className="text-black font-sans font-bold text-2xl tracking-tighter leading-none">Hamlix</span>
                </div>
              )}
              <div className="flex-1 relative">
                <input 
                  type="text" 
                  onFocus={() => setIsSearchFocused(true)}
                  placeholder="Search global manufacturers & products..." 
                  className="w-full h-10 bg-[#f4f4f4] rounded-full px-5 pr-10 text-[13px] font-medium outline-none border-none"
                />
                {isSearchFocused ? <X size={16} className="absolute right-4 top-3 text-gray-400" onClick={() => setIsSearchFocused(false)} /> : <Search size={16} className="absolute right-4 top-3 text-gray-400" />}
              </div>
              {!isSearchFocused && (
                <div className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center border border-gray-100 overflow-hidden shrink-0">
                  <User size={20} className="text-black" />
                </div>
              )}
            </div>
          </motion.header>
        )}
      </AnimatePresence>

      {/* 2. 内容区 */}
      <div className="flex-1 overflow-hidden relative">
        <AnimatePresence mode="wait">
          
          {activeNav === 'Recommend' ? (
            <motion.main 
              key="recommend" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="h-full overflow-y-auto px-3 pt-20 pb-20 no-scrollbar"
            >
              <section className="mb-4 relative rounded-xl overflow-hidden aspect-[21/9] shadow-sm bg-gray-200 active:scale-[0.98] transition-transform">
                <AnimatePresence mode="wait">
                  <motion.img key={currentSlide} src={banners[currentSlide].img} initial={{ opacity: 0.8 }} animate={{ opacity: 1 }} exit={{ opacity: 0.8 }} className="w-full h-full object-cover" />
                </AnimatePresence>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent p-4 flex flex-col justify-end">
                  <h2 className="text-white text-[13px] font-bold uppercase italic tracking-tighter">{banners[currentSlide].title}</h2>
                </div>
              </section>

              <section className="grid grid-cols-2 gap-3">
                {isLoading ? Array(6).fill(0).map((_, i) => (
                    <div key={i} className="flex flex-col gap-2 animate-pulse"><div className="aspect-video bg-gray-200 rounded-xl" /><div className="h-3 bg-gray-200 rounded w-full" /></div>
                  )) : Array(10).fill({
                    title: "Industrial Components Factory Direct", factory: "Hamlix Verified", views: "12.5k", duration: "03:20",
                    thumbnail: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=600"
                  }).map((v, i) => (
                    <div key={i} className="flex flex-col bg-white rounded-xl overflow-hidden shadow-sm border border-gray-50 active:scale-[0.97] transition-all">
                      <div className="relative aspect-video">
                        <img src={v.thumbnail} className="w-full h-full object-cover" />
                        <div className="absolute inset-x-0 bottom-0 h-6 bg-gradient-to-t from-black/80 to-transparent flex items-center justify-between px-2 text-white text-[9px] font-bold">
                          <span className="flex items-center gap-0.5"><PlayCircle size={10} /> {v.views}</span>
                          <span>{v.duration}</span>
                        </div>
                      </div>
                      <div className="p-2">
                        <h3 className="text-[11px] font-bold line-clamp-2 leading-snug text-black mb-1.5">{v.title}</h3>
                        <div className="flex items-center gap-1">
                          <ShieldCheck size={10} className="text-black" />
                          <span className="text-[9px] text-gray-400 font-black uppercase tracking-tighter">{v.factory}</span>
                        </div>
                      </div>
                    </div>
                  ))}
              </section>
            </motion.main>
          ) : (
            
            <motion.main 
              key="insight" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="h-full w-full bg-black snap-y snap-mandatory overflow-y-scroll no-scrollbar"
            >
              {insightVideos.map((v) => (
                <div key={v.id} className="h-full w-full snap-start relative flex flex-col justify-center bg-black">
                  <video src={v.videoUrl} className="h-full w-full object-cover opacity-80" autoPlay muted loop playsInline />
                  
                  <div className="absolute inset-x-0 bottom-0 p-6 pt-20 bg-gradient-to-t from-black via-black/20 to-transparent flex flex-col gap-3">
                    <div className="flex items-center gap-2">
                      <div className="bg-white text-black text-[10px] font-black px-2 py-0.5 rounded uppercase tracking-tighter italic">Verified Node</div>
                      <span className="text-white text-sm font-bold tracking-tight uppercase">{v.factory}</span>
                    </div>
                    <p className="text-white/90 text-xs leading-relaxed max-w-[85%] font-medium">{v.desc}</p>
                    <div className="flex gap-2 mt-1">
                      {v.tags.map(tag => (
                        <span key={tag} className="text-white/60 text-[9px] font-bold border border-white/20 px-2 py-0.5 rounded-sm uppercase tracking-widest bg-white/5">#{tag}</span>
                      ))}
                    </div>
                  </div>

                  {/* 仅保留 Chat 操作栏 */}
                  <div className="absolute right-4 bottom-24 flex flex-col items-center">
                    <div className="flex flex-col items-center gap-1">
                      <div className="w-12 h-12 rounded-full border border-white/20 bg-black/40 flex items-center justify-center text-white backdrop-blur-md active:scale-90 transition-transform">
                        <MessageSquare size={24} />
                      </div>
                      <span className="text-[9px] text-white font-bold uppercase tracking-widest mt-1">Chat</span>
                    </div>
                  </div>
                </div>
              ))}
            </motion.main>
          )}
        </AnimatePresence>
      </div>

      {/* 底部导航 */}
      <nav className={`fixed bottom-0 w-full h-14 flex items-center justify-around px-12 z-50 pb-safe transition-colors duration-500 ${
        activeNav === 'Insight' ? 'bg-black/80 backdrop-blur-md border-t border-white/10' : 'bg-white/80 backdrop-blur-lg border-t border-gray-100'
      }`}>
        <button onClick={() => setActiveNav('Recommend')} className={`flex flex-col items-center transition-all active:scale-90 ${activeNav === 'Recommend' ? 'text-black' : (activeNav === 'Insight' ? 'text-white/40' : 'text-gray-300')}`}>
          <Home size={20} strokeWidth={activeNav === 'Recommend' ? 2.5 : 2} />
          <span className="text-[9px] font-black uppercase tracking-widest mt-0.5">Recommend</span>
        </button>
        <button onClick={() => setActiveNav('Insight')} className={`flex flex-col items-center transition-all active:scale-90 ${activeNav === 'Insight' ? 'text-white' : 'text-gray-300'}`}>
          <Play size={20} strokeWidth={activeNav === 'Insight' ? 2.5 : 2} fill={activeNav === 'Insight' ? 'white' : 'none'} />
          <span className="text-[9px] font-black uppercase tracking-widest mt-0.5">Insight</span>
        </button>
      </nav>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap');
        .font-roboto { font-family: 'Roboto', sans-serif; }
        .pb-safe { padding-bottom: env(safe-area-inset-bottom); }
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
}