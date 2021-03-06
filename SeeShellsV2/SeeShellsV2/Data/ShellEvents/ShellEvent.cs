﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SeeShellsV2.Data
{
    public class ShellEvent : IShellEvent
    {
        public string TypeName { get; init; }
        public string Description { get; init; }
        public DateTime TimeStamp { get; init; }
        public User User { get; init; }
        public Place Place { get; init; }
        public IEnumerable<IShellItem> Evidence { get; init; }
    }
}
