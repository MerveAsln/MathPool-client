import React, { useState } from "react";
import { Button, Alert } from "reactstrap";
import Highlight from "../components/Highlight";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import { getConfig } from "../config";
import Loading from "../components/Loading";
import { Link } from "phosphor-react";

export const QuestionsComponent = () => {
  
  //  const questions = [
  //   {
  //     id: 1,
  //     image: 'path-to-image-1',
  //     content: 'Question 1 content',
  //   },
  //   {
  //     id: 2,
  //     image: 'path-to-image-2',
  //     content: 'Question 2 content',
  //   },
  //   // Add more questions as needed
  // ];
  return (
    <>
  

  
    {/* <div className="questions-page">
      {questions.map(question => (
        <div className="card" key={question.id}>
          <img src={question.image} alt="Question" />
          <div className="content">{question.content}</div>
          <Link to={`/answer/${question.id}`}>
            <button className="answer-button">Answer</button>
          </Link>
        </div>
      ))}
    </div> */}
  
     
    </>
  );
};

export default withAuthenticationRequired(QuestionsComponent, {
  onRedirecting: () => <Loading />,
});
