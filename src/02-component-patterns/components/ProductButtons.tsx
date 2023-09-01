import { useContext } from "react"
import { ProductContext } from "./ProductCard"
import styles from "../styles/styles.module.css"

export const ProductButtons = ({ className, style }: { className: string, style?: React.CSSProperties }) => {
    const { counter, increaseBy } = useContext(ProductContext)
    return (


        <div className={`${styles.buttonsContainer} ${className}`} style={style}>
            <button onClick={() => increaseBy(-1)} className={styles.buttonMinus}>-</button>
            <div className={styles.countLabel}>{counter}</div>
            <button onClick={() => increaseBy(+1)} className={styles.buttonAdd}>+</button>
        </div>

    )
}
