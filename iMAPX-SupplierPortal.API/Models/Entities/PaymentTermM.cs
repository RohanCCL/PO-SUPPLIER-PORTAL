using System;
using System.Collections.Generic;

namespace iMAPX.API.Models.Entities;

public partial class PaymentTermM
{
    public decimal ID { get; set; }

    public string PaymentTermCode { get; set; } = null!;

    public string PaymentTerm { get; set; } = null!;

    public string? Description { get; set; }

    public DateTime CreatedDate { get; set; }

    public DateTime UpdatedDate { get; set; }

    public string TrnUser { get; set; } = null!;
}
