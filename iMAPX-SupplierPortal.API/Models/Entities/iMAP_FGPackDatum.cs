using System;
using System.Collections.Generic;

namespace iMAPX.API.Models.Entities;

public partial class iMAP_FGPackDatum
{
    public decimal ID { get; set; }

    public string PlantID { get; set; } = null!;

    public string FGStyle { get; set; } = null!;

    public string FGSize { get; set; } = null!;

    public string? CartonSize { get; set; }

    public decimal PackQty { get; set; }

    public string CreatedBy { get; set; } = null!;

    public DateTime CreatedDate { get; set; }

    public string UpdatedBy { get; set; } = null!;

    public DateTime UpdatedDate { get; set; }
}
