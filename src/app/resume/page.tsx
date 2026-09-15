import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PrintButton from "./PrintButton";
import "./print.css";

export const metadata: Metadata = {
  title: "陶振辉 | 技术美术简历",
  description: "陶振辉的 Technical Artist 在线简历，关注实时渲染、Shader。",
};

type HighlightKind = "tech" | "result";

type ProjectPoint = {
  text: string;
  highlights: Array<{
    keyword: string;
    kind?: HighlightKind;
  }>;
};

type ResumeProject = {
  title: string;
  period: string;
  stack: string;
  points: ProjectPoint[];
};

// 转义 C++ 等关键词中的正则特殊字符，避免匹配时产生歧义。
const escapeRegExp = (value: string) => value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

function HighlightedText({ text, highlights }: ProjectPoint) {
  const uniqueHighlights = Array.from(
    new Map(highlights.map((highlight) => [highlight.keyword, highlight])).values(),
  ).sort((a, b) => b.keyword.length - a.keyword.length);

  if (uniqueHighlights.length === 0) return <span>{text}</span>;

  const highlightMap = new Map(uniqueHighlights.map((highlight) => [highlight.keyword, highlight]));
  const pattern = new RegExp(`(${uniqueHighlights.map(({ keyword }) => escapeRegExp(keyword)).join("|")})`, "g");

  return (
    <span>
      {text.split(pattern).map((part, partIndex) => {
        const highlight = highlightMap.get(part);

        if (!highlight) return <span key={`${part}-${partIndex}`}>{part}</span>;

        return (
          <strong
            key={`${part}-${partIndex}`}
            className={highlight.kind === "result" ? "resume-highlight-result" : "resume-highlight-tech"}
          >
            {part}
          </strong>
        );
      })}
    </span>
  );
}

// 简历内容集中在这里维护：修改文字或新增条目时，不需要调整下方页面结构。
// 技能板块
const skillGroups = [
  {
    title: "引擎 / DCC",
    items: [
      "UE5",
      "Unity",
      "Blender",
      "3ds Max",
      "Houdini",
      "Substance Designer",
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
    ],
  },
];

// 项目板块
const projects: ResumeProject[] = [
  {
    title: "MaiX Renderer · OpenGL 实时渲染框架",
    period: "2026.08 - 至今",
    stack: "C++17 · OpenGL 4.0 · GLSL · Dear ImGui · CMake",
    points: [
      {
        text: "基于 C++17 与 OpenGL 4.0 搭建实时渲染框架，采用 Scene Proxy、RenderView 与多 Pass 管线组织场景提交、GPU 资源管理和渲染流程。",
        highlights: [
          { keyword: "OpenGL 4.0" },
          { keyword: "多 Pass 管线", kind: "result" },
        ],
      },
      {
        text: "实现 Cook-Torrance PBR、Toon Shading、面部阴影、外扩描边、透明混合与实时阴影，并加入 HDR、Bloom、SSAO 和 ACES Tone Mapping。",
        highlights: [
          { keyword: "PBR" },
          { keyword: "Toon Shading" },
          { keyword: "HDR、Bloom、SSAO", kind: "result" },
        ],
      },
      {
        text: "基于 Dear ImGui 开发场景层级、材质编辑与属性面板，支持 FBX 模型导入、视口拾取、Transform Gizmo、Shader 热重载及 GPU 性能统计。",
        highlights: [
          { keyword: "Dear ImGui" },
          { keyword: "FBX 模型导入" },
          { keyword: "Shader 热重载及 GPU 性能统计", kind: "result" },
        ],
      },
    ],
  },
  {
    title: "Insomnia · PSX 风格微恐解谜游戏",
    period: "2026.07 - 2026.08",
    stack: "Unreal Engine 5 · C++ · Blueprint · Post Process · UE5 MCP · Git",
    points: [
      {
        text: "使用 C++ 完善医院场景门交互系统，实现单向门与双向门模式、角色所在侧判断及开关门状态控制，并调整相机高度与交互检测范围。",
        highlights: [
          { keyword: "C++" },
          { keyword: "单向门与双向门" },
          { keyword: "开关门状态控制", kind: "result" },
        ],
      },
      {
        text: "使用 Blueprint 与 Post Process Material 实现毒圈及圈内外视觉表现，结合场景深度与视口 UV 重建世界坐标和视线方向，解决不同相机视角下的显示异常。",
        highlights: [
          { keyword: "Post Process Material" },
          { keyword: "重建世界坐标和视线方向" },
          { keyword: "解决不同相机视角下的显示异常", kind: "result" },
        ],
      },
      {
        text: "实现基于 1-Bit Dithering 的 PSX 风格化后处理，并将抖动效果接入毒圈视觉表现；使用 UE5 MCP 辅助材质与场景参数调整，提高效果验证和迭代效率。",
        highlights: [
          { keyword: "1-Bit Dithering" },
          { keyword: "PSX 风格化后处理" },
          { keyword: "UE5 MCP" },
        ],
      },
    ],
  },
  {
    title: "Unity URP 二次元角色 NPR 渲染",
    period: "2026.07",
    stack: "Unity 2022.3 · URP · HLSL / ShaderLab · C#",
    points: [
      {
        text: "基于 Unity URP 编写角色身体与面部 Shader，围绕二次元角色的分层光照、材质区分和面部阴影实现风格化实时渲染。",
        highlights: [
          { keyword: "Unity URP" },
          { keyword: "Shader" },
          { keyword: "风格化实时渲染", kind: "result" },
        ],
      },
      {
        text: "结合 BaseMap、LightMap 与 Ramp Texture 实现多材质区域色阶阴影，并加入卡通高光、金属高光、边缘光、外扩描边及多光源支持。",
        highlights: [
          { keyword: "BaseMap" },
          { keyword: "LightMap" },
          { keyword: "Ramp Texture" },
          { keyword: "多光源支持", kind: "result" },
        ],
      },
      {
        text: "基于 SDF 贴图与头部朝向计算动态面部阴影，通过 C# 实时向材质传递头部方向向量，使阴影能够随角色朝向和光源方向变化。",
        highlights: [
          { keyword: "SDF" },
          { keyword: "C#" },
          { keyword: "动态面部阴影", kind: "result" },
        ],
      },
    ],
  },
];

// 经历板块
const experiences = [
  {
    title: "腾讯光子 OpenLight 创造营 · 第 3 赛季技术美术方向",
    period: "2026.03 - 2026.05",
    description: "报名并成功入选腾讯光子 OpenLight 创造营第 3 赛季-技术美术方向，参与技术美术的线上课程学习。",
  },
  {
    title: "“萌芽”社联 GameJam · UI / 技术美术",
    period: "2026.02",
    description: "负责 UI 动效与卡通渲染 Shader 的制作与调试，在短周期团队协作中完成相关视觉效果的开发与迭代。",
  },
  {
    title: "米哈游策划大赛 · 场景搭建",
    period: "2025.11",
    description: "参与二次元风格场景搭建，完成场景视觉表现与风格化效果调整，并配合团队推进整体场景呈现。",
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
              <span className="mt-1 block text-sm text-white/50">项目代码</span>
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
                        <li key={point.text} className="flex gap-3">
                          <span className="text-[#00ffcc]">›</span>
                          <HighlightedText text={point.text} highlights={point.highlights} />
                        </li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </section>

            <section>
              <SectionTitle index="05">实践经历</SectionTitle>
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
