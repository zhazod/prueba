using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EntityFCore.Entidades
{
    public class BaseEntidades
    {
        [Key]
        public int Id { get; set; }
    }
}
