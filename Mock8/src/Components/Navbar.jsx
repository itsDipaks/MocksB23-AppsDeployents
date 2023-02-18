import React from "react";
import {Link} from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <ul style={{display: "flex",justifyContent:"space-between",padding:"1rem",borderBottom:"1px solid gray",listStyle:"none"}}>
        <li>
          {" "}
          <Link to="/">Products</Link>
        </li>
        <li>
          {" "}
          <Link to="/cart">Cart</Link>
        </li>
        <li>
          {" "}
          <Link to="/orders">Orders</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
