import type { Metadata } from "next";
import Link from "next/link";
import PortfolioHeader from "@/components/PortfolioHeader";
import ProjectVisual from "@/components/ProjectVisual";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "陶振辉 | Technical Artist Portfolio",
  description: "陶振辉的技术美术作品集，关注实时渲染、Shader、NPR 与工具开发。",
};

export default function Home() {
  return (
    <main className="portfolio-page">
      <PortfolioHeader />

      <section id="about" className="portfolio-hero">
        <div className="portfolio-hero__meta" aria-hidden="true">
          <span>PORTFOLIO / 2026</span>
          <span>NANJING, CN</span>
        </div>
        <div className="portfolio-hero__content">
          <p className="eyebrow"><span className="status-dot" />AVAILABLE FOR OPPORTUNITIES</p>
          <h1>Bridging <em>art</em><br />and technology.</h1>
          <div className="portfolio-hero__footer">
            <p>
              我是陶振辉，一名专注实时渲染、风格化 Shader
              与图形工具开发的技术美术。我把视觉目标拆解为可靠、可复用的技术方案。
            </p>
            <a href="#work" className="round-link" aria-label="查看项目"><span>↓</span></a>
          </div>
        </div>
        <span className="portfolio-hero__mark" aria-hidden="true">TA</span>
      </section>

      <section id="work" className="work-section">
        <div className="section-intro">
          <p className="eyebrow">SELECTED WORK / 精选项目</p>
          <h2>从底层渲染到最终画面</h2>
          <p>每个项目都围绕一个具体问题展开：理解它、拆解它，并把答案做成可以运行的系统。</p>
        </div>

        <div className="category-strip" aria-label="项目方向">
          {Array.from(new Set(projects.map((project) => project.category))).map((category, index) => (
            <span key={category}><b>0{index + 1}</b>{category}</span>
          ))}
        </div>

        <div className="project-list">
          {projects.map((project) => (
            <article className="project-card" key={project.slug}>
              <Link href={`/projects/${project.slug}`} className="project-card__visual" aria-label={`查看 ${project.title}`}>
                <ProjectVisual project={project} compact />
                <span className="project-card__open">OPEN <i>↗</i></span>
              </Link>
              <div className="project-card__copy">
                <div>
                  <p className="project-card__category">{project.index} / {project.category}</p>
                  <h3><Link href={`/projects/${project.slug}`}>{project.title}</Link></h3>
                  <p className="project-card__subtitle">{project.shortTitle}</p>
                </div>
                <div className="project-card__description">
                  <p>{project.description}</p>
                  <div className="tag-list">
                    {project.stack.slice(0, 4).map((tag) => <span key={tag}>{tag}</span>)}
                  </div>
                </div>
                <span className="project-card__year">{project.year}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="about-section">
        <p className="eyebrow">ABOUT / 关于我</p>
        <div className="about-section__grid">
          <h2>技术为画面服务，<br />工具为创作提速。</h2>
          <div>
            <p>光学工程硕士在读，关注实时渲染、NPR、PBR 与美术工具开发，具备 Unity、Unreal Engine 和 OpenGL 项目实践经验。</p>
            <p>我喜欢在美术需求与工程约束之间工作：先理解视觉目标，再寻找准确、清晰、可迭代的实现路径。</p>
            <Link href="/resume" className="text-link">查看完整简历 <span>↗</span></Link>
          </div>
        </div>
      </section>

      <footer className="portfolio-footer">
        <div>
          <p className="eyebrow">LET&apos;S WORK TOGETHER</p>
          <h2>Have an idea?<br /><em>Let&apos;s make it real.</em></h2>
        </div>
        <a href="mailto:2679664405@qq.com" className="footer-email">2679664405@qq.com ↗</a>
        <p className="portfolio-footer__copyright">© 2026 TAO ZHENHUI · DESIGNED &amp; BUILT WITH CARE</p>
      </footer>
    </main>
  );
}
