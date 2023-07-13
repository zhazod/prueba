using EntityFCore.Entidades;
using EntityFCore.Interfaces;
using LogicaNegocio.Propiedades;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LogicaNegocio.Logica
{
    public class PersonaL : IPersona
    {

        private MyDbContext _context;

        public PersonaL(MyDbContext context)
        {
            _context = context;
        }

        public async Task<Persona> GetPersonaById(int id) //metodo async 
        {
            return await _context.Persona.Include(t => t.Direccion).FirstOrDefaultAsync(t => t.Id == id);   //Agregamos await ya que sera asincronico , devolvera de la tabla trabajador el que coincida con el id enviado por parametro


        }

        public async Task<IReadOnlyList<Persona>> GetPersonas()
        {
            return await _context.Persona.Include(t => t.Direccion).ToListAsync();
        }








        public async Task<int> Add(Persona persona)
        {
            _context.Set<Persona>().Add(persona);
            return await _context.SaveChangesAsync();
        }

        public async Task<int> Update(Persona persona)
        {
            _context.Set<Persona>().Attach(persona);
            _context.Entry(persona).State = EntityState.Modified;
            return await _context.SaveChangesAsync();
        }

        public async Task<int> Delete(Persona persona)
        {
            _context.Entry(persona).State = EntityState.Deleted;
            return await _context.SaveChangesAsync();
        }



    }
}
