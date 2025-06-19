namespace iMAPX.API.Models.DTOs
{
    public class ShiftMUpdateDto
    {
        public int ID { get; set; }
        public string Shift { get; set; } = null!;
        public string UpdatedBy { get; set; } = null!;
        public TimeOnly StartTime { get; set; }
        public TimeOnly EndTime { get; set; }
        public bool Active { get; set; }
    }
}
