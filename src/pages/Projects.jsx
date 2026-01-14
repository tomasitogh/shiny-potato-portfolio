import { useGlobal } from "../context/GlobalContext"

export default function Projects() {
  const { t } = useGlobal()

  return (
    <main className="page">
      <h1>{t("projects.title")}</h1>
      <div className="projects-grid">
        {t("projects.items").map((project, index) => (
          <div key={index} className="project-card">
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <div className="tech-stack">
              {project.technologies.map(tech => (
                <span key={tech} className="tech-tag">{tech}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}
