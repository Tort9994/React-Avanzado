import styles from "../styles/styles.module.css"

import { useProduct } from "../hooks/UseProduct"

import { createContext } from "react"
import { ProductContextProps, ProductCardProps } from "../interfaces/interfaces"




export const ProductContext = createContext({} as ProductContextProps)
const { Provider } = ProductContext


export const ProductCard = ({ product, children, className }: ProductCardProps) => {
    const { counter, increaseBy } = useProduct()
    return (
        <Provider value={{
            counter,
            increaseBy,
            product,
        }}>
            <div className={`${styles.productCard} ${className}`}>
                {children}
                {/* <ProductImage img={'./coffee-mug.png'} />

            <ProductTitle title={product.title} />
            <ProductButtons counter={counter} increaseBy={increaseBy} /> */}
            </div>
        </Provider>
    )
}

