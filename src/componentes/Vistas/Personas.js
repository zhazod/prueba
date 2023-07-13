import {Container,Grid,Typography,Card, CardMedia, Avatar, CardContent, Button,} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { getPersonas } from '../../Acciones/PersonaAcciones';
import misEstilos from '../../estilos/misestilos';  

const Personas = (props) => {

  const [paginadorPersonas, setPaginadorPersonas] = useState({
    count: 0,
    pageIndex: 0,
    pageSize: 0,
    pageCount: 0,
    data: [],
  });


  useEffect(() => {
    const getListaPersonas = async () => {
      const response = await getPersonas();
      setPaginadorPersonas(response);
    };
    getListaPersonas();
  }, []);

  const editarPersona=(id)=>{
    props.history.push("/editarpersona/"+id)
    }

  const clases = misEstilos();

  if (!paginadorPersonas.data) {
   
    return null;
  }
  return (
    <Container>
      <Typography variant="h4" className={clases.titulovista}>
            Personas
      </Typography>
      <Grid container spacing={4}>
        {paginadorPersonas.data.map((data) => (

          <Grid item lg={3} md={4} sm={6} xs={12} key={data.id}>
            <Card>
              <CardMedia
                image="https://c.pxhere.com/photos/ec/c9/males_3d_model_isolated_3d_model_full_body_white_free_image-1393520.jpg!d"
                title="Personas"
                className={clases.media}>

                <Avatar variant="square" className={clases.sueldo}>
                  ${data.sueldo}
                </Avatar>
              </CardMedia>
              <CardContent>
                <Typography variant="h6" className={clases.nombre}>
                  {data.nombre} {data.apellido}
                </Typography>
                <Button variant="contained" color="primary" onClick={()=>editarPersona(data.id)} fullWidth >
                  Mas Detalles
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};
export default Personas;
