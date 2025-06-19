using System;
using System.Collections.Generic;

namespace iMAPX.API.Models.Entities;

public partial class SectionM
{
    public int ID { get; set; }

    public int SectionID { get; set; }

    public string SectionName { get; set; } = null!;

    public string SectionHead { get; set; } = null!;

    public int? PlantId { get; set; }

    public string? FactoryId { get; set; }

    public DateTime CreatedDate { get; set; }

    public DateTime UpdatedDate { get; set; }

    public string TrnUser { get; set; } = null!;

    public bool Active { get; set; }
}
