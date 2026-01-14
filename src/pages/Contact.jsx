import { useGlobal } from "../context/GlobalContext"

export default function Contact() {
  const { t } = useGlobal()

  return (
    <main className="page">
      <h1>{t("contact.title")}</h1>
      <p>
        {t("contact.description")}
      </p>
      <div className="contact-links">
        <a href={`mailto:${t("contact.email")}`}>Email</a>
        <a href={t("contact.github")} target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href={t("contact.linkedin")} target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </div>
    </main>
  )
}
