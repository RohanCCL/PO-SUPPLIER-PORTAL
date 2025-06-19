using System;
using System.Collections.Generic;

namespace iMAPX.API.Models.Entities;

public partial class ColorGrid
{
    public decimal ID { get; set; }

    public string ColorGridCode { get; set; } = null!;

    public string ColorGridName { get; set; } = null!;

    public string? ColorGridDescription { get; set; }

    public DateTime CreatedDate { get; set; }

    public DateTime UpdatedDate { get; set; }

    public string TrnUser { get; set; } = null!;
}
