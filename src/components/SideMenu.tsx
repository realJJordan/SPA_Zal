import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { ILinks, TMode } from "../App"

interface ISideMenuProps {
    mode: TMode,
    links: ILinks[],
    toggleSideMenu: () => void
}

const SideMenu = (props: ISideMenuProps) => {

    return (
        <>
            <motion.div
                className="backdrop"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                exit={{ opacity: 0 }}
                onClick={props.toggleSideMenu} />
            <motion.nav
                className={"sideMenu" + (props.mode === "Dark" ? " darkMode" : "")}
                initial={{ right: -500 }}
                animate={{ right: 0 }}
                exit={{ right: -500 }}>
                <span className="sideSpacer" />
                {props.links.map((link, index) => (
                    <Link key={"SideMenuLink_" + index} className={location.pathname === link.url ? "active" : ""} to={link.url}>{link.label}</Link>
                ))}
            </motion.nav>

        </>
    )
}

export default SideMenu