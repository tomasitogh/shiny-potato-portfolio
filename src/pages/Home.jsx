import { useGlobal } from "../context/GlobalContext"

export default function Home() {
  const { t } = useGlobal()

  return (
    <main className="page">
      <h1>{t("welcome")}</h1>
      <p>
        I build digital products focused on performance, clarity and good UX.
        This portfolio is built with React, React Router and a custom UI system.
      </p>
    </main>
  )
}
