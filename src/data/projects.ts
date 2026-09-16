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
  role: string;
  duration: string;
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
      "使用 C++17 和 OpenGL 4.0 搭建实时渲染框架，实现多 Pass 渲染、PBR / NPR 着色、后处理和基础编辑器功能。",
    intro:
      "个人开发的实时渲染框架，用于学习和实践渲染管线、GPU 资源管理、材质着色与编辑器工具开发。项目目前仍在持续完善。",
    stack: ["C++17", "OpenGL 4.0", "GLSL", "Dear ImGui", "CMake"],
    role: "独立开发 / 渲染",
    duration: "2026.08 — 至今",
    sections: [
      {
        eyebrow: "01 / SYSTEM",
        title: "渲染框架与资源管理",
        body: "使用 Scene Proxy、RenderView 与多 Pass 组织场景提交和渲染流程，将场景数据与 GPU 表达分离，为后续增加渲染特性保留清晰边界。",
        points: ["GPU 资源生命周期管理", "场景层级与视口拾取", "Shader 热重载", "逐 Pass 性能统计"],
      },
      {
        eyebrow: "02 / SHADING",
        title: "材质与光照实现",
        body: "实现 Cook-Torrance PBR、Toon Shading、面部阴影、外扩描边、透明混合与实时阴影，并通过统一的材质编辑界面控制参数。",
        points: ["PBR 与 IBL", "Toon / Face SDF", "Shadow Mapping", "材质实时编辑"],
      },
      {
        eyebrow: "03 / POST",
        title: "后处理流程",
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
      "在 UE5 项目中完成门交互系统、毒圈内外视觉表现和 1-Bit Dithering 风格化后处理。",
    intro:
      "团队游戏项目中的技术美术与功能开发实践。我主要负责部分交互逻辑、毒圈后处理表现和 PSX 风格化效果。",
    stack: ["Unreal Engine 5", "C++", "Blueprint", "Post Process", "Git"],
    role: "技术美术 / Gameplay",
    duration: "2026.07 — 2026.08",
    sections: [
      {
        eyebrow: "01 / INTERACTION",
        title: "门交互系统",
        body: "使用 C++ 完善单向门、双向门与角色侧向判断，统一开关门状态，并调整相机高度和交互检测范围。",
        points: ["单向 / 双向模式", "角色所在侧判断", "状态控制", "交互检测调优"],
      },
      {
        eyebrow: "02 / VOLUME",
        title: "毒圈视觉表现",
        body: "使用 Blueprint 与后处理材质实现毒圈表现，通过场景深度和视口 UV 重建世界坐标与视线方向，修复不同相机角度下的显示异常。",
        points: ["世界坐标重建", "深度判断", "圈内外视觉分层", "视角兼容"],
      },
      {
        eyebrow: "03 / STYLE",
        title: "PSX 风格后处理",
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
      "基于 Unity URP 实现二次元角色渲染，包含分层光照、Ramp、材质分区、SDF 面部阴影和描边。",
    intro:
      "个人 Shader 练习项目，主要验证二次元角色身体与面部的分层光照、材质区分、轮廓线和 SDF 面部阴影实现。",
    stack: ["Unity 2022.3", "URP", "HLSL", "ShaderLab", "C#"],
    role: "Shader / 技术美术",
    duration: "2026.07",
    sections: [
      {
        eyebrow: "01 / LIGHTING",
        title: "分层光照",
        body: "组合 BaseMap、LightMap 与 Ramp Texture，对不同材质区域分别控制明暗边界与色阶，使角色在不同光照环境中保持风格稳定。",
        points: ["LightMap 分区", "Ramp 色阶", "卡通 / 金属高光", "多光源支持"],
      },
      {
        eyebrow: "02 / FACE",
        title: "SDF 面部阴影",
        body: "使用 SDF 贴图描述面部阴影形状，并由 C# 实时传递头部方向向量，使阴影随角色朝向和光源位置自然切换。",
        points: ["SDF 阴影", "头部方向向量", "左右翻转采样", "光源响应"],
      },
      {
        eyebrow: "03 / SILHOUETTE",
        title: "边缘光与描边",
        body: "加入边缘光和外扩描边，针对身体、面部与金属区域设置不同响应，使角色在复杂背景下仍保持清晰轮廓。",
        points: ["外扩描边", "Fresnel 边缘光", "材质差异化", "复杂背景可读性"],
      },
    ],
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
