import { ProductImage, ProductTitle, ProductCard, ProductButtons } from '../components'
import '../styles/custom-styles.css'


const Product = {
    id: '1',
    title: 'Coffee Mug - Card',
    img: './coffee-mug.png'
}

export const ShoppingPage = () => {

    return (
        <div>
            <h1>Shopping Store</h1>
            <hr />

            <div style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap'
            }}>

                <ProductCard product={Product}>
                    <ProductCard.Image className='bg-dark' />
                    <ProductCard.Title title={''} className='hello' />
                    <ProductCard.Buttons className='custom-buttons' />
                </ProductCard>
                <ProductCard product={Product} className='bg-dark'>
                    <ProductImage />
                    <ProductTitle title={'hola'} className='text-white' />
                    <ProductButtons className='custom-buttons' style={{ backgroundColor: 'blue' }} />
                </ProductCard>
            </div>
        </div>
    )
}
