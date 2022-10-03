const Cart = ({ products, cart }) => {
    let totalPrice = 0

    return (
        <div className="cart">
            <div className="shopping-cart">
                {Object.keys(cart).map((key, index) => {
                    const unitPrice =  products.find((product) => product.name === key).price
                    const stackPrice = cart[key] * unitPrice
                    const style = { backgroundColor: key }
                    totalPrice += stackPrice
                    
                    return (
                        <div key={index} className="card">
                                <div className="card-image" style={style}></div>
                                <div className="card-container">
                                    <h2>{key}: {cart[key]}</h2>
                                    <p>Price: ${stackPrice}.0</p>
                                </div>
                        </div>
                    )
                })}
            </div>
            <div className="cart-price">
                <h2>Total Price: ${totalPrice}.0</h2>
            </div>
        </div>
    )
}

export default Cart