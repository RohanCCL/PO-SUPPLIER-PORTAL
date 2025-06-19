namespace iMAPX.API.Models.DTOs
{
    public class SizeGridDto
    {
        public decimal Id { get; set; }
        public string SizeGridCode { get; set; } = null!;
        public string SizeGridName { get; set; } = null!;
        public DateTime CreatedDate { get; set; }
        public DateTime UpdatedDate { get; set; }
        public string CreatedBy { get; set; } = null!;
        public string UpdatedBy { get; set; } = null!;
    }
}
