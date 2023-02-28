import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getpostedjobs, getserchdata} from "../../Redux/Jobs/jobs.action";
import {
  Box,
  Select,
  Button,
  Text,
  Image,
  Input,
  Badge,
  Flex,
  FormLabel,
  Spacer,
} from "@chakra-ui/react";
import "./pages.css";
const JobListing = () => {
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(getpostedjobs());
  }, []);
  let {data} = useSelector((store) => store.Jobs);
console.log(data)
  let handeldfilter = (e) => {
    dispatch(getpostedjobs(e.target.value));
  };

  let handeldserchinputs = (e) => {
    console.log(e.target.value);
    dispatch(getserchdata(e.target.value));
  };

  return (
    <>
    
      <div className="actionbox">
        <Flex gap="2rem">
          <Box>
            <FormLabel>Filter By Role : </FormLabel>
            <Select placeholder="Please Select Role " onChange={handeldfilter}>
              <option value="Frontend">Frontend</option>
              <option value="Backend">Backend</option>
              <option value="Fullstack">Fullstack</option>
            </Select>
          </Box>

          <Box>
            <FormLabel>Search By Techstack </FormLabel>
            <Input
              placeholder="Enter Techstack"
              name="CityName"
              onChange={handeldserchinputs}
            />
          </Box>
        </Flex>
      </div>

      <div className="listbox">


        { data?.map((el) => 
          <Box
            width="100%"
            m="1rem"
            boxShadow="outline"
            rounded="md"
            bg="white"
          >
            <Flex alignItems="center" justifyContent="space-between" p="1rem">
              <Image
                width="15%"
                src="https://www.designevo.com/res/templates/thumb_small/black-round-and-white-airplane.webp"
                alt="img"
              />
              {/* -----leftside box---- */}
              <Box width="60%">
                <Text fontSize="md">{el?.CompanyName}</Text>
                <Text as="b" fontSize="md">
                  {el?.Postion}
                </Text>
                <Flex>
                  <Text fontSize="sm">{el?.Date}</Text>
                  <Spacer />
                  <Spacer />
                  <Text fontSize="sm">{el?.Location}</Text>
                </Flex>
              </Box>

              {/* ---right side box----- */}

              <Box>
                <Badge
                  borderRadius="full"
                  px="1"
                  fontSize="0.7em"
                  colorScheme="red"
                >
                  {el?.Role}
                </Badge>
                <Badge
                  borderRadius="full"
                  px="2"
                  fontSize="0.7em"
                  colorScheme="red"
                >
                  {el?.Level}
                </Badge>
                <Badge
                  borderRadius="full"
                  px="2"
                  fontSize="0.7em"
                  colorScheme="red"
                >
                  {el?.Language}
                </Badge>
              </Box>
            </Flex>
          </Box>
        )}
      </div>
    </>
  );
};

export default JobListing;
