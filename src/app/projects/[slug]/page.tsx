import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PortfolioHeader from "@/components/PortfolioHeader";
import { getProject, projects } from "@/data/projects";

type ProjectPageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: `${project.title} | 陶振辉作品集`,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const projectIndex = projects.findIndex((item) => item.slug === project.slug);
  const previousProject = projectIndex > 0 ? projects[projectIndex - 1] : undefined;
  const nextProject = projectIndex < projects.length - 1 ? projects[projectIndex + 1] : undefined;

  return (
    <main className="portfolio-page detail-page">
      <PortfolioHeader detail />

      <article className="content-width simple-detail">
        <header className="simple-detail__header">
          <p className="section-label">{project.category} · {project.year}</p>
          <h1>{project.title}</h1>
          <p className="simple-detail__subtitle">{project.shortTitle}</p>
          <p className="simple-detail__summary">{project.intro}</p>
        </header>

        <div className="detail-placeholder">
          <span>{project.category}</span>
          <strong>{project.title}</strong>
          <small>项目主图或演示视频待补充</small>
        </div>

        <dl className="project-facts">
          <div><dt>项目时间</dt><dd>{project.duration}</dd></div>
          <div><dt>个人职责</dt><dd>{project.role}</dd></div>
          <div><dt>技术栈</dt><dd>{project.stack.join("、")}</dd></div>
          <div><dt>当前状态</dt><dd>{project.slug === "maix-renderer" ? "持续开发中" : "阶段性完成"}</dd></div>
        </dl>

        <section className="detail-overview">
          <p className="section-label">PROJECT OVERVIEW</p>
          <h2>项目概述</h2>
          <p>{project.description}</p>
        </section>

        <div className="simple-case-study">
          {project.sections.map((section) => (
            <section key={section.eyebrow}>
              <div>
                <p className="section-label">{section.eyebrow}</p>
                <h2>{section.title}</h2>
              </div>
              <div>
                <p>{section.body}</p>
                <ul>
                  {section.points.map((point) => <li key={point}>{point}</li>)}
                </ul>
              </div>
            </section>
          ))}
        </div>

        <nav className="project-pagination" aria-label="项目翻页">
          {previousProject ? (
            <Link href={`/projects/${previousProject.slug}`}>← 上一个项目：{previousProject.title}</Link>
          ) : <span />}
          {nextProject ? (
            <Link href={`/projects/${nextProject.slug}`}>下一个项目：{nextProject.title} →</Link>
          ) : <Link href="/#projects">返回全部项目 →</Link>}
        </nav>
      </article>
    </main>
  );
}
