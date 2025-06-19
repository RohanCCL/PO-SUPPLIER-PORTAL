using System;
using System.Collections.Generic;

namespace iMAPX.API.Models.Entities;

public partial class FreightTermM
{
    public decimal ID { get; set; }

    public string FreightTermCode { get; set; } = null!;

    public string FreightTerm { get; set; } = null!;

    public string? Description { get; set; }

    public DateTime CreatedDate { get; set; }

    public DateTime UpdatedDate { get; set; }

    public string TrnUser { get; set; } = null!;
}
