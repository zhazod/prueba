import HttpCliente from "../servicios/HttpCliente";
import { uploadImage } from "../firebase";



export const actualizarDireccion= async (id, direccion) => {
  console.log('datos de la direccion:', direccion);
  if (direccion.file) {
    const urlImage = await uploadImage(direccion.file);
    direccion.imagen = urlImage;
  }

  return new Promise((resolve, eject) => {
    delete direccion.persona;//modificauu pueder errroir
    HttpCliente.put(`/api/direccion/${id}`, direccion)
      .then((response) => {
        resolve(response);
      }) //respuesta del servidor
      .catch((error) => {
        resolve(error.response);
      });
  });
};


export const agregarDireccion = async (direccion) => {
  if (direccion.file) {
    const urlImage = await uploadImage(direccion.file);
    direccion.imagen = urlImage;
  }
  return new Promise((resolve, eject) => {
    HttpCliente.post("/api/direccion", direccion)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        resolve(error.response);
      });
  });
};


export const getDirecciones = () => {
  return new Promise((resolve, eject) => {
    HttpCliente.get("/api/direccion").then((response) => {
      resolve(response);
    });
  });
};
/*
el response responde propiedades como
 count:
 pageIndex:
 pageSize:
 pageCount:
 data:
*/
export const getDireccion = (id) => {
  return new Promise((resolve, eject) => {
    HttpCliente.get(`/api/direccion/${id}`)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        resolve(error.response);
      });
  });
};

export const borrarDireccion=async (id)=>{
  return new Promise((resolve,eject)=>{
  HttpCliente.delete(`/api/direccion/${id}`)
  .then(response =>{
  resolve(response);
  })
  .catch(error=>{
  resolve(error.response);
  });
  });
 }

