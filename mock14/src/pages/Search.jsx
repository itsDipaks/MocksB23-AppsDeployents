import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import "./pages.css"
import {Button,Image,Box,Text} from "@chakra-ui/react"
import { GetserchedProducts } from '../redux/Getproducts/Get.action'
const Search = () => {
    let  dispatch=useDispatch()
let [serchval,setsearchval]=useState("")
  console.log(serchval)
let {data,load}=useSelector(store=>store.category)
console.log(data)
useEffect(()=>{
    serchproduct()
},[])
let serchproduct=()=>{
    dispatch(GetserchedProducts(serchval))
}
  return (
    <>
{load?<h1 className='loader'>Loading</h1>:""}
<div className='infoshowdiv'>
{data.length<=0?<h1 >Opps ! No Product Found..! </h1>:<h1>Serched Products</h1>}
</div>

     <div className="serchbox">
        <input type="text" onChange={(e)=>setsearchval(e.target.value)} placeholder="Enter Search Value " />
        <button onClick={serchproduct}>Search</button>
        </div>   

        <div className='productouterdiv'>
        {data?.map((el)=>
        <Box className="innerproductbox" >
    <Image src={el.thumbnail} className="imgprod"/>
<Text >{el.title}</Text>
<Text >Category : {el.category}</Text>
<Text >Description : {el.description}</Text>
<Text >price : {el.price}</Text>
<Text >rating : {el.rating}</Text>
        </Box>
        )}
    </div>
    </>
  )
}

export default Search