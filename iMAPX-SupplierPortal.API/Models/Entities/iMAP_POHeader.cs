using System;
using System.Collections.Generic;

namespace iMAPX.API.Models.Entities;

public partial class iMAP_POHeader
{
    public string PO { get; set; } = null!;

    public string PlantID { get; set; } = null!;

    public string STO { get; set; } = null!;

    public string SO { get; set; } = null!;

    public string FGStyle { get; set; } = null!;

    public string FGColor { get; set; } = null!;

    public decimal Qty { get; set; }

    public string CreatedBy { get; set; } = null!;

    public DateTime CreatedDate { get; set; }

    public string UpdatedBy { get; set; } = null!;

    public DateTime UpdatedDate { get; set; }
}
