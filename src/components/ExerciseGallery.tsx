"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/projects";

type ExerciseCategory = NonNullable<Project["exerciseCategory"]>;

const categories: Array<{ value: ExerciseCategory; label: string }> = [
  { value: "rendering", label: "渲染" },
  { value: "tools", label: "工具" },
  { value: "animation", label: "动画" },
];

export default function ExerciseGallery({ projects }: { projects: Project[] }) {
  const [activeCategory, setActiveCategory] = useState<ExerciseCategory>("animation");
  const visibleProjects = projects.filter(
    (project) => project.exerciseCategory === activeCategory,
  );

  return (
    <>
      <div className="exercise-filters" aria-label="练习项目分类">
        {categories.map((category) => (
          <button
            type="button"
            className={activeCategory === category.value ? "is-active" : ""}
            aria-pressed={activeCategory === category.value}
            onClick={() => setActiveCategory(category.value)}
            key={category.value}
          >
            {category.label}
          </button>
        ))}
      </div>

      {visibleProjects.length > 0 ? (
        <div className="exercise-grid">
          {visibleProjects.map((project) => (
            <article className="exercise-card" key={project.slug}>
              <Link
                href={`/projects/${project.slug}`}
                className={`exercise-card__media${project.cover ? " exercise-card__media--cover" : ""}`}
                aria-label={`查看 ${project.title}`}
              >
                {project.cover ? (
                  <Image
                    src={project.cover.src}
                    alt={project.cover.alt}
                    fill
                    sizes="(max-width: 760px) 100vw, (max-width: 1040px) 50vw, 33vw"
                  />
                ) : (
                  <span>{project.category}</span>
                )}
              </Link>
              <div className="exercise-card__body">
                <div className="exercise-card__meta">
                  <span>{project.category}</span>
                  <span>{project.year}</span>
                </div>
                <h3><Link href={`/projects/${project.slug}`}>{project.title}</Link></h3>
                <p>{project.description}</p>
                <div className="simple-tags">
                  {project.stack.slice(0, 4).map((tag) => <span key={tag}>{tag}</span>)}
                </div>
                <Link href={`/projects/${project.slug}`} className="exercise-card__link">
                  查看详情 <span aria-hidden="true">↗</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <p className="exercise-empty">该分类暂时没有项目。</p>
      )}
    </>
  );
}
