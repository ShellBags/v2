﻿using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;

using SeeShellsV2.Data;
using SeeShellsV2.Utilities;

namespace SeeShellsV2.Repositories
{
    public class ShellItemCollection : ObservableSortedList<IShellItem>, IShellItemCollection
    {
        public ObservableCollection<RegistryShellbagRoot> RegistryRoots { get; init; }

        public ShellItemCollection() : base(new ShellItemComparer())
        {
            RegistryRoots = new ObservableCollection<RegistryShellbagRoot>();
        }
    }

    internal class ShellItemComparer : IComparer<IShellItem>
    {
        public int Compare(IShellItem a, IShellItem b)
        {
            return a.Type <= b.Type ? -1 : 1;
        }
    }
}
