import React, {useEffect, useState} from "react";
import "./Pages.css";
import axios from "axios";
import { Link } from "react-router-dom";
const Home = () => {
  let myarr = [];
  let [arr, setarr] = useState([]);
  let Getbreads = async () => {
    let res = await axios.get("https://dog.ceo/api/breeds/list/all");
    let object = res.data.message;

    let kyes = Object.keys(object);
    setarr(kyes);
  };

  useEffect(() => {
    Getbreads();
  }, []);
  return (
    <div>
      <h1 className="heading">Welcome To Puppy Love </h1>

      <div className="breads">
        {arr.map((el) => 
        <h className="breadname"> <Link to={`/puppy/${el}`}>{el}</Link> </h>
    )}
      </div>
    </div>
  );
};

export default Home;
