using EntityFCore.Entidades;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EntityFCore.Interfaces
{
    public interface IPersona
    {

        Task<Persona> GetPersonaById(int id); //Task por que sera un metodo asincrono
        //recibira el ida del trabajador solicitado
        Task<IReadOnlyList<Persona>> GetPersonas(); //IReadOnlyList hace una lista no modificable]

        Task<int> Add(Persona persona);

        Task<int> Update(Persona persona);

        Task<int> Delete(Persona persona);
    }
}
