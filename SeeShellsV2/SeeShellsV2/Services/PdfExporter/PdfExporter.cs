using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using Unity;
using PdfSharp;
using MigraDoc;

using SeeShellsV2.Data;
using SeeShellsV2.Factories;
using SeeShellsV2.Repositories;


namespace SeeShellsV2.Services
{
    public class PdfExporter : IPdfExporter
    {
        private readonly IShellCollection shellItems;
        private readonly IShellItemFactory shellFactory;

        public PdfExporter(
            [Dependency] IShellCollection shellItems,
            [Dependency] IShellItemFactory shellFactory
        )
        {
            this.shellItems = shellItems;
            this.shellFactory = shellFactory;
        }

        public void Export()
        {
            DateTime now = DateTime.Now;
            string filename = "SeeShellsDataPDFExport.pdf";

            PdfSharp.Pdf.PdfDocument doc = new PdfSharp.Pdf.PdfDocument();


        }
    }
}
