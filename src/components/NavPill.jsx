import { NavLink } from "react-router-dom"
import { useGlobal } from "../context/GlobalContext"

export default function NavPill() {
  const { t } = useGlobal()

  return (
    <div className="pill main-pill">
        <NavLink 
            to="/"
            className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
            {t("home")}
        </NavLink>

        <NavLink
            to="/projects"
            className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
            {t("projects")}
        </NavLink>

        <NavLink
            to="/contact"
            className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
            {t("contact")}
        </NavLink>
    </div>
  )
}
