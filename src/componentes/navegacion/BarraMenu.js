import {AppBar,Container,Toolbar,Icon, Typography,Button, IconButton, Drawer, List, ListItem,  ListItemIcon, ListItemText,} from "@material-ui/core";
import React, { useState } from "react";
import misEstilos from "../../estilos/misestilos";
import {Link} from 'react-router-dom';
import MenuDerecho from './menus/MenuDerecho';
import MenuIzquierdo from './menus/MenuIzquierdo';


const BarraMenu = () => {
  const [estadoMenu, setEstadoMenu] = useState(false);
  const clases = misEstilos();
  const openToggle = () => {
    setEstadoMenu(true);
  };

  const closeToggle = () => {
    setEstadoMenu(false);
  };

  return (
    <div>
      <AppBar position="static" className={clases.barra}>
        <Container>
          <Toolbar>
            <div className={clases.barraPequeña}>
              <IconButton color="inherit" onClick={openToggle}>
                <Icon fontSize="large">menu</Icon>
              </IconButton>
            </div>

            <Drawer 
            open={estadoMenu} 
            onClose={closeToggle}>
                
              <div className={clases.barraList}>
                <List>
                  <ListItem button onClick={closeToggle} className={clases.barraListItems}>
                    <Link to="/login" color="inherit" className={clases.barraPequeñaLink} underline="none">
                      <ListItemIcon className={clases.barraListItemIcon}>
                        <Icon>person</Icon>
                      </ListItemIcon>
                      <ListItemText>Login</ListItemText>
                    </Link>
                  </ListItem>
                </List>
              </div>
            </Drawer>

            {/* La barra tendrá dos div, el primero para mostrar el menú general */}
            <div className={clases.barraAgrandaDiv1}>
              <Link to="/" color="inherit" className={clases.barraLinkLogo} underline="none"
              >
                <Icon className={clases.barraMargenIconDerecho} fontSize="large">groups</Icon>
                <Typography>RRHH</Typography>
              </Link>
            </div>

            {/* El segundo div tendrá el manejo de usuarios */}
            <div className={clases.barraGrande}>
              {/*<Button color="inherit" className={clases.barraBotonIcon} underline="none">
                <Link  to="/login" color="inherit" className={clases.barraLink}>
                  <Icon className={clases.barraMargenIconDerecho}>person</Icon>
                  Iniciar Sesión
                </Link>
              </Button>*/}
              <MenuIzquierdo/>
              <MenuDerecho/>
            </div>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};

export default BarraMenu;
