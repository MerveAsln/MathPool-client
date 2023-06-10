import React, { useState } from "react";
import { Button, Alert } from "reactstrap";
import Highlight from "../components/Highlight";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import { getConfig } from "../config";
import Loading from "../components/Loading";

export const QuizComponent = () => {
  

  return (
    <>
    <h1>ask</h1>
     
    </>
  );
};

export default withAuthenticationRequired(QuizComponent, {
  onRedirecting: () => <Loading />,
});
