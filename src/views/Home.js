import React, { Fragment } from "react";
import AskQuestionCard from "../components/AskQuestionCard";
import SubjectCard from "../components/SubjectCard";
import "./Home.css"




const Home = () => (
  <>
  <div className="home-band rounded-75 d-flex justify-content-between align-items-center">
    <div className="text-white">Welcome Merve Aslan </div>
    <div><button className="btn-quiz">Quiz Here</button></div>
  </div>
  <SubjectCard/>
  <AskQuestionCard/>

   
  
  </>
);

export default Home;
