import { useState } from "react"
import ThemePill from "./ThemePill"
import NavPill from "./NavPill"
import LangPill from "./LangPill"
import { motion, AnimatePresence } from "framer-motion"
import { useGlobal } from "../context/GlobalContext"
import { NavLink } from "react-router-dom"
import "./NavBar.css"

export default function NavBar(){
    const { t } = useGlobal()
    const [isOpen, setIsOpen] = useState(false)

    const navItems = [
        { path: "/", label: t("nav.home") },
        { path: "/about", label: t("nav.about") },
        { path: "/projects", label: t("nav.projects") },
        { path: "/experience", label: t("nav.experience") },
        { path: "/contact", label: t("nav.contact") },
    ]

    return (
        <>
            <div className="navbar-container">
                <ThemePill/>
                <div className="desktop-nav"><NavPill/></div>
                <button className="mobile-menu-btn" onClick={() => setIsOpen(true)}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M3 12h18M3 6h18M3 18h18"/>
                    </svg>
                </button>
                <LangPill/>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <>
                        <motion.div 
                            className="mobile-overlay"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                        />
                        <motion.div 
                            className="mobile-side-panel"
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                        >
                            <button className="close-btn" onClick={() => setIsOpen(false)}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M18 6L6 18M6 6l12 12"/>
                                </svg>
                            </button>
                            <nav className="mobile-nav">
                                {navItems.map((item) => (
                                    <NavLink
                                        key={item.path}
                                        to={item.path}
                                        className={({ isActive }) => isActive ? "mobile-nav-link active" : "mobile-nav-link"}
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {item.label}
                                    </NavLink>
                                ))}
                            </nav>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    )
}