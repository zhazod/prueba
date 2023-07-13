import {Container,Grid,Typography,Card, CardMedia,  CardContent, Button,} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { getDirecciones } from '../../Acciones/DireccionAcciones';
import misEstilos from '../../estilos/misestilos';  

const Direcciones = (props) => {

  const [paginadorDirecciones, setPaginadorDirecciones] = useState({
    count: 0,
    pageIndex: 0,
    pageSize: 0,
    pageCount: 0,
    data: [],
  });


  useEffect(() => {
    const getListaDirecciones = async () => {
      const response = await getDirecciones();
      setPaginadorDirecciones(response);
    };
    getListaDirecciones();
  }, []);

  const editarDireccion=(id)=>{
    props.history.push("/editardireccion/"+id)
    }

  const clases = misEstilos();

  if (!paginadorDirecciones.data) {
   
    return null;
  }
  return (
    <Container>
      <Typography variant="h4" className={clases.titulovista}>
            Personas
      </Typography>
      <Grid container spacing={4}>
        {paginadorDirecciones.data.map((data) => (

          <Grid item lg={3} md={4} sm={6} xs={12} key={data.id}>
            <Card>
              <CardMedia
                image="https://c.pxhere.com/photos/ec/c9/males_3d_model_isolated_3d_model_full_body_white_free_image-1393520.jpg!d"
                title="Personas"
                className={clases.media}>

              </CardMedia>
              <CardContent>
                <Typography variant="h6" className={clases.nombre}>
                  {data.nombre} {data.apellido}
                </Typography>
                <Button variant="contained" color="primary" onClick={()=>editarDireccion(data.id)} fullWidth >
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
export default Direcciones;
