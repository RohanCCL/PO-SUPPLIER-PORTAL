namespace iMAPX.API.Models.DTOs
{
    public class SizeDto
    {
        public decimal Id { get; set; }
        public string SizeGridCode { get; set; } = null!;
        public string Size { get; set; } = null!;
        public string SizeDescription { get; set; } = null!;
        public DateTime CreatedDate { get; set; }
        public DateTime UpdatedDate { get; set; }
        public string CreatedBy { get; set; } = null!;
        public string UpdatedBy { get; set; } = null!;
    }
}
