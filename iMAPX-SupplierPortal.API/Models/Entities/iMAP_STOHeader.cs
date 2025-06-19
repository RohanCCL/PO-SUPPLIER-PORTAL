using System;
using System.Collections.Generic;

namespace iMAPX.API.Models.Entities;

public partial class iMAP_STOHeader
{
    public string STO { get; set; } = null!;

    public string PlantID { get; set; } = null!;

    public string SO { get; set; } = null!;

    public string? FGStyle { get; set; }

    public string? FGColor { get; set; }

    public string? SGColor { get; set; }

    public decimal Qty { get; set; }

    public string CreatedBy { get; set; } = null!;

    public DateTime CreatedDate { get; set; }

    public string UpdatedBy { get; set; } = null!;

    public DateTime UpdatedDate { get; set; }
}
