import { ProductImage, ProductTitle, ProductCard, ProductButtons } from '../components'



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
                    <ProductCard.Image />
                    <ProductCard.Title title={''} />
                    <ProductCard.Buttons />
                </ProductCard>
                <ProductCard product={Product}>
                    <ProductImage />
                    <ProductTitle title={'hola'} />
                    <ProductButtons />
                </ProductCard>
            </div>
        </div>
    )
}
