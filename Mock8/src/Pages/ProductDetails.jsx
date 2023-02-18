import {Badge, Box, Button, Image} from "@chakra-ui/react";
import axios from "axios";
import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {storeddata} from "../Redux/Cart/cart.action";

const ProductDetails = () => {
  let [productshow, setproductshow] = useState({});
  let dispatch = useDispatch();
  const param = useParams();
  let getsingleproduct = async () => {
    let productsRes = await axios.get(
      `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products/${param["id"]}`
    );
    setproductshow(productsRes.data.data);
  };
  useEffect(() => {
    getsingleproduct();
  }, []);
  let localarr=JSON.parse(localStorage.getItem("cart"))|| []
  
  let addtocart = () => {
    localarr.push(productshow)
    localStorage.setItem(JSON.stringify(localarr))
  };
  return (
    <div>
      <Box
        maxW="xl"
        borderWidth="1px"
        borderRadius="lg"
        style={{margin: "auto", marginTop: "2rem", padding: "2rem"}}
        overflow="hidden"
      >
        <Image
          src={productshow.image}
          objectFit="cover"
          style={{width: "40%", margin: "auto", borderRadius: "10%"}}
          alt={productshow.image}
        />

        <Box p="6">
          <Box display="flex" alignItems="baseline">
            <Badge borderRadius="full" px="2" colorScheme="teal">
              Category : {productshow.category}
            </Badge>
            <Box
              color="gray.500"
              fontWeight="semibold"
              letterSpacing="wide"
              fontSize="xs"
              textTransform="uppercase"
              ml="2"
            >
              Brand : {productshow.brand}
            </Box>
          </Box>

          <Box
            mt="1"
            fontWeight="semibold"
            as="h4"
            lineHeight="tight"
            noOfLines={1}
          >
            {productshow.title}
          </Box>

          <Box>Price : {productshow.price}</Box>
          <Box>
            Description : {productshow.title} Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Et accusamus numquam incidunt sunt,
            velit quis odio quam! Doloribus vero omnis eos. Numquam quibusdam
            quasi amet excepturi quidem, vitae odio corrupti!
          </Box>
          <Button onClick={addtocart} style={{marginTop: "1rem"}}>
            Add to cart
          </Button>
        </Box>
      </Box>
    </div>
  );
};

export default ProductDetails;
