using System;
using System.Collections.Generic;

namespace iMAPX.API.Models.Entities;

public partial class Size
{
    public decimal ID { get; set; }

    public string SizeGridCode { get; set; } = null!;

    public string Size1 { get; set; } = null!;

    public string SizeDescription { get; set; } = null!;

    public DateTime CreatedDate { get; set; }

    public DateTime UpdatedDate { get; set; }

    public string CreatedBy { get; set; } = null!;

    public string UpdatedBy { get; set; } = null!;

    public virtual SizeGrid SizeGridCodeNavigation { get; set; } = null!;
}
