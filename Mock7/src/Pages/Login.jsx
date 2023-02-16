import {Button, Input, Stack} from "@chakra-ui/react";
import React from "react";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {loginaction} from "../Redux/Auth/Auth.action";

const Login = () => {
  let [formdata, setformdata] = useState({});
  let dispatch = useDispatch();
  const navigate=useNavigate()
  let handeldsubmit = (e) => {
    e.preventDefault();
    dispatch(loginaction(formdata));
    showalert();
  };
  const handeldinputs = (e) => {
    const {name, value} = e.target;

    setformdata({
      ...formdata,
      [name]: value,
    });
  };
  const {loading, error, access} = useSelector((store) => store.Auth);
  

  let showalert = () => {
    if (access == "user") {
      alert("User-Login Sucess");
      navigate("/stocks")
    } else if (access == "Admin") {
      alert("Admin Login Sucess");
      navigate("/dashboard")
    }
  };
  return (<>
    <div style={{
        marginTop:"5rem"
    }}>
      <Stack spacing={3}>
        <form action="" onSubmit={handeldsubmit}>
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
          <Input type="submit" value="Login" />
        </form>
      </Stack>

      <p>New Here Register ?<span><Link to="register">Register !!</Link></span></p>
    </div>
    </>
  );
};

export default Login;
