import React, { useEffect, useState } from "react";
import {
  TextField,
  Container,
  Grid,
  Typography,
  Button,
  Avatar,
  Select,
  FormControl,
  InputLabel,
  MenuItem,
} from "@material-ui/core";
import misEstilos from "../../estilos/misestilos";
import ImageUploader from "react-images-upload";
import {actualizarDireccion, getDireccion,} from "../../Acciones/DireccionAcciones"; 
import { v4 as uuidv4 } from "uuid";
const DireccionesEditar = (props) => {
  //para obtener por ejemplo los valores por url usamos props

  const [persona, setPersona] = React.useState("");
  const handleDireccionChange = (event) => {
    setDireccion(event.target.value); //guarda el valor actual del combo seleccionado
  };

  const [direccion, setDireccion] = useState({
    id: 0,
    numero: "",
    calle: "",
    ciudad: "",
    personaId: 0,
 
  });
  const handleChange = (e) => {
    const { name, value } = e.target; //detectar los campos que cambian y los guarde arriba en los datos del trabajador;
    setDireccion((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const subirImagen = (imagenes) => {
    //para agregarlas al array de mas arriba
    let img1 = imagenes[0];
    let imgUrl = "";
    try {
      imgUrl = URL.createObjectURL(img1);
    } catch (e) {
      console.log(e);
    }
    setDireccion((prev) => ({
      ...prev, //mantenga las anteriores
      file: img1, //actualiza el valor con el nuevo de la caja
      imagenTemp: imgUrl, //para que cuando cargue una imagen nueva se vea la vista previa
    }));
  };
  useEffect(() => {
    const id = props.match.params.id; //capturamos el id de la url
    const getDireccionAsync = async () => {
      const response = await getPersona(id);
      setDireccion(response.data);
      setPersona(response.data.personaid);
    };
    getDireccionAsync();
  }, []); //el parentecis cuadrado es para que se ejecute una sola vez, de lo contrario se ejecuta la llamada al servidor de forma infinita
  const guardarDireccion = async () => {
    direccion.personaId = persona;
    const id = props.match.params.id; //capturamos el id de la url
    const resultado = await actualizarDireccion(id, direccion);
    console.log(resultado); //si se quiere ver el resultado en la consola del navegador
    props.history.push("/listardirecciones");
  };
  const keyImage = uuidv4(); //para generar número aleatorios
  const clases = misEstilos();
  return (
    <Container className={clases.containermt}>
      <Grid container justifyContent="center">
        <Grid item sm={6} xs={12}>
          <Typography variant="h4" className={clases.titulovista}>
            Editar Direccion
          </Typography>
          <form
            className={clases.form}
            onSubmit={(e) => e.preventDefault()} /*para que no recargue*/
          >
            <TextField
              label="Numero."
              variant="outlined"
              className={clases.gridmb}
              fullWidth
              InputLab
              elProps={{ shrink: true }}
              value={direccion.numero}
              name="numero"
              onChange={handleChange}
            />
            <TextField
              label="Calle"
              variant="outlined"
              className={clases.gridmb}
              fullWidth
              InputLa
              belProps={{ shrink: true }}
              value={direccion.calle}
              name="calle"
              onChange={handleChange}
            />
            <TextField
              label="Ciudad"
              variant="outlined"
              className={clases.gridmb}
              fullWidth
              InputLabe
              lProps={{ shrink: true }}
              value={direccion.ciudad}
              name="ciudad"
              onChange={handleChange}
            />

            <FormControl className={clases.formControl} fullWidth>
              <InputLabel id="marca-select-label">persona</InputLabel>
              <Select
                labelId="marca-select-label"
                id="marcaselect"
                value={direccion}
                onChange={handleDireccionChange}
              >
                {console.log(direccion)}
                <MenuItem value={1}>Direccion Espacial</MenuItem>
                <MenuItem value={2}>Direccion Internacional</MenuItem>
                <MenuItem value={7}>Direccion Local</MenuItem>
              </Select>
            </FormControl>
            <Button
              variant="contained"
              color="primary"
              onClick={guardarPersona}
            >
              Actualizar
            </Button>
          </form>
        </Grid>
      </Grid>
    </Container>
  );
};
export default PersonasEditar;
