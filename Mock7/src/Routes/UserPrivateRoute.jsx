
import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useNavigate } from 'react-router-dom'

const UserprivateRout = ({children}) => {
const navigat=useNavigate()
let Routeto=JSON.parse(localStorage.getItem("Access"))

if(Routeto=="user"){
  return children
}else{
    alert("Authrization faild Only Users Allowed ")
    return <Navigate to="/login"/>
}

 
}

export default UserprivateRout