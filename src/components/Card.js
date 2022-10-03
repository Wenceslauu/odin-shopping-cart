import { useState } from 'react'

const Card = ({ name, price, addToCart }) => {
    const [quantity, setQuantity] = useState(1)
    const style = { backgroundColor: name }

    const handleChange = (event) => {
        const value = event.target.value
        setQuantity(parseInt(value))
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        addToCart(name, quantity)
    }

    return (
        <div className="card">
            <div className="card-image" style={style}></div>
            <div className="card-container">
                <div>
                    <h2>{name}</h2>
                    <p>${price}.0</p>
                </div>
                <form onSubmit={handleSubmit}>
                    <input type='number' min='1' max='10' onChange={handleChange} value={quantity}></input>
                    <button type='submit'>Add to cart</button>
                </form>
            </div>
        </div>
    )
}

export default Card