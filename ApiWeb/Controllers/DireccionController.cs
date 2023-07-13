using EntityFCore.Entidades;
using EntityFCore.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace ApiWeb.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DireccionController : ControllerBase
    {

        private readonly IDireccion _direccionL;//creamos una variable privada que representa a nuestra  interfaz de persona para utilizar sus metodos

        public DireccionController(IDireccion direccionL) //lo cargamos en el constructor
        {
            _direccionL = direccionL;//asignamo el objeto que recibimos por paramtros a nuestro objeto local 
        }

        [HttpGet] //como se recibe la peticion desde el cliente

        public async Task<ActionResult<List<Direccion>>> GetDirecciones()
        {
            var direcciones = await _direccionL.GetDirecciones();
            return Ok(direcciones); //El OK responde exitosamente una lsita a nivel web, en este caso el Listado con codigo 200( Todo Ok)
        }
        [HttpGet("{id}")]

        public async Task<ActionResult<Direccion>> GetDireccion(int id)
        {
            return await _direccionL.GetDireccionById(id);
        }


        [HttpPost]
        public async Task<ActionResult<Direccion>> AddDireccion(Direccion direccion)
        {
            var resultado = await _direccionL.Add(direccion);

            if (resultado == 0)

            {
                throw new Exception("direccion no agregado.");


            }

            return Ok(direccion); //devuelve el trabajador con la id que asigno
        }

        [HttpPut("{id}")]//

        public async Task<ActionResult<Direccion>> UpdateDireccion(int id, Direccion direccion)
        {
            direccion.Id = id;
            var resultado = await _direccionL.Update(direccion);

            if (resultado == 0)

            {
                throw new Exception("no se actualizo la direccion");


            }
            return Ok(direccion);
        }


        [HttpDelete("{id}")]

        public async Task<ActionResult<Direccion>> Delete(int id)
        {
            Direccion direccion = new Direccion();
            direccion.Id = id;
            var resultado = await _direccionL.Delete(direccion);
            if (resultado == 0)

            {
                throw new Exception("no se eliminino la persona");
            }

            return Ok();


        }
    }
}
