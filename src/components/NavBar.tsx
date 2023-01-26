import { Dispatch, SetStateAction } from "react"
import { Link } from "react-router-dom"
import { ILinks, TMode } from "../App"
import AccesibleIcon from "../icons/AccesibleIcon"
import Logo from "../icons/Logo"
import BurgerButton from "./BurgerButton"
import ModeButton from "./ModeButton"

interface INavBarProps {
    links: ILinks[],
    mode: TMode,
    setMode: Dispatch<SetStateAction<TMode>>,
    sideMenuOpen: boolean,
    toggleSideMenu: () => void,
    toggleAccesibilityMenu: () => void
}
const NavBar = (props: INavBarProps) => {

    const onModeSwitchButtonClick = () => {
        if (props.mode === "Light") props.setMode("Dark")
        else if (props.mode === "Dark") props.setMode("Light")
    }

    return (
        <header className={"navBar" + (props.mode === "Dark" ? " darkMode" : "")}>
            <Logo />
            <div className="spacer" />
            <nav className="linksContainer">
                {props.links.map((link, index) => (
                    <Link key={"NavBarLink_" + index} className={location.pathname === link.url ? "active" : ""} to={link.url}>{link.label}</Link>
                ))}
            </nav>
            <ModeButton onClick={onModeSwitchButtonClick} />
            <a onClick={props.toggleAccesibilityMenu} className="accesibleMenu">
                <AccesibleIcon />
            </a>
            <BurgerButton sideMenuOpen={props.sideMenuOpen} onClick={props.toggleSideMenu} />
        </header>
    )
}

export default NavBar