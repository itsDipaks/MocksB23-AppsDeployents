
import {
    Input,
    Select,
    Stack,
    Table,
    TableCaption,
    TableContainer,
    Tbody,
    Td,
    Tfoot,
    Th,
    Thead,
    Tr,
  } from "@chakra-ui/react";
  import React, {useEffect, useState} from "react";
  import {useDispatch, useSelector} from "react-redux";
  import {getBuyProducts, GetListedCompanies, ListStocks} from "../Redux/Dashboard/Dash.action";
  
  const Portfolio = () => {
    let dispatch = useDispatch();
  
 
  
    useEffect(() => {
      dispatch(getBuyProducts());
    }, []);
  
    const {loading, error, data} = useSelector((store) => store.Dash);
    console.log(data);
  
    return (
      <div>
        <h1>Port Folio</h1>
      
        <h1
          style={{
            marginTop: "5rem",
          }}
        >
          Purchesed
        </h1>
        <div
          style={{
            padding: "1rem",
            border: "1px solid tomato",
            margin: "1rem",
          }}
        >
          <TableContainer>
            <Table variant="striped" colorScheme="teal">
              <TableCaption>Stock Treder </TableCaption>
              <Thead>
                <Tr>
                <Th>Total Perchesed Stock</Th>
                  <Th>company Image</Th>
                  <Th>company_name</Th>
                  <Th>company_type</Th>
                  <Th>stock_exchange</Th>
                  <Th>total_shares</Th>
                  <Th>cost_per_share</Th>
                  <Th>price_action</Th>
                  
                </Tr>
              </Thead>
              <Tbody>
                {data &&
                  data.map((el) => (
                    <Tr>
                        <Td>{el.buyCountstock}</Td>
                      <Td><img src={el.company_Logo|| "https://t4.ftcdn.net/jpg/04/88/52/39/360_F_488523992_FwQ8IAbJdENf6gvQgOKIeZSTvPmZXC2r.jpg"} alt="" /></Td>
                      <Td>{el.company_name}</Td>
                      <Td>{el.company_type}</Td>
                      <Td>{el.stock_exchange}</Td>
                      <Td>{el.total_shares}</Td>
                      <Td>{el.cost_per_share}</Td>
                      <Td>{el.price_action}</Td>
                      <Td>Edit Stock</Td>
                      <Td>Delte Stock</Td>
                    </Tr>
                  ))}
              </Tbody>
            </Table>
          </TableContainer>
        </div>
      </div>
    );
  };
  
  export default Portfolio;
  