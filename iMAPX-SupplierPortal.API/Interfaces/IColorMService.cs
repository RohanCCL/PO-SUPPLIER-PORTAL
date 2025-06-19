using iMAPX.API.Models.DTOs;
using iMAPX.API.Models.Entities;

namespace iMAPX.API.Interfaces
{
    public interface IColorMService
    {
        Task<(bool IsSuccess, string? ErrorMessage, string? SuccessMessage)> CreateAsync(ColorMCreateDto dto);
        Task<(IEnumerable<ColorM> colorMs, string? ErrorMessage, string? SuccessMessage)> GetAllColorMAsync();
        Task<ColorMResponseDto> GetColorMAsync(ColorMRequestDto request);
        Task<(bool IsSuccess, string? ErrorMessage, string? SuccessMessage)> UpdateAsyncByID(ColorMUpdateDto dto);
    }
}
