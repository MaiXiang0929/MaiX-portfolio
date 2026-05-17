import WebGLBackground from "@/components/WebGLBackground";

export default function Home() {
  return (
    <div className="bg-[#0a0a0c] text-gray-100 antialiased selection:bg-[#00ffcc] selection:text-black overflow-x-hidden min-h-screen font-sans">
      
      {/* 载入 WebGL 背景 */}
      <WebGLBackground />

      {/* 导航栏 */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-[#0a0a0c]/80 backdrop-blur-md border-b border-white/5 px-6 py-4 flex justify-between items-center">
        <div className="font-mono font-bold text-sm tracking-wider text-[#00ffcc]">
          TA
        </div>
        <div className="flex gap-8 text-sm font-mono">
          <a href="#works" className="hover:text-[#00ffcc] transition-colors">// WORKS</a>
          <a href="#skills" className="hover:text-[#00ffcc] transition-colors">// SKILLS</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center px-8 md:px-24 relative pt-16">
        <div className="max-w-4xl space-y-6">
          <h1 className="text-5xl md:text-8xl font-bold tracking-tight leading-none">
            MAI <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">X</span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl font-light">
            桥接美术表现与程序底层的架构者。精通引擎渲染管线定制、高级 Shader 开发及美术工具链自动化。
          </p>
        </div>
      </section>

      {/* Works Section */}
      <section id="works" className="py-24 px-8 md:px-24 bg-[#0e0e12]/60 border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-xs font-mono text-[#00ffcc] tracking-widest uppercase mb-2">// SELECTED PROJECTS</h2>
            <p className="text-3xl font-bold">技术美术实践作品</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* 作品卡片 1 */}
            <div className="group space-y-4">
              <div className="relative aspect-video w-full bg-neutral-900 border border-white/10 overflow-hidden rounded-lg cursor-crosshair">
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-900 to-slate-800 flex items-center justify-center transition-opacity duration-500 group-hover:opacity-20">
                  <span className="text-sm font-mono">[ 最终渲染态 ]</span>
                </div>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:20px_20px] flex flex-col justify-between p-4">
                  <span className="font-mono text-[10px] text-[#00ffcc] bg-black/60 px-2 py-1 rounded self-start">PASS: WIREFRAME_OVERLAY</span>
                  <div className="font-mono text-[10px] text-gray-500 space-y-1 bg-black/40 p-2 rounded">
                    <p>Verts: 24,521</p>
                    <p>Tris: 42,104</p>
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-bold group-hover:text-[#00ffcc] transition-colors">次世代移动端写实毛发着色器</h3>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}