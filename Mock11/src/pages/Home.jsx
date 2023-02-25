import {
  Badge,
  Box,
  Button,
  Image,
  Modal,
  ModalHeader,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  Text,
  useDisclosure,
  ModalCloseButton,
  Select,
} from "@chakra-ui/react";
import React, {useEffect} from "react";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getcontrybyfilter, getcountrys} from "../Redux/Getdata/Get.action";
import "./pages.css";
const Home = () => {
  let dispatch = useDispatch();
  const {isOpen, onOpen, onClose} = useDisclosure();
  let [displayarray,setdiaplyarray]=useState([])
  let {data} = useSelector((store) => store.Getdata);
  const [selectedItem, setSelectedItem] = useState(null);

  console.log(selectedItem);
  useEffect(() => {
    dispatch(getcountrys());
    setdiaplyarray(data)
  }, []);

  const MoreDetailsClick = (item) => {
    setSelectedItem(item);
    onOpen();
  };

  let handeldchange = (e) => {
    let array = data.filter((el) => el.region == e.target.value);
    setdiaplyarray(array)
  };
  function handeldsort(e) {
let  value=e.target.value

    if (value == "desc") {
        displayarray = displayarray.sort((a, b) => {
        if (Number(a.population) > Number(b.population)) {
          return -1;
        }
        return 1;
      });
    } else {
        displayarray = arr.sort((a, b) => {
        if (Number(a.population) > Number(b.population)) {
          return 1;
        }
        return -1;
      });
    }
    
  }
  return (
    <div>
      <Box className="actionbox">
        <Select
          placeholder="Sort by  Population "
          onChange={(e) => handeldsort(e)}
        >
          <option value="asc">Low To High</option>
          <option value="desc">High To Low</option>
        </Select>
        <Select
          placeholder="Filter By Region  "
          onChange={(e) => handeldchange(e)}
        >
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </Select>
      </Box>

      <Box className="outerbox">
        {displayarray?.map((el, index) => (
          <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src={el.flag} alt={el.flag} />

            <Box p="6">
              <Box display="flex" alignItems="baseline"></Box>

              <Box
                mt="1"
                fontWeight="semibold"
                as="h4"
                lineHeight="tight"
                noOfLines={1}
              >
                {el.name}
              </Box>

              <Box>Population : {el.population}</Box>
              <Box>Region : {el.region}</Box>
              <Box>Capital : {el.capital}</Box>
              <Button onClick={() => MoreDetailsClick(el)}>More Details</Button>
            </Box>

            {/* ----Modal---- */}
          </Box>
        ))}

        <Box>
          <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Country Details</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <Text fontWeight="bold" mb="1rem">
                  Country Name : {selectedItem?.name}
                </Text>
                <Text fontWeight="bold" mb="1rem">
                  Native Name : {selectedItem?.nativeName}
                </Text>
                <Text fontWeight="bold" mb="1rem">
                  SubRegion : {selectedItem?.subregion}
                </Text>
                <Text fontWeight="bold" mb="1rem">
                  Currency : {selectedItem?.currencies[0].name}
                </Text>
                <Text>
                  Language names :{" "}
                  {selectedItem?.languages.map((el) => (
                    <Text>{el.name}</Text>
                  ))}
                </Text>
              </ModalBody>

              <ModalFooter>
                <Button colorScheme="blue" mr={3} onClick={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </Box>
      </Box>
    </div>
  );
};

export default Home;
