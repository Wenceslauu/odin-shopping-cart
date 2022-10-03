import { useState } from 'react'
import { HashRouter, Routes, Route, HashRouter } from 'react-router-dom'
import Layout from './Layout'
import Home from './Home'
import Shop from './Shop'
import Cart from './Cart'
import uniqid from 'uniqid'

const RouteSwitch = () => {
    const [cart, setCart] = useState({})

    const products = [
      {
          name: 'red',
          price: 10, 
          id: uniqid()
      },
      {
          name: 'orange',
          price: 20, 
          id: uniqid()
      },
      {
          name: 'blue',
          price: 30, 
          id: uniqid()
      },
      {
          name: 'black',
          price: 40, 
          id: uniqid()
      },
      {
          name: 'grey',
          price: 50, 
          id: uniqid()
      },
      {
          name: 'green',
          price: 60, 
          id: uniqid()
      }   
    ]
    
    const addToCart = (product, quantity) => {
        if (product in cart) {
            setCart((prevCart) => {
                const newCart = Object.assign({}, prevCart)
                newCart[product] += parseInt(quantity)
                return newCart
            })
        } else {
            setCart((prevCart) => {
                const newCart = Object.assign({}, prevCart)
                newCart[product] = quantity
                return newCart
            })
        }}

    return (
        <HashRouter>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path='home' element={<Home />} />
                    <Route path='shop' element={<Shop products={products} addToCart={addToCart} />} />
                    <Route path='cart' element={<Cart products={products} cart={cart} />} />
                </Route>
            </Routes>
        </HashRouter>
    )
}

export default RouteSwitch