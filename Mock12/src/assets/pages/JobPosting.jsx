import {Box, FormLabel, Input, Select, Button} from "@chakra-ui/react";
import React, {useState} from "react";
import {useDispatch} from "react-redux";
import { useNavigate } from "react-router-dom";
import {addjobsdata} from "../../Redux/Jobs/jobs.action";

const JobPosting = () => {
  let [formdata, setformdata] = useState({});
  let dispach = useDispatch();

let navigate=useNavigate()

  let handeldinputs = (e) => {
    let {name, value} = e.target;

    setformdata({
      ...formdata,
      [name]: value,
    });
  };
  let submitform = (e) => {
    e.preventDefault();
    dispach(addjobsdata(formdata));
    console.log(formdata);

    alert("Form Submitted Suessfully !");
    navigate("/listing")
  };

  return (
    <div>
        <p>In Listing Page If Data Is Not Visible Please Refresh The page !!</p>
      <Box w="40%" m="auto" p="8" mt="2rem" border="1px">
        <form isRequired onSubmit={submitform}>
          <FormLabel>Company name</FormLabel>
          <Input
            placeholder="Enter Company name"
            name="CompanyName"
            onChange={handeldinputs}
          />

          <FormLabel>City </FormLabel>
          <Input
            placeholder="Enter City"
            name="CityName"
            onChange={handeldinputs}
          />

          <FormLabel>Location </FormLabel>
          <Input placeholder="Enter Location"   name="Postion"   onChange={handeldinputs} />

          <FormLabel>Role </FormLabel>
          <Select
            placeholder="Please Select Role "
            name="Role"
            onChange={handeldinputs}
          >
            <option value="Frontend">Frontend</option>
            <option value="Backend">Backend</option>
            <option value="Fullstack">Fullstack</option>
          </Select>

          <FormLabel>Level </FormLabel>
          <Select
            placeholder="Please Select Level "
            name="Level"
            onChange={handeldinputs}
          >
            <option value="Junior">Junior</option>
            <option value="Senior">Senior </option>
          </Select>
          <FormLabel>Postion </FormLabel>
          <Select
            placeholder="Please Select Postion"
            name="Postion"
            onChange={handeldinputs}
          >
            <option value="Backend_Developer">Backend Developer</option>
            <option value="Junior_Frontend_Developer">
              Junior Frontend Developer{" "}
            </option>
            <option value=" Junior_Backend_Developer">
              {" "}
              Junior Backend Developer
            </option>
            <option value="  FSD "> FSD </option>
          </Select>
          <FormLabel>Language </FormLabel>
          <Select
            placeholder="Please Select Language "
            name="Language"
            onChange={handeldinputs}
          >
            <option value="Javascript">Javascript</option>
            <option value="Java">Java </option>
            <option value="C++">C++</option>
          </Select>
          <FormLabel>Contract </FormLabel>
          <Select
            placeholder="Please Select Contract  "
            name="Contract"
            onChange={handeldinputs}
          >
            <option value="fulltime">Full Time</option>
            <option value="parttime">part time </option>
          </Select>
          <FormLabel>Date </FormLabel>
          <Input
            placeholder="Select Date and Time"
            size="md"
            type="datetime-local"
            name="Date"
            onChange={handeldinputs}
          />

          <Button
            colorScheme="red"
            size="md"
            mt="1rem"
            type="submit"
            value=" SubmitData"
          >
            Submit Data
          </Button>
        </form>
      </Box>
    </div>
  );
};

export default JobPosting;
