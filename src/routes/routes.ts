import { lazy } from "react"
import { NoLazy } from "../01-lazyload/pages/NoLazy";


type JSXComponent = () => JSX.Element

interface Route {
    to: string,
    path: string,
    Component: React.LazyExoticComponent<() => JSX.Element> | JSXComponent,
    name: string
}

const lazyLayout = lazy(() =>
    import(/*webpackChunkName: "LazyPage1" */ "../01-lazyload/layout/LazyLayout")
        .then(({ LazyLayout }) => ({ default: LazyLayout })));



export const routes: Array<Route> = [
    {
        to: '/lazyload',
        path: '/lazyload/*',
        Component: lazyLayout,
        name: 'Lazy-1'
    },
    {
        to: '/no-lazy',
        path: 'no-lazy',
        Component: NoLazy,
        name: 'No Lazy'
    },
]