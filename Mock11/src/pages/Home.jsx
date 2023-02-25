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
import Modalcompo from "../components/Modalcompo";
import {getcontrybyfilter, getcountrys} from "../Redux/Getdata/Get.action";
import "./pages.css";
const Home = () => {
  let dispatch = useDispatch();
  let [val,setval]=useState("")
  const {isOpen, onOpen, onClose} = useDisclosure();
  let {data} = useSelector((store) => store.Getdata);
  const [selectedItem, setSelectedItem] = useState(null);

  console.log(selectedItem);
  useEffect(() => {
    dispatch(getcountrys());
  }, []);

  const MoreDetailsClick = (item) => {
    setSelectedItem(item);
    onOpen();
  };

  let handeldchange=(e)=>{
    console.log(e.target.value)
  }
  return (
    <div>

<Box >

<Select placeholder='Select option' onChange={(e)=>handeldchange(e)}>
  <option value='africa'>Africa</option>
  <option value='americas'>Americas</option>
  <option value='asia'>Asia</option>
  <option value='europe'>Europe</option>
  <option value='oceania'>Oceania</option>
</Select>

</Box>


      <Box className="outerbox">
        {data?.map((el, index) => (
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
              {/* <Button onClick={()=>{onOpen(index)}}>More Details</Button> */}
            </Box>

            {/* ----Modal---- */}
            {/* <Button onClick={onOpen}>Open Modal</Button> */}
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
               Native Name :  {selectedItem?.nativeName}
                </Text>
                <Text fontWeight="bold" mb="1rem">
                SubRegion : {selectedItem?.subregion}
                </Text>
                <Text fontWeight="bold" mb="1rem">
                Currency  : {selectedItem?.currencies[0].name}
                </Text>
              <Text>Language names :  {selectedItem?.languages.map((el)=><Text>{el.name}</Text>)}</Text> 
              {/* <Text>Boreder  :  {selectedItem?.borders.map((el)=><Text>{el.name}</Text>)}</Text>  */}
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
