using System;
using System.Collections.Generic;

namespace iMAPX.API.Models.Entities;

public partial class iMAP_STOSizeDet
{
    public string STO { get; set; } = null!;

    public string STOSize { get; set; } = null!;

    public decimal Qty { get; set; }

    public string PlantID { get; set; } = null!;

    public string CreatedBy { get; set; } = null!;

    public DateTime CreatedDate { get; set; }

    public string UpdatedBy { get; set; } = null!;

    public DateTime UpdatedDate { get; set; }
}
