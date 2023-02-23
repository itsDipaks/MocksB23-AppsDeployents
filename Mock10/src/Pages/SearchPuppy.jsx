import React, {useState} from "react";
import "./Pages.css";
import axios from "axios";
const SearchPuppy = () => {
  let [imagestate, setimagestate] = useState("");
  let [imgs, setimg] = useState([]);
  let Getbreadsimages = async () => {
    let res = await axios.get(`https://dog.ceo/api/breed/${imagestate}/images`);
    setimg(res.data.message);
  };
  let serchfunc = (e) => {
    setimagestate(e.target.value);
  };
  let serchbtn = () => {
    Getbreadsimages();
  };

  return (
    <div>
      
      <div className="searchfunctionality">
         <h1>Serch Bread Here</h1>
         <div className="serchbox" >
         <input type="text" onChange={(e) => serchfunc(e)} />
        <button onClick={serchbtn}>Search</button>
         </div>
   
      </div>

      <div className="breadiages">
        {imgs && imgs.map((el) => <img className="imgs" src={el} />)}
      </div>
    </div>
  );
};

export default SearchPuppy;
