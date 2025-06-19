namespace iMAPX.API.Models.DTOs
{
    public class ShiftMDto
    {
        public decimal ID { get; set; }
        public string Shift { get; set; } = null!;
        public string CreatedBy { get; set; }
        public string UpdatedBy { get; set; }
        public TimeOnly StartTime { get; set; }
        public TimeOnly EndTime { get; set; }
        public DateTime CreatedDate { get; set; }
        public DateTime UpdatedDate { get; set; }
        public bool Active { get; set; }
        
    }
}
