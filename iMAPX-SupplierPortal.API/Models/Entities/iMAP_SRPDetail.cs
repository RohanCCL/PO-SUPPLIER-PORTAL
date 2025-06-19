using System;
using System.Collections.Generic;

namespace iMAPX.API.Models.Entities;

public partial class iMAP_SRPDetail
{
    public string SRPID { get; set; } = null!;

    public string SRPPrefix { get; set; } = null!;

    public string SO { get; set; } = null!;

    public string PrdOrder { get; set; } = null!;

    public string? STO { get; set; }

    public string? FGColor { get; set; }

    public string FGSize { get; set; } = null!;

    public string DocketNo { get; set; } = null!;

    public string FGStyle { get; set; } = null!;

    public decimal OrgQty { get; set; }

    public decimal Qty { get; set; }

    public string SRPStatus { get; set; } = null!;

    public DateTime CutDate { get; set; }

    public string SRPVersion { get; set; } = null!;

    public string CreatedBy { get; set; } = null!;

    public DateTime CreatedDate { get; set; }

    public string UpdatedBy { get; set; } = null!;

    public DateTime UpdatedDate { get; set; }

    public string? PlantID { get; set; }

    public string? INV { get; set; }
}
