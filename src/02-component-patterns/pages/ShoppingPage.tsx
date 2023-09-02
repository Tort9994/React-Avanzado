import { ProductImage, ProductTitle, ProductCard, ProductButtons } from '../components'
import { products } from '../data/products';
import { useShoppingCart } from '../hooks/useShoppingCart';

import '../styles/custom-styles.css'





export const ShoppingPage = () => {

    const { shoppingCart, onProductCountChange } = useShoppingCart()

    return (
        <div>
            <h1>Shopping Store</h1>
            <hr />

            <div style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap'
            }}>

                {products.map(product => (
                    <ProductCard
                        key={product.id}
                        product={product}
                        className='bg-dark'
                        onChange={(evento) => onProductCountChange(evento)}
                        value={shoppingCart[product.id]?.count || 0}
                    >
                        <ProductImage />
                        <ProductTitle title={'hola'} className='text-white' />
                        <ProductButtons className='custom-buttons' />
                    </ProductCard>
                ))
                }
            </div>
            <div className='shopping-cart'>
                {
                    Object.entries(shoppingCart).map(([key, product]) => (

                        <ProductCard
                            key={key}
                            product={product}
                            className='bg-dark'
                            style={{ width: '100px' }}
                            value={product.count}
                            onChange={onProductCountChange}
                        // onChange={() => onProductCountChange(prod)}
                        >
                            <ProductImage />
                            <ProductTitle title={' '} className='text-white' />
                            <ProductButtons className='custom-buttons' />
                        </ProductCard>
                    ))

                }
            </div>

        </div>
    )
}
