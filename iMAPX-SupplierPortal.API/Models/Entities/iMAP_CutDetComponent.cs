using System;
using System.Collections.Generic;

namespace iMAPX.API.Models.Entities;

public partial class iMAP_CutDetComponent
{
    public decimal ID { get; set; }

    public string DocketNo { get; set; } = null!;

    public string ComponentCode { get; set; } = null!;

    public string Size { get; set; } = null!;

    public decimal Qty { get; set; }

    public string CreatedBy { get; set; } = null!;

    public DateTime CreatedDate { get; set; }

    public string UpdatedBy { get; set; } = null!;

    public DateTime UpdatedDate { get; set; }

    public bool Active { get; set; }
}
