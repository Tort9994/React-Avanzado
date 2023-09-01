import { ReactElement } from "react"

export interface ProductCardProps {
    product: Product,
    children?: ReactElement | ReactElement[],
    className?: string
}

export interface Product {
    id: string,
    title: string,
    img?: string
}


export interface ProductContextProps {
    counter: number,
    increaseBy: (value: number) => void,
    product: Product

}

export interface ProductCardHOCProps {
    ({ product, children }: ProductCardProps): JSX.Element,
    Title: ({ title, className, style }: { title?: string, className: string, style?: React.CSSProperties }) => JSX.Element,
    Image: ({ img, className, style }: { img?: string | undefined, className: string, style?: React.CSSProperties }) => JSX.Element,
    Buttons: ({ className, style }: { className: string, style?: React.CSSProperties }) => JSX.Element
}