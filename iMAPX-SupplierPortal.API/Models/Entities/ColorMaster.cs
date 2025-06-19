using System;
using System.Collections.Generic;

namespace iMAPX.API.Models.Entities;

public partial class ColorMaster
{
    public decimal ID { get; set; }

    public string ColorCode { get; set; } = null!;

    public string ColorName { get; set; } = null!;

    public string? ColorDescription { get; set; }

    public DateTime CreatedDate { get; set; }

    public DateTime UpdatedDate { get; set; }

    public string TrnUser { get; set; } = null!;
}
