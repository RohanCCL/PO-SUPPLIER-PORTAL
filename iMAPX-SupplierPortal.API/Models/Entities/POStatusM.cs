using System;
using System.Collections.Generic;

namespace iMAPX.API.Models.Entities;

public partial class POStatusM
{
    public decimal ID { get; set; }

    public decimal StatusCode { get; set; }

    public string StatusDescription { get; set; } = null!;

    public DateTime CreatedDate { get; set; }

    public DateTime UpdatedDate { get; set; }

    public string TrnUser { get; set; } = null!;
}
