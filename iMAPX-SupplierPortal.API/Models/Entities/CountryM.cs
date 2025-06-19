using System;
using System.Collections.Generic;

namespace iMAPX.API.Models.Entities;

public partial class CountryM
{
    public decimal ID { get; set; }

    public string CountryCode { get; set; } = null!;

    public string DialingCode { get; set; } = null!;

    public string CountryName { get; set; } = null!;

    public DateTime CreatedDate { get; set; }

    public DateTime UpdatedDate { get; set; }
}
