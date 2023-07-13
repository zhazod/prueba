import { Button, Container, Grid,Typography,Icon,TableContainer,Table,TableHead,TableRow,TableCell,TableBody } from '@material-ui/core';
import React, {useEffect, useState} from 'react';
import { borrarPersona, getPersonas } from '../../Acciones/PersonaAcciones'
import misEstilos from '../../estilos/misestilos';



const PersonasListar = (props) =>{
    const clases=misEstilos();

const AgregarPersonas =()=>{
    props.history.push("/agregarpersonas")
}
const editarPersonas =(id)=>{
    props.history.push("/editarpersonas/"+id)
}

const eliminarPersonas=async (id)=>{
    const resultado=await borrarPersona(id);
    props.history.push('/');
    }

const [paginadorPersonas,setPaginadorPersonas]=useState({
    ount:0,
    pageIndex:0,
    pageSize:0,
    pageCount:0,
    data:[]
});

useEffect(()=>{
    const getListarPersonas = async()=>{
        const response=await getPersonas();
        setPaginadorPersonas(response)
    }
    getListarPersonas();
},[])

if(!paginadorPersonas.data){
    return null;
}

return(
    <Container>
        <Grid container>
            <Grid item lg={6} sm={6} xs={12}>
                <Typography variant='h4' className='{clases.titulovista}'>
                    Personas
                </Typography>
            </Grid>
            <Grid item lg={6} sm={6} xs={12}>
                <Button variant="contained" onClick={AgregarPersonas} color='inherit' className={clases.buttonAgregar}>
                    <Icon>Add</Icon>
                        Agregar Persona
                </Button>
            </Grid>
        </Grid>
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                    <TableCell>Id</TableCell>
                    <TableCell>R.U.T.</TableCell>
                    <TableCell>Nombre</TableCell>
                    <TableCell>Apellido</TableCell>
                    <TableCell>Correo</TableCell>
                    <TableCell>Sueldo</TableCell>
                    <TableCell>Direccion</TableCell>
                    <TableCell></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {paginadorPersonas.data.map((persona)=>(
                        <TableRow key={persona.id}>
                            <TableCell>{persona.id}</TableCell>
                            <TableCell>{persona.rut}</TableCell>
                            <TableCell>{persona.nombre}</TableCell>
                            <TableCell>{persona.apellido}</TableCell>
                            <TableCell>{persona.correo}</TableCell>
                            <TableCell>{persona.sueldo}</TableCell>
                            <TableCell>{persona.direccion.nombre}</TableCell>
                            <TableCell>
                                <Button variant='contained' color='primary' onClick={()=>editarPersonas(persona.id)}>
                                    <Icon>Edit</Icon>
                                </Button>
                                <Button variant="contained" color="secondary" onClick={()=>eliminarPersonas(persona.id)}>
                                <Icon>delete</Icon>
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    </Container>
    );
};

export default PersonasListar;