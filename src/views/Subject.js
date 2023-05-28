import React, { useState } from "react";
import { Button, Alert } from "reactstrap";
import Highlight from "../components/Highlight";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import { getConfig } from "../config";
import Loading from "../components/Loading";

export const SubjectComponent = () => {
  

  return (
    <>
    <h1>Subject</h1>
     
    </>
  );
};

export default withAuthenticationRequired(SubjectComponent, {
  onRedirecting: () => <Loading />,
});
