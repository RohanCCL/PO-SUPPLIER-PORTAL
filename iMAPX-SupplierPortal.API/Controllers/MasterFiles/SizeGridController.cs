using iMAPX.API.Interfaces;
using iMAPX.API.Models.DTOs;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace iMAPX.API.Controllers.MasterFiles
{
    [Route("api/[controller]")]
    [ApiController]
    public class SizeGridController : ControllerBase
    {
        private readonly ISizeGridService _sizeGridService;
        public SizeGridController(ISizeGridService sizeGridService)
            => _sizeGridService = sizeGridService;

        [HttpPost]
        public async Task<IActionResult> Create([FromBody] SizeGridCreateDto dto)
        {
            var result = await _sizeGridService.CreateAsync(dto);
            bool ok = result.IsSuccess;
            string? error = result.ErrorMessage;
            string? success = result.SuccessMessage;

            if (!ok) return BadRequest(new { error });
            return Ok(new { message = success });
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var (sizeGrids, error, success) = await _sizeGridService.GetAllSizesAsync();
            var list = sizeGrids;

            if (!string.IsNullOrEmpty(error) && list is not { } || list.Any() is false)
                return NotFound(new { Message = error });

            return Ok(new
            {
                Message = success,
                Data = sizeGrids
            });
        }

        [HttpPost("by-key")]
        public async Task<IActionResult> GetByKey([FromBody] SizeGridRequestDto request)
        {
            if (request == null || string.IsNullOrEmpty(request.SizeGridCode))
                return BadRequest(new { message = "ID is required in the request body." });

            var result = await _sizeGridService.GetSizeAsync(request);
            if (!string.IsNullOrEmpty(result.ErrorMessage))
                return NotFound(new { message = result.ErrorMessage });

            return Ok(new { data = result.Data, message = result.SuccessMessage });
        }

        [HttpPut("by-keys")]
        public async Task<IActionResult> UpdateByKey([FromBody] SizeGridUpdateDto dto)
        {
            if (dto == null || dto.ID == 0)
                return BadRequest(new { message = "ID is required in the request body." });
            var result = await _sizeGridService.UpdateAsyncByID(dto);
            bool ok = result.IsSuccess;
            string? error = result.ErrorMessage;
            string? success = result.SuccessMessage;
            if (!ok) return BadRequest(new { error });
            return Ok(new { message = success });
        }
    }
}
