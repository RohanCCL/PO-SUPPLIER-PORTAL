using System;
using System.Collections.Generic;

namespace iMAPX.API.Models.Entities;

public partial class POTD
{
    public decimal PONumber { get; set; }

    public decimal Version { get; set; }

    public string ColorCode { get; set; } = null!;

    public string SizeGridCode { get; set; } = null!;

    public string Size { get; set; } = null!;

    public decimal POQty { get; set; }

    public string Comment { get; set; } = null!;

    public decimal UnitCost { get; set; }

    public DateTime ShipDate { get; set; }

    public DateTime CreatedDate { get; set; }

    public DateTime UpdatedDate { get; set; }

    public string TrnUser { get; set; } = null!;
}
