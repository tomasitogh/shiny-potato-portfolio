import { useGlobal } from "../context/GlobalContext"
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import "./Contact.css"

export default function Contact() {
  const { t } = useGlobal()

  return (
    <main className="page" style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
      <h1 style={{ marginBottom: "2rem" }}>{t("contact.title")}</h1>
      <p style={{ lineHeight: "1.6", fontSize: "1.2rem", marginBottom: "3rem" }}>
        {t("contact.description")}
      </p>

      <div className="contact-icons">
        <a
          href="https://www.linkedin.com/in/tomas-gonzalez-humphreys"
          target="_blank"
          rel="noopener noreferrer"
          className="icon-link"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/tomasitogh"
          target="_blank"
          rel="noopener noreferrer"
          className="icon-link"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
        <a
          href="mailto:gonzaleztomas.contacto@gmail.com"
          className="icon-link"
          aria-label="Email"
        >
          <FaEnvelope />
        </a>
      </div>
    </main>
  )
}
