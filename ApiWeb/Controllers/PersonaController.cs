using EntityFCore.Entidades;
using EntityFCore.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace ApiWeb.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PersonaController : ControllerBase
    {

        private readonly IPersona _personaL;

        public PersonaController(IPersona personaL) 
        {
            _personaL = personaL;
        }

        [HttpGet] 

        public async Task<ActionResult<List<Persona>>> GetPersonas()
        {
            var personas = await _personaL.GetPersonas();
            return Ok(personas); 
        }
        [HttpGet("{id}")]

        public async Task<ActionResult<Persona>> GetPersona(int id)
        {
            return await _personaL.GetPersonaById(id);
        }






        [HttpPost]
        public async Task<ActionResult<Persona>> AddPersona(Persona persona)
        {
            var resultado = await _personaL.Add(persona);

            if (resultado == 0)

            {
                throw new Exception("persona no agregado.");


            }

            return Ok(persona); //devuelve el trabajador con la id que asigno
        }

        [HttpPut("{id}")]//

        public async Task<ActionResult<Persona>> UpdatePersona(int id, Persona persona)
        {
            persona.Id = id;
            var resultado = await _personaL.Update(persona);

            if (resultado == 0)

            {
                throw new Exception("no se actualizo la persona");


            }
            return Ok(persona);
        }


        [HttpDelete("{id}")]

        public async Task<ActionResult<Persona>> Delete(int id)
        {
            Persona persona = new Persona();
            persona.Id = id;
            var resultado = await _personaL.Delete(persona);
            if (resultado == 0)

            {
                throw new Exception("no se eliminino la persona");
            }

            return Ok();



        }
    }
}
