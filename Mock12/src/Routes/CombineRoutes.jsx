import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../assets/pages/Home'
import JobListing from '../assets/pages/JobListing'
import JobPosting from '../assets/pages/JobPosting'

const CombineRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/posting' element={<JobPosting/>}/>
            <Route path='/listing' element={<JobListing/>}/>
        </Routes>
    </div>
  )
}

export default CombineRoutes