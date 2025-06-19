using System;
using System.Collections.Generic;

namespace iMAPX.API.Models.Entities;

public partial class iMAP_FGHeader
{
    public decimal ID { get; set; }

    public string PlantID { get; set; } = null!;

    public string Style { get; set; } = null!;

    public string StyleCategoryCode { get; set; } = null!;

    public string SeasonCode { get; set; } = null!;

    public string FGColor { get; set; } = null!;

    public string Description { get; set; } = null!;

    public string PGR { get; set; } = null!;

    public decimal FGSMV { get; set; }

    public string FGGridID { get; set; } = null!;

    public string? StyleMainFabric { get; set; }

    public string? StyleSketchImg { get; set; }

    public string? StyleFrontImg { get; set; }

    public string? StyleBackImg { get; set; }

    public decimal FGBulkSMV { get; set; }

    public string CreatedBy { get; set; } = null!;

    public DateTime CreatedDate { get; set; }

    public string UpdatedBy { get; set; } = null!;

    public DateTime UpdatedDate { get; set; }

    public virtual ColorM FGColorNavigation { get; set; } = null!;

    public virtual SizeGrid FGGrid { get; set; } = null!;

    public virtual SeasonsM SeasonCodeNavigation { get; set; } = null!;

    public virtual StyleCategoryM StyleCategoryCodeNavigation { get; set; } = null!;
}
