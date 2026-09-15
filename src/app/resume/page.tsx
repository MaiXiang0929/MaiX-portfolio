import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PrintButton from "./PrintButton";
import "./print.css";

export const metadata: Metadata = {
  title: "陶振辉 | 技术美术简历",
  description: "陶振辉的 Technical Artist 在线简历，关注实时渲染、Shader、NPR 与美术工具开发。",
};

// 简历内容集中在这里维护：修改文字或新增条目时，不需要调整下方页面结构。
const skillGroups = [
  {
    title: "引擎 / DCC",
    items: [
      "UE5","Unity","Blender",
      "3ds Max","Houdini","Substance Designer",
      "RenderDoc",
    ],
  },
  {
    title: "编程 / Shader",
    items: [
      "C++",
      "Python",
      "C#",
      "HLSL",
      "GLSL",
      "ShaderLab",
      "Blueprint",
    ],
  },
  {
    title: "技术方向",
    items: [
      "实时渲染",
      "NPR",
      "PBR",
      "Post Process",
    ],
  },
  {
  title: "AI",
  items: [
    "AI 协作开发",
    "UE5 MCP",
    "AI 图像生成",
    "Stable Diffusion",
  ],
  },
];

const projects = [
  {
    title: "UE5 二次元角色 NPR 渲染 Demo",
    period: "2026.09 - 至今",
    status: "进行中",
    stack: "Unreal Engine 5 · Material Editor · HLSL · Blender",
    points: [
      "以二次元角色模型为对象搭建实时渲染 Demo，围绕二游角色的卡通光照与面部阴影表现进行实现与拆解。",
      "采用 Material 节点与 HLSL 双路径研究 Physically Based Cel Shading 与 Anime Face Shadow，便于对照验证与后续模块化。",
      "正在完成模型导入前处理、材质与贴图接入及渲染效果迭代，目标沉淀为可展示的 UE5 角色渲染作品。",
    ],
  },
  {
    title: "OpenGL 实时渲染项目",
    period: "个人项目",
    stack: "C++ · OpenGL 3.3 · GLSL · GLFW / GLAD · CMake",
    points: [
      "在 Windows 平台搭建 OpenGL 3.3 图形项目，使用 CMake 管理工程结构与第三方依赖。",
      "围绕 Application、Renderer、LightGizmo 等模块组织代码，实践实时渲染循环、渲染模块拆分与调试流程。",
      "结合 GLSL Shader 进行图形学实践，并将底层渲染知识迁移到 UE Shader / Rendering 学习中。",
    ],
  },
  {
    title: "Insomnia · UE5 团队游戏项目",
    period: "项目开发",
    stack: "Unreal Engine 5 · Blueprint · Post Process · Git",
    points: [
      "参与医院场景游戏项目开发，使用 Blueprint 完成或调整门交互逻辑与相关 Gameplay 功能。",
      "参与毒圈 Post Process 视觉效果，以及角色 Camera、UI 等模块的修改与联调。",
      "使用 Git 进行多人协作，在个人分支 MaiX 完成功能提交并合并至 main。",
    ],
  },
];

const experiences = [
  {
    title: "腾讯光子 OpenLight 创造营 · 第 3 赛季技术美术方向",
    period: "2026.03 - 2026.05",
    description: "报名并成功入选腾讯光子 OpenLight 创造营第 3 赛季-技术美术方向，参与技术美术的线上课程学习。",
  },
  {
    title: "“萌芽”社联 GameJam",
    period: "2026.02",
    description: "负责 UI 动效与卡通渲染 Shader 相关工作，在短周期协作开发中完成视觉表现任务。",
  },
  {
    title: "米哈游策划大赛",
    period: "2025.11",
    description: "参与二次元风格场景搭建，积累风格化场景表现与游戏视觉协作经验。",
  },
];

function SectionTitle({ children, index }: { children: React.ReactNode; index: string }) {
  return (
    <div className="resume-section-title mb-7 flex items-center gap-4">
      <span className="font-mono text-xs text-[#00ffcc]">{index}</span>
      <h2 className="text-2xl font-bold tracking-tight text-white">{children}</h2>
      <span className="h-px flex-1 bg-gradient-to-r from-white/20 to-transparent" />
    </div>
  );
}

export default function ResumePage() {
  return (
    <main className="resume-print min-h-screen bg-[#08090c] text-[#d7dce5] selection:bg-[#00ffcc] selection:text-black">
      {/* 顶部导航保持与作品集首页一致，并提供当前页面的 PDF 导出入口。 */}
      <nav className="sticky top-0 z-50 border-b border-white/10 bg-[#08090c]/90 px-6 py-4 backdrop-blur-md print:hidden">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <Link href="/" className="font-mono text-sm font-bold tracking-wider text-[#00ffcc]">
            MAIX / TA
          </Link>
          <div className="flex items-center gap-5 font-mono text-xs sm:text-sm">
            <Link href="/" className="transition-colors hover:text-[#00ffcc]">返回作品集</Link>
            <PrintButton />
          </div>
        </div>
      </nav>

      <div className="mx-auto max-w-6xl px-6 py-12 sm:px-8 lg:py-20">
        {/* 首屏信息采用作品集式排版，避免直接复刻纸质简历。 */}
        <header className="resume-header relative overflow-hidden border border-white/10 bg-[#0d1015] p-7 sm:p-10 lg:p-14">
          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#00ffcc]/10 blur-3xl" />
          <div className="resume-hero relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="mb-5 font-mono text-xs uppercase tracking-[0.3em] text-[#00ffcc]">Technical Artist · Resume</p>
              <h1 className="text-5xl font-black tracking-tight text-white sm:text-7xl">陶振辉</h1>
              <p className="mt-4 text-lg text-white/70 sm:text-xl">技术美术（TA） | Rendering · Shader</p>
              <div className="resume-contact mt-8 flex flex-wrap gap-x-6 gap-y-3 font-mono text-sm text-white/60">
                <span>南京 · 2027 届硕士</span>
                <a href="tel:15851806527" className="hover:text-[#00ffcc]">15851806527</a>
                <a href="mailto:2679664405@qq.com" className="hover:text-[#00ffcc]">2679664405@qq.com</a>
                <span>CET-6</span>
              </div>
            </div>
            <Image
              src="/resume/portrait.png"
              alt="陶振辉的个人照片"
              width={231}
              height={308}
              priority
              className="h-44 w-32 border border-white/15 object-cover sm:h-52 sm:w-39"
            />
          </div>
        </header>

        <div className="resume-content mt-16 grid gap-14 lg:grid-cols-[280px_1fr]">
          <aside className="resume-sidebar space-y-12">
            <section>
              <p className="font-mono text-xs tracking-widest text-[#00ffcc]">01 / DIRECTION</p>
              <h2 className="mt-4 text-2xl font-bold text-white">求职方向</h2>
              <p className="mt-3 leading-7 text-white/60">技术美术（TA） | Rendering · Shader</p>
            </section>

            <section>
              <p className="font-mono text-xs tracking-widest text-[#00ffcc]">02 / SKILLS</p>
              <h2 className="mt-4 text-2xl font-bold text-white">技能</h2>
              <div className="resume-skills mt-6 space-y-6">
                {skillGroups.map((group) => (
                  <div key={group.title}>
                    <h3 className="mb-2 font-mono text-sm font-semibold text-white">{group.title}</h3>
                    <div className="flex flex-wrap gap-2">
                      {group.items.map((item) => (
                        <span key={item} className="border border-white/10 bg-white/[0.03] px-2.5 py-1 text-xs text-white/60">{item}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <p className="font-mono text-xs tracking-widest text-[#00ffcc]">03 / EDUCATION</p>
              <h2 className="mt-4 text-2xl font-bold text-white">教育经历</h2>
              <div className="resume-education mt-6 space-y-7 text-sm leading-6 text-white/60">
                <div>
                  <h3 className="font-bold text-white">南京工业大学</h3>
                  <p>光学工程 · 硕士在读</p>
                  <p className="font-mono text-xs text-[#00ffcc]/80">2024.09 - 2027.06</p>
                  <p className="mt-2">特等奖学金（2025-2026）<br />一等奖学金、三好研究生（2024-2025）</p>
                </div>
                <div>
                  <h3 className="font-bold text-white">南京邮电大学</h3>
                  <p>光电信息科学与工程 · 本科</p>
                  <p className="font-mono text-xs text-[#00ffcc]/80">2019.09 - 2023.06</p>
                  <p className="mt-2">GPA 3.65 / 5.00 · 专业前 10%<br />校二等奖学金 × 2</p>
                </div>
              </div>
            </section>

            <a
              href="https://github.com/MaiXiang0929"
              target="_blank"
              rel="noreferrer"
              className="resume-github group block border-l-2 border-[#00ffcc] bg-[#00ffcc]/5 p-5 transition-colors hover:bg-[#00ffcc]/10"
            >
              <span className="font-mono text-xs text-[#00ffcc]">GITHUB ↗</span>
              <strong className="mt-2 block text-white group-hover:text-[#00ffcc]">MaiXiang0929</strong>
              <span className="mt-1 block text-sm text-white/50">项目代码与作品集</span>
            </a>
          </aside>

          <div className="resume-main space-y-16">
            <section>
              <SectionTitle index="04">核心项目</SectionTitle>
              <div className="resume-projects space-y-5">
                {projects.map((project, projectIndex) => (
                  <article key={project.title} className="resume-project group border border-white/10 bg-[#0d1015] p-6 transition-colors hover:border-[#00ffcc]/40 sm:p-8">
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <p className="mb-2 font-mono text-[10px] text-[#00ffcc]/70">PROJECT_0{projectIndex + 1}</p>
                        <h3 className="text-xl font-bold text-white group-hover:text-[#00ffcc]">{project.title}</h3>
                      </div>
                      <p className="shrink-0 font-mono text-xs text-white/40">{project.period}</p>
                    </div>
                    <p className="mt-3 font-mono text-xs font-semibold text-[#69aee7]">{project.stack}</p>
                    <ul className="mt-5 space-y-2 text-sm leading-7 text-white/60">
                      {project.points.map((point) => (
                        <li key={point} className="flex gap-3"><span className="text-[#00ffcc]">›</span><span>{point}</span></li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </section>

            <section>
              <SectionTitle index="05">专业经历 / 比赛</SectionTitle>
              <div className="resume-experiences relative space-y-8 border-l border-white/15 pl-6">
                {experiences.map((experience) => (
                  <article key={experience.title} className="relative">
                    <span className="absolute -left-[29px] top-1.5 h-1.5 w-1.5 rounded-full bg-[#00ffcc] shadow-[0_0_12px_#00ffcc]" />
                    <div className="flex flex-col gap-2 sm:flex-row sm:justify-between">
                      <h3 className="font-bold text-white">{experience.title}</h3>
                      <span className="shrink-0 font-mono text-xs text-white/40">{experience.period}</span>
                    </div>
                    <p className="mt-2 text-sm leading-7 text-white/60">{experience.description}</p>
                  </article>
                ))}
              </div>
            </section>

            <section className="resume-foundation border border-white/10 bg-gradient-to-br from-[#102026] to-[#0d1015] p-7 sm:p-9">
              <p className="font-mono text-xs tracking-widest text-[#00ffcc]">06 / FOUNDATION</p>
              <h2 className="mt-3 text-2xl font-bold text-white">图形学基础</h2>
              <p className="mt-4 max-w-2xl leading-8 text-white/60">
                持续学习计算机图形学、Interactive Graphics、实时渲染与 Shader 编程；结合 OpenGL 与 UE5 项目进行实践。
              </p>
            </section>
          </div>
        </div>

        <footer className="mt-20 flex flex-col gap-2 border-t border-white/10 py-8 font-mono text-xs text-white/35 sm:flex-row sm:justify-between print:hidden">
          <span>TAO ZHENHUI · TECHNICAL ARTIST</span>
          <span>Resume · 2026.09</span>
        </footer>
      </div>
    </main>
  );
}
