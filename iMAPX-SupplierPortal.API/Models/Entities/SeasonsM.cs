using System;
using System.Collections.Generic;

namespace iMAPX.API.Models.Entities;

public partial class SeasonsM
{
    public decimal ID { get; set; }

    public string SeasonCode { get; set; } = null!;

    public string SeasonName { get; set; } = null!;

    public string? SeasonImagePath { get; set; }

    public DateTime CreatedDate { get; set; }

    public DateTime UpdatedDate { get; set; }

    public string TrnUser { get; set; } = null!;

    public virtual ICollection<iMAP_FGHeader> iMAP_FGHeaders { get; set; } = new List<iMAP_FGHeader>();
}
