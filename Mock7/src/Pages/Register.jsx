import { Input, Stack } from '@chakra-ui/react';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { registerUser } from '../Redux/Auth/Auth.action';

const Register = () => {
let dispatch=useDispatch()
    let [formdata, setformdata] = useState({});
    const navigate=useNavigate()
  let handeldsubmit = (e) => {
    e.preventDefault();
    dispatch(registerUser(formdata))
    alert("Registration Sucessfull ")
    navigate("/")
  };
  const handeldinputs = (e) => {
    const {name, value} = e.target;
    setformdata({
      ...formdata,
      [name]: value,
    });
  };


  return (
    <div style={{width:"90vw"}}>
         <Stack spacing={3} style={{width:"40vw",margin:"auto" ,paddingTop:"5rem"}}>
        <form action="" onSubmit={handeldsubmit}>
          <Input
            placeholder="Enter Username"
            name="username"
            size="md"
            onChange={handeldinputs}
          />
          <Input
            placeholder="Enter Email"
            name="email"
            size="md"
            onChange={handeldinputs}
          />
          <Input
            placeholder="Enter Password"
            name="password"
            size="md"
            onChange={handeldinputs}
          />
          <Input type="submit" value="Register" />
        </form>
      </Stack>
      <p>New Here Register ?<span><Link to="/">Login !!</Link></span></p>
    </div>
  )
}

export default Register