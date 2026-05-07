import { useGlobal } from "../context/GlobalContext"
import { FaExternalLinkAlt } from 'react-icons/fa'; // Opcional: si quieres un icono

export default function Projects() {
  const { t } = useGlobal()

  return (
    <main className="page">
      <h1>{t("projects.title")}</h1>
      <div className="projects-grid">
        {t("projects.items").map((project, index) => (
          <div key={index} className="project-card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h2>{project.title}</h2>
              {/* Renderizado condicional del enlace */}
              {project.url && (
                <a 
                  href={project.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="project-link"
                  style={{ fontSize: '1.2rem', color: 'var(--text)' }}
                >
                  <FaExternalLinkAlt title="Visitar sitio" />
                </a>
              )}
            </div>

            {Array.isArray(project.description) ? (
              <ul className="project-description-list">
                {project.description.map((desc, i) => (
                  <li key={i}>{desc}</li>
                ))}
              </ul>
            ) : (
              <p>{project.description}</p>
            )}

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