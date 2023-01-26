import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { TMode } from "../App"
import PlusIcon from "../icons/AddIcon"
import CloseIcon from "../icons/CloseIcon"
import MinusIcon from "../icons/RemoveIcon"

interface IAccesibilityMenuProps {
    mode: TMode,
    toggleAccesibilityMenu: () => void
}

type TSize = "small" | "normal" | "big"

const AccesibilityMenu = (props: IAccesibilityMenuProps) => {

    const [currentSize, setCurrentSize] = useState<TSize>("normal")

    const addSize = () => {
        switch (currentSize) {
            case "small": setCurrentSize("normal"); break;
            case "normal": setCurrentSize("big"); break;
        }
    }

    const decreaseSize = () => {
        switch (currentSize) {
            case "normal": setCurrentSize("small"); break;
            case "big": setCurrentSize("normal"); break;
        }
    }

    const getLabel = (size: TSize) => {
        let temp = ""
        switch (size) {
            case "small": temp = "mały"; break;
            case "normal": temp = "średni"; break;
            case "big": temp = "duży"; break;
        }
        return temp
    }

    useEffect(() => {
        if (currentSize !== "normal") {
            document.getElementById("root")?.classList.remove("small")
            document.getElementById("root")?.classList.remove("big")
            document.getElementById("root")?.classList.add(currentSize)
        }
        else {
            document.getElementById("root")?.classList.remove("small")
            document.getElementById("root")?.classList.remove("big")
        }
    }, [currentSize])
    return (
        <>
            <motion.div
                className="backdrop accesibility"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                exit={{ opacity: 0 }}
                onClick={props.toggleAccesibilityMenu} />
            <motion.div
                className={"accesibilityMenu" + (props.mode === "Dark" ? " darkMode" : "")}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}>

                <div className="topBar">
                    <span className="label">Menu dostępności</span>

                    <a onClick={props.toggleAccesibilityMenu} className="closeIcon">
                        <CloseIcon />
                    </a>
                </div>

                <div className="optionContainer">
                    <span className="label">Wielkość czcionki</span>
                    <div className="buttonsContainer">
                        <a onClick={decreaseSize} className={"sizeButton" + (currentSize == "small" ? " disabled" : "")}>
                            <MinusIcon />
                        </a>
                        <span>{getLabel(currentSize)}</span>
                        <a onClick={addSize} className={"sizeButton" + (currentSize == "big" ? " disabled" : "")}>
                            <PlusIcon />
                        </a>
                    </div>
                </div>
            </motion.div>
        </>
    )
}

export default AccesibilityMenu