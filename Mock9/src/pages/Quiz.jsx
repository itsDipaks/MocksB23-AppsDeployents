import {Box, Stack, Text} from "@chakra-ui/react";
import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getquestion} from "../Redux/Quiz/Quiz.action";

const Quiz = () => {
let [wrongans,setwrongans]=useState(false)
  let {username, Difficulty, Category, countqs} =
    JSON.parse(localStorage.getItem("user")) || {};
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(getquestion(Difficulty, Category, countqs));
  }, []);

  let data = useSelector((store) => store.quiz);
  console.log(data.data.length);

let checkanswer=(qs,correct_answer)=>{
if(qs==correct_answer){
    alert("correct")
}else{
    alert("Wrong")
}
}
let  arr=[]

let Correctans=()=>{
    alert("correct")
}
  return (
    <div>
      <Text fontSize="3xl">Welcome To Masai Quiz</Text>
      <Box>
        <Text fontSize="xl">Name :{username} </Text>
        <Text fontSize="xl">Difficulty Level :{Difficulty}</Text>
      </Box>
      {/* ----Questions----- */}
      <Box>
        {data.data &&
          data.data.map((el) => (
            <Box
              style={{
                border: "1px solid gray",
                padding: "2rem",
                margin: "2rem",
              }}
            >
              <Stack>
                <Text fontSize="xl">Question : {el.question}</Text>
                <Text>Difficulty Level : {el.difficulty}</Text>
                <Text>Category : {el.category}</Text>
                <Text>Options : </Text>
                <Stack>
                  {el.incorrect_answers.map((qs) => (
                    <Text onClick={()=>checkanswer(qs,el.correct_answer)}
                      style={{
                        padding: "1rem",
                        border: "1px solid black",
                        width: "50%",
                        margin: "auto",
                        marginTop: "1rem",
                      }}
                    >
                      {qs}
                    </Text>
                  ))}
                  <Text onClick={Correctans}
                    style={{
                      padding: "1rem",
                      border: "1px solid black",
                      width: "50%",
                      margin: "auto",
                      marginTop: "1rem",
                    }}
                  >
                    {el.correct_answer}
                  </Text>
                </Stack>
              </Stack>
            </Box>
          ))}
      </Box>

      {/* {data.data.length > 0 && (
        <div className="pagination">
          <span
            onClick={() => selectedpage(page - 1)}
            className={page !== 1 ? "tabs" : "disabeld"}
          >
            prve
          </span>

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
          <span
            onClick={() => selectedpage(page + 1)}
            className={page < totalpages ? "tabs" : "disabeld"}
          >
            next
          </span>
        </div>
      )} */}
    </div>
  );
};

export default Quiz;
