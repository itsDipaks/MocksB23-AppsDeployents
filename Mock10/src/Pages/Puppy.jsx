import React, { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from "axios";
import "./Pages.css"
const Puppy = () => {
let params=useParams()
let [images,setimages]=useState([])
    let Getbreadsimages = async () => {
        let res = await axios.get(`https://dog.ceo/api/breed/${params.id}/images`);
        setimages(res.data.message)
      };
    
      useEffect(() => {
        Getbreadsimages();
      }, []);
   
  return (
    <div>

        <div className="puppyinfo">

<h1>Bread Name : <span className='spanpuppynme'>{params.id}</span></h1>

        </div>
        <div className="breadiages">
        {images && images.map((el)=>
        <img className='imgs' src={el}/>
        )}

        </div>
       
    </div>
  )
}

export default Puppy