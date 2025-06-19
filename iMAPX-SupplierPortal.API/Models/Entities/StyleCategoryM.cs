using System;
using System.Collections.Generic;

namespace iMAPX.API.Models.Entities;

public partial class StyleCategoryM
{
    public decimal ID { get; set; }

    public string StyleCategoryCode { get; set; } = null!;

    public string StyleCategoryName { get; set; } = null!;

    public DateTime CreatedDate { get; set; }

    public DateTime UpdatedDate { get; set; }

    public string TrnUser { get; set; } = null!;

    public virtual ICollection<iMAP_FGHeader> iMAP_FGHeaders { get; set; } = new List<iMAP_FGHeader>();
}
