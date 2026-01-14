import { useGlobal } from "../context/GlobalContext"
import { Link } from "react-router-dom"
import "./Home.css"

export default function Home() {
  const { t, lang } = useGlobal()

  const cvFile = lang === 'es'
    ? '/cv_GonzalezHumphreys_es.pdf'
    : '/cv_GonzalezHumphreys_en.pdf';

  return (
    <main className="page home-container">
      <h1 className="home-title">{t("homePage.title")}</h1>
      <p className="home-description">
        {t("homePage.description")}
      </p>
      <div className="home-buttons">
        <Link to="/projects" className="btn-primary">
          {t("homePage.projectsButton")}
        </Link>
        <a
          href={cvFile}
          download
          className="btn-secondary"
          target="_blank"
          rel="noopener noreferrer"
        >
          📥 {t("homePage.cvButton")}
        </a>
      </div>
    </main>
  )
}
