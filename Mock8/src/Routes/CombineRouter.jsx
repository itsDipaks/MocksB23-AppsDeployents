import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Cart from '../Pages/Cart'
import Order from '../Pages/Order'
import ProductDetails from '../Pages/ProductDetails'
import Products from '../Pages/Products'

const CombineRouter = () => {
  return (
    <div>
        
        <Routes>
            <Route path='/' element={<Products/>}/>
            <Route path='/product/:id' element={<ProductDetails/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/orders' element={<Order/>}/>
        </Routes>
    </div>
  )
}

export default CombineRouter