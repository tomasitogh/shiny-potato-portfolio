import { useGlobal } from "../context/GlobalContext"

export default function Home() {
  const { t } = useGlobal()

  return (
    <main className="page">
      <h1>{t("homePage.title")}</h1>
      <p>
        {t("homePage.description")}
      </p>
    </main>
  )
}
