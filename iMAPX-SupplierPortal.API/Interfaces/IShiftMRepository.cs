using iMAPX.API.Models.DTOs;
using iMAPX.API.Models.Entities;

namespace iMAPX.API.Interfaces
{
    public interface IShiftMRepository
    {
        Task<(bool IsSuccess, string? ErrorMessage, string? SuccessMessage)> CreateAsync(ShiftMCreateDto dto);
        Task<(IEnumerable<ShiftM> shiftMs, string? ErrorMessage, string? SuccessMessage)> GetAllAsync();
        Task<(ShiftM? Entity, string? ErrorMessage, string? SuccessMessage)> GetByKeyAsync(int ID);
        Task<(bool IsSuccess, string? ErrorMessage, string? SuccessMessage)> UpdateByKeyAsync(ShiftMUpdateDto dto);

    }
}
