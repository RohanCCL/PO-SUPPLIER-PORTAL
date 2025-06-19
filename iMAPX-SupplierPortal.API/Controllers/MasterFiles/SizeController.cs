using Microsoft.AspNetCore.Mvc;
using iMAPX.API.Models.DTOs;
using iMAPX.API.Interfaces;

namespace iMAPX.API.Controllers.MasterFiles
{
    [Route("api/[controller]")]
    [ApiController]
    public class SizeController : ControllerBase
    {
        private readonly ISizeService _sizeService;

        public SizeController(ISizeService sizeService)
            => _sizeService = sizeService;

        [HttpPost]
        public async Task<IActionResult> Create([FromBody] SizeCreateDto dto)
        {
            var result = await _sizeService.CreateAsync(dto);
            bool ok = result.IsSuccess;
            string? error = result.ErrorMessage;
            string? success = result.SuccessMessage;

            if (!ok) return BadRequest(new { error });
            return Ok(new { message = success });
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var (sizes, error, success) = await _sizeService.GetAllSizesAsync();
            var list = sizes;

            if (!string.IsNullOrEmpty(error) && list is not { } || list.Any() is false)
                return NotFound(new { Message = error });

            return Ok(new
            {
                Message = success,
                Data = sizes
            });
        }

        [HttpPost("by-key")]
        public async Task<IActionResult> GetByKey([FromBody] SizeRequestDto request)
        {
            if (request == null || string.IsNullOrWhiteSpace(request.SizeGridCode) || string.IsNullOrWhiteSpace(request.Size))
                return BadRequest(new { message = "SizeGridCode and Size are required in the request body." });

            var result = await _sizeService.GetSizeAsync(request);
            if (!string.IsNullOrEmpty(result.ErrorMessage))
                return NotFound(new { message = result.ErrorMessage });

            return Ok(new { data = result.Data, message = result.SuccessMessage });
        }

    }
}
