import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PortfolioHeader from "@/components/PortfolioHeader";
import ProjectVisual from "@/components/ProjectVisual";
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
  const nextProject = projects[(projectIndex + 1) % projects.length];

  return (
    <main className="portfolio-page project-page">
      <PortfolioHeader detail />

      <section className="project-hero">
        <div className="project-hero__heading">
          <p className="eyebrow">{project.index} / {project.category} / {project.year}</p>
          <h1>{project.title}</h1>
          <p className="project-hero__subtitle">{project.shortTitle}</p>
        </div>
        <ProjectVisual project={project} />
        <div className="project-hero__intro">
          <p>{project.intro}</p>
          <dl>
            <div><dt>ROLE</dt><dd>{project.role}</dd></div>
            <div><dt>TIME</dt><dd>{project.duration}</dd></div>
            <div><dt>STACK</dt><dd>{project.stack.join(" · ")}</dd></div>
          </dl>
        </div>
      </section>

      <section className="project-metrics">
        {project.highlights.map((highlight) => (
          <div key={highlight.label}>
            <strong>{highlight.value}</strong>
            <span>{highlight.label}</span>
          </div>
        ))}
      </section>

      <section className="case-study">
        {project.sections.map((section, index) => (
          <article className="case-study__section" key={section.eyebrow}>
            <div className="case-study__title">
              <p className="eyebrow">{section.eyebrow}</p>
              <h2>{section.title}</h2>
            </div>
            <div className="case-study__body">
              <p>{section.body}</p>
              <ul>
                {section.points.map((point) => <li key={point}><span>0{index + 1}</span>{point}</li>)}
              </ul>
            </div>
          </article>
        ))}
      </section>

      <section className="next-project">
        <p className="eyebrow">NEXT PROJECT / 下一个项目</p>
        <Link href={`/projects/${nextProject.slug}`}>
          <span>{nextProject.title}</span><i>↗</i>
        </Link>
        <p>{nextProject.shortTitle}</p>
      </section>
    </main>
  );
}
