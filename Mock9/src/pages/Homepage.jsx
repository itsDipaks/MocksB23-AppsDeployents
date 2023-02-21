import {Box, Button, Input, Select, Stack} from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Homepage = () => {
let [formdata,setformdata]=useState({})
let dispatch=useDispatch()
let getinputs=(e)=>{
   let {name,value}=e.target
setformdata({
    ...formdata,[name]:value
})
}
let navigate=useNavigate()
let data=JSON.parse(localStorage.getItem("user"))||{}
    let submitdata=(e)=>{
        e.preventDefault()
        // dispatch(Saveinfo(formdata))
        localStorage.setItem("user",JSON.stringify(formdata))
        alert("Loading Test")
        navigate("/quiz")
    }
  return (
    <div  >

      <h1>Setup Your Quiz</h1>
<Box style={{width:"40%",margin:"auto",marginTop:"10rem",border:"1px solid red"}} >   
      <form onSubmit={submitdata}>
        <Input placeholder="Name Of User" size="md" onChange={getinputs} name="username" />
        <Select placeholder="Category" onChange={getinputs } name="Category">
          <option value="9">General Knowledge</option>
          <option value="21">Sports</option>
          <option value="22">Geography</option>
        </Select>
        <Select placeholder="Difficulty Level" onChange={getinputs} name="Difficulty"> 
          <option value="easy">Low</option>
          <option value="medium">Medium</option>
          <option value="hard">High</option>
        </Select>
        <Input placeholder="Number Of Questions" size="md" onChange={getinputs} name="countqs"/>
        <Button type="submit">Start Quiz</Button>
        </form>
      </Box>

    </div>
  );
};

export default Homepage;
