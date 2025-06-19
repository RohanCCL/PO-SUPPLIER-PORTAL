using AutoMapper;
using iMAPX.API.Interfaces;
using iMAPX.API.Models.DTOs;
using iMAPX.API.Models.Entities;

namespace iMAPX.API.Services
{
    public class SizeGridService : ISizeGridService
    {
        private readonly ISizeGridRepository _repository;
        private readonly IMapper _mapper;

        public SizeGridService(ISizeGridRepository repository, IMapper mapper)
        {
            _repository = repository;
            _mapper = mapper;
        }

        public async Task<(bool IsSuccess, string? ErrorMessage, string? SuccessMessage)> CreateAsync(SizeGridCreateDto dto)
            => await _repository.CreateAsync(dto);

        public Task<(IEnumerable<SizeGrid> SizeGrids, string? ErrorMessage, string? SuccessMessage)> GetAllSizesAsync()
        => _repository.GetAllAsync();

        public async Task<SizeGridResponseDto> GetSizeAsync(SizeGridRequestDto request)
        {
            var (entity, error, success) = await _repository.GetByKeyAsync(request.SizeGridCode);
            var dto = entity is not null ? _mapper.Map<SizeGridDto>(entity) : null;
            return new SizeGridResponseDto
            {
                Data = dto,
                ErrorMessage = error,
                SuccessMessage = success
            };
        }

        public async Task<(bool IsSuccess, string? ErrorMessage, string? SuccessMessage)> UpdateAsyncByID(SizeGridUpdateDto dto)
            => await _repository.UpdateByKeyAsync(dto);
    }
}
