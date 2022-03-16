import React from "react";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";

const App = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClose = (ev) => {
    setAnchorEl(null);
    ev.stopPropagation();
  };

  const handleClick = (ev) => {
    setAnchorEl(ev.currentTarget);
  };

  return (
    <div style={{ marginLeft: "40%" }}>
      <h2> Menu Component</h2>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        Menu Items
      </Button>
      <Menu
        keepMounted
        anchorEl={anchorEl}
        onClose={handleClose}
        open={Boolean(anchorEl)}
      >
        <MenuItem onClick={handleClose}> My Profile </MenuItem>
        <MenuItem onClick={handleClose}> Accounts </MenuItem>
        <MenuItem onClick={handleClose}> Settings </MenuItem>
        <MenuItem onClick={handleClose}> Sign Out </MenuItem>
      </Menu>
    </div>
  );
};

export default App;
