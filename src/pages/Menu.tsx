import { motion } from "framer-motion"
import { ReactNode, useEffect, useState } from "react"
import { TMode } from "../App"

interface IMenuProps {
    mode: TMode
}
type TType = "vege" | "carnivore"
type TMealType = "breakfast" | "lunch" | "dinner"

interface IMenu {
    breakfeast: IMeal[],
    lunch: IMeal[],
    dinner: IMeal[]
}
interface IMeal {
    label: string,
    desc: string,
    imageUrl: string,
    new?: boolean,
    mealType?: TType,
}

// props
const Menu = (props: IMenuProps) => {
    // data
    const [menu, setMenu] = useState<IMenu>()
    const [types, setTypes] = useState<TType[]>([])
    const [mealType, setMealType] = useState<TMealType[]>([])

    // methods
    const toggleMealType = (type: TMealType) => {
        let temp: TMealType[] = []
        if (mealType.includes(type)) {
            mealType.forEach(element => {
                if (element !== type) temp.push(element)
            });
        }
        else {
            temp = mealType.map((element) => { return element })
            temp.push(type)
        }
        setMealType(temp)
    }

    const toggleType = (type: TType) => {
        let temp: TType[] = []
        if (types.includes(type)) {
            types.forEach(element => {
                if (element !== type) temp.push(element)
            });
        }
        else {
            temp = types.map((element) => { return element })
            temp.push(type)
        }
        setTypes(temp)
    }

    const loadMenu = () => {
        fetch("./menu.json")
            .then((res) => (res.json()))
            .then((menu) => setMenu(menu))
    }

    // watcher
    useEffect(() => {
        const tempType = new URLSearchParams(window.location.search).get("type")
        if (tempType === "vege" || tempType === "carnivore") toggleType(tempType)

    }, [window.location.search])

    // created
    // onMount
    useEffect(() => {
        loadMenu()
    }, [])

    // template
    return (
        <motion.div
            className={"contentPage" + (props.mode === "Dark" ? " darkMode" : "")}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}>
            <div className="filterContainer">
                <div className="optionContainer">
                    <span className="label">Rodzaj</span>
                    <div className="segmentedButton">
                        <SelectMealTypeButton onClick={toggleMealType} type="breakfast" typeArray={mealType}>
                            Śniadanie
                        </SelectMealTypeButton>
                        <SelectMealTypeButton onClick={toggleMealType} type="lunch" typeArray={mealType}>
                            Obiad
                        </SelectMealTypeButton>
                        <SelectMealTypeButton onClick={toggleMealType} type="dinner" typeArray={mealType}>
                            Kolacja
                        </SelectMealTypeButton>
                    </div>
                </div>
                <div className="optionContainer">
                    <span className="label">Zawartość</span>
                    <div className="segmentedButton">
                        <SelectTypeButton onClick={toggleType} type="vege" typeArray={types}>
                            Vege
                        </SelectTypeButton>
                        <SelectTypeButton onClick={toggleType} type="carnivore" typeArray={types}>
                            Carnivore
                        </SelectTypeButton>
                    </div>
                </div>
            </div>
            {/* v-if */}
            {/* v-show */}
            {menu ?
                <div className="mealsContainer">
                    {(mealType.includes("breakfast") || mealType.length <= 0) ? menu.breakfeast.map((meal, index) => (
                        ((meal.mealType && types.includes(meal.mealType)) || types.length <= 0) && <Meal key={"meal_" + index} label={meal.label} desc={meal.desc} imageUrl={meal.imageUrl} mealType={meal.mealType} new={meal.new} />
                    )) : <></>}
                    {(mealType.includes("lunch") || mealType.length <= 0) ? menu.lunch.map((meal, index) => (
                        ((meal.mealType && types.includes(meal.mealType)) || types.length <= 0) && <Meal key={"meal_" + index} label={meal.label} desc={meal.desc} imageUrl={meal.imageUrl} mealType={meal.mealType} new={meal.new} />
                    )) : <></>}
                    {(mealType.includes("dinner") || mealType.length <= 0) ? menu.dinner.map((meal, index) => (
                        ((meal.mealType && types.includes(meal.mealType)) || types.length <= 0) && <Meal key={"meal_" + index} label={meal.label} desc={meal.desc} imageUrl={meal.imageUrl} mealType={meal.mealType} new={meal.new} />
                    )) : <></>}
                </div>
                :
                <div>
                    Ładowanie Trwa...
                </div>
            }
        </motion.div>
    )
}

export default Menu

// components
const Meal = (props: IMeal) => (
    <div className="meal">
        <img alt="image describing how meal looks like" src={props.imageUrl} />
        <h2 className="label">
            {props.label}
        </h2>
        <div className="infoContainer">
            <span className="desc">
                {props.new && <h3 className="warning">Uwaga Nowość!</h3>}
                {props.desc}
            </span>
        </div>
    </div>
)

interface SelectButtonProps<T> {
    onClick: (type: T) => void,
    type: TType | TMealType,
    typeArray: T[],
    children?: ReactNode
}

// slot
const SelectTypeButton = (props: SelectButtonProps<TType>) => (
    // event
    <a onClick={() => props.onClick(props.type as TType)} className={props.typeArray.includes(props.type as TType) ? " selected" : ""}>
        {props.children}
    </a>
)

const SelectMealTypeButton = (props: SelectButtonProps<TMealType>) => (
    <a onClick={() => props.onClick(props.type as TMealType)} className={props.typeArray.includes(props.type as TMealType) ? " selected" : ""}>
        {props.children}
    </a>
)