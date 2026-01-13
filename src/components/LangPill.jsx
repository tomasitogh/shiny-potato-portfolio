import { useGlobal } from "../context/GlobalContext"

export default function LangPill() {
  const { lang, setLang } = useGlobal()

  return (
    <div className={`pill small-pill segmented lang ${lang}`}>
      <div
        className={`segment ${lang === "es" ? "active" : ""}`}
        onClick={() => setLang("es")}
      >
        ES
      </div>

      <div
        className={`segment ${lang === "en" ? "active" : ""}`}
        onClick={() => setLang("en")}
      >
        EN
      </div>
    </div>
  )
}
