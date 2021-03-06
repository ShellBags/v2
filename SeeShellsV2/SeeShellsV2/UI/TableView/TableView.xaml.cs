﻿using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Navigation;
using System.Windows.Shapes;

using Unity;

using SeeShellsV2.Data;
using SeeShellsV2.Repositories;

namespace SeeShellsV2.UI
{
    public interface ITableViewVM : IViewModel
    {
        ISelected Selected { get; }
    }

    /// <summary>
    /// Interaction logic for TableView.xaml
    /// </summary>
    public partial class TableView : UserControl
    {
        [Dependency]
        public ITableViewVM ViewModel
        {
            get => DataContext as ITableViewVM;
            set => DataContext = value;
        }

        public TableView()
        {
            InitializeComponent();
        }

        private void DataGrid_SelectedCellsChanged(object sender, SelectedCellsChangedEventArgs e)
        {
            ViewModel.Selected.Current = e.AddedCells.Count > 0 ? e.AddedCells[0].Item : null;
        }
    }
}
