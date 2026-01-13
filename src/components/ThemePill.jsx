import { useGlobal } from "../context/GlobalContext"

export default function ThemePill() {
  const { theme, setTheme } = useGlobal()

  return (
    <div className={`pill small-pill segmented theme ${theme}`}>
      <div
        className={`segment ${theme === "dark" ? "active" : ""}`}
        onClick={() => setTheme("dark")}
      >
        🌙
      </div>

      <div
        className={`segment ${theme === "light" ? "active" : ""}`}
        onClick={() => setTheme("light")}
      >
        ☀️
      </div>
    </div>
  )
}
