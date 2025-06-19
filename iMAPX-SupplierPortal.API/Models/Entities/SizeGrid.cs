using System;
using System.Collections.Generic;

namespace iMAPX.API.Models.Entities;

public partial class SizeGrid
{
    public decimal ID { get; set; }

    public string SizeGridCode { get; set; } = null!;

    public string SizeGridName { get; set; } = null!;

    public DateTime CreatedDate { get; set; }

    public DateTime UpdatedDate { get; set; }

    public string CreatedBy { get; set; } = null!;

    public string UpdatedBy { get; set; } = null!;

    public virtual ICollection<Size> Sizes { get; set; } = new List<Size>();

    public virtual ICollection<iMAP_FGHeader> iMAP_FGHeaders { get; set; } = new List<iMAP_FGHeader>();
}
