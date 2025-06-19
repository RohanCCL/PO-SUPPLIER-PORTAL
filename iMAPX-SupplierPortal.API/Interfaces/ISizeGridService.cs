using iMAPX.API.Models.DTOs;
using iMAPX.API.Models.Entities;

namespace iMAPX.API.Interfaces
{
    public interface ISizeGridService
    {
        Task<(bool IsSuccess, string? ErrorMessage, string? SuccessMessage)> CreateAsync(SizeGridCreateDto dto);
        Task<(IEnumerable<SizeGrid> SizeGrids, string? ErrorMessage, string? SuccessMessage)> GetAllSizesAsync();
        Task<SizeGridResponseDto> GetSizeAsync(SizeGridRequestDto request);
        Task<(bool IsSuccess, string? ErrorMessage, string? SuccessMessage)> UpdateAsyncByID(SizeGridUpdateDto dto);
    }
}
