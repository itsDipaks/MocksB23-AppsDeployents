import {Badge, Box, Button, Image, Input} from "@chakra-ui/react";
import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {BuyStocks, GetListedCompanies} from "../Redux/Dashboard/Dash.action";
import "./Pages.css"
const Stocks = () => {

    let [totalpages,setTotalpages]=useState(1)
    let [page,setpage]=useState(1)
let [buyCountstock,SetbutStock]=useState(0)
let dispatch = useDispatch()

const {loading, error, data} = useSelector((store) => store.Dash);

  let selectedpage=(currentpage)=>{
      setpage(currentpage)
  }
  console.log(totalpages)
  useEffect(() => {
    dispatch(GetListedCompanies(page));
    let total=Math.floor(data.length/4)
    setTotalpages(total)
  }, [page]);
  

  


const buystock=(el)=>{
    let stcockbuy={...el,buyCountstock}
dispatch(BuyStocks(stcockbuy))
alert(`${buyCountstock} Stocks Added To your Cart`)
}

const setbuycount=(e)=>{
    e.preventDefault()
    SetbutStock(e.target.value)
}

  return (
    <div>
      <h1
        style={{
          fontSize: "2rem",
          padding: "2rem",
        }}
      >
        Stocks{" "}
      </h1>

      <div
        style={{
          display: "flex",
          gap: "1rem",
        }}
      >
        {data.length>0 ?
          data.map((el) => (
            <Box key={el.id}
              maxW="sm"
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
            >
              <Image src="https://t4.ftcdn.net/jpg/04/88/52/39/360_F_488523992_FwQ8IAbJdENf6gvQgOKIeZSTvPmZXC2r.jpg" />

              <Box p="6">
                <Box display="flex" alignItems="baseline">
                  <Badge borderRadius="full" px="2" colorScheme="teal">
                    {el.company_type}
                  </Badge>
                  <Badge borderRadius="full" px="2" colorScheme="red">
                    {el.stock_exchange}
                  </Badge>
                  <Box
                    color="gray.500"
                    fontWeight="semibold"
                    letterSpacing="wide"
                    fontSize="xs"
                    textTransform="uppercase"
                    ml="2"
                  ></Box>
                </Box>

                <Box
                  mt="1"
                  fontWeight="semibold"
                  as="h4"
                  lineHeight="tight"
                  noOfLines={1}
                >
                  Company : {el.company_name}
                </Box>

                <Box color="gray.600">Total Share: {el.total_shares}</Box>
                <Box color="gray.600">Cost Per Share: {el.cost_per_share}</Box>
                <Box color="gray.600">Total Share: {el.total_shares}</Box>
                <Box color="gray.600">Price Action : {el.price_action}</Box>

                <Box display="flex" mt="2" alignItems="center">
                  <Box as="span" ml="2" color="gray.600" fontSize="sm">{el.id}</Box>
                </Box>

                <Input type="number" placeholder="Enter Stock Count" onChange={setbuycount}/>
                <Button onClick={()=>
                buystock(el)}>Buy Stock</Button>
              </Box>
            </Box>
          )):""}
      </div>




      {/* -------PAgination-------- */}
<div className="paginationdiv">
{data.length > 0 && (
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
</div>
      


    </div>
  );
};

export default Stocks;
