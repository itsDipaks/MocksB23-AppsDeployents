
import React from 'react'
import { Navigate } from 'react-router-dom'

const AdminPrivateRoute = ({children}) => {
let Routeto=JSON.parse(localStorage.getItem("Access"))

if(Routeto=="Admin"){
  return children
}else{
    alert("Not Autherized Please Login as Admin")
    return <Navigate to="/"/>
}

 
}

export default AdminPrivateRoute