using System;
using System.Collections.Generic;

namespace iMAPX.API.Models.Entities;

public partial class ColorM
{
    public decimal ID { get; set; }

    public string ColorGridCode { get; set; } = null!;

    public string MasterColorCode { get; set; } = null!;

    public string ColorCode { get; set; } = null!;

    public string ColorName { get; set; } = null!;

    public string? ColorDescription { get; set; }

    public DateTime CreatedDate { get; set; }

    public DateTime UpdatedDate { get; set; }

    public string CreatedBy { get; set; } 
    public string UpdatedBy { get; set; } 

    public virtual ICollection<iMAP_FGHeader> iMAP_FGHeaders { get; set; } = new List<iMAP_FGHeader>();
}
