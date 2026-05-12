import React from 'react';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fcfcfc] text-[#111] px-6 py-20 md:px-24 md:py-32 font-sans selection:bg-black selection:text-white">
      <div className="max-w-5xl mx-auto">
        
        {/* --- Hero Section --- */}
        <section>
          <h1 className="text-7xl md:text-9xl font-bold tracking-tighter leading-[0.8] mb-12">
            MAI<span className="text-gray-300">X</span>
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-20">
            <p className="text-xl md:text-2xl leading-relaxed font-light text-gray-600">
              Technical Artist <br />
              专注实时渲染方案与 Shader 开发，致力于在性能约束下实现极致的视觉表现。
            </p>
            <div className="text-sm uppercase tracking-widest text-gray-400 self-end">
              Focusing on URP/HDRP & Stylized Rendering <br />
              Based on Unity & Blender — 2026
            </div>
          </div>
        </section>

        {/* --- Divider --- */}
        <div className="h-[1px] w-full bg-gray-100 my-24" />

        {/* --- TA Projects Grid --- */}
        <section>
          <h2 className="text-xs uppercase tracking-[0.3em] text-gray-400 mb-12">Technical Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            
            {/* Project 1: Rendering/Shader */}
            <div className="group cursor-pointer">
              <div className="aspect-[16/10] bg-gray-100 overflow-hidden relative">
                <div className="absolute inset-0 flex items-center justify-center text-gray-400 text-xs tracking-widest opacity-100 group-hover:opacity-0 transition-opacity">
                  RENDER_MODULE_01
                </div>
                <div className="absolute inset-0 flex items-center justify-center text-black font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  查看 Shader 实现详情
                </div>
              </div>
              <h3 className="mt-6 text-lg font-medium">Stylized Wuxia Rendering</h3>
              <p className="text-gray-400 text-sm mt-1">HLSL / Unity URP / Ink-wash Style</p>
            </div>

            {/* Project 2: Tools/Pipeline */}
            <div className="group cursor-pointer">
              <div className="aspect-[16/10] bg-gray-100 overflow-hidden relative">
                <div className="absolute inset-0 flex items-center justify-center text-gray-400 text-xs tracking-widest opacity-100 group-hover:opacity-0 transition-opacity">
                  PIPELINE_TOOL_02
                </div>
                <div className="absolute inset-0 flex items-center justify-center text-black font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  查看自动化脚本
                </div>
              </div>
              <h3 className="mt-6 text-lg font-medium">Blender Pipeline Automation</h3>
              <p className="text-gray-400 text-sm mt-1">Python API / Asset Workflow</p>
            </div>

          </div>
        </section>

        {/* --- Footer --- */}
        <footer className="mt-48 pt-12 border-t border-gray-100 flex justify-between items-center text-xs text-gray-400 uppercase tracking-widest">
          <div>© 2026 MaiX Portfolio</div>
          <div className="space-x-6 lowercase">
            <a href="#" className="hover:text-black transition-colors">maix@studio.xyz</a>
            <a href="#" className="hover:text-black transition-colors">github</a>
          </div>
        </footer>

      </div>
    </main>
  );
}