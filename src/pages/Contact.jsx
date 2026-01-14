import { useGlobal } from "../context/GlobalContext"

export default function Contact() {
  const { t } = useGlobal()

  return (
    <main className="page">
      <h1>{t("contact.title")}</h1>
      <p>
        {t("contact.description")}
      </p>
    </main>
  )
}
