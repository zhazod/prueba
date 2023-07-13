import HttpCliente from "../servicios/HttpCliente";
import { uploadImage } from "../firebase";


export const actualizarPersona= async (id, persona) => {
  console.log('datos de la persona:', persona);
  if (persona.file) {
    const urlImage = await uploadImage(persona.file);
    persona.imagen = urlImage;
  }

  return new Promise((resolve, eject) => {
    delete persona.direccion;//modificauu
    HttpCliente.put(`/api/persona/${id}`, persona)
      .then((response) => {
        resolve(response);
      }) //respuesta del servidor
      .catch((error) => {
        resolve(error.response);
      });
  });
};


export const agregarPersona = async (persona) => {
  if (persona.file) {
    const urlImage = await uploadImage(persona.file);
    persona.imagen = urlImage;
  }
  return new Promise((resolve, eject) => {
    HttpCliente.post("/api/persona", persona)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        resolve(error.response);
      });
  });
};


export const getPersonas = () => {
  return new Promise((resolve, eject) => {
    HttpCliente.get("/api/persona").then((response) => {
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
export const getPersona = (id) => {
  return new Promise((resolve, eject) => {
    HttpCliente.get(`/api/persona/${id}`)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        resolve(error.response);
      });
  });
};

export const borrarPersona=async (id)=>{
  return new Promise((resolve,eject)=>{
  HttpCliente.delete(`/api/persona/${id}`)
  .then(response =>{
  resolve(response);
  })
  .catch(error=>{
  resolve(error.response);
  });
  });
 }

