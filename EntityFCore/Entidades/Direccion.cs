﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EntityFCore.Entidades
{
    public class Direccion : BaseEntidades
    {

        public int Numero { get; set; }
        public string Calle { get; set; }

        public string Ciudad { get; set; }

        
    }
}
