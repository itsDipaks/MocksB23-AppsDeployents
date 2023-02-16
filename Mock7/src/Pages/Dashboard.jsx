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
import {GetListedCompanies, ListStocks} from "../Redux/Dashboard/Dash.action";

const Dashboard = () => {
  let dispatch = useDispatch();
  let [formdata, setformdata] = useState({});

  let handeldsubmit = (e) => {
    e.preventDefault();
    dispatch(ListStocks(formdata));
    alert("Stock Listed Successfully");
    dispatch(GetListedCompanies());
  };
  const handeldinputs = (e) => {
    const {name, value} = e.target;
    setformdata({
      ...formdata,
      [name]: value,
    });
  };

  useEffect(() => {
    dispatch(GetListedCompanies());
  }, []);

  const {loading, error, data} = useSelector((store) => store.Dash);
  console.log(data);

  return (
    <div>
      <h1>Dashboard</h1>
      <Stack spacing={4}>
        <form action="" onSubmit={handeldsubmit}>
          <Input
            placeholder="Company Name"
            name="company_name"
            size="md"
            onChange={handeldinputs}
          />
          <Input
            placeholder="company Logo"
            name="company_Logo"
            size="md"
            onChange={handeldinputs}
          />
          <Select
            placeholder="Pleaase Select Comapny Type"
            name="company_type"
            onChange={handeldinputs}
          >
            <option value="Bank">Bank</option>
            <option value="IT">IT</option>
            <option value="Automobile">Automobile</option>
            <option value="Pharma">Pharma</option>
            <option value="Oil">Oil </option>
          </Select>
          <Select
            placeholder=" Pleaase Select  Stock Exchange"
            name="stock_exchange"
            onChange={handeldinputs}
          >
            <option value="NSE">NSE </option>
            <option value="BSE">BSE </option>
          </Select>
          <Input
            type="number"
            placeholder="Total Shares"
            name="total_shares"
            size="md"
            onChange={handeldinputs}
          />
          <Input
            type="number"
            placeholder="Cost Per Share"
            name="cost_per_share"
            size="md"
            onChange={handeldinputs}
          />
          <Input
            type="number"
            placeholder="price action"
            name="price_action"
            size="md"
            onChange={handeldinputs}
          />
          <Input type="submit" value="List Stock" />
        </form>
      </Stack>

      <h1
        style={{
          marginTop: "5rem",
        }}
      >
        Listed Companies
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
                <Th>company Image</Th>
                <Th>company_name</Th>
                <Th>company_type</Th>
                <Th>stock_exchange</Th>
                <Th>total_shares</Th>
                <Th>cost_per_share</Th>
                <Th>price_action</Th>
                <Th>Dlete</Th>
                <Th>Edit</Th>
              </Tr>
            </Thead>
            <Tbody>
              {data &&
                data.map((el) => (
                  <Tr>

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

export default Dashboard;
