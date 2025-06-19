using iMAPX.API. Interfaces;
using iMAPX.API.Models.DTOs;
using iMAPX.API.Services;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;

namespace iMAPX.API.Controllers.MasterFiles
{

    [Route("api/[controller]")]
    [ApiController]
    public class ColorMController : ControllerBase
    {
        private readonly IColorMService _colorMService;

        public ColorMController(IColorMService colorMService)
            => _colorMService = colorMService;

        [HttpPost]
        public async Task<IActionResult> Create([FromBody] ColorMCreateDto dto)
        {
            var result = await _colorMService.CreateAsync(dto);
            bool ok = result.IsSuccess;
            string? error = result.ErrorMessage;
            string? success = result.SuccessMessage;

            if (!ok) return BadRequest(new { error });
            return Ok(new { message = success });
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var (shifts, error, success) = await _colorMService.GetAllColorMAsync();
            var list = shifts;

            if (!string.IsNullOrEmpty(error) && list is not { } || list.Any() is false)
                return NotFound(new { Message = error });

            return Ok(new
            {
                Message = success,
                Data = shifts
            });
        }

        [HttpPost("by-key")]
        public async Task<IActionResult> GetByKey([FromBody] ColorMRequestDto request)
        {
            if (request == null || string.IsNullOrEmpty(request.ColorCode))
                return BadRequest(new { message = "ID is required in the request body." });

            var result = await _colorMService.GetColorMAsync(request);
            if (!string.IsNullOrEmpty(result.ErrorMessage))
                return NotFound(new { message = result.ErrorMessage });

            return Ok(new { data = result.ColorMDto, message = result.SuccessMessage });
        }

        [HttpPut("by-keys")]
        public async Task<IActionResult> UpdateByKey([FromBody] ColorMUpdateDto dto)
        {
            if (dto == null || string.IsNullOrEmpty(dto.ColorCode)) 
                return BadRequest(new { message = "ID is required in the request body." });
            var result = await _colorMService.UpdateAsyncByID(dto);
            bool ok = result.IsSuccess;
            string? error = result.ErrorMessage;
            string? success = result.SuccessMessage;
            if (!ok) return BadRequest(new { error });
            return Ok(new { message = success });
        }
    }
}
