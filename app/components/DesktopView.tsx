"use client";
import React, { useState, useEffect, useRef } from 'react';
import { 
  Search, User, ShieldCheck, Upload, 
  ChevronLeft, ChevronRight, TrendingUp, X
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// 视频卡片组件 (悬停预览 + 无播放量)
const VideoCard = ({ video, isLoading }: { video: any, isLoading: boolean }) => {
  const [isHovered, setIsHovered] = useState(false);

  if (isLoading) {
    return (
      <div className="flex flex-col gap-3 animate-pulse">
        <div className="aspect-video bg-gray-100 rounded-2xl"></div>
        <div className="flex gap-3">
          <div className="w-9 h-9 rounded-full bg-gray-100 shrink-0"></div>
          <div className="flex-1 space-y-2">
            <div className="h-4 bg-gray-100 rounded w-full"></div>
            <div className="h-3 bg-gray-100 rounded w-2/3"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div 
      className="group cursor-pointer active:scale-[0.98] transition-all"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-video rounded-2xl overflow-hidden mb-3 bg-gray-100 border border-gray-100 shadow-sm group-hover:shadow-lg transition-all">
        {isHovered ? (
          <video 
            src={video.videoUrl} 
            autoPlay 
            muted 
            loop 
            playsInline 
            className="w-full h-full object-cover"
          />
        ) : (
          <img src={video.thumbnail} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" alt="Thumb" />
        )}
        
        <div className="absolute bottom-2 right-2 px-2 py-0.5 bg-black/60 backdrop-blur-md rounded text-white text-[10px] font-bold">
          {video.duration}
        </div>
      </div>
      
      <div className="flex gap-3 px-1">
        <div className="w-9 h-9 rounded-full bg-black flex-shrink-0 flex items-center justify-center text-white font-bold text-xs">H</div>
        <div className="flex-1">
          <h3 className="text-sm font-bold line-clamp-2 leading-tight mb-1 group-hover:text-black transition-colors">{video.title}</h3>
          <div className="flex items-center gap-1.5 text-[11px] text-gray-400 font-bold uppercase tracking-tighter">
            <ShieldCheck size={12} className="text-black" /> {video.factory}
          </div>
        </div>
      </div>
    </div>
  );
};

export default function DesktopView() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  
  // 强制限速：500ms 内只允许切换一次
  const lastClickTime = useRef(0);
  const COOLDOWN = 500;

  const banners = [
    { id: 1, title: "GLOBAL SOURCING 2026", desc: "Video-first factory inspections.", img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1200" },
    { id: 2, title: "DIRECT FACTORY ACCESS", desc: "Connect with verified manufacturers.", img: "https://images.unsplash.com/photo-1565891741441-64926e441838?q=80&w=1200" },
  ];

  const mockVideos = Array(15).fill(null).map((_, i) => ({
    id: i,
    title: "Precision Industrial Components - High Speed Production Line Node",
    factory: "Hamlix Verified",
    duration: "03:20",
    thumbnail: `https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?q=80&w=800&sig=${i}`,
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-industrial-robotic-arm-in-factory-4416-large.mp4"
  }));

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  const nextSlide = () => {
    const now = Date.now();
    if (now - lastClickTime.current < COOLDOWN) return;
    lastClickTime.current = now;
    setCurrentSlideIndex((prev) => (prev + 1) % banners.length);
  };

  const prevSlide = () => {
    const now = Date.now();
    if (now - lastClickTime.current < COOLDOWN) return;
    lastClickTime.current = now;
    setCurrentSlideIndex((prev) => (prev - 1 + banners.length) % banners.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  const SkeletonCard = () => (
    <div className="flex flex-col gap-3 animate-pulse">
      <div className="aspect-video bg-gray-100 rounded-2xl"></div>
      <div className="flex gap-3">
        <div className="w-9 h-9 rounded-full bg-gray-100 shrink-0"></div>
        <div className="flex-1 space-y-2">
          <div className="h-4 bg-gray-100 rounded w-full"></div>
          <div className="h-3 bg-gray-100 rounded w-2/3"></div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="font-roboto flex flex-col h-screen bg-white text-gray-900 antialiased overflow-hidden">
      
      {/* 1. 顶部导航栏 */}
      <header className="fixed top-0 z-50 w-full h-24 bg-white flex items-center px-6 border-b border-gray-50">
        <div className="w-[320px] flex-shrink-0 flex items-center">
          <div className="flex flex-col ml-8 select-none cursor-pointer active:scale-95 transition-transform">
            <div className="text-black font-sans font-bold text-5xl tracking-tighter leading-none">Hamlix</div>
            <div className="text-black font-roboto text-[12px] tracking-[0.15em] uppercase mt-1">Video Driven Supply Discovery</div>
          </div>
        </div>

        <div className="flex-1 flex justify-center px-4">
          <div className={`relative transition-all duration-500 ease-in-out ${isSearchFocused ? 'w-full max-w-[800px]' : 'w-[500px]'}`}>
            <div className="flex items-center">
              {/* 搜索框：已增加黑色边框 border-black */}
              <input 
                type="text" 
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => setTimeout(() => setIsSearchFocused(false), 200)}
                placeholder="Search global manufacturers & products..." 
                className="w-full h-11 bg-[#f8f8f8] border-2 border-black rounded-full px-6 pr-12 outline-none text-sm font-medium transition-all focus:bg-white"
              />
              <div className="absolute right-2 top-1.5 w-8 h-8 bg-black text-white rounded-full flex items-center justify-center cursor-pointer active:scale-90 transition-transform">
                {isSearchFocused ? <X size={16} /> : <Search size={16} strokeWidth={3} />}
              </div>
            </div>
            <AnimatePresence>
              {isSearchFocused && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }}
                  className="absolute top-14 left-0 w-full bg-white border border-gray-100 rounded-3xl shadow-2xl p-6 z-[60]"
                >
                  <div className="flex items-center gap-2 mb-4 text-gray-400 text-xs font-bold uppercase tracking-widest">
                    <TrendingUp size={14} /> Industrial Trends
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {['Aerospace', 'Sustainable', 'CNC', 'Robotics'].map((tag) => (
                      <span key={tag} className="px-4 py-2 bg-gray-50 rounded-full text-xs font-bold hover:bg-black hover:text-white cursor-pointer transition-all active:scale-95">{tag}</span>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        <div className="w-[320px] flex-shrink-0 flex items-center justify-end gap-5 pr-4">
          <button className="flex items-center gap-2 bg-black text-white px-5 py-2.5 rounded-full text-xs font-bold hover:opacity-80 transition-all active:scale-[0.97] whitespace-nowrap">
            <Upload size={14} /> JOIN AS SUPPLIER
          </button>
          <div className="w-10 h-10 bg-gray-100 rounded-full border border-gray-100 cursor-pointer overflow-hidden flex items-center justify-center text-black active:scale-90 transition-transform mr-4">
            <User size={22} />
          </div>
        </div>
      </header>

      <div className="flex pt-24 h-full overflow-hidden">
        <main className="flex-1 overflow-y-auto bg-white p-6 pt-4 custom-scrollbar">
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-5 mb-12">
            
            <div className="lg:col-span-2 lg:row-span-2 relative aspect-video lg:aspect-auto rounded-3xl overflow-hidden group shadow-xl border border-black/5 bg-black active:scale-[0.995] transition-transform">
              {isLoading ? <div className="w-full h-full bg-gray-100 animate-pulse" /> : (
                <div className="relative w-full h-full bg-black">
                  <AnimatePresence initial={false} mode="popLayout">
                    <motion.img 
                      key={currentSlideIndex} 
                      src={banners[currentSlideIndex].img}
                      initial={{ x: '100%' }} 
                      animate={{ x: 0 }}      
                      exit={{ x: '-100%' }}   
                      transition={{ 
                        duration: 0.5, 
                        ease: [0.23, 1, 0.32, 1] 
                      }} 
                      className="absolute top-0 left-0 w-full h-full object-cover"
                      alt="Banner"
                    />
                  </AnimatePresence>
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-8 z-10 pointer-events-none">
                    <h2 className="text-white text-3xl font-black mb-2 uppercase tracking-tighter italic">{banners[currentSlideIndex].title}</h2>
                    <p className="text-white/80 text-xs font-medium tracking-wide mb-4">{banners[currentSlideIndex].desc}</p>
                    <div className="flex gap-2">
                      {banners.map((_, i) => (
                        <div key={i} className={`h-1 rounded-full transition-all duration-300 ${i === currentSlideIndex ? 'w-8 bg-white' : 'w-2 bg-white/30'}`} />
                      ))}
                    </div>
                  </div>
                  
                  <div className="absolute bottom-4 right-4 flex items-center gap-2 z-20">
                    <button onClick={prevSlide} className="p-2 bg-black/60 rounded-full text-white hover:bg-black transition-all active:scale-90 border border-white/20 backdrop-blur-sm"><ChevronLeft size={20} /></button>
                    <button onClick={nextSlide} className="p-2 bg-black/60 rounded-full text-white hover:bg-black transition-all active:scale-90 border border-white/20 backdrop-blur-sm"><ChevronRight size={20} /></button>
                  </div>
                </div>
              )}
            </div>

            {isLoading ? Array(6).fill(0).map((_, i) => <div key={i} className="aspect-video bg-gray-100 rounded-xl animate-pulse" />) :
              mockVideos.slice(0, 6).map((v) => <VideoCard key={v.id} video={v} isLoading={isLoading} />)
            }
          </section>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-x-5 gap-y-10 pb-10">
            {isLoading ? Array(10).fill(0).map((_, i) => <SkeletonCard key={i} />) :
              mockVideos.map((v) => <VideoCard key={v.id} video={v} isLoading={isLoading} />)
            }
          </div>
        </main>
      </div>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,500;0,700;0,900;1,400;1,700&display=swap');
        .font-roboto { font-family: 'Roboto', sans-serif; }
        .custom-scrollbar::-webkit-scrollbar { width: 5px; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #e5e7eb; border-radius: 10px; }
      `}</style>
    </div>
  );
}