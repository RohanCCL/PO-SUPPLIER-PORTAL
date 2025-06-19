namespace iMAPX.API.Models.DTOs
{
    public class ShiftMCreateDto
    {
        public string Shift { get; set; } = null!;
        public string CreatedBy { get; set; } = null!;
        public TimeOnly StartTime {get; set; }
        public TimeOnly EndTime { get; set; }
    }
}
