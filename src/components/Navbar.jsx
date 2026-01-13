import ThemePill from "./ThemePill"
import NavPill from "./NavPill"
import LangPill from "./LangPill"
import "./NavBar.css"




export default function NavBar(){
    return (
        <div className="navbar-container">
            <ThemePill/>
            <NavPill/>
            <LangPill/>
        </div>
    )
}