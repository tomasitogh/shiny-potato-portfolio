import { useGlobal } from "../context/GlobalContext"
import { motion } from "framer-motion"

export default function LangPill() {
  const { lang, setLang } = useGlobal()

  return (
    <div className={`pill small-pill segmented lang ${lang}`}>
      <div
        className={`segment ${lang === "es" ? "active" : ""}`}
        onClick={() => setLang("es")}
      >
        {lang === "es" && (
          <motion.div
            layoutId="active-lang"
            className="active-segment-bg"
            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
          />
        )}
        <span style={{ position: "relative", zIndex: 1 }}>ES</span>
      </div>

      <div
        className={`segment ${lang === "en" ? "active" : ""}`}
        onClick={() => setLang("en")}
      >
        {lang === "en" && (
          <motion.div
            layoutId="active-lang"
            className="active-segment-bg"
            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
          />
        )}
        <span style={{ position: "relative", zIndex: 1 }}>EN</span>
      </div>
    </div>
  )
}
