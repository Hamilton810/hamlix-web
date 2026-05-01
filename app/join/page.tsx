"use client";
import React, { useState, useEffect, useRef } from 'react';
import { 
  ArrowLeft, ChevronDown, 
  Quote, Search, Zap, 
  Star, Heart, ShoppingBag,
  MessageCircle, Mail
} from 'lucide-react';
import { motion } from 'framer-motion';

export default function HamlixIntegratedPortal() {
  const [hasMounted, setHasMounted] = useState(false);
  const act6Ref = useRef(null);

  useEffect(() => { 
    setHasMounted(true); 
  }, []);

  const scrollToAct6 = () => {
    act6Ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  if (!hasMounted) return <div className="min-h-screen bg-white" />;

  return (
    <div className="min-h-screen bg-[#f8f9fc] text-[#1d1d1f] font-sans antialiased selection:bg-blue-600/10 scroll-smooth">
      
      {/* --- Header --- */}
      <nav className="fixed top-0 w-full z-50 bg-white/40 backdrop-blur-2xl border-b border-gray-100">
        <div className="max-w-[1440px] mx-auto h-16 flex items-center justify-between px-12">
          <div className="flex items-center gap-2">
            <span className="font-black text-3xl tracking-tight text-black">Hamlix</span>
          </div>
          <button 
            onClick={scrollToAct6}
            className="bg-blue-600 text-white px-6 py-2 rounded-full text-[13px] font-black uppercase tracking-widest hover:bg-black transition-colors duration-300 shadow-lg active:scale-95"
          >
            Get Discovered
          </button>
        </div>
      </nav>

      {/* --- Act I: Cognitive Manifesto --- */}
      <section className="h-[92vh] flex items-start bg-white relative overflow-hidden border-b border-gray-100 px-12 z-10">
        <div className="absolute top-[-5%] right-[-5%] w-[50%] h-[70%] bg-blue-50/40 rounded-full blur-[120px]" />
        <div className="max-w-[1440px] mx-auto w-full grid grid-cols-12 gap-16 items-start relative z-10 h-full">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="col-span-7 pr-10 pt-24 flex flex-col h-[85vh]">
            <div className="space-y-4 flex-shrink-0">
              <h1 className="text-[70px] md:text-[90px] font-black tracking-[0.01em] leading-[0.85] text-black uppercase">The Next <br /><span className="text-black/30 italic font-black">Generation</span> <br />of Business</h1>
            </div>
            <div className="w-full h-[1px] bg-black/5 mt-6 mb-8 flex-shrink-0" />
            <div className="flex-1 flex flex-col justify-between py-4 max-h-[450px]">
                <div className="relative group"><div className="flex items-center gap-4"><div className="w-2 h-2 rounded-full bg-blue-600/20" /><h2 className="text-[50px] md:text-[65px] font-extralight tracking-[0.2em] text-blue-600/30 uppercase leading-none">Discovery</h2></div></div>
                <div className="flex items-center gap-6 pl-12 h-16"><div className="w-[1.5px] h-full bg-gradient-to-b from-blue-600/20 to-blue-600/50" /><h3 className="text-[32px] md:text-[42px] font-black italic tracking-tighter text-blue-600/60 lowercase leading-none">precedes</h3></div>
                <div className="relative pl-6"><div className="absolute left-0 top-0 w-1.5 h-full bg-blue-600" /><h2 className="text-[80px] md:text-[110px] font-black tracking-[-0.06em] leading-none text-blue-600 uppercase">Intent</h2>
                    <div className="mt-4 flex items-center gap-4"><div className="w-32 h-[2px] bg-blue-600/20 relative overflow-hidden"><motion.div animate={{ x: ['-100%', '100%'] }} transition={{ repeat: Infinity, duration: 2, ease: "linear" }} className="absolute inset-0 bg-blue-600 w-1/2" /></div></div>
                </div>
            </div>
          </motion.div>
          <div className="col-start-8 col-span-5 relative flex items-center justify-end min-h-[600px] pt-10">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5, duration: 1 }} className="absolute left-[-180px] bottom-[12%] z-30 w-[400px]">
              <div className="relative p-8 bg-white/60 backdrop-blur-3xl border border-white rounded-[2.5rem] shadow-[0_40px_80px_-20px_rgba(0,0,0,0.08)]">
                <div className="relative space-y-6"><Quote size={18} className="text-blue-500 opacity-60 mb-2" /><h2 className="text-[14px] font-bold text-black leading-relaxed italic border-l-2 border-blue-600 pl-5">“People don't search for what they don't know. Being seen is the origin of every transaction. Video allows differences to be understood and trust to occur prematurely. When you are understood, price becomes meaningful. Hamlix makes this happen.”<span className="block mt-4 text-[11px] not-italic text-black font-black tracking-widest uppercase">---- Founder of Hamlix</span></h2></div>
              </div>
            </motion.div>
            <div className="w-[420px] h-[580px] bg-[#f2f2f2] rounded-tl-[10rem] rounded-br-[3rem] overflow-hidden border border-white shadow-2xl relative group">
                <img src="https://hamlix-official.b-cdn.net/images/ac39b99465c78af5036b6bc18db5f3b9.jpg" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[3s]" alt="Hamilton" />
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />
                <div className="absolute bottom-8 right-8 text-white text-right z-10 space-y-1"><p className="font-black text-2xl uppercase tracking-[0.3em] drop-shadow-md">Hamilton</p><p className="text-[10px] font-bold text-blue-400 uppercase tracking-widest mt-1 border-t border-white/20 pt-2 inline-block">Hamlix Founder</p></div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Transition Bubble 1 --- */}
      <div className="absolute top-[92vh] left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 flex justify-center pointer-events-none w-full">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8, duration: 1 }} className="bg-black text-white py-3 px-12 rounded-full shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] ring-1 ring-white/10 flex flex-col items-center gap-1 pointer-events-auto w-fit mx-auto">
            <p className="text-[15px] font-bold tracking-tight italic whitespace-nowrap">“Can you imagine a product you don't even know exists?”</p>
            <motion.div animate={{ y: [0, 4, 0], opacity: [0.4, 1, 0.4] }} transition={{ repeat: Infinity, duration: 2 }} className="text-blue-500"><ChevronDown size={20} strokeWidth={3} /></motion.div>
        </motion.div>
      </div>

      {/* --- Act II: Carlos Narrative --- */}
      <section className="h-[92vh] flex flex-col bg-[#f8f9fc] border-b border-gray-100 px-12 overflow-hidden relative pt-12 justify-start">
        <div className="max-w-[1300px] mx-auto w-full flex flex-col gap-6 relative z-10">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-center flex-shrink-0 mt-2 mb-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter italic text-black leading-tight">Hours of grueling labor transformed into a <span className="text-blue-600 drop-shadow-sm">miracle</span> under the rapid sweep of a machine.</h2>
          </motion.div>
          <div className="grid grid-cols-12 gap-10 items-center relative">
            <div className="col-span-12 lg:col-span-5 -mt-20 z-20 relative left-[-20px]">
              <div className="relative rounded-[2rem] overflow-hidden shadow-2xl bg-white aspect-[9/14] max-h-[62vh] border border-gray-100 ring-1 ring-black/5 mx-auto">
                <video autoPlay muted loop playsInline className="w-full h-full object-cover"><source src="https://hamlix-official.b-cdn.net/videos/videoplayback.mp4" type="video/mp4" /></video>
                <div className="absolute top-4 left-4 flex items-center gap-2"><div className="w-1.5 h-1.5 bg-blue-600 rounded-full animate-pulse"></div><span className="text-[8px] font-black text-white uppercase tracking-widest">Protocol Live</span></div>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-7 flex flex-col items-start gap-8 relative pb-20">
              <div className="flex items-center gap-6 w-full max-w-4xl">
                <img src="https://hamlix-official.b-cdn.net/images/4761997221744f1d2c1b7d2be0306a70.png" alt="Carlos" className="w-32 h-32 rounded-full object-cover border-[4px] border-white shadow-lg flex-shrink-0" />
                <div className="p-6 rounded-[1.5rem] bg-white border border-gray-100 shadow-sm flex-1">
                  <p className="text-[14px] text-gray-600 font-medium leading-relaxed italic">“Carlos is a respected mechanic from Spain, running his own auto shop. For five years, rusted metal parts meant hours of tedious, repetitive sanding. Day after day of inefficient toil, he searched for better sandpaper, trying to ease the exhaustion.”</p>
                </div>
              </div>
              <div className="flex items-center gap-6 pl-8">
                <motion.div animate={{ x: [0, -6, 0] }} transition={{ repeat: Infinity, duration: 2 }} className="text-blue-600 flex-shrink-0"><ArrowLeft size={32} strokeWidth={3} /></motion.div>
                <p className="text-3xl text-blue-600 font-bold italic tracking-tight border-l-4 border-blue-600/20 pl-4 py-0.5">Until he watched this video on Hamlix.</p>
              </div>
              <div className="flex items-center gap-6 w-full">
                <div className="w-32 h-32 rounded-full overflow-hidden border-[4px] border-white shadow-lg ring-1 ring-black/5 flex-shrink-0 relative">
                  <img src="https://hamlix-official.b-cdn.net/images/92e84a9cc3db4f223ba03d777e430865.png" className="w-full h-full object-cover scale-110" alt="Carlos React" />
                </div>
                <div className="flex flex-col gap-2 items-start flex-1">
                    <div className="relative bg-white/50 backdrop-blur-xl text-neutral-900 px-10 py-5 rounded-[2rem] rounded-bl-none shadow-[0_10px_40px_rgba(255,255,255,0.1),0_10px_30px_rgba(0,0,0,0.05)] border border-white/80 overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-transparent to-white/20 pointer-events-none" />
                        <p className="text-3xl font-black italic tracking-tighter leading-none uppercase relative z-10">¡Dios mío!</p>
                        <div className="absolute -left-1.5 bottom-0 w-5 h-5 bg-white/50 rotate-45 border-l border-b border-white/80 backdrop-blur-xl" />
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Transition Bubble 2 --- */}
      <div className="absolute top-[184vh] left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 flex justify-center pointer-events-none w-full">
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ delay: 0.2, duration: 1 }} 
          className="bg-white/25 backdrop-blur-2xl text-black py-3 px-12 rounded-full shadow-[0_8px_32px_0_rgba(31,38,135,0.1)] border border-white/40 flex flex-col items-center gap-1 pointer-events-auto max-w-fit mx-auto"
        >
            <p className="text-[16px] font-bold tracking-[0.05em] italic whitespace-nowrap">“Humans cannot imagine what lies beyond their cognition”</p>
            <motion.div animate={{ y: [0, 4, 0], opacity: [0.4, 1, 0.4] }} transition={{ repeat: Infinity, duration: 2 }} className="text-blue-600"><ChevronDown size={22} strokeWidth={3} /></motion.div>
        </motion.div>
      </div>

      {/* --- Act III: Cognitive Infinity --- */}
      <section className="h-[92vh] bg-white text-[#1d1d1f] px-12 relative overflow-hidden border-b border-gray-100 flex flex-col justify-center">
        <div className="max-w-[1440px] mx-auto w-full grid grid-cols-12 gap-16 items-center relative z-10">
          <div className="col-span-5 col-start-1">
            <div className="bg-white border border-gray-200 rounded-[3.5rem] p-8 flex flex-col shadow-[0_50px_100px_-30px_rgba(0,0,0,0.1)] overflow-hidden relative">
                <div className="space-y-8"> 
                   <div className="flex items-center w-full h-14 border-[3px] border-[#FF6600] rounded-full overflow-hidden bg-white pr-2">
                         <div className="flex items-center gap-2 px-5 text-gray-400 border-r border-gray-100">
                            <span className="text-[12px] font-bold">Categories</span>
                            <ChevronDown size={14} />
                         </div>
                         <div className="flex-1 px-4 text-gray-400 italic text-[16px] font-medium">I only search for what I know...</div>
                         <div className="h-10 w-20 bg-[#FF6600] rounded-full flex items-center justify-center text-white shadow-lg">
                            <Search size={22} strokeWidth={3} />
                         </div>
                   </div>

                   <div className="py-12 flex flex-col items-center justify-center text-center space-y-6">
                        <div className="w-20 h-20 rounded-full bg-orange-50 flex items-center justify-center text-[#FF6600]">
                             <Search size={40} />
                        </div>
                        <div className="space-y-2">
                             <p className="text-2xl font-black italic text-black">THE SEARCH BOX LIMIT</p>
                             <p className="text-gray-400 font-medium max-w-xs mx-auto">You cannot type what you haven't conceived yet.</p>
                        </div>
                   </div>

                   <div className="pt-4 border-t border-gray-100">
                       <div className="flex justify-between items-start mb-4">
                          <div className="text-left">
                            <span className="text-[10px] font-black text-gray-400 uppercase block">Cognitive Reach</span>
                            <span className="text-3xl font-black italic text-black leading-none">Known World</span>
                          </div>
                          <div className="text-right">
                            <span className="text-[10px] font-black text-[#FF6600] uppercase block">Untapped Discovery</span>
                            <span className="text-3xl font-black italic text-[#FF6600]/30 leading-none">∞ Reality</span>
                          </div>
                       </div>
                       <div className="h-3 w-full bg-gray-100 rounded-full overflow-hidden flex">
                          <motion.div initial={{ width: 0 }} whileInView={{ width: '15%' }} transition={{ duration: 1 }} className="bg-[#FF6600] h-full" />
                       </div>
                    </div>
                </div>
            </div>
          </div>

          <div className="col-span-6 col-start-7 space-y-10">
            <div className="relative p-10 bg-gradient-to-br from-white to-[#fffef8] border border-amber-100 shadow-[0_30px_100px_-20px_rgba(0,0,0,0.05)] rounded-[3rem] overflow-hidden">
                <p className="text-[28px] text-gray-800 font-bold leading-tight italic font-serif mb-4">“Man is trapped by his own experience and cognition, unable to imagine the reality outside of it.”</p>
                <div className="flex items-center gap-4"><div className="h-px w-8 bg-amber-200" /><p className="text-[14px] font-black uppercase text-amber-600 tracking-widest">Plato · 《The Republic》</p></div>
            </div>

            <div className="space-y-6">
                <h3 className="text-[54px] font-black italic tracking-tighter leading-none text-black">
                    Demands beyond cognition <br />
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-amber-500 italic">are theoretically infinite.</span>
                </h3>
                
                <div className="flex items-center gap-6">
                    <div className="bg-blue-600 px-6 py-3 rounded-full shadow-lg">
                        <p className="text-[14px] text-white italic font-bold uppercase tracking-widest">Visual Discovery activates demand</p>
                    </div>
                    <motion.div 
                        className="text-6xl font-extralight text-blue-600/40 select-none"
                        animate={{ opacity: [0.4, 1, 0.4] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                    >
                        ∞
                    </motion.div>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Transition Bubble 3 --- */}
      <div className="absolute top-[276vh] left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 flex justify-center pointer-events-none w-full">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }} 
          whileInView={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 0.8 }} 
          className="bg-white/30 backdrop-blur-3xl text-black py-4 px-14 rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-white/50 flex flex-col items-center gap-1 pointer-events-auto ring-1 ring-black/5"
        >
          <p className="text-[18px] font-black tracking-tight italic text-[#FF6600] drop-shadow-sm">
            “What erodes your profit margins?”
          </p>
          <motion.div 
            animate={{ y: [0, 5, 0] }} 
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }} 
            className="text-[#FF6600]/60"
          >
            <ChevronDown size={22} strokeWidth={3} />
          </motion.div>
        </motion.div>
      </div>

      {/* --- Act IV: The Cage of Homogeneity --- */}
      <section className="h-[92vh] bg-[#fafafc] text-[#1d1d1f] px-12 relative overflow-hidden border-b border-gray-100 flex flex-col justify-center">
        <div className="max-w-[1440px] mx-auto w-full grid grid-cols-12 gap-16 items-end relative z-10">
          <div className="col-span-6 space-y-10 pr-12">
            <div className="flex items-center gap-10">
                <div className="relative">
                    <img src="https://hamlix-official.b-cdn.net/images/ac39b99465c78af5036b6bc18db5f3b9.jpg" alt="Hamilton" className="w-28 h-28 rounded-full object-cover border-[3px] border-white shadow-xl flex-shrink-0" />
                </div>
                <div className="space-y-1 ml-6">
                    <h3 className="text-5xl font-black italic tracking-tighter text-black leading-none uppercase">The Search Trap</h3>
                    <p className="text-[13px] font-bold text-blue-500 uppercase tracking-[0.2em] mt-2 inline-block bg-blue-50 px-4 py-1.5 rounded-full">Reactive · Search-Cage</p>
                </div>
            </div>
            <div className="p-10 rounded-[3rem] bg-white border border-gray-100 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.12)] flex flex-col gap-8 relative">
                <p className="text-[17px] text-neutral-800 font-medium leading-relaxed italic border-l-4 border-blue-600 pl-8">
                    “In the eyes of buyers, price is the only distinction. No matter how refined your images and copy are, they are merely indistinguishable SKUs in the crowd. Blind price competition crushes profit margins. Squeezed earnings leave no room for production upgrading, process optimization and product iteration. Gradually, core advantages fade away. Enterprises can only deliver standardized, neutral products, while your unique value is forever overlooked.”
                </p>
                <Quote size={32} className="absolute bottom-8 right-10 text-neutral-100" />
            </div>
          </div>

          <div className="col-span-6">
            <div className="bg-white border border-gray-200 rounded-[3.5rem] p-10 flex flex-col shadow-[0_50px_100px_-30px_rgba(0,0,0,0.1)] overflow-hidden relative">
                <div className="space-y-8"> 
                   <div className="flex items-center w-full h-14 border-[3px] border-[#FF6600] rounded-full overflow-hidden bg-white pr-2">
                         <div className="flex items-center gap-2 px-5 text-gray-400 border-r border-gray-100">
                            <span className="text-[12px] font-bold">Products</span>
                            <ChevronDown size={14} />
                         </div>
                         <div className="flex-1 px-4 text-black italic text-[16px] font-black">Laser Marking Machine</div>
                         <div className="h-10 w-20 bg-[#FF6600] rounded-full flex items-center justify-center text-white">
                            <Search size={22} strokeWidth={3} />
                         </div>
                   </div>

                   <div className="grid grid-cols-2 gap-6"> 
                        <div className="p-4 bg-gray-50 border border-gray-100 rounded-2xl flex flex-col gap-2">
                            <div className="w-full aspect-square bg-gray-200 rounded-xl overflow-hidden">
                               <img src="https://hamlix-official.b-cdn.net/images/8d4a6a594f71b112c1ed81372f376995.png" className="w-full h-full object-cover grayscale opacity-80" alt="Tianjin Laser" />
                            </div>
                            <div className="text-[18px] font-black text-black">$ 1,280.00</div>
                            <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Tianjin Laser Co. Ltd</div>
                        </div>
                        <div className="p-4 bg-white border-2 border-red-500 rounded-2xl flex flex-col gap-2 relative">
                            <div className="absolute top-2 right-2 bg-red-600 text-white text-[8px] font-black px-2 py-0.5 rounded uppercase">Cheapest</div>
                            <div className="w-full aspect-square bg-gray-50 rounded-xl overflow-hidden">
                               <img src="https://hamlix-official.b-cdn.net/images/847631355631f1111224669e48951dd3.png" className="w-full h-full object-cover" alt="Shandong Laser" />
                            </div>
                            <div className="text-[18px] font-black text-red-600">$ 800.00</div>
                            <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Shandong Laser Co. Ltd</div>
                        </div>
                   </div>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Transition Bubble 4 --- */}
      <div className="absolute top-[368vh] left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 flex justify-center pointer-events-none w-full">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8, y: 30 }} 
          whileInView={{ opacity: 1, scale: 1, y: 0 }} 
          transition={{ type: "spring", stiffness: 100, damping: 20 }} 
          className="relative px-14 py-3 rounded-full flex flex-col items-center gap-0.5 pointer-events-auto ring-[0.5px] ring-black shadow-[0_25px_60px_-15px_rgba(0,0,0,0.3)] overflow-hidden group"
        >
          <div className="absolute inset-0 bg-white/40 backdrop-blur-[40px] shadow-[inset_0_0_25px_rgba(255,255,255,0.6)]" />
          <p className="relative z-10 text-[20px] font-black tracking-tight italic text-black leading-none drop-shadow-[0_1px_1px_rgba(255,255,255,0.9)]">
            “Visible strength eliminates ineffective price competition”
          </p>
          <motion.div animate={{ y: [0, 3, 0], opacity: [0.6, 1, 0.6] }} transition={{ repeat: Infinity, duration: 2 }} className="relative z-10 text-black drop-shadow-sm">
            <ChevronDown size={18} strokeWidth={4} />
          </motion.div>
        </motion.div>
      </div>

      {/* --- Act V: The Perception Gap --- */}
      <section className="h-[100vh] bg-white px-12 relative overflow-hidden border-b border-gray-100 flex flex-col justify-center">
        <div className="max-w-[1600px] mx-auto w-full grid grid-cols-12 gap-8 items-center relative h-full pt-16">
          <div className="col-span-4 flex flex-col items-start relative h-full justify-center scale-[0.95] origin-left ml-4">
              <div className="absolute top-[12%] left-0 flex items-center gap-3 bg-[#FF6600] px-6 py-2.5 rounded-full shadow-2xl z-20 ring-4 ring-white translate-x-4">
                <ShoppingBag size={14} className="text-white" />
                <span className="text-[11px] font-black text-white uppercase tracking-[0.2em]">The Legacy Platform</span>
            </div>
            
            <div className="relative w-full max-w-[440px] bg-white border border-gray-100 rounded-[2.5rem] overflow-hidden shadow-[0_40px_100px_-20px_rgba(255,102,0,0.12)] border-t-orange-50">
                <div className="bg-white p-5 border-b border-gray-50 flex items-center gap-4">
                  <div className="flex-1 h-11 bg-gray-50/80 rounded-2xl border border-gray-100 px-5 flex items-center gap-4">
                    <Search size={16} className="text-gray-400" />
                    <div className="w-px h-4 bg-gray-200" />
                    <span className="text-[13px] text-gray-800 font-bold italic uppercase tracking-tighter">Women's Tote Bag</span>
                  </div>
                  <div className="w-11 h-11 bg-[#FF6600] rounded-2xl flex items-center justify-center text-white shadow-lg">
                    <Search size={18} strokeWidth={3} />
                  </div>
                </div>

                <div className="p-6 space-y-6">
                    <div className="flex gap-6">
                        <div className="w-[160px]">
                            <div className="aspect-[4/5] bg-[#FDFDFD] rounded-2xl border border-gray-100 overflow-hidden shadow-inner group relative">
                                <img src="https://hamlix-official.b-cdn.net/images/83b0a92338c3245d2c695e60f4a354dc.png" alt="Product" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur px-2 py-1 rounded-lg shadow-sm border border-black/5">
                                    <Heart size={14} className="text-gray-400" />
                                </div>
                            </div>
                        </div>
                        <div className="flex-1 flex flex-col justify-between py-1">
                            <div className="space-y-3">
                                <div className="flex items-center gap-2">
                                    <span className="bg-orange-100 text-[#FF6600] text-[9px] font-black px-2 py-0.5 rounded uppercase tracking-wider">Premium</span>
                                    <div className="flex items-center gap-1">
                                        {[1,2,3,4,5].map(s => <Star key={s} size={8} className="fill-orange-400 text-orange-400" />)}
                                    </div>
                                </div>
                                <h4 className="text-[17px] font-black text-gray-900 leading-[1.2] tracking-tight">100% Genuine Leather Luxury Designer Women's Tote Bag</h4>
                            </div>
                            <div className="mt-4 space-y-3">
                                <div className="flex items-end justify-between border-b border-gray-50 pb-3">
                                    <div className="flex flex-col">
                                        <div className="flex items-center gap-2">
                                            <span className="text-[26px] font-black text-[#FF6600] leading-none tracking-tighter">$280.00</span>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <span className="text-[10px] font-black text-gray-400 uppercase block">Min. Order</span>
                                        <span className="text-[12px] font-black text-gray-800 leading-none">1 Piece</span>
                                    </div>
                                </div>
                                <div className="bg-gray-50/80 p-3 rounded-xl border border-gray-100 flex justify-between items-center">
                                    <span className="text-[11px] font-bold text-gray-500 uppercase tracking-widest">Wholesale ≥ 50pcs</span>
                                    <span className="text-[15px] font-black text-[#FF6600]">$195.00</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </div>

          <div className="col-span-4 flex flex-col justify-center z-30 px-4">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <div className="bg-white/95 backdrop-blur-3xl border border-white rounded-[3.5rem] p-10 shadow-[0_100px_180px_-40px_rgba(59,130,246,0.18)] relative overflow-hidden min-h-[580px] flex flex-col items-center">
                <div className="flex flex-col items-center mb-10 w-full">
                  <div className="relative mb-6">
                    <div className="absolute inset-0 bg-blue-500/10 rounded-full blur-2xl scale-125" />
                    <div className="relative w-32 h-32 rounded-full p-[2px] bg-gradient-to-br from-blue-500 via-transparent to-blue-200">
                      <img src="https://hamlix-official.b-cdn.net/images/ac39b99465c78af5036b6bc18db5f3b9.jpg" className="w-full h-full rounded-full object-cover border-4 border-white relative z-10" alt="Hamilton" />
                    </div>
                  </div>
                  <h3 className="text-4xl font-black italic text-black tracking-tight uppercase leading-none border-b-4 border-blue-600 pb-2">Hamilton</h3>
                </div>
                <div className="flex-1 w-full flex flex-col justify-center items-center text-center space-y-12">
                  <div className="space-y-2">
                    <p className="text-[20px] font-black italic text-gray-500 uppercase tracking-tighter leading-none">Static Display</p>
                    <div className="flex items-center justify-center gap-3">
                      <div className="w-8 h-[2px] bg-gray-200" />
                      <p className="text-[24px] font-black italic text-gray-500 uppercase tracking-tight">Limited Expression</p>
                      <div className="w-8 h-[2px] bg-gray-200" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <p className="text-[20px] font-black italic text-blue-400 uppercase tracking-tighter leading-none">Video Presentation</p>
                    <div className="flex items-center justify-center gap-4">
                      <Zap size={20} className="text-blue-600 fill-blue-600" />
                      <p className="text-[36px] font-black italic text-blue-600 uppercase tracking-tighter leading-none">Real Strength</p>
                      <Zap size={20} className="text-blue-600 fill-blue-600" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <p className="text-[20px] font-black italic text-blue-400 uppercase tracking-tighter leading-none">Value Recognition</p>
                    <div className="bg-blue-600 px-6 py-2 rounded-sm transform -skew-x-12">
                      <p className="text-[28px] font-black italic text-white uppercase tracking-tight leading-none transform skew-x-12">Break Price War</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="col-span-4 flex flex-col items-center relative h-full justify-center opacity-95">
            <div className="relative w-full max-w-[300px] group">
                <div className="relative aspect-[9/16] bg-black rounded-[3.5rem] overflow-hidden shadow-2xl ring-4 ring-white border border-gray-100">
                    <video autoPlay muted loop playsInline className="w-full h-full object-cover">
                        <source src="https://hamlix-official.b-cdn.net/videos/4%E6%9C%8830%E6%97%A5.mp4" type="video/mp4" />
                    </video>
                    
                    {/* Inquiry Button UI - Liquid Glass Design */}
                    <div className="absolute top-1/2 -translate-y-1/2 right-4 z-20 flex flex-col items-center gap-1.5 group cursor-pointer">
                        <div className="relative p-2.5 rounded-2xl overflow-hidden shadow-[0_8px_32px_0_rgba(255,255,255,0.1)] backdrop-blur-md bg-white/20 border border-white/40 group-hover:bg-white/30 transition-all duration-300">
                            <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-black/10 pointer-events-none" />
                            <MessageCircle size={26} className="text-white drop-shadow-md relative z-10" strokeWidth={2} />
                        </div>
                        <span className="text-[9px] font-black text-white uppercase tracking-[0.2em] drop-shadow-lg opacity-90">Inquiry</span>
                    </div>

                    <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/90 via-black/20 to-transparent">
                        <div className="flex flex-col gap-3">
                            <div className="flex items-center gap-2">
                                <div className="w-8 h-8 rounded-full border border-white/50 overflow-hidden">
                                    <img src="https://hamlix-official.b-cdn.net/images/53cf424bfc17c330bd81d8d3d981d6a5.png" className="w-full h-full object-cover" alt="Profile" />
                                </div>
                                <span className="text-[12px] font-black text-white tracking-tight">TWONINE</span>
                            </div>
                            <p className="text-[11px] text-white/90 leading-tight font-medium">100% Genuine Leather Luxury Designer Women's Tote Bag.#bags#Women's Bags</p>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Act VI: Final Manifestation --- */}
      <section ref={act6Ref} className="h-screen bg-white relative flex flex-col items-center px-12 overflow-hidden border-t border-gray-100">
        
        {/* Top Declaration */}
        <div className="mt-24 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-[52px] md:text-[68px] font-black italic tracking-tighter leading-[0.9] uppercase text-black"
            >
              The future of supply <br />
              <span className="text-blue-600">will not rely on being searched.</span>
            </motion.h2>
        </div>

        {/* Column Layout */}
        <div className="max-w-[1440px] w-full flex-1 grid grid-cols-12 gap-20 items-center mt-12 pb-20">
          
          {/* Left Side: Avatar + Stepped Dialog */}
          <div className="col-span-7 flex items-end gap-10">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="relative flex-shrink-0"
              >
                  <img 
                    src="https://hamlix-official.b-cdn.net/images/ac39b99465c78af5036b6bc18db5f3b9.jpg" 
                    alt="Hamilton" 
                    className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-[0_20px_50px_rgba(0,0,0,0.15)] ring-1 ring-black/5" 
                  />
                  <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-black text-white px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest whitespace-nowrap">
                      Hamilton
                  </div>
              </motion.div>

              {/* Minimalist Stepped UI Box */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="relative bg-white border-2 border-black rounded-[3rem] rounded-bl-none p-10 flex flex-col shadow-[20px_20px_0px_0px_rgba(0,0,0,0.05)] min-w-[580px] max-w-[650px] overflow-hidden"
              >
                  <div className="flex flex-col items-start w-full">
                      <span className="text-[22px] font-black text-black uppercase tracking-[0.2em] italic opacity-40 mb-2">
                          You will be,
                      </span>
                      <div className="flex flex-col items-start w-full">
                          <span className="text-[28px] font-black text-black uppercase italic tracking-tighter leading-tight">seen</span>
                          <span className="text-[44px] font-black text-black uppercase italic tracking-tighter leading-tight">Understood</span>
                          <span className="text-[64px] font-black text-black uppercase italic tracking-tighter leading-tight">Trusted</span>
                          <motion.span 
                            initial={{ scale: 0.95 }}
                            whileInView={{ scale: 1 }}
                            className="text-[88px] font-black text-black uppercase italic tracking-[-0.05em] leading-[0.8] mt-4 whitespace-nowrap"
                          >
                            respected!!!
                          </motion.span>
                      </div>
                  </div>
                  <div className="absolute -left-[2px] -bottom-[20px] w-0 h-0 border-l-[20px] border-l-transparent border-t-[20px] border-t-black"></div>
              </motion.div>
          </div>

          {/* Right Side: Contact UI */}
          <div className="col-span-5 flex flex-col gap-6">
            <div className="mb-2">
              <span className="text-[20px] font-black uppercase tracking-[0.1em] text-black italic">Contact Hamlix team directly.</span>
            </div>
            
            <motion.a 
              href="#" 
              whileHover={{ scale: 1.02 }}
              className="flex items-center justify-between bg-black py-8 px-10 rounded-[2.5rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] transition-all group"
            >
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center">
                  <MessageCircle size={32} className="text-white" fill="currentColor" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[12px] font-black text-white/40 uppercase tracking-[0.3em] mb-1">Direct Connect</span>
                  <span className="text-[28px] font-black uppercase tracking-tighter text-white italic leading-none">WhatsApp</span>
                </div>
              </div>
              <ArrowLeft size={32} className="text-white rotate-180 opacity-0 group-hover:opacity-100 transition-all -translate-x-4 group-hover:translate-x-0" />
            </motion.a>

            <motion.a 
              href="#" 
              whileHover={{ scale: 1.02 }}
              className="flex items-center justify-between bg-white py-8 px-10 rounded-[2.5rem] border-2 border-black shadow-xl transition-all group"
            >
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center">
                  <Mail size={32} className="text-white" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[12px] font-black text-black/40 uppercase tracking-[0.3em] mb-1">Official Inquiry</span>
                  <span className="text-[28px] font-black uppercase tracking-tighter text-black italic leading-none">E-mail</span>
                </div>
              </div>
              <ArrowLeft size={32} className="text-black rotate-180 opacity-0 group-hover:opacity-100 transition-all -translate-x-4 group-hover:translate-x-0" />
            </motion.a>
          </div>

        </div>

        {/* Brand Label */}
        <div className="absolute bottom-8 opacity-20">
            <span className="text-[9px] font-black uppercase tracking-[0.4em] text-black">“Visible strength eliminates ineffective price competition” © 2026</span>
        </div>
      </section>

    </div>
  );
}