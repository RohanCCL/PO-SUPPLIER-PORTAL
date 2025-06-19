using System;
using System.Collections.Generic;

namespace iMAPX.API.Models.Entities;

public partial class CompanyM
{
    public decimal ID { get; set; }

    public string CompanyCode { get; set; } = null!;

    public string CompanyName { get; set; } = null!;

    public string? CompanyDescription { get; set; }

    public string Address { get; set; } = null!;

    public string CountryCode { get; set; } = null!;

    public string State { get; set; } = null!;

    public string City { get; set; } = null!;

    public string PostalCode { get; set; } = null!;

    public string ContactPerson { get; set; } = null!;

    public string Email { get; set; } = null!;

    public decimal Tel1 { get; set; }

    public DateTime CreatedDate { get; set; }

    public DateTime UpdatedDate { get; set; }

    public string TrnUser { get; set; } = null!;
}
