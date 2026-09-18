export type Project = {
  slug: string;
  index: string;
  display: "featured" | "exercise";
  exerciseCategory?: "rendering" | "tools" | "animation";
  category: "Rendering" | "Game / UE5" | "Shader / NPR" | "Technical Animation";
  title: string;
  shortTitle: string;
  year: string;
  description: string;
  intro: string;
  stack: string[];
  role: string;
  duration: string;
  cover?: {
    src: string;
    alt: string;
  };
  demo?: {
    src: string;
    poster: string;
    title: string;
    caption: string;
  };
  sections: Array<{
    eyebrow: string;
    title: string;
    body: string;
    points: string[];
    media?: {
      type: "video";
      src: string;
      poster: string;
      label: string;
      caption: string;
      autoPlay?: boolean;
      loop?: boolean;
      muted?: boolean;
    };
  }>;
};

export const projects: Project[] = [
  {
    slug: "maix-renderer",
    index: "01",
    display: "featured",
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
        body: "使用 Scene Proxy、RenderView 与多 Pass 组织场景提交和渲染流程，将场景数据与 GPU 表达分离，方便后续继续添加新的渲染功能。",
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
        body: "实现 HDR、Bloom、SSAO 与 ACES Tone Mapping，并支持分别调节各项后处理效果。",
        points: ["HDR Framebuffer", "Bloom", "SSAO", "ACES Tone Mapping"],
      },
    ],
  },
  {
    slug: "insomnia",
    index: "02",
    display: "featured",
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
        body: "实现 1-Bit Dithering 风格化后处理，并将抖动效果与毒圈结合，强化游戏的压抑氛围。",
        points: ["1-Bit Dithering", "低色阶输出", "风格与玩法联动", "实时参数迭代"],
      },
    ],
  },
  {
    slug: "unity-npr",
    index: "03",
    display: "featured",
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
    cover: {
      src: "/projects/unity-npr/cover.webp",
      alt: "Unity NPR 二次元角色最终渲染效果",
    },
    demo: {
      src: "/projects/unity-npr/videos/project-breakdown.mp4",
      poster: "/projects/unity-npr/posters/project-breakdown.webp",
      title: "NPR 角色渲染完整演示",
      caption: "完整展示分层光照、材质高光、轮廓光、外扩描边、实时阴影与日夜 Ramp 切换。",
    },
    sections: [
      {
        eyebrow: "01 / LIGHTING",
        title: "分层光照",
        body: "组合 BaseMap、LightMap 与 Ramp Texture，用 Ramp 控制明暗色阶，并分别调整不同材质区域。",
        points: ["LightMap 分区", "Ramp 色阶", "卡通 / 金属高光", "多光源支持"],
      },
      {
        eyebrow: "02 / FACE",
        title: "SDF 面部阴影",
        body: "使用 SDF 贴图描述面部阴影形状，并由 C# 实时传递头部方向向量，使阴影随角色朝向和光源位置自然切换。",
        points: ["SDF 阴影", "头部方向向量", "左右翻转采样", "光源响应"],
        media: {
          type: "video",
          src: "/projects/unity-npr/videos/face-sdf.mp4",
          poster: "/projects/unity-npr/posters/face-sdf.webp",
          label: "面部 SDF 阴影随光源方向实时变化",
          caption: "固定角色与相机，仅改变光源方向，观察面部阴影在左右两侧之间的连续切换。",
          autoPlay: true,
          loop: true,
          muted: true,
        },
      },
      {
        eyebrow: "03 / SILHOUETTE",
        title: "边缘光与描边",
        body: "加入边缘光和外扩描边，并分别调整身体、面部和金属区域的相关参数。",
        points: ["外扩描边", "Fresnel 边缘光", "材质差异化", "复杂背景可读性"],
      },
    ],
  },
  {
    slug: "character-animation-integration",
    index: "04",
    display: "exercise",
    exerciseCategory: "animation",
    category: "Technical Animation",
    title: "Character Animation Integration",
    shortTitle: "角色动画集成练习",
    year: "2026",
    description:
      "使用 C# Gameplay 状态机连接输入、角色控制和 Animator，完成移动、冲刺、跳跃与瞄准等角色动画状态的切换。",
    intro:
      "以角色控制为核心的技术动画练习，重点处理 Gameplay 状态、Animator 播放、Root Motion 与 CharacterController 位移之间的数据衔接。",
    stack: ["Unity 2022.3", "C#", "Animator", "Root Motion", "CharacterController"],
    role: "动画系统集成 / Gameplay",
    duration: "2026.09",
    cover: {
      src: "/projects/character-animation-integration/posters/locomotion-demo.webp",
      alt: "角色移动与瞄准动画集成演示",
    },
    demo: {
      src: "/projects/character-animation-integration/videos/locomotion-demo.mp4",
      poster: "/projects/character-animation-integration/posters/locomotion-demo.webp",
      title: "角色移动与动画状态演示",
      caption: "展示待机、自由移动、冲刺、移动中跳跃、瞄准移动以及不同状态间的过渡。",
    },
    sections: [
      {
        eyebrow: "01 / STATE",
        title: "代码驱动的角色状态",
        body: "使用独立的 C# Gameplay 状态机组织 Idle、Move、Hover 与 Aiming 状态，将输入和角色行为与 Animator 播放逻辑分离。",
        points: ["状态进入与退出", "输入条件监听", "Animator CrossFade", "移动与瞄准状态切换"],
      },
      {
        eyebrow: "02 / MOTION",
        title: "Root Motion 与角色移动",
        body: "从 Animator 获取位移增量，并通过 CharacterController 应用到角色；腾空期间缓存起跳前的水平速度，再单独叠加重力产生的竖直位移。",
        points: ["Animator 位移读取", "CharacterController.Move", "水平速度缓存", "动画与碰撞体同步"],
      },
      {
        eyebrow: "03 / JUMP",
        title: "跳跃与落地处理",
        body: "通过跳跃高度和重力计算初始竖直速度，在空中持续更新重力，并结合 CharacterController 接地状态完成腾空与落地状态切换。",
        points: ["跳跃初速度计算", "逐帧重力更新", "离地检测", "落地返回待机"],
      },
    ],
  },
];

export const featuredProjects = projects.filter((project) => project.display === "featured");
export const exerciseProjects = projects.filter((project) => project.display === "exercise");

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
