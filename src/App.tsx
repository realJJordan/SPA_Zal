import { AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import { useRoutes } from "react-router-dom";
import AccesibilityMenu from "./components/AccesibilityMenu";
import NavBar from "./components/NavBar";
import SideMenu from "./components/SideMenu";
import Home from "./pages/Home";
import Menu from "./pages/Menu";

export type TMode = "Light" | "Dark"
export type TMealType = "vege" | "carnivore"

export interface ILinks {
    label: string,
    url: string
}

const App = () => {

    const [mode, setMode] = useState<TMode>("Light")
    const [sideMenuOpened, setSideMenuOpened] = useState<boolean>(false)
    const [accesibilityMenuOpened, setAccesibilityMenuOpened] = useState<boolean>(false)

    const links: ILinks[] = [
        {
            label: "Strona Główna",
            url: "/"
        },
        {
            label: "Menu",
            url: "/menu"
        }
    ]

    const element: any = useRoutes([
        {
            path: "/",
            element: <Home mode={mode} />
        },
        {
            path: "/menu",
            element: <Menu mode={mode} />
        }
    ]);

    return (
        <>
            <AnimatePresence mode="wait">
                {accesibilityMenuOpened ? <AccesibilityMenu key={"SideMenu"} mode={mode} toggleAccesibilityMenu={() => setAccesibilityMenuOpened(!accesibilityMenuOpened)} /> : <></>}
            </AnimatePresence>

            <NavBar links={links} mode={mode} setMode={setMode} sideMenuOpen={sideMenuOpened} toggleSideMenu={() => setSideMenuOpened(!sideMenuOpened)} toggleAccesibilityMenu={() => setAccesibilityMenuOpened(!accesibilityMenuOpened)}/>

            <AnimatePresence mode="wait">
                {sideMenuOpened ? <SideMenu key={"SideMenu"} mode={mode} links={links} toggleSideMenu={() => setSideMenuOpened(!sideMenuOpened)} /> : <></>}
            </AnimatePresence>

            <AnimatePresence mode="wait">
                {React.cloneElement(element, { key: location.pathname })}
            </AnimatePresence>

            <footer className={"footer" + (mode === "Dark" ? " darkMode" : "")}>
                Autor:<a href="mailto:jordanjarzy@gmail.com">Jordan Jarzyński</a>
            </footer>

            <span className={"rootBackdrop" + (mode === "Dark" ? " darkMode" : "")}/>
        </>
    )
}

export default App