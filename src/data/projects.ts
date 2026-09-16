export type Project = {
  slug: string;
  index: string;
  category: "Rendering" | "Game / UE5" | "Shader / NPR";
  title: string;
  shortTitle: string;
  year: string;
  description: string;
  intro: string;
  stack: string[];
  accent: string;
  visual: "renderer" | "insomnia" | "npr";
  role: string;
  duration: string;
  highlights: Array<{ value: string; label: string }>;
  sections: Array<{
    eyebrow: string;
    title: string;
    body: string;
    points: string[];
  }>;
};

export const projects: Project[] = [
  {
    slug: "maix-renderer",
    index: "01",
    category: "Rendering",
    title: "MaiX Renderer",
    shortTitle: "OpenGL 实时渲染框架",
    year: "2026",
    description:
      "从零搭建的实时渲染框架：覆盖场景提交、多 Pass 管线、PBR / NPR 着色与编辑器工具。",
    intro:
      "我希望把零散的图形学知识组织成一套真正可迭代的系统。MaiX Renderer 不只是效果集合，而是一次从渲染架构、GPU 资源到内容工作流的完整实践。",
    stack: ["C++17", "OpenGL 4.0", "GLSL", "Dear ImGui", "CMake"],
    accent: "#77f2c4",
    visual: "renderer",
    role: "独立开发 / 渲染",
    duration: "2026.08 — 至今",
    highlights: [
      { value: "10+", label: "渲染特性" },
      { value: "Multi-Pass", label: "管线组织" },
      { value: "Real-time", label: "性能反馈" },
    ],
    sections: [
      {
        eyebrow: "01 / SYSTEM",
        title: "先搭建可扩展的渲染骨架",
        body: "使用 Scene Proxy、RenderView 与多 Pass 组织场景提交和渲染流程，将场景数据与 GPU 表达分离，为后续增加渲染特性保留清晰边界。",
        points: ["GPU 资源生命周期管理", "场景层级与视口拾取", "Shader 热重载", "逐 Pass 性能统计"],
      },
      {
        eyebrow: "02 / SHADING",
        title: "在同一框架中验证写实与风格化",
        body: "实现 Cook-Torrance PBR、Toon Shading、面部阴影、外扩描边、透明混合与实时阴影，并通过统一的材质编辑界面控制参数。",
        points: ["PBR 与 IBL", "Toon / Face SDF", "Shadow Mapping", "材质实时编辑"],
      },
      {
        eyebrow: "03 / POST",
        title: "形成完整的画面输出链路",
        body: "加入 HDR、Bloom、SSAO 与 ACES Tone Mapping，让几何、光照和材质最终进入可调试、可组合的后处理流程。",
        points: ["HDR Framebuffer", "Bloom", "SSAO", "ACES Tone Mapping"],
      },
    ],
  },
  {
    slug: "insomnia",
    index: "02",
    category: "Game / UE5",
    title: "Insomnia",
    shortTitle: "PSX 风格微恐解谜游戏",
    year: "2026",
    description:
      "围绕空间交互与低保真恐怖氛围，完成门系统、毒圈表现和 PSX 风格后处理。",
    intro:
      "在游戏机制与视觉气质之间寻找统一：交互必须可靠，画面又需要保留压迫、不稳定的 PSX 质感。我负责把这两部分落进可持续迭代的 UE5 实现。",
    stack: ["Unreal Engine 5", "C++", "Blueprint", "Post Process", "Git"],
    accent: "#ff7a5c",
    visual: "insomnia",
    role: "技术美术 / Gameplay",
    duration: "2026.07 — 2026.08",
    highlights: [
      { value: "1-Bit", label: "抖动风格" },
      { value: "C++", label: "交互逻辑" },
      { value: "UE5", label: "实时实现" },
    ],
    sections: [
      {
        eyebrow: "01 / INTERACTION",
        title: "让门成为空间叙事的一部分",
        body: "使用 C++ 完善单向门、双向门与角色侧向判断，统一开关门状态，并调整相机高度和交互检测范围。",
        points: ["单向 / 双向模式", "角色所在侧判断", "状态控制", "交互检测调优"],
      },
      {
        eyebrow: "02 / VOLUME",
        title: "构建可读的毒圈内外差异",
        body: "使用 Blueprint 与后处理材质实现毒圈表现，通过场景深度和视口 UV 重建世界坐标与视线方向，修复不同相机角度下的显示异常。",
        points: ["世界坐标重建", "深度判断", "圈内外视觉分层", "视角兼容"],
      },
      {
        eyebrow: "03 / STYLE",
        title: "把 PSX 质感变成可控参数",
        body: "实现 1-Bit Dithering 风格化后处理，并接入毒圈表现，使颗粒、抖动和区域反馈能够共同服务于游戏氛围。",
        points: ["1-Bit Dithering", "低色阶输出", "风格与玩法联动", "实时参数迭代"],
      },
    ],
  },
  {
    slug: "unity-npr",
    index: "03",
    category: "Shader / NPR",
    title: "Unity NPR",
    shortTitle: "二次元角色渲染",
    year: "2026",
    description:
      "面向二次元角色的分层光照方案，整合 Ramp、材质分区、SDF 面部阴影与描边。",
    intro:
      "这个项目关注的不是单一 Shader 技巧，而是如何让角色的身体、面部、金属与轮廓在同一套美术语言下稳定工作。",
    stack: ["Unity 2022.3", "URP", "HLSL", "ShaderLab", "C#"],
    accent: "#9e8cff",
    visual: "npr",
    role: "Shader / 技术美术",
    duration: "2026.07",
    highlights: [
      { value: "SDF", label: "面部阴影" },
      { value: "URP", label: "渲染管线" },
      { value: "NPR", label: "视觉方向" },
    ],
    sections: [
      {
        eyebrow: "01 / LIGHTING",
        title: "以贴图驱动可控的分层光照",
        body: "组合 BaseMap、LightMap 与 Ramp Texture，对不同材质区域分别控制明暗边界与色阶，使角色在不同光照环境中保持风格稳定。",
        points: ["LightMap 分区", "Ramp 色阶", "卡通 / 金属高光", "多光源支持"],
      },
      {
        eyebrow: "02 / FACE",
        title: "让面部阴影响应角色朝向",
        body: "使用 SDF 贴图描述面部阴影形状，并由 C# 实时传递头部方向向量，使阴影随角色朝向和光源位置自然切换。",
        points: ["SDF 阴影", "头部方向向量", "左右翻转采样", "光源响应"],
      },
      {
        eyebrow: "03 / SILHOUETTE",
        title: "从高光到轮廓统一角色可读性",
        body: "加入边缘光和外扩描边，针对身体、面部与金属区域设置不同响应，使角色在复杂背景下仍保持清晰轮廓。",
        points: ["外扩描边", "Fresnel 边缘光", "材质差异化", "复杂背景可读性"],
      },
    ],
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
