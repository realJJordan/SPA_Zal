import { motion } from "framer-motion"

interface IBurgerButtonProps {
    sideMenuOpen: boolean,
    onClick: () => void
}

const BurgerButton = (props: IBurgerButtonProps) => {
    return (
        <motion.a animate={props.sideMenuOpen ? "open" : "closed"} onClick={props.onClick} className="burgerMenu">
            <svg viewBox="-1 -2 24 24">
                <motion.path
                    strokeWidth={3}
                    strokeLinecap={"round"}
                    variants={{
                        closed: { d: "M 2 2.5 L 20 2.5" },
                        open: { d: "M 3 16.5 L 17 2.5" }
                    }}
                />
                <motion.path
                    strokeWidth={3}
                    strokeLinecap={"round"}
                    d="M 2 9.423 L 20 9.423"
                    variants={{
                        closed: { opacity: 1 },
                        open: { opacity: 0 }
                    }}
                    transition={{ duration: 0.1 }}
                />
                <motion.path
                    strokeWidth={3}
                    strokeLinecap={"round"}
                    variants={{
                        closed: { d: "M 2 16.346 L 20 16.346" },
                        open: { d: "M 3 2.5 L 17 16.346" }
                    }}
                />
            </svg>
        </motion.a>
    )
}

export default BurgerButton