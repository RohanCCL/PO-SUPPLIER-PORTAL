using iMAPX.API.Models.DTOs;
using iMAPX.API.Models.Entities;

namespace iMAPX.API.Interfaces
{

    public interface IShiftMService
    {
        Task<(bool IsSuccess, string? ErrorMessage, string? SuccessMessage)> CreateAsync(ShiftMCreateDto dto);
        Task<(IEnumerable<ShiftM> shiftMs, string? ErrorMessage, string? SuccessMessage)> GetAllShiftMAsync();
        Task<ShiftMResponseDto> GetShiftMAsync(ShiftMRequestDto request);
        Task<(bool IsSuccess, string? ErrorMessage, string? SuccessMessage)> UpdateAsyncByID(ShiftMUpdateDto dto);
    }
    
}
