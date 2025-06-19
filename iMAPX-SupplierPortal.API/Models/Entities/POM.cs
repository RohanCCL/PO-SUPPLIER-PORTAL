using System;
using System.Collections.Generic;

namespace iMAPX.API.Models.Entities;

public partial class POM
{
    public string CompanyCode { get; set; } = null!;

    public string GUID { get; set; } = null!;

    public decimal PONumber { get; set; }

    public string StyleCode { get; set; } = null!;

    public DateTime IssueDate { get; set; }

    public DateTime RevieseDate { get; set; }

    public string VendorCode { get; set; } = null!;

    public string ShipToAddressCode { get; set; } = null!;

    public decimal POQty { get; set; }

    public decimal UnitCost { get; set; }

    public string PaymentTermCode { get; set; } = null!;

    public DateTime? StartShipDate { get; set; }

    public DateTime? LastHandOverDate { get; set; }

    public string ShipTypeCode { get; set; } = null!;

    public string FreightTermCode { get; set; } = null!;

    public bool PrePack { get; set; }

    public string ForwarderCode { get; set; } = null!;

    public string? Comment { get; set; }

    public decimal Version { get; set; }

    public bool Active { get; set; }

    public string CurrencyTypeCode { get; set; } = null!;

    public string PreparedBy { get; set; } = null!;

    public string? ApprovedBy { get; set; }

    public DateTime CreatedDate { get; set; }

    public DateTime UpdatedDate { get; set; }

    public string TrnUser { get; set; } = null!;

    public string POStatus { get; set; } = null!;
}
