using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EntityFCore.Entidades
{
    public class Persona : BaseEntidades
    {
        public string Rut { get; set; }
        public string Nombre { get; set; }
        public string Apellido { get; set; }
        public string Correo { get; set; }
        public int Sueldo { get; set; }
        public string Imagen { get; set; }



        public int DireccionId { get; set; }//Esto representa una clave foránea
        public Direccion? Direccion { get; set; }//creará la relación con la tabla Afp
    }
}
