import { Button, Container, Grid,Typography,Icon,TableContainer,Table,TableHead,TableRow,TableCell,TableBody } from '@material-ui/core';
import React, {useEffect, useState} from 'react';
import { borrarDireccion, getDirecciones } from '../../Acciones/DireccionAcciones';
import misEstilos from '../../estilos/misestilos';



const DireccionesListar = (props) =>{
    const clases=misEstilos();

const AgregarDirecciones =()=>{
    props.history.push("/agregardirecciones")
}
const editarDirecciones =(id)=>{
    props.history.push("/editardirecciones/"+id)
}

const eliminarDirecciones=async (id)=>{
    const resultado=await borrarDireccion(id);
    props.history.push('/');
    }

const [paginadorDirecciones,setPaginadorDirecciones]=useState({
    ount:0,
    pageIndex:0,
    pageSize:0,
    pageCount:0,
    data:[]
});

useEffect(()=>{
    const getListarDirecciones = async()=>{
        const response=await getDirecciones();
        setPaginadorDirecciones(response)
    }
    getListarDirecciones();
},[])

if(!paginadorDirecciones.data){
    return null;
}

return(
    <Container>
        <Grid container>
            <Grid item lg={6} sm={6} xs={12}>
                <Typography variant='h4' className='{clases.titulovista}'>
                    Direcciones
                </Typography>
            </Grid>
            <Grid item lg={6} sm={6} xs={12}>
                <Button variant="contained" onClick={AgregarDirecciones} color='inherit' className={clases.buttonAgregar}>
                    <Icon>Add</Icon>
                        Agregar Direccion
                </Button>
            </Grid>
        </Grid>
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                    <TableCell>Id</TableCell>
                    <TableCell>Numero</TableCell>
                    <TableCell>Calle</TableCell>
                    <TableCell>Ciudad</TableCell>
                    <TableCell>Persona</TableCell>
                    <TableCell></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {paginadorDirecciones.data.map((direccion)=>(
                        <TableRow key={direccion.id}>
                            <TableCell>{direccion.id}</TableCell>
                            <TableCell>{direccion.numero}</TableCell>
                            <TableCell>{direccion.calle}</TableCell>
                            <TableCell>{direccion.ciudad}</TableCell>
                            <TableCell>{direccion.persona.nombre}</TableCell>
                            <TableCell>
                                <Button variant='contained' color='primary' onClick={()=>editarDirecciones(direccion.id)}>
                                    <Icon>Edit</Icon>
                                </Button>
                                <Button variant="contained" color="secondary" onClick={()=>eliminarDirecciones(direccion.id)}>
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

export default DireccionesListar;