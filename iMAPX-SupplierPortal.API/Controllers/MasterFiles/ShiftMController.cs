using iMAPX.API.Interfaces;
using iMAPX.API.Models.DTOs;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;

namespace iMAPX.API.Controllers.MasterFiles
{
    [Route("api/[controller]")]
    [ApiController]
    public class ShiftMController : ControllerBase
    {
        private readonly IShiftMService _shiftMService;
        public ShiftMController(IShiftMService shiftMService)
            => _shiftMService = shiftMService;

        [HttpPost]
        public async Task<IActionResult> Create([FromBody] ShiftMCreateDto dto)
        {
            var result = await _shiftMService.CreateAsync(dto);
            bool ok = result.IsSuccess;
            string? error = result.ErrorMessage;
            string? success = result.SuccessMessage;

            if (!ok) return BadRequest(new { error });
            return Ok(new { message = success });
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var (shifts, error, success) = await _shiftMService.GetAllShiftMAsync();
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
        public async Task<IActionResult> GetByKey([FromBody] ShiftMRequestDto request)
        {
            if (request == null || request.ID == 0)
                return BadRequest(new { message = "ID is required in the request body." });

            var result = await _shiftMService.GetShiftMAsync(request);
            if (!string.IsNullOrEmpty(result.ErrorMessage))
                return NotFound(new { message = result.ErrorMessage });

            return Ok(new { data = result.ShiftMDto, message = result.SuccessMessage });
        }

        [HttpPut("by-keys")]
        public async Task<IActionResult> UpdateByKey([FromBody] ShiftMUpdateDto dto)
        {
            if (dto == null || dto.ID == 0)
                return BadRequest(new { message = "ID is required in the request body." });
            var result = await _shiftMService.UpdateAsyncByID(dto);
            bool ok = result.IsSuccess;
            string? error = result.ErrorMessage;
            string? success = result.SuccessMessage;
            if (!ok) return BadRequest(new { error });
            return Ok(new { message = success });
        }
    }
}
