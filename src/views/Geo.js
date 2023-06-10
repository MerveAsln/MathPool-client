import React, { useState } from "react";
import { Button, Alert } from "reactstrap";
import Highlight from "../components/Highlight";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import { getConfig } from "../config";
import Loading from "../components/Loading";

export const GeoComponent = () => {
  

  return (
    <>
    <h1>Geo</h1>
     
    </>
  );
};

export default withAuthenticationRequired(GeoComponent, {
  onRedirecting: () => <Loading />,
});
