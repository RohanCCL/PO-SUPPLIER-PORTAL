using System;
using System.Collections.Generic;

namespace iMAPX.API.Models.Entities;

public partial class ComponentsM
{
    public int COMPO_ID { get; set; }

    public string ComponentName { get; set; } = null!;

    public string ComponentDesc { get; set; } = null!;

    public DateTime CreateDate { get; set; }

    public DateTime UpdatedDate { get; set; }

    public string TrnUser { get; set; } = null!;

    public bool Active { get; set; }
}
