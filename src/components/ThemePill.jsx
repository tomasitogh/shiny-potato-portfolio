import { useGlobal } from "../context/GlobalContext"
import { motion } from "framer-motion"

export default function ThemePill() {
  const { theme, setTheme } = useGlobal()

  return (
    <div className={`pill small-pill segmented theme ${theme}`}>
      <div
        className={`segment ${theme === "dark" ? "active" : ""}`}
        onClick={() => setTheme("dark")}
      >
        {theme === "dark" && (
          <motion.div
            layoutId="active-theme"
            className="active-segment-bg"
            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
          />
        )}
        <span style={{ position: "relative", zIndex: 1 }}>🌙</span>
      </div>

      <div
        className={`segment ${theme === "light" ? "active" : ""}`}
        onClick={() => setTheme("light")}
      >
        {theme === "light" && (
          <motion.div
            layoutId="active-theme"
            className="active-segment-bg"
            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
          />
        )}
        <span style={{ position: "relative", zIndex: 1 }}>☀️</span>
      </div>
    </div>
  )
}
