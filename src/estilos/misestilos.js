import { makeStyles, createTheme } from "@material-ui/core";

const tema = createTheme();


const misEstilos = makeStyles({
  barra: {
    paddingTop: 8,
    paddingBottom: 8,
  },

  barraAgrandaDiv1: {
    flexGrow: 0,
    [tema.breakpoints.up("md")]: {/* si la pantalla es mayor a mediana (960px) se ocultará el div que tiene esta clase */
      flexGrow: 1,
    },
  },

  barraLinkLogo: {
    display: "inline-flex",
    alignItems: "center",
    color: "inherit",
    textDecoration: "none",
  },

  barraMargenIconDerecho: {
    marginRight: 3,
  },

  barraBotonIcon: {
    fontSize: 14,
    padding: 0,
  },
  barraLink: {
    display: "inline-flex",
    alignItems: "center",
    padding: "6px 16px",
    color: "inherit",
    textDecoration: "none",
  },
  barraList: {
    width: 250,
  },
  barraListItems: {
    padding: 0,
  },
  barraPequeñaLink: {
    display: "inline-flex",
    alignItems: "center",
    width: "100%",
    padding: "8px 16px",
    color: "inherit",
    textDecoration: "none",
  },
  barraListItemIcon: {
    minWidth: 35,
  },
  barraGrande: {
    display: "none",
    [tema.breakpoints.up("md")]: {/* si la pantalla es mayor a mediana (960px) se verá el div que tiene esta clase */
      display: "flex",
    },
  },
  barraPequeña: {
    display: "flex",
    flexGrow: 1,
    [tema.breakpoints.up("md")]: {/* si la pantalla es mayor a mediana (960px) se ocultará el div que tiene esta clase */
      display: "none",
    },
  },

  titulovista:{
    fontWeight:600,
    marginBottom: 10
    },

    media:{
    height:250,
    backgroundColor:"F2F2F2",
    margin:"15px 15px 0px 15px"
    },

    sueldo:{
    float:"right",
    padding:"0px 20px 0px 20px",
    backgroundColor: "#0f80aa"
    },

    nombre:{
    fontWeight: "bold",
    color:"#656565",
    marginBottom:8
    },

    //estilos Trabajador Agregar
    buttonAgregar:{
    float:"right"
    },

    barraPerfil:{
    marginRight:8,
    backgroundColor:"#F2F2F2"
    },

    avatarPersona:{
    width:175,
    height:175,
    backgroundColor:"#F2F2F2"
    },

    form:{
    marginTop:40,
    marginBottom:10
    },

    gridmb:{
    marginBottom:20
    },

    formControl:{
    margin: tema.spacing(1),
    minWidth:120
    },

    containermt:{
    marginTop:30
    }
   })
   export default misEstilos;