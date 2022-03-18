/*
Drawer - Material UI that gives access to supplementary conten ton a page.
Top, Bottom, Right, Left - pass props called "anchor".
*/
import React, { useState } from "react";
import {
  Drawer,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemText,
  makeStyles
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
//import { Menu as MenuIcon } from "@material-ui/icons";
import { Link } from "react-router-dom";

const useStyles = makeStyles(() => ({
  link: {
    textDecoration: "none",
    color: "black",
    fontSize: "20px"
  },
  icon: {
    color: "white"
  }
}));

function DrawerComponent() {
  const classes = useStyles();
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <>
      <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
        <List>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link to="/" className={classes.link}>
                Home
              </Link>
            </ListItemText>
          </ListItem>
          <Divider />
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link to="/About" className={classes.link}>
                About
              </Link>
            </ListItemText>
          </ListItem>
          <Divider />
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link to="/Contact" className={classes.link}>
                Contact
              </Link>
            </ListItemText>
          </ListItem>
          <Divider />
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link to="/Blog" className={classes.link}>
                Blog
              </Link>
            </ListItemText>
          </ListItem>
          <Divider />
        </List>
      </Drawer>
      <IconButton
        onClick={() => setOpenDrawer(!openDrawer)}
        className={classes.icon}
      >
        <MenuIcon />
      </IconButton>
    </>
  );
}

export default DrawerComponent;
