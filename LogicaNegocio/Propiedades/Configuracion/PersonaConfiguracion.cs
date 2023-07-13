using EntityFCore.Entidades;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LogicaNegocio.Propiedades.Configuracion
{
    public class PersonaConfiguracion : IEntityTypeConfiguration<Persona>
    {
        public void Configure(EntityTypeBuilder<Persona> builder)
        {

            builder.Property(p => p.Nombre).IsRequired().HasMaxLength(250); //hacemos obligatorio el ingreso de un nombre y
                                                                            //maximo 250 caracteres

            builder.Property(p => p.Apellido).HasMaxLength(250);


            builder.Property(p => p.Correo).IsRequired().HasMaxLength(250);


            builder.Property(p => p.Sueldo).IsRequired().HasMaxLength(250);


            builder.Property(p => p.Imagen).HasMaxLength(1000);


            builder.HasOne(a => a.Direccion).WithMany().HasForeignKey(p => p.DireccionId);


        }
    }
}
