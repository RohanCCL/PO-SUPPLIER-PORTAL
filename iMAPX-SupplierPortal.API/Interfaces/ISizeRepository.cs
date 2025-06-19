using iMAPX.API.Models.DTOs;
using iMAPX.API.Models.Entities;

namespace iMAPX.API.Interfaces
{
    public interface ISizeRepository
    {
        /// <summary>
        /// Calls usp_Size_Create via EF Core and returns (isSuccess, errorMessage, successMessage).
        /// </summary>
        Task<(bool IsSuccess, string? ErrorMessage, string? SuccessMessage)> CreateAsync(SizeCreateDto dto);

        /// <summary>
        /// Calls usp_Size_GetAll and returns all sizes.
        /// </summary>
        Task<(IEnumerable<Size> Sizes, string? ErrorMessage, string? SuccessMessage)> GetAllAsync();

        Task<(Size? Entity, string? ErrorMessage, string? SuccessMessage)> GetByKeyAsync(string sizeGridCode, string size);
    }
}
