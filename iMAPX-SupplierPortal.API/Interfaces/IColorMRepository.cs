using iMAPX.API.Models.DTOs;
using iMAPX.API.Models.Entities;

namespace iMAPX.API.Interfaces
{
    public interface IColorMRepository
    {
        Task<(bool IsSuccess, string? ErrorMessage, string? SuccessMessage)> CreateAsync(ColorMCreateDto dto);
        Task<(IEnumerable<ColorM> colorMs, string? ErrorMessage, string? SuccessMessage)> GetAllAsync();
        Task<(ColorM? Entity, string? ErrorMessage, string? SuccessMessage)> GetByKeyAsync(string ColorCode);
        Task<(bool IsSuccess, string? ErrorMessage, string? SuccessMessage)> UpdateByKeyAsync(ColorMUpdateDto dto);
    }
}
