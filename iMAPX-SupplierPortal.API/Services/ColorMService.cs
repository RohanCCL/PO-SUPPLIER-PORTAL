using AutoMapper;
using iMAPX.API.Interfaces;
using iMAPX.API.Models.DTOs;
using iMAPX.API.Models.Entities;

namespace iMAPX.API.Services
{
    public class ColorMService : IColorMService
    {
        private readonly IColorMRepository _repository;
        private readonly IMapper _mapper;

        public ColorMService(IColorMRepository repository, IMapper mapper)
        {
            _repository = repository;
            _mapper = mapper;
        }

        public async Task<(bool IsSuccess, string? ErrorMessage, string? SuccessMessage)> CreateAsync(ColorMCreateDto dto)
            => await _repository.CreateAsync(dto);
        public Task<(IEnumerable<ColorM> colorMs, string? ErrorMessage, string? SuccessMessage)> GetAllColorMAsync()
        => _repository.GetAllAsync();

        public async Task<ColorMResponseDto> GetColorMAsync(ColorMRequestDto request)
        {
            var (entity, error, success) = await _repository.GetByKeyAsync(request.ColorCode);
            var dto = entity is not null ? _mapper.Map<ColorMDto>(entity) : null;
            return new ColorMResponseDto
            {
                ColorMDto = dto,
                ErrorMessage = error,
                SuccessMessage = success
            };
        }

        public async Task<(bool IsSuccess, string? ErrorMessage, string? SuccessMessage)> UpdateAsyncByID(ColorMUpdateDto dto)
            => await _repository.UpdateByKeyAsync(dto);
    }
}
