using System;
using System.Collections.Generic;

namespace iMAPX.API.Models.Entities;

public partial class iMAP_SGComponent
{
    public decimal ID { get; set; }

    public string PlantID { get; set; } = null!;

    public string SGStyle { get; set; } = null!;

    public string SGComponent { get; set; } = null!;

    public string Description { get; set; } = null!;

    public string? ComponentSketchImg { get; set; }

    public string CreatedBy { get; set; } = null!;

    public DateTime CreatedDate { get; set; }

    public string UpdatedBy { get; set; } = null!;

    public DateTime UpdatedDate { get; set; }
}
