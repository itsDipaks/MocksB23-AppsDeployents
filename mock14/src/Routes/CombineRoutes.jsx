import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Product from '../pages/Product'
import Search from '../pages/Search'

const CombineRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/product' element={<Product/>}/>
            <Route path='/search' element={<Search/>}/>
        </Routes>
    </div>
  )
}

export default CombineRoutes