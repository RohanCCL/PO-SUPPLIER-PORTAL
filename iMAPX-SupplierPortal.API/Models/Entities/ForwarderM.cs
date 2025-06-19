using System;
using System.Collections.Generic;

namespace iMAPX.API.Models.Entities;

public partial class ForwarderM
{
    public decimal ID { get; set; }

    public string ForwarderCode { get; set; } = null!;

    public string ForwarderName { get; set; } = null!;

    public string? Description { get; set; }

    public DateTime CreatedDate { get; set; }

    public DateTime UpdatedDate { get; set; }

    public string TrnUser { get; set; } = null!;
}
