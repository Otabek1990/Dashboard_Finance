import React from "react";
import {
  AppBar,
  Box,
  Hidden,
  IconButton,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { useStyles } from "./HeaderStyle";
import MenuRoundedIcon from "@material-ui/icons/MenuRounded";
import Notification from "./ActionTab/Notification";
import Profile from "./ActionTab/Profile";
import Messages from "./ActionTab/Messages";
import Gerb from '../../assets/gerb.png';
// import 'navbar.css';
export default function NavbarComponent({ handleDrawerToggle }) {
  const classes = useStyles();
  return (
    <AppBar style={{height:"63px"}}>
      <Toolbar className={classes.toolbar}>
        <Box  style={{ display: "flex",marginLeft:"50px",cursor:"pointer"}}>
          <Typography className={classes.logo}>
            <img src={Gerb} alt='logo'  width={"58px"}/>
          </Typography>
        </Box>
        <Hidden smDown>
          <Box>
            <Notification />
            <Messages />
            <Profile />
          </Box>
        </Hidden>
        <Hidden mdUp>
          <IconButton color='inherit' onClick={handleDrawerToggle}>
            <MenuRoundedIcon />
          </IconButton>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
}
