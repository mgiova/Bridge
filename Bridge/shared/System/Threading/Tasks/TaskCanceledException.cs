// Licensed to the .NET Foundation under one or more agreements.
// The .NET Foundation licenses this file to you under the MIT license.
// See the LICENSE file in the project root for more information.

// =+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+
//
//
//
// An exception for task cancellations.
//
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

using System;
using System.Runtime.InteropServices;
using System.Runtime.Serialization;

namespace System.Threading.Tasks
{
    /// <summary>
    /// Represents an exception used to communicate task cancellation.
    /// </summary>
    [Serializable]
#if !MONO
    [System.Runtime.CompilerServices.TypeForwardedFrom("mscorlib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089")]
#endif
    public class TaskCanceledException : OperationCanceledException
    {
        [NonSerialized]
        private readonly Task _canceledTask; // The task which has been canceled.

        /// <summary>
        /// Initializes a new instance of the <see cref="T:System.Threading.Tasks.TaskCanceledException"/> class.
        /// </summary>
        // TODO: SR
        //public TaskCanceledException() : base(SR.TaskCanceledException_ctor_DefaultMessage)
        public TaskCanceledException() : base("A task was canceled.")
        {
        }

        /// <summary>
        /// Initializes a new instance of the <see cref="T:System.Threading.Tasks.TaskCanceledException"/>
        /// class with a specified error message.
        /// </summary>
        /// <param name="message">The error message that explains the reason for the exception.</param>
        public TaskCanceledException(string message) : base(message)
        {
        }

        /// <summary>
        /// Initializes a new instance of the <see cref="T:System.Threading.Tasks.TaskCanceledException"/>
        /// class with a specified error message and a reference to the inner exception that is the cause of
        /// this exception.
        /// </summary>
        /// <param name="message">The error message that explains the reason for the exception.</param>
        /// <param name="innerException">The exception that is the cause of the current exception.</param>
        public TaskCanceledException(string message, Exception innerException) : base(message, innerException)
        {
        }

        /// <summary>
        /// Initializes a new instance of the <see cref="T:System.Threading.Tasks.TaskCanceledException"/> class
        /// with a reference to the <see cref="T:System.Threading.Tasks.Task"/> that has been canceled.
        /// </summary>
        /// <param name="task">A task that has been canceled.</param>
        // TODO: NotSupported
        public TaskCanceledException(Task task) :
            base("A task was canceled.", task != null ? new CancellationToken() : new CancellationToken())
        // TODO: NotSupported
        //base(SR.TaskCanceledException_ctor_DefaultMessage, task != null ? task.CancellationToken : new CancellationToken())
        {
            _canceledTask = task;
        }

        ///// <summary>
        ///// Initializes a new instance of the <see cref="T:System.Threading.Tasks.TaskCanceledException"/>
        ///// class with serialized data.
        ///// </summary>
        ///// <param name="info">The <see cref="T:System.Runtime.Serialization.SerializationInfo"/> that holds the serialized object data about the exception being thrown.</param>
        ///// <param name="context">The <see cref="T:System.Runtime.Serialization.StreamingContext"/> that contains contextual information about the source or destination. </param>
        // TODO: NotSupported
        //protected TaskCanceledException(SerializationInfo info, StreamingContext context) : base(info, context)
        //{
        //}

        /// <summary>
        /// Gets the task associated with this exception.
        /// </summary>
        /// <remarks>
        /// It is permissible for no Task to be associated with a
        /// <see cref="T:System.Threading.Tasks.TaskCanceledException"/>, in which case
        /// this property will return null.
        /// </remarks>
        public Task Task => _canceledTask;
    }
}
