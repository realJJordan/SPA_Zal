import DarkModeIcon from "../icons/DarkModeIcon"

interface IModeButtonProps {
    onClick: () => void
}

const ModeButton = (props: IModeButtonProps) => {
    return (
        <a onClick={props.onClick} className="modeButton">
            <DarkModeIcon />
        </a>
    )
}

export default ModeButton