import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {getCategorydata} from "../redux/Getproducts/Get.action";
import {Text} from "@chakra-ui/react"
import "./pages.css";
const Home = () => {
  let {data} = useSelector((store) => store.category);
  console.log(data);
  let dispatch = useDispatch();
  let navigate = useNavigate();

  useEffect(() => {
    dispatch(getCategorydata());
  }, []);
  let getcategory = (item) => {
    localStorage.setItem("category", JSON.stringify(item));
    alert("Item Selected");
    navigate("/product");
  };
  return (
    <div style={{textAlign:"center"}}>
        <Text fontSize='3xl' pt="1rem">All Categories</Text>
      <div className="outerdiv">
        {data?.map((el) => (
            <div onClick={() => getcategory(el)} className="innerbox">
              {el}
            </div>
          ))}
      </div>
    </div>
  );
};

export default Home;
