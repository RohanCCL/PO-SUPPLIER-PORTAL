using AutoMapper;
using iMAPX.API.Interfaces;
using iMAPX.API.Models.DTOs;
using iMAPX.API.Models.Entities;

namespace iMAPX.API.Services
{
    public class ShiftMService : IShiftMService
    {
        private readonly IShiftMRepository _repository;
        private readonly IMapper _mapper;

        public ShiftMService(IShiftMRepository repository, IMapper mapper)
        {
            _repository = repository;
            _mapper = mapper;
        }

        public async Task<(bool IsSuccess, string? ErrorMessage, string? SuccessMessage)> CreateAsync(ShiftMCreateDto dto)
            => await _repository.CreateAsync(dto);
        public Task<(IEnumerable<ShiftM> shiftMs, string? ErrorMessage, string? SuccessMessage)> GetAllShiftMAsync()
        => _repository.GetAllAsync();

        public async Task<ShiftMResponseDto> GetShiftMAsync(ShiftMRequestDto request)
        {
            var (entity, error, success) = await _repository.GetByKeyAsync(request.ID);
            var dto = entity is not null ? _mapper.Map<ShiftMDto>(entity) : null;
            return new ShiftMResponseDto
            {
                ShiftMDto = dto,
                ErrorMessage = error,
                SuccessMessage = success
            };
        }

        public async Task<(bool IsSuccess, string? ErrorMessage, string? SuccessMessage)> UpdateAsyncByID(ShiftMUpdateDto dto)
            => await _repository.UpdateByKeyAsync(dto);
    }
}
