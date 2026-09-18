import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PortfolioHeader from "@/components/PortfolioHeader";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "陶振辉 | 技术美术作品集",
  description: "陶振辉的技术美术作品集，包含实时渲染、Shader、NPR 与 UE5 项目实践。",
};

export default function Home() {
  return (
    <main className="portfolio-page">
      <PortfolioHeader />

      <section className="simple-hero">
        <div className="content-width simple-hero__grid">
          <div>
            <p className="section-label">TECHNICAL ARTIST PORTFOLIO</p>
            <h1>陶振辉</h1>
            <p className="simple-hero__role">Technical Artist / 技术美术</p>
          </div>
          <div className="simple-hero__intro">
            <p>
              光学工程硕士在读，关注实时渲染、风格化 Shader 与图形工具开发，
              具有 Unity、Unreal Engine 和 OpenGL 项目实践经验。
            </p>
            <div className="button-row">
              <a href="#projects" className="primary-button">查看项目</a>
              <Link href="/resume" className="secondary-button">查看简历</Link>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="projects-section">
        <div className="content-width">
          <div className="section-heading">
            <div>
              <p className="section-label">PROJECTS</p>
              <h2>项目实践</h2>
            </div>
            <p>以下项目来自我的个人开发和团队实践，主要涉及实时渲染、Shader 与 UE5 功能实现。</p>
          </div>

          <div className="simple-project-list">
            {projects.map((project) => (
              <article className="simple-project-card" key={project.slug}>
                <Link
                  href={`/projects/${project.slug}`}
                  className={`project-placeholder${project.cover ? " project-cover" : ""}`}
                  aria-label={`查看 ${project.title}`}
                >
                  {project.cover ? (
                    <Image
                      src={project.cover.src}
                      alt={project.cover.alt}
                      fill
                      sizes="(max-width: 760px) 100vw, 43vw"
                    />
                  ) : (
                    <>
                      <span>{project.category}</span>
                      <strong>{project.title}</strong>
                      <small>项目图片待补充</small>
                    </>
                  )}
                </Link>
                <div className="simple-project-card__content">
                  <div className="simple-project-card__meta">
                    <span>{project.index}</span>
                    <span>{project.year}</span>
                  </div>
                  <h3><Link href={`/projects/${project.slug}`}>{project.title}</Link></h3>
                  <p className="simple-project-card__subtitle">{project.shortTitle}</p>
                  <p className="simple-project-card__description">{project.description}</p>
                  <div className="simple-tags">
                    {project.stack.map((tag) => <span key={tag}>{tag}</span>)}
                  </div>
                  <Link href={`/projects/${project.slug}`} className="plain-link">查看项目详情 →</Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="simple-about">
        <div className="content-width simple-about__grid">
          <div>
            <p className="section-label">ABOUT ME</p>
            <h2>关于我</h2>
          </div>
          <div className="simple-about__content">
            <p>
              南京工业大学光学工程硕士在读，求职方向为技术美术。主要学习和实践方向包括实时渲染、
              NPR Shader、PBR、后处理和图形工具开发。
            </p>
            <p>
              目前使用过 Unity、Unreal Engine、OpenGL、C++、HLSL / GLSL、C# 和 Python，
              希望继续积累渲染表现与工具开发方面的项目经验。
            </p>
            <dl className="about-facts">
              <div><dt>教育背景</dt><dd>南京工业大学 · 光学工程硕士在读</dd></div>
              <div><dt>技术方向</dt><dd>实时渲染、NPR、PBR、后处理、工具开发</dd></div>
              <div><dt>求职方向</dt><dd>技术美术（TA）</dd></div>
            </dl>
            <Link href="/resume" className="plain-link">查看完整简历 →</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
