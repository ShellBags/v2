﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SeeShellsV2.Data
{
    /// <summary>
    /// Represents a suspected action performed by a user
    /// </summary>
    public interface IShellEvent
    {
        /// <summary>
        /// The type of event that occured (File Create, File Download, etc.)
        /// </summary>
        string TypeName { get; }

        /// <summary>
        /// A short description of the event
        /// </summary>
        string Description { get; }

        /// <summary>
        /// The time that the event occured
        /// </summary>
        DateTime TimeStamp { get; }

        /// <summary>
        /// The user that performed the action
        /// </summary>
        User User { get; }

        /// <summary>
        /// The location where the action was performed (usually a file path, network folder, etc.)
        /// </summary>
        Place Place { get; }

        /// <summary>
        /// List of parsed shellbags that provide evidence for the event
        /// </summary>
        IEnumerable<IShellItem> Evidence { get; }
    }
}
