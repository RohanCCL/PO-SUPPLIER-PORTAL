using System;
using System.Collections.Generic;

namespace iMAPX.API.Models.Entities;

public partial class iMAP_CutDet
{
    public decimal ID { get; set; }

    public string PlantID { get; set; } = null!;

    public string DocketNo { get; set; } = null!;

    public string PrdOrder { get; set; } = null!;

    public string SO { get; set; } = null!;

    public string FGStyle { get; set; } = null!;

    public string FGColor { get; set; } = null!;

    public string SGStyle { get; set; } = null!;

    public string SGSize { get; set; } = null!;

    public string SGColor { get; set; } = null!;

    public decimal Qty { get; set; }

    public decimal NoOfPlys { get; set; }

    public decimal NoOfBundles { get; set; }

    public decimal BundleRuel { get; set; }

    public decimal OddBundleQty { get; set; }

    public decimal Shade { get; set; }

    public DateTime CutDate { get; set; }

    public bool CreFlag { get; set; }

    public bool CreBundleFlg { get; set; }

    public string? STO { get; set; }

    public string CreatedBy { get; set; } = null!;

    public DateTime CreatedDate { get; set; }

    public string UpdatedBy { get; set; } = null!;

    public DateTime UpdatedDate { get; set; }
}
