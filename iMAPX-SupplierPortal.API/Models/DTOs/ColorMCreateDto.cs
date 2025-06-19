namespace iMAPX.API.Models.DTOs
{
    public class ColorMCreateDto
    {
        public string ColorGridCode { get; set; } = null!;
        public string MasterColorCode { get; set; } = null!;
        public string ColorCode { get; set; } = null!;
        public string ColorName { get; set; } = null!;
        public string ColorDescription { get; set; }
        public DateTime CreatedDate { get; set; }
        public string CreatedBy { get; set; } = null!;
    }
}
