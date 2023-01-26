import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { TMode } from "../App"

interface IHomeProps {
    mode: TMode
}

const Home = (props: IHomeProps) => {

    return (
        <motion.div
            className={"contentPage" + (props.mode === "Dark" ? " darkMode" : "")}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}>
            <span className="heroImage">
                <h1 className="title">
                    Restauracja Lorem Ipsum
                </h1>
                <span className="desc">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dolor sed viverra ipsum nunc aliquet. Massa ultricies mi quis hendrerit. Ultrices dui sapien eget mi proin sed. Vitae congue mauris rhoncus aenean vel elit scelerisque.
                </span>
                <Link to="/menu" className="heroButton">Sprawdź nasze menu</Link>
            </span>

            <h2 className="sectionsLabel">
                Nasze propozycje:
            </h2>

            <div className="sectionsContainer">
                <Link to="/menu?type=vege" className="section">
                    <img alt="image describing vegetable diet" src="vege.jpg" />
                    <div className="infoContainer">
                        <h3>Dieta Vege</h3>
                        <span>Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
                    </div>
                </Link>
                <Link to="/menu?type=carnivore" className="section">
                    <img alt="image describing meat diet" src="carnivore.jpg" />
                    <div className="infoContainer">
                        <h3>Dieta Carnivore</h3>
                        <span>Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
                    </div>
                </Link>

            </div>

        </motion.div>
    )
}

export default Home