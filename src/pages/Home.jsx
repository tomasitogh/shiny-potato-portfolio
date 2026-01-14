import { useGlobal } from "../context/GlobalContext"

export default function Home() {
  const { t } = useGlobal()

  return (
    <main className="page">
      <h1>{t("hero.title")}</h1>
      <p>
        {t("hero.subtitle")}
      </p>
    </main>
  )
}
