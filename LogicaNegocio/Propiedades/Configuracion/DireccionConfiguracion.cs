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
    public class DireccionConfiguracion : IEntityTypeConfiguration<Direccion>
    {
        public void Configure(EntityTypeBuilder<Direccion> builder)
        {
            builder.Property(p => p.Numero).IsRequired().HasMaxLength(250);
            builder.Property(p => p.Calle).IsRequired().HasMaxLength(13);
            builder.Property(p => p.Ciudad).IsRequired().HasMaxLength(50);
        }
    }
}
