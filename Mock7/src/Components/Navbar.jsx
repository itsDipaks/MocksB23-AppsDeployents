import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <ul style={{display:"flex",justifyContent:"space-between",width:"100%",margin:"auto",listStyle:"none"}}>
       <Link to="stocks"><li style={{border:"1px solid red",padding:"0.51rem"}}>Stocks</li></Link> 
       <Link to="dashboard"> <li  style={{border:"1px solid red" ,padding:"0.51rem"}}>Admin Dashboard</li></Link> 
       <Link to="register"> <li  style={{border:"1px solid red" ,padding:"0.51rem"}}>User Registeration</li></Link> 
       <Link to="portfolio"> <li  style={{border:"1px solid red" ,padding:"0.51rem"}}>portfolio</li></Link> 
       {/* <Link></Link>  */}
       
      </ul>
    </div>
  );
};

export default Navbar;
