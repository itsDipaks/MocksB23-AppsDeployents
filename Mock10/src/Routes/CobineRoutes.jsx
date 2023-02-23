import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import Puppy from '../Pages/Puppy'
import SearchPuppy from '../Pages/SearchPuppy'

const CobineRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/puppy/:id' element={<Puppy/>}/>
            <Route path='/search' element={<SearchPuppy/>}/>
        </Routes>
    </div>
  )
}

export default CobineRoutes