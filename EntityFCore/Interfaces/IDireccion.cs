using EntityFCore.Entidades;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EntityFCore.Interfaces
{
    public interface IDireccion
    {
        Task<Direccion> GetDireccionById(int id); //Task por que sera un metodo asincrono
        //recibira el ida del trabajador solicitado
        Task<IReadOnlyList<Direccion>> GetDirecciones(); //IReadOnlyList hace una lista no modificable]

        Task<int> Add(Direccion direccion);

        Task<int> Update(Direccion direccion);

        Task<int> Delete(Direccion direccion);

    }
}
