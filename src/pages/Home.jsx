import { useGlobal } from "../context/GlobalContext"
import "./Home.css"

export default function Home() {
  const { t } = useGlobal()

  return (
    <main className="page home-container">
      <h1 className="home-title">{t("homePage.title")}</h1>
      <p className="home-description">
        {t("homePage.description")}
      </p>
      <div className="home-buttons">
        <button className="btn-primary">Button 1</button>
        <button className="btn-secondary">Button 2</button>
      </div>
    </main>
  )
}
