import Card from "./Card"

const Shop = ({ products, addToCart }) => {
    return (
        <div className="shop">
            {products.map((product) => {
                return <Card key={product.id} name={product.name} price={product.price} addToCart={addToCart} />
            })}
        </div>
    )
}

export default Shop