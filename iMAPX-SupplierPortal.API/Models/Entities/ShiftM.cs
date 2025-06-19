using System;
using System.Collections.Generic;

namespace iMAPX.API.Models.Entities;

public partial class ShiftM
{
    public int ID { get; set; }
    public string Shift { get; set; } = null!;
    public string CreatedBy { get; set; } = null!;
    public string UpdatedBy { get; set; } = null!;
    public TimeOnly? StartTime { get; set; }
    public TimeOnly? EndTime { get; set; }
    public DateTime CreatedDate { get; set; }
    public DateTime UpdatedDate { get; set; }
    public bool Active { get; set; }
}
