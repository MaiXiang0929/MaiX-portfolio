import type { Project } from "@/data/projects";

export default function ProjectVisual({
  project,
  compact = false,
}: {
  project: Project;
  compact?: boolean;
}) {
  return (
    <div
      className={`project-visual project-visual--${project.visual} ${compact ? "project-visual--compact" : ""}`}
      style={{ "--project-accent": project.accent } as React.CSSProperties}
      aria-hidden="true"
    >
      <div className="project-visual__grid" />
      <div className="project-visual__noise" />

      {project.visual === "renderer" && (
        <>
          <div className="renderer-orbit renderer-orbit--one" />
          <div className="renderer-orbit renderer-orbit--two" />
          <div className="renderer-core" />
          <span className="visual-label visual-label--top">FRAME_0128</span>
          <span className="visual-label visual-label--bottom">PBR / SSAO / ACES</span>
        </>
      )}

      {project.visual === "insomnia" && (
        <>
          <div className="insomnia-hall" />
          <div className="insomnia-door" />
          <div className="insomnia-scanline" />
          <span className="visual-label visual-label--top">NIGHT_SHIFT_03</span>
          <span className="visual-label visual-label--bottom">SIGNAL UNSTABLE</span>
        </>
      )}

      {project.visual === "npr" && (
        <>
          <div className="npr-sun" />
          <div className="npr-head" />
          <div className="npr-shadow" />
          <span className="visual-label visual-label--top">LIGHT_DIR 0.72</span>
          <span className="visual-label visual-label--bottom">FACE SDF / RAMP</span>
        </>
      )}
    </div>
  );
}
