import {
    Icon,
    Button,
    Avatar,
    Menu,
    MenuItem,
    ListItemIcon,
    ListItemText,
  } from "@material-ui/core";
  import React, { useState } from "react";
  import misEstilos from "../../../estilos/misestilos";
  import { Link } from "react-router-dom";
  
  
  
  const MenuDerecho = () => {
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
        <Button color="inherit" className={clases.barraBotonIcon}>
          <Link className={clases.barraLinkLogo} to="/listarpersonas">
            <Icon className={clases.barraMargenIconDerecho}>list</Icon>
            Personas
          </Link>
        </Button>
        <div>
          <Button
            color="inherit"
            className={clases.barraBotonIcon}
            onClick={handleClick}
          >
            <div className={clases.barraLink}>
              <Avatar
                alt="imagen usuario"
                className={clases.barraPerfil}
                src="https://es.wikipedia.org/wiki/Usuario_(inform%C3%A1tica)#/media/Archivo:User_icon_2.s
  vg"
              />
              Nombre Usuario
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
              <Link className={clases.barraPequeñaLink} to="/">
                <ListItemIcon className={clases.barraListItemIcon}>
                  <Icon>personas</Icon>
                </ListItemIcon>
                <ListItemText>Mi perfil</ListItemText>
              </Link>
            </MenuItem>
            <MenuItem className={clases.barraListItems} onClick={handleClose}>
              <Link className={clases.barraPequeñaLink} to="/agregarpersonas">
                <ListItemIcon className={clases.barraListItemIcon}>
                  <Icon>exit_to_app</Icon>
                </ListItemIcon>
                <ListItemText>Salir</ListItemText>
              </Link>
            </MenuItem>
          </Menu>
        </div>
      </>
    );
  };
  export default MenuDerecho;
  