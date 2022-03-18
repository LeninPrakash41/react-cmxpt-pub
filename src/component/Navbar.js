// import React from "react";

// import {
//   AppBar,
//   Toolbar,
//   CssBaseline,
//   Typography,
//   makeStyles,
//   useTheme,
//   useMediaQuery
// } from "@material-ui/core";

// import { Link } from "react-router-dom";

// import DrawerComponent from "./Drawer";

// const useStylesFromMakeStyles = makeStyles((theme) => ({
//   navlinks: {
//     display: "flex",
//     marginLeft: theme.spacing(10)
//   },
//   logo: {},
//   link: {
//     textDecoration: "none",
//     color: "white",
//     fontSize: "20px",
//     marginLeft: theme.spacing(20),
//     "&:hover": {
//       color: "Pink",
//       borderBottom: "1px solid white"
//     }
//   }
// }));

// function Navbar() {
//   const classStyle = useStylesFromMakeStyles();
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down("md"));

//   return (
//     <AppBar position="static">
//       <CssBaseline />
//       <Toolbar>
//         <Typography varaint="h2" className={classStyle.logo}>
//           Nav Bar
//         </Typography>

//         {/* Drawer Component Here with isMobile Validation */}
//         {isMobile ? (
//           <DrawerComponent />
//         ) : (
//           <div className={classStyle.navlinks}>
//             <Link to="/" className={classStyle.link}>
//               Home
//             </Link>
//             <Link to="/about" className={classStyle.link}>
//               About
//             </Link>
//             <Link to="/contact" className={classStyle.link}>
//               Contact
//             </Link>
//             <Link to="/blog" className={classStyle.link}>
//               Blog
//             </Link>
//           </div>
//         )}
//       </Toolbar>
//     </AppBar>
//   );
// }

// export default Navbar;

import React from "react";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
  useTheme,
  useMediaQuery
} from "@material-ui/core";
import { Link } from "react-router-dom";
import DrawerComponent from "./Drawer";

const useStyles = makeStyles((theme) => ({
  navlinks: {
    marginLeft: theme.spacing(5),
    display: "flex"
  },
  logo: {
    flexGrow: "1",
    cursor: "pointer"
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "20px",
    marginLeft: theme.spacing(20),
    "&:hover": {
      color: "yellow",
      borderBottom: "1px solid white"
    }
  }
}));

function Navbar() {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <AppBar position="static">
      <CssBaseline />
      <Toolbar>
        <Typography variant="h4" className={classes.logo}>
          Navbar
        </Typography>
        {/* {isMobile ? (
          <DrawerComponent />
        ) : (*/}
        <div className={classes.navlinks}>
          <Link to="/" className={classes.link}>
            Home
          </Link>
          <Link to="/about" className={classes.link}>
            About
          </Link>
          <Link to="/contact" className={classes.link}>
            Contact
          </Link>
          <Link to="/faq" className={classes.link}>
            FAQ
          </Link>
        </div>
        {/* )} */}
      </Toolbar>
    </AppBar>
  );
}
export default Navbar;
