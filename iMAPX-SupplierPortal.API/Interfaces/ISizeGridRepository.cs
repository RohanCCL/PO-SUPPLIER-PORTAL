using iMAPX.API.Models.DTOs;
using iMAPX.API.Models.Entities;

namespace iMAPX.API.Interfaces
{
    public interface ISizeGridRepository
    {
        Task<(bool IsSuccess, string? ErrorMessage, string? SuccessMessage)> CreateAsync(SizeGridCreateDto dto);
        Task<(IEnumerable<SizeGrid> SizeGrids, string? ErrorMessage, string? SuccessMessage)> GetAllAsync();
        Task<(SizeGrid? Entity, string? ErrorMessage, string? SuccessMessage)> GetByKeyAsync(string sizeGridCode);
        Task<(bool IsSuccess, string? ErrorMessage, string? SuccessMessage)> UpdateByKeyAsync(SizeGridUpdateDto dto);
    }
}
