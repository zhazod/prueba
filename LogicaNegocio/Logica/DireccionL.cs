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
    public class DireccionL : IDireccion
    {

        private MyDbContext _context;

        public DireccionL(MyDbContext context)
        {
            _context = context;
        }
        public async Task<Direccion> GetDireccionById(int id)
        {
            return await _context.Direccion.FirstOrDefaultAsync(t=>t.Id==id); 
        }

        public async Task<IReadOnlyList<Direccion>> GetDirecciones()
        {
            return await _context.Direccion.ToListAsync();
        }


        public async Task<int> Add(Direccion direccion)
        {
            _context.Set<Direccion>().Add(direccion);
            return await _context.SaveChangesAsync();
        }

        public async Task<int> Update(Direccion direccion)
        {
            _context.Set<Direccion>().Attach(direccion);
            _context.Entry(direccion).State = EntityState.Modified;
            return await _context.SaveChangesAsync();
        }

        public async Task<int> Delete(Direccion direccion)
        {
            _context.Entry(direccion).State = EntityState.Deleted;
            return await _context.SaveChangesAsync();
        }
    }
}
