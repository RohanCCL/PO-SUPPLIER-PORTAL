namespace iMAPX.API.Models.DTOs
{
    public class ShiftMUpdateByKeyDto
    {
        public int ID { get; set; }
        public ShiftMUpdateDto UpdateData { get; set; } = null!;
    }
}
