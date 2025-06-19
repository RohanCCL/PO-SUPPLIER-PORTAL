using AutoMapper;
using iMAPX.API.Interfaces;
using iMAPX.API.Models.DTOs;
using iMAPX.API.Models.Entities;

namespace iMAPX.API.Services
{
    public class SizeService : ISizeService
    {
        private readonly ISizeRepository _repo;
        private readonly IMapper _mapper;

        public SizeService(ISizeRepository repo, IMapper mapper)
        {
            _repo = repo;
            _mapper = mapper;
        }

        public async Task<(bool IsSuccess, string? ErrorMessage, string? SuccessMessage)> CreateAsync(SizeCreateDto dto)
            => await _repo.CreateAsync(dto);

        public Task<(IEnumerable<Size> Sizes, string? ErrorMessage, string? SuccessMessage)> GetAllSizesAsync()
        => _repo.GetAllAsync();

        public async Task<SizeResponseDto> GetSizeAsync(SizeRequestDto request)
        {
            var (entity, error, success) = await _repo.GetByKeyAsync(request.SizeGridCode, request.Size);
            var dto = entity is not null ? _mapper.Map<SizeDto>(entity) : null;
            return new SizeResponseDto
            {
                Data = dto,
                ErrorMessage = error,
                SuccessMessage = success
            };
        }
    }


}
