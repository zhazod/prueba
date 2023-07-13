import React from "react";
import Login from "./componentes/seguridad/Login";
import BarraMenu from "./componentes/navegacion/BarraMenu";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Personas from "./componentes/Vistas/Personas";
import Direccion from "./componentes/Vistas/Direccion";
import PersonasListar from "./componentes/Vistas/PersonasListar";
import PersonasAgregar from "./componentes/Vistas/PersonasAgregar";
import PersonasEditar from "./componentes/Vistas/PersonasEditar";
import DireccionListar from "./componentes/Vistas/DireccionListar";
import DireccionAgregar from "./componentes/Vistas/DireccionAgregar";
import DireccionEditar from "./componentes/Vistas/PersonasEditar";

function App() {
  return (
    <div className="App">
      <Router>
        <BarraMenu />
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/" component={Personas} />
          <Route exact path="/" component={Direccion} />
          <Route exact path="/listarpersonas" component={PersonasListar} />
          <Route exact path="/agregarpersonas" component={PersonasAgregar} />
          <Route exact path="/editarpersonas/:id" component={PersonasEditar} />
          <Route exact path="/listardireccion" component={DireccionListar} />
          <Route exact path="/agregardireccion" component={DireccionAgregar} />
          <Route exact path="/editardireccion/:id" component={DireccionEditar} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
