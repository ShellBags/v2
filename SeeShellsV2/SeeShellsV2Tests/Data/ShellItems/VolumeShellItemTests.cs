﻿using Microsoft.VisualStudio.TestTools.UnitTesting;
using SeeShellsV2.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SeeShellsV2.Data.Tests
{
    [TestClass()]
    public class VolumeShellItemTests
    {
        [TestMethod()]
        public void VolumeShellItemTest()
        {
            VolumeShellItem item = new VolumeShellItem()
            {
                Type = 0x00,
                TypeName = "TestType",
                Description = "Test",
                Size = 10,
                VolumeName = "Hello, World!",
            };

            Assert.IsTrue(item.Fields.Count == 5);
            Assert.IsTrue(item.Fields.ContainsKey("Type"));
            Assert.IsTrue(item.Fields["Type"] as byte? == item.Type);
            Assert.IsTrue(item.Type == 0x00);
            Assert.IsTrue(item.Fields.ContainsKey("TypeName"));
            Assert.IsTrue(item.Fields["TypeName"] as string == item.TypeName);
            Assert.IsTrue(item.TypeName == "TestType");
            Assert.IsTrue(item.Fields.ContainsKey("Description"));
            Assert.IsTrue(item.Fields["Description"] as string == item.Description);
            Assert.IsTrue(item.Description == "Test");
            Assert.IsTrue(item.Fields.ContainsKey("Size"));
            Assert.IsTrue(item.Fields["Size"] as ushort? == item.Size);
            Assert.IsTrue(item.Size == 10);
            Assert.IsTrue(item.Fields.ContainsKey("VolumeName"));
            Assert.IsTrue(item.Fields["VolumeName"] as string == item.VolumeName);
            Assert.IsTrue(item.VolumeName == "Hello, World!");
            Assert.IsTrue(item.RegistryKey == null);
        }

        [TestMethod()]
        public void VolumeShellItemTest1()
        {
            byte[] buf = new byte[] {
                0x19, 0x00, 0x2F, 0x46, 0x3A, 0x5C, 0x00, 0x00,
                0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
                0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
                0x00, 0x00, 0x00
            };

            VolumeShellItem item = new VolumeShellItem(buf);

            Assert.IsTrue(item.Fields.Count == 6);
            Assert.IsTrue(item.Fields.ContainsKey("Type"));
            Assert.IsTrue(item.Fields["Type"] as byte? == item.Type);
            Assert.IsTrue(item.Type == 0x2F);
            Assert.IsTrue(item.Fields.ContainsKey("Size"));
            Assert.IsTrue(item.Fields["Size"] as ushort? == item.Size);
            Assert.IsTrue(item.Size == 0x19);
            Assert.IsTrue(item.Fields.ContainsKey("TypeName"));
            Assert.IsTrue(item.Fields["TypeName"] as string == item.TypeName);
            Assert.IsTrue(item.TypeName == "Volume");
            Assert.IsTrue(item.Fields.ContainsKey("SubtypeName"));
            Assert.IsTrue(item.Fields["SubtypeName"] as string == item.SubtypeName);
            Assert.IsTrue(item.SubtypeName == "Removable Media");
            Assert.IsTrue(item.Fields.ContainsKey("Description"));
            Assert.IsTrue(item.Fields["Description"] as string == item.Description);
            Assert.IsTrue(item.Description == "F:\\");
            Assert.IsTrue(item.Fields.ContainsKey("VolumeName"));
            Assert.IsTrue(item.Fields["VolumeName"] as string == item.VolumeName);
            Assert.IsTrue(item.VolumeName == "F:\\");
            Assert.IsTrue(item.RegistryKey == null);
        }

        [TestMethod()]
        public void VolumeShellItemTest2()
        {
            byte[] buf = new byte[] {
                0x19, 0x00, 0x2F, 0x46, 0x3A, 0x5C, 0x00, 0x00,
                0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
                0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
                0x00, 0x00, 0x00
            };

            IShellItem item = ShellItem.FromByteArray(buf);
            Assert.IsTrue(item is VolumeShellItem);
        }
    }
}