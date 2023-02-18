import {
  Box,
  Grid,
  GridItem,
  HStack,
  Image,
  Select,
  StackDivider,
  Text,
  useSliderContext,
  VStack,
} from "@chakra-ui/react";
import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {getAllproducts, getsortedproducts} from "../Redux/Products/product.action";

const Products = () => {
  let dispatch = useDispatch();
  let {data} = useSelector((store) => store.Products);
console.log(data)
//   let [totalpages,setTotalpages]=useState(1)
//   let [page,setpage]=useState(1)
  useEffect(() => {
    dispatch(getAllproducts());
  }, []);


// let selectedpage=(currentpage)=>{
//     setpage(currentpage)
// }
const filterchange=(e)=>{
    dispatch(getAllproducts(e.target.value))
}
const sortchange=(e)=>{
    dispatch(getsortedproducts(e.target.value))
}
  return (
    <div>



<HStack  spacing={8} style={{padding:"1rem"}}>

<Select placeholder='Filter By Category' onChange={filterchange}>
  <option value='kids'>kids</option>
  <option value='women'>women</option>
  <option value='homedecor'>homedecor </option>
</Select>
<Select placeholder='Sort by Price' onChange={sortchange}>
  <option value='asc'>Low To High</option>
  <option value='desc'>High To Low 2</option>
</Select>
</HStack>

      <Grid templateColumns="repeat(4, 1fr)" gap={6}>
        {data.data &&
          data.data.map((el) => (
            <Link to={`/product/${el.id}`}>
              <GridItem w="100%" style={{padding:"1rem",border:"1px solid gray"}}>
                <VStack spacing={4} align="stretch">
                  <Box bg="yellow.200">
                    <Image
                      boxSize="100%"
                      objectFit="cover"
                      src={el.image}
                      alt="Dan Abramov"
                    />
                  </Box>
                  <Box bg="tomato">
                    <Text fontSize="md">{el.title}</Text>
                    <Text fontSize="md">Brand : {el.brand}</Text>
                    <Text fontSize="md">Price : {el.price}</Text>
                    <Text fontSize="md">Category : {el.category}</Text>
                  </Box>
                </VStack>
              </GridItem>
            </Link>
          ))}
      </Grid>




      {/* <div className="paginationdiv">
      {totalpages > 0 && (
          <div className="pagination">
            <span  onClick={()=>selectedpage(page-1)} className={page!==1 ? "tabs":"disabeld"} >prve</span>

            {[...Array(totalpages)].map((_, index) => {
              return (
                <span
                  className={page == index + 1 ? "active" : "inactive"}
                  onClick={() => selectedpage(index + 1)}
                >
                  {index + 1}
                </span>
              );
            })}
            <span  onClick={()=>selectedpage(page+1)} className={page<totalpages ? "tabs":"disabeld"}>next</span>
          </div>
        )}
</div> */}
    </div>
  );
};

export default Products;
