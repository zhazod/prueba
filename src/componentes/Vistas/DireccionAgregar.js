import React from "react";
import {TextField, Container, Grid, Typography, Button, Avatar,Select, FormControl, InputLabel, MenuItem} from '@material-ui/core';
import misEstilos from "../../estilos/misestilos";
import ImageUploader from 'react-images-upload';
import {agregarDireccion} from '../../Acciones/DireccionAcciones';
import {v4 as uuidv4} from 'uuid';

const DireccionAgregar = () =>{
    const [direccion,setDireccion] = React.useState({

        id:0,
        numero:'',
        calle:'',
        ciudad:'',
        imagen:'',
        file: '',
    });

    const [persona, setPersona] = React.useState("");
    const handlePersonaChange=(event) =>{
        setDireccion(event.target.value); 
    }

    const guardarDireccion = async ()=>{
        persona.personaId=direccion;
        const resultado=await agregarDireccion(direccion);
        console.log('Resultado de guardar una direccion', resultado);
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
                        Agregar Direccion
                    </Typography>

                    <form className={clases.form} onSubmit={(e)=>e.preventDefault()}>


                        <TextField label="Numero" variant="outlined" className={clases.gridmb} fullWidth InputLabelProps={{shrink:true,}}
                        name="numero" value={direccion.numero} onChange={handleChange}/>
                        
                        <TextField label="Calle" variant="outlined" className={clases.gridmb} fullWidth InputLabelProps={{shrink:true,}}
                        name="calle" value={direccion.calle} onChange={handleChange}/>
                        
                        <TextField label="Ciudad" variant="outlined" className={clases.gridmb} fullWidth InputLabelProps={{shrink:true,}}
                        name="ciudad" value={direccion.ciudad} onChange={handleChange}/>
                        
                        
                        <FormControl className={clases.formControl} fullWidth>
                            <InputLabel id="marca-select-label">Persona</InputLabel>
                            <Select labelId="marca-select-label" id="marcaselect" value={direccion} onChange={handlePersonaChange}>
                                <MenuItem value={1}>Persona Espacial</MenuItem>
                                <MenuItem value={2}>Persona Internacional</MenuItem>
                                <MenuItem value={3}>Persona Local</MenuItem>
                            </Select>
                        </FormControl>

                        <Grid item sm={6} xs={12}>
                        <ImageUploader withIcon={true} buttonText="Seleccionar Imagen" imgExtension={['.jpg','.jpeg','.gif','.png']}
                        singleImage={true} key={KeyImage} maxFileSize={5242880} onChange={subirImagen}/>{/* En byte en este caso son 5 mb 10*1024*1024 */}
                        </Grid>
                        
                        <Grid item sm={6} xs={12}>
                                    <Avatar variant="square" className={clases.avatarDireccion}/>
                        </Grid>

                        <Button varian="contained" color="primary" onClick={guardarDireccion}>
                            Agregar
                        </Button>
                    </form>
                </Grid>
            </Grid>
        </Container>

    );
};

export default DireccionAgregar;