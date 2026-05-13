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
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '8px' }}>
              <h2>{project.title}</h2>
              {project.url && (
                <a 
                  href={project.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{ 
                    color: '#3b82f6', 
                    textDecoration: 'none', 
                    fontSize: '0.9rem',
                    fontFamily: 'system-ui, -apple-system, sans-serif',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.color = '#60a5fa'
                    e.target.style.textDecoration = 'underline'
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = '#3b82f6'
                    e.target.style.textDecoration = 'none'
                  }}
                >
                  {project.url}
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