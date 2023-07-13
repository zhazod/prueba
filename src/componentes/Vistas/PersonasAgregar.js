import React from "react";
import {TextField, Container, Grid, Typography, Button, Avatar,Select, FormControl, InputLabel, MenuItem} from '@material-ui/core';
import misEstilos from "../../estilos/misestilos";
import ImageUploader from 'react-images-upload';
import {agregarPersona} from '../../Acciones/PersonaAcciones';
import {v4 as uuidv4} from 'uuid';

const PersonasAgregar = () =>{
    const [persona,setPersona] = React.useState({

        id:0,
        rut:'',
        nombre:'',
        apellido:'',
        correo:'',
        sueldo:0, 
        imagen:'',
        file: '',
        direccionId:0,
    });

    const [direccion, setDireccion] = React.useState("");
    const handleDireccionChange=(event) =>{
        setDireccion(event.target.value); 
    }

    const guardarPersona = async ()=>{
        persona.direccionId=direccion;
        const resultado=await agregarPersona(persona);
        console.log('Resultado de guardar una persona', resultado);
    }

    const handleChange=(e)=>{
        const {name,value}=e.target;
        setPersona(prev=>({
            ...prev,
            [name]:value
        }))
    }

    const subirImagen=imagenes=>{
        const img1=imagenes[0];
        setPersona  (prev=>({
            ...prev,
            file:img1
        }))
    }

    const clases = misEstilos();
    const KeyImage=uuidv4();

    

    return(

        <Container className={clases.containermt}>

            <Grid container justifyContent="center">
                <Grid item sm={6} xs={12}>
                    <Typography variant="h4" className="{clases.titulovista}">
                        Agregar Persona
                    </Typography>

                    <form className={clases.form} onSubmit={(e)=>e.preventDefault()}>

                        <TextField label="R.U.T." variant="outlined" className={clases.gridmb}fullWidth InputLabelProps={{shrink:true,}}
                        name="rut" value={persona.rut} onChange={handleChange}/>

                        <TextField label="Nombre" variant="outlined" className={clases.gridmb} fullWidth InputLabelProps={{shrink:true,}}
                        name="nombre" value={persona.nombre} onChange={handleChange}/>
                        
                        <TextField label="Apellido" variant="outlined" className={clases.gridmb} fullWidth InputLabelProps={{shrink:true,}}
                        name="apellido" value={persona.apellido} onChange={handleChange}/>
                        
                        <TextField label="Correo" variant="outlined" className={clases.gridmb} fullWidth InputLabelProps={{shrink:true,}}
                        name="correo" value={persona.correo} onChange={handleChange}/>
                        
                        <TextField label="Sueldo" variant="outlined" className={clases.gridmb} fullWidth InputLabelProps={{shrink:true,}}
                        name="sueldo" value={persona.sueldo} onChange={handleChange}/>

                        
                        <FormControl className={clases.formControl} fullWidth>
                            <InputLabel id="marca-select-label">Direccion</InputLabel>
                            <Select labelId="marca-select-label" id="marcaselect" value={direccion} onChange={handleDireccionChange}>
                                <MenuItem value={1}>Direccion Espacial</MenuItem>
                                <MenuItem value={5}>Direccion Internacional</MenuItem>
                                <MenuItem value={7}>Direccion Local</MenuItem>
                            </Select>
                        </FormControl>

                        <Grid item sm={6} xs={12}>
                        <ImageUploader withIcon={true} buttonText="Seleccionar Imagen" imgExtension={['.jpg','.jpeg','.gif','.png']}
                        singleImage={true} key={KeyImage} maxFileSize={5242880} onChange={subirImagen}/>{/* En byte en este caso son 5 mb 10*1024*1024 */}
                        </Grid>
                        
                        <Grid item sm={6} xs={12}>
                                    <Avatar variant="square" className={clases.avatarPersona}/>
                        </Grid>

                        <Button varian="contained" color="primary" onClick={guardarPersona}>
                            Agregar
                        </Button>
                    </form>
                </Grid>
            </Grid>
        </Container>

    );
};

export default PersonasAgregar;