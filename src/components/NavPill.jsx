import { NavLink } from "react-router-dom"
import { motion } from "framer-motion"
import { useGlobal } from "../context/GlobalContext"

export default function NavPill() {
  const { t } = useGlobal()

  return (
    <div className="pill main-pill">
      <NavLink
        to="/"
        className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
        {({ isActive }) => (
          <>
            {isActive && (
              <motion.div
                layoutId="active-pill"
                className="active-pill-bg"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
            <span style={{ position: "relative", zIndex: 1 }}>{t("nav.home")}</span>
          </>
        )}
      </NavLink>



      <NavLink
        to="/about"
        className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
        {({ isActive }) => (
          <>
            {isActive && (
              <motion.div
                layoutId="active-pill"
                className="active-pill-bg"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
            <span style={{ position: "relative", zIndex: 1 }}>{t("nav.about")}</span>
          </>
        )}
      </NavLink>

      <NavLink
        to="/projects"
        className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
        {({ isActive }) => (
          <>
            {isActive && (
              <motion.div
                layoutId="active-pill"
                className="active-pill-bg"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
            <span style={{ position: "relative", zIndex: 1 }}>{t("nav.projects")}</span>
          </>
        )}
      </NavLink>

      <NavLink
        to="/experience"
        className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
        {({ isActive }) => (
          <>
            {isActive && (
              <motion.div
                layoutId="active-pill"
                className="active-pill-bg"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
            <span style={{ position: "relative", zIndex: 1 }}>{t("nav.experience")}</span>
          </>
        )}
      </NavLink>

      <NavLink
        to="/contact"
        className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
        {({ isActive }) => (
          <>
            {isActive && (
              <motion.div
                layoutId="active-pill"
                className="active-pill-bg"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
            <span style={{ position: "relative", zIndex: 1 }}>{t("nav.contact")}</span>
          </>
        )}
      </NavLink>
    </div >
  )
}
