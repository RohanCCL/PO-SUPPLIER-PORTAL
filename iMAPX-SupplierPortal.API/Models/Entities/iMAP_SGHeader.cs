using System;
using System.Collections.Generic;

namespace iMAPX.API.Models.Entities;

public partial class iMAP_SGHeader
{
    public decimal ID { get; set; }

    public string PlantID { get; set; } = null!;

    public string SGStyle { get; set; } = null!;

    public string SGColor { get; set; } = null!;

    public string? CustomerStyle { get; set; }

    public string FGStyle { get; set; } = null!;

    public string Description { get; set; } = null!;

    public decimal SGSMV { get; set; }

    public decimal NumberOfSG { get; set; }

    public string SGGridID { get; set; } = null!;

    public string? SGSketchImg { get; set; }

    public string? SGFrontImg { get; set; }

    public string? SGBackImg { get; set; }

    public string CreatedBy { get; set; } = null!;

    public DateTime CreatedDate { get; set; }

    public string UpdatedBy { get; set; } = null!;

    public DateTime UpdatedDate { get; set; }
}
