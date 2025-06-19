using System;
using System.Collections.Generic;

namespace iMAPX.API.Models.Entities;

public partial class CurrencyTypeM
{
    public decimal ID { get; set; }

    public string CurrencyTypeCode { get; set; } = null!;

    public string CurrencyType { get; set; } = null!;

    public DateTime CreatedDate { get; set; }

    public DateTime UpdatedDate { get; set; }

    public string TrnUser { get; set; } = null!;
}
