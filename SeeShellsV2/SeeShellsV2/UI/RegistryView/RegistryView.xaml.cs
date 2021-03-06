﻿using System;
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
    public interface IRegistryViewVM : IViewModel
    {
        ISelected Selected { get; }
        IShellItemCollection ShellItems { get; }
    }

    /// <summary>
    /// Interaction logic for InspectorView.xaml
    /// </summary>
    public partial class RegistryView : UserControl
    {
        [Dependency]
        public IRegistryViewVM ViewModel { set => DataContext = value; get => DataContext as IRegistryViewVM; }
        public RegistryView()
        {
            InitializeComponent();
        }

        private void MenuItem_Click(object sender, RoutedEventArgs e)
        {
            ViewModel.Selected.CurrentEnumerable = (sender as FrameworkElement).Tag as IEnumerable<object>;
            ViewModel.Selected.Current = (sender as FrameworkElement).DataContext;
        }
    }
}
