import { useGlobal } from "../context/GlobalContext"

export default function Projects() {
  const { t } = useGlobal()

  return (
    <main className="page">
      <h1>{t("projects.title")}</h1>
      <p>
        Here you will find a selection of real products, experiments and MVPs I
        have built.
      </p>
    </main>
  )
}
