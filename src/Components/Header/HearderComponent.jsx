import React, { Fragment } from "react";
import { Box } from "@material-ui/core";
// import { Routes, Route } from "react-router-dom";
import { useStyles } from "./HeaderStyle";
import NavbarComponent from "./NavbarComponent";
import Sidenav from "./Sidenav";
// import Notification from "./ActionTab/Notification";
// import BlogPost from "../BodyComponent/BlogPost";
import Dashboard from "../BodyComponent/Dashboard/Dashboard";
// import Link1 from "../BodyComponent/Link1";

export default function HearderComponent() {
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
    console.log("Jai siya ram");
  };
  const handleDrawerClose = () => {
    setMobileOpen(false);
  };
  return (
    <Fragment>
      <NavbarComponent handleDrawerToggle={handleDrawerToggle} />
      {/* <div style={{display:"grid",gridTemplateColumns:"250px auto"}}> */}
      <Sidenav
        mobileOpen={mobileOpen}
        handleDrawerClose={handleDrawerClose}
        handleDrawerToggle={handleDrawerToggle}
      />
      <Box className={classes.wrapper}>
        <Dashboard/>
        {/* <Routes> */}
          {/* <Route exact path='/' element={ <Dashboard />} /> */}
          {/* <Route exact path='/blog' render={() => <BlogPost />} />
          <Route exact path='/link1' render={() => <Link1 />} />
          <Route exact path='/notification' render={() => <Notification />} /> */}
        {/* </Routes> */}
      </Box>
    </Fragment>
  );
}
