import React from "react";
import Header from "../../components/Header";
import { Box } from "@mui/material";

// import Map from '../../components/Map';

import Widget from "../../components/Widget";

const Dashboard = () => {
  return (
    <div>
      <Box m="20px"></Box>
      <Header title="Welcome Dan Ross!" subtitle="Dashboard" />

      <div className="widgets">
        <Widget type="my-profile" />
        <Widget type="appointments" />
        <Widget type="progress-notes" />
        <Widget type="laboratory-results" />
        <Widget type="my-medications" />
        <Widget type="messages" />
        <Widget type="provider-list" />
        <Widget type="billing" />
      </div>

      {/* <Box m="20px">
        <Map />
      </Box> */}
    </div>
  );
};

export default Dashboard;
