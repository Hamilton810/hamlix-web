"use client";
import React, { useState } from 'react';
import { 
  LayoutDashboard, Video, Mail, 
  UserCircle, Settings, PlusSquare, Search, 
  Bell, HelpCircle, Upload, MousePointerClick,
  TrendingUp, CheckCircle2, Clock, Camera,
  Image as ImageIcon, Save, ChevronRight
} from 'lucide-react';

export default function HamlixStudioLean() {
  // 控制左侧大菜单切换
  const [activeTab, setActiveTab] = useState('dashboard');
  // 控制频道定制页内部的子 Tab
  const [customSubTab, setCustomSubTab] = useState('branding');

  const menuItems = [
    { id: 'dashboard', label: '资讯主页', icon: LayoutDashboard },
    { id: 'content', label: '内容管理', icon: Video },
    { id: 'channel', label: '频道定制', icon: UserCircle },
  ];

  return (
    <div className="flex h-screen bg-[#F9F9F9] text-[#0D0D0D] font-sans antialiased overflow-hidden">
      
      {/* 1. 顶部导航栏 */}
      <header className="fixed top-0 z-50 w-full h-16 bg-white border-b border-gray-200 flex items-center justify-between px-4">
        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <div className="w-5 h-0.5 bg-gray-600 mb-1"></div>
            <div className="w-5 h-0.5 bg-gray-600 mb-1"></div>
            <div className="w-5 h-0.5 bg-gray-600"></div>
          </button>
          <div className="flex items-center gap-1 cursor-pointer">
            <div className="w-8 h-8 bg-black rounded flex items-center justify-center">
              <div className="w-0 h-0 border-t-[5px] border-t-transparent border-l-[8px] border-l-white border-b-[5px] border-b-transparent ml-0.5"></div>
            </div>
            <span className="font-bold tracking-tighter text-xl ml-1 uppercase">Studio</span>
          </div>
        </div>

        <div className="flex-1 max-w-[720px] mx-8 relative">
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">
            <Search size={16} />
          </div>
          <input 
            type="text" 
            placeholder="搜索视频..." 
            className="w-full h-10 bg-[#f2f2f2] border border-gray-200 rounded-full pl-11 pr-4 outline-none focus:bg-white focus:border-black transition-all text-sm font-normal"
          />
        </div>

        <div className="flex items-center gap-2">
          <button className="p-2 hover:bg-gray-100 rounded-full"><HelpCircle size={22} className="text-gray-600" /></button>
          <button className="p-2 hover:bg-gray-100 rounded-full relative"><Bell size={22} className="text-gray-600" /></button>
          <button className="flex items-center gap-2 border border-black px-3 py-1.5 ml-2 hover:bg-black hover:text-white transition-colors">
            <PlusSquare size={18} />
            <span className="text-sm font-bold uppercase tracking-tight">建立</span>
          </button>
          <div className="ml-4 w-8 h-8 bg-gray-200 rounded-full border border-gray-200 overflow-hidden">
            <img src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=100" className="w-full h-full object-cover grayscale" alt="Profile" />
          </div>
        </div>
      </header>

      {/* 2. 侧边栏 */}
      <aside className="w-64 pt-16 h-full bg-white border-r border-gray-200 flex flex-col flex-shrink-0">
        <div className="p-6 flex flex-col items-center">
          <div className="w-20 h-20 rounded-full border border-gray-200 overflow-hidden mb-3">
            <img src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=200" className="w-full h-full object-cover grayscale" alt="Avatar" />
          </div>
          <div className="text-[13px] font-bold text-black text-center truncate w-full px-2">Hamlix Heavy Tech</div>
          <div className="text-[11px] text-gray-500 mt-0.5 uppercase tracking-tighter">官方账号</div>
        </div>

        <nav className="flex-1 px-1 py-2 overflow-y-auto">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center gap-6 px-6 py-2.5 transition-colors relative ${
                activeTab === item.id ? 'bg-gray-100 text-black font-bold' : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              {activeTab === item.id && <div className="absolute left-0 w-[3px] h-full bg-black"></div>}
              <item.icon size={20} className={activeTab === item.id ? 'text-black' : 'text-gray-400'} />
              <span className="text-[13px]">{item.label}</span>
            </button>
          ))}
        </nav>

        <div className="p-4 border-t border-gray-100">
          <button className="w-full flex items-center gap-6 px-6 py-2 text-[13px] text-gray-500 hover:text-black transition-colors">
            <Settings size={20} /> 设置
          </button>
        </div>
      </aside>

      {/* 3. 主视图 */}
      <main className="flex-1 pt-16 overflow-y-auto bg-[#F9F9F9]">
        
        {/* --- 视图：资讯主页 --- */}
        {activeTab === 'dashboard' && (
          <div className="p-8 max-w-[1200px] mx-auto animate-in fade-in duration-500">
            <h1 className="text-2xl font-bold mb-6 text-[#0d0d0d]">频道资讯主页</h1>
            <div className="grid grid-cols-12 gap-6">
              
              {/* 核心卡片 1：视频发布占位 */}
              <div className="col-span-12 lg:col-span-4 bg-white border border-gray-200 rounded-sm p-8 flex flex-col items-center justify-center text-center">
                <img src="https://www.gstatic.com/youtube/img/creator/no_content_v2.png" className="w-32 grayscale mb-4" />
                <p className="text-[13px] text-gray-600 mb-6 px-4">向全球买家展示您的核心产线或产品节点。</p>
                <button className="bg-black text-white px-8 py-2 rounded-sm text-[13px] font-bold uppercase tracking-wider hover:bg-zinc-800 transition-all shadow-sm">
                  上载影片
                </button>
              </div>

              {/* 核心卡片 2：转化表现 (原本的询盘列表位置，现在是实体按钮化后的汇总) */}
              <div className="col-span-12 lg:col-span-4 bg-white border border-gray-200 rounded-sm p-6 flex flex-col h-full">
                <h3 className="text-[15px] font-bold mb-6 text-black uppercase tracking-tight">转化表现 (Leads)</h3>
                <div className="flex-1 space-y-8">
                  <div className="bg-gray-50 p-6 rounded-sm border border-gray-100">
                    <div className="text-xs font-bold text-gray-500 uppercase mb-1 flex items-center gap-2">
                      <MousePointerClick size={14} /> 意向买家点击总数
                    </div>
                    <div className="text-5xl font-bold tracking-tighter">42</div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center text-xs border-b border-gray-50 pb-2">
                      <span className="text-gray-500 font-medium tracking-tight">WhatsApp 咨询点击</span>
                      <span className="font-bold">28</span>
                    </div>
                    <div className="flex justify-between items-center text-xs border-b border-gray-50 pb-2">
                      <span className="text-gray-500 font-medium tracking-tight">Email 联系点击</span>
                      <span className="font-bold">14</span>
                    </div>
                  </div>
                </div>
                <div className="mt-6 pt-4 border-t border-gray-100 flex justify-center">
                  <button className="w-full bg-black text-white py-2.5 rounded-sm text-[12px] font-bold uppercase tracking-widest hover:bg-zinc-800 transition-all">
                    导出完整线索报告
                  </button>
                </div>
              </div>

              {/* 核心卡片 3：节点状态预览 */}
              <div className="col-span-12 lg:col-span-4 bg-white border border-gray-200 rounded-sm p-6">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-[15px] font-bold uppercase tracking-tight">最新节点状态</h3>
                </div>
                <div className="space-y-4 mb-6">
                  {[ 
                    { name: "产线节点：自动化精密焊接", status: "已上线", color: "text-green-600" }, 
                    { name: "工厂环境：无尘车间预览", status: "审核中", color: "text-gray-400" } 
                  ].map((item, i) => (
                    <div key={i} className="flex items-center justify-between text-sm py-3 border-b border-gray-50 last:border-0">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-7 bg-gray-100 rounded-sm border border-gray-200"></div>
                        <span className="font-medium text-[13px] text-gray-700 truncate max-w-[120px]">{item.name}</span>
                      </div>
                      <span className={`text-[10px] font-bold uppercase px-2 py-0.5 bg-gray-50 ${item.color}`}>{item.status}</span>
                    </div>
                  ))}
                </div>
                <button className="w-full border border-black text-black py-2.5 rounded-sm text-[12px] font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-all">
                  管理内容
                </button>
              </div>

            </div>
          </div>
        )}

        {/* --- 视图：频道定制 --- */}
        {activeTab === 'channel' && (
          <div className="bg-white min-h-full animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="max-w-[1000px] mx-auto p-12 pb-32">
              <div className="flex justify-between items-start mb-2">
                <h1 className="text-2xl font-bold">频道定制</h1>
                <button className="bg-black text-white px-8 py-2.5 rounded-sm text-[13px] font-bold uppercase tracking-wider flex items-center gap-2 shadow-md hover:bg-zinc-800 transition-all">
                  <Save size={16} /> 发布更改
                </button>
              </div>
              <p className="text-sm text-gray-500 mb-8 font-medium">塑造您的工厂品牌形象，让全球买家一眼看懂您的实力。</p>

              <div className="flex border-b border-gray-200 mb-10">
                <button onClick={() => setCustomSubTab('branding')} className={`px-10 py-3 text-[13px] font-bold uppercase tracking-widest border-b-2 transition-all ${customSubTab === 'branding' ? 'border-black text-black' : 'border-transparent text-gray-400'}`}>品牌展示</button>
                <button onClick={() => setCustomSubTab('info')} className={`px-10 py-3 text-[13px] font-bold uppercase tracking-widest border-b-2 transition-all ${customSubTab === 'info' ? 'border-black text-black' : 'border-transparent text-gray-400'}`}>基本资料</button>
              </div>

              {customSubTab === 'branding' && (
                <div className="space-y-16">
                  <div className="flex gap-16 items-start">
                    <div className="w-64">
                      <h3 className="text-[14px] font-bold mb-2 uppercase">工厂 Logo</h3>
                      <p className="text-[12px] text-gray-400 leading-relaxed">建议使用透明背景的 Logo，显示在全站所有视频节点下方。</p>
                    </div>
                    <div className="flex items-center gap-10">
                      <div className="w-32 h-32 rounded-full bg-gray-50 border border-gray-200 overflow-hidden group relative">
                        <img src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=200" className="grayscale w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"><Camera className="text-white" /></div>
                      </div>
                      <button className="border border-black text-black px-6 py-2 rounded-sm text-[12px] font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-all">更改图片</button>
                    </div>
                  </div>

                  <div className="flex gap-16 items-start pt-12 border-t border-gray-100">
                    <div className="w-64">
                      <h3 className="text-[14px] font-bold mb-2 uppercase">工厂门面 (Banner)</h3>
                      <p className="text-[12px] text-gray-400 leading-relaxed">显示在您的工厂主页顶部，建议展示最核心的产线或工厂外景。</p>
                    </div>
                    <div className="flex-1">
                      <div className="w-full aspect-[21/9] bg-gray-50 border-2 border-dashed border-gray-200 rounded-sm flex flex-col items-center justify-center group relative overflow-hidden transition-all hover:border-gray-400">
                        <ImageIcon className="text-gray-200 mb-2" size={32} />
                        <span className="text-[11px] text-gray-300 font-bold">2048 x 1152 PX / JPG or PNG</span>
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"><Camera className="text-white" /></div>
                      </div>
                      <button className="mt-4 bg-black text-white px-8 py-2 rounded-sm text-[12px] font-bold uppercase tracking-widest hover:bg-zinc-800 transition-all">上传横幅</button>
                    </div>
                  </div>
                </div>
              )}

              {customSubTab === 'info' && (
                <div className="max-w-2xl space-y-10">
                  <div>
                    <label className="block text-[13px] font-bold mb-3 uppercase tracking-tight">官方名称 (必填)</label>
                    <input type="text" placeholder="Hamlix Heavy Tech Machinery Ltd." className="w-full p-4 border border-gray-200 focus:border-black outline-none font-medium text-sm rounded-sm transition-all" />
                  </div>
                  <div>
                    <label className="block text-[13px] font-bold mb-3 uppercase tracking-tight">工厂实力简介</label>
                    <textarea placeholder="例如：我们拥有 15 年精密加工经验，通过 ISO9001 认证，配备 5 轴联动 CNC 加工中心..." className="w-full h-56 p-4 border border-gray-200 focus:border-black outline-none font-medium text-sm rounded-sm resize-none transition-all" />
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

      </main>

      <style jsx>{`
        ::-webkit-scrollbar { width: 8px; }
        ::-webkit-scrollbar-thumb { background: #cccccc; border-radius: 4px; }
        ::-webkit-scrollbar-track { background: #F9F9F9; }
      `}</style>
    </div>
  );
}