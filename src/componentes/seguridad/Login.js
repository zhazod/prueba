import {Avatar,Button,Container,Grid,Icon,Card,TextField,Typography,} from "@material-ui/core";
import React from "react";


const Login = () => {
  return (
    <Container> {/* para centrar el contenido horizontalmente https://v4.mui.com/components/container/*/}
      <Grid container justifyContent="center">{ /* Tabla responsiva https://v4.mui.com/components/grid/ */}
        <Grid item lg={5} md={6}>
          <Card align="center">{/* contenedor de contenido específico https://v4.mui.com/components/cards/ */}
            <Avatar>  {/* https://v4.mui.com/components/avatars/ */}
              <Icon>persona</Icon>
            </Avatar>
            <Typography variant="h5" color="primary">
              Ingrese Usuario
            </Typography>
            <form>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    label="Correo"
                    variant="outlined"
                    fullWidth
                    type="email"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Contraseña"
                    variant="outlined"
                    fullWidth
                    type="password"
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button variant="contained" fullWidth color="primary">
                    Ingresar
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};
export default Login;
