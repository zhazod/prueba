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
import {actualizarPersona, getPersona,} from "../../Acciones/PersonaAcciones";
import { v4 as uuidv4 } from "uuid";
const PersonasEditar = (props) => {
  //para obtener por ejemplo los valores por url usamos props

  const [direccion, setDireccion] = React.useState("");
  const handleDireccionChange = (event) => {
    setDireccion(event.target.value); //guarda el valor actual del combo seleccionado
  };

  const [persona, setPersona] = useState({
    id: 0,
    rut: "",
    nombre: "",
    apellido: "",
    correo: "",
    sueldo: 0,
    imagen: "",
    file: "",
    direccionId: 0,
    imagenTemp: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target; //detectar los campos que cambian y los guarde arriba en los datos del trabajador;
    setPersona((prev) => ({
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
    setPersona((prev) => ({
      ...prev, //mantenga las anteriores
      file: img1, //actualiza el valor con el nuevo de la caja
      imagenTemp: imgUrl, //para que cuando cargue una imagen nueva se vea la vista previa
    }));
  };
  useEffect(() => {
    const id = props.match.params.id; //capturamos el id de la url
    const getPersonaAsync = async () => {
      const response = await getPersona(id);
      setPersona(response.data);
      setDireccion(response.data.direccionId);
    };
    getPersonaAsync();
  }, []); //el parentecis cuadrado es para que se ejecute una sola vez, de lo contrario se ejecuta la llamada al servidor de forma infinita
  const guardarPersona = async () => {
    persona.direccionId = direccion;
    const id = props.match.params.id; //capturamos el id de la url
    const resultado = await actualizarPersona(id, persona);
    console.log(resultado); //si se quiere ver el resultado en la consola del navegador
    props.history.push("/listarpersonas");
  };
  const keyImage = uuidv4(); //para generar número aleatorios
  const clases = misEstilos();
  return (
    <Container className={clases.containermt}>
      <Grid container justifyContent="center">
        <Grid item sm={6} xs={12}>
          <Typography variant="h4" className={clases.titulovista}>
            Editar Persona
          </Typography>
          <form
            className={clases.form}
            onSubmit={(e) => e.preventDefault()} /*para que no recargue*/
          >
            <TextField
              label="R.U.T."
              variant="outlined"
              className={clases.gridmb}
              fullWidth
              InputLabe
              lProps={{ shrink: true }}
              value={persona.rut}
              name="rut"
              onChange={handleChange}
            />
            <TextField
              label="Nombre."
              variant="outlined"
              className={clases.gridmb}
              fullWidth
              InputLab
              elProps={{ shrink: true }}
              value={persona.nombre}
              name="nombre"
              onChange={handleChange}
            />
            <TextField
              label="Apellido"
              variant="outlined"
              className={clases.gridmb}
              fullWidth
              InputLa
              belProps={{ shrink: true }}
              value={persona.apellido}
              name="apellido"
              onChange={handleChange}
            />
            <TextField
              label="Correo"
              variant="outlined"
              className={clases.gridmb}
              fullWidth
              InputLabe
              lProps={{ shrink: true }}
              value={persona.correo}
              name="correo"
              onChange={handleChange}
            />
            <TextField
              label="Sueldo"
              variant="outlined"
              className={clases.gridmb}
              fullWidth
              InputLabe
              lProps={{ shrink: true }}
              value={persona.sueldo}
              name="sueldo"
              onChange={handleChange}
            />
            <FormControl className={clases.formControl} fullWidth>
              <InputLabel id="marca-select-label">Direccion</InputLabel>
              <Select
                labelId="marca-select-label"
                id="marcaselect"
                value={direccion}
                onChange={handleDireccionChange}
              >
                {console.log(direccion)}
                <MenuItem value={1}>Direccion Espacial</MenuItem>
                <MenuItem value={5}>Direccion Internacional</MenuItem>
                <MenuItem value={7}>Direccion Local</MenuItem>
              </Select>
            </FormControl>
            <Grid container spacing={2}>
              <Grid item sm={6} xs={12}>
                <ImageUploader
                  withIcon={true}
                  buttonText="Seleccionar Imagen"
                  imgExtension={[".jpg", ".jpeg", ".gif", ".png"]}
                  maxFileSize={5242880}
                  singleImage={true}
                  key={keyImage}
                  onChange={subirImagen}
                />
                {/* En byte en este caso son 5 mb 10*1024*1024 */}
              </Grid>
              <Grid item sm={6} xs={12}>
                <Avatar
                  variant="square"
                  className={clases.avatarPersona}
                  src={persona.imagenTemp? persona.imagenTemp: persona.imagen}/>
                {/* Si la imágen temporal no existe entonces muestra la de la bd */}
              </Grid>
            </Grid>
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
