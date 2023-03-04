import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Getproducts} from "../redux/Getproducts/Get.action";
import {Box, Image, Text} from "@chakra-ui/react";
import "./pages.css";
const Product = () => {
  let dispatch = useDispatch();
  useEffect(() => {
    let category = JSON.parse(localStorage.getItem("category"));
    dispatch(Getproducts(category));
  }, []);
  let {data} = useSelector((store) => store.category);
  console.log(data);
  return (
    <>
    
    <Text fontSize='3xl' pt="1rem">Products</Text>
    <div className="productouterdiv">
        
      {data?.map((el) => (
        <Box className="innerproductbox">
          <Image src={el.thumbnail} className="imgprod" />
          <Text>{el.title}</Text>
          <Text>Category : {el.category}</Text>
          <Text>Description : {el.description}</Text>
          <Text>price : {el.price}</Text>
          <Text>rating : {el.rating}</Text>
        </Box>
      ))}
    </div>
    </>
  );
};

export default Product;
