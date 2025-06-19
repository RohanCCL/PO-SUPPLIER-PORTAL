using iMAPX.API.Models.DTOs;
using iMAPX.API.Models.Entities;

namespace iMAPX.API.Interfaces
{
    public interface ISizeService
    {
        Task<(bool IsSuccess, string? ErrorMessage, string? SuccessMessage)> CreateAsync(SizeCreateDto dto);
        Task<(IEnumerable<Size> Sizes, string? ErrorMessage, string? SuccessMessage)> GetAllSizesAsync();
        Task<SizeResponseDto> GetSizeAsync(SizeRequestDto request);
    }
}
