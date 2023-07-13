import {
    Icon,
    Button,
    Menu,
    MenuItem,
    ListItemIcon,
    ListItemText,
  } from "@material-ui/core";
  import React, { useState } from "react";
  import misEstilos from "../../../estilos/misestilos";
  import { Link } from "react-router-dom";
  
  
  const MenuIzquierdo = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const handleClose = () => {
      setAnchorEl(null);
    };
    const handleClick = (e) => {
      setAnchorEl(e.currentTarget);
    };
    const clases = misEstilos();
    return (
      <>
        <Button
          color="inherit"
          className={clases.barraBotonIcon}
          onClick={handleClick}
        >
          <div className={clases.barraLink}>
            <Icon className={clases.barraMargenIconDerecho}>list</Icon>
            Mantenedores
            <Icon>keyboard_arrow_down</Icon>
          </div>
        </Button>
        <Menu
          elevation={2}
          anchorEl={anchorEl}
          getContentAnchorEl={null}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem className={clases.barraListItems} onClick={handleClose}>
            <Link className={clases.barraPequeñaLink} to="/listarpersonas">
              <ListItemIcon className={clases.barraListItemIcon}>
                <Icon>group</Icon>
              </ListItemIcon>
              <ListItemText>Personas</ListItemText>
            </Link>
          </MenuItem>
          <MenuItem className={clases.barraListItems} onClick={handleClose}>
            <Link className={clases.barraPequeñaLink} to="/agregarpersonas">
              <ListItemIcon className={clases.barraListItemIcon}>
                <Icon>exit_to_app</Icon>
              </ListItemIcon>
              <ListItemText>Direccion</ListItemText>
            </Link>
          </MenuItem>
        </Menu>
      </>
    );
  };
  export default MenuIzquierdo;
  