using iMAPX.API.Data;
using iMAPX.API.Interfaces;
using iMAPX.API.Models.DTOs;
using iMAPX.API.Models.Entities;
using Microsoft.Data.SqlClient;
using Microsoft.EntityFrameworkCore;
using System.Data;

namespace iMAPX.API.Repositories
{
    public class ColorMRepository : IColorMRepository
    {
        private readonly AppDbContext _context;

        public ColorMRepository(AppDbContext context)
        {
            _context = context;
        }
        public async Task<(bool IsSuccess, string? ErrorMessage, string? SuccessMessage)> CreateAsync(ColorMCreateDto dto)
        {
            var conn = _context.Database.GetDbConnection();
            if (conn.State != ConnectionState.Open)
                await conn.OpenAsync();

            await using var cmd = conn.CreateCommand();
            cmd.CommandText = "usp_ColorM_Create";
            cmd.CommandType = CommandType.StoredProcedure;

            cmd.Parameters.Add(new Microsoft.Data.SqlClient.SqlParameter("@ColorCode", dto.ColorCode));
            cmd.Parameters.Add(new Microsoft.Data.SqlClient.SqlParameter("@ColorGridCode", dto.ColorGridCode));
            cmd.Parameters.Add(new Microsoft.Data.SqlClient.SqlParameter("@MasterColorCode", dto.MasterColorCode));
            cmd.Parameters.Add(new Microsoft.Data.SqlClient.SqlParameter("@ColorName", dto.ColorName));
            cmd.Parameters.Add(new Microsoft.Data.SqlClient.SqlParameter("@ColorDescription", dto.ColorDescription));
            cmd.Parameters.Add(new Microsoft.Data.SqlClient.SqlParameter("@CreatedBy", dto.CreatedBy));

            var pError = new Microsoft.Data.SqlClient.SqlParameter("@ErrorMessage", SqlDbType.NVarChar, 500)
            {
                Direction = ParameterDirection.Output
            };
            cmd.Parameters.Add(pError);

            var pSuccess = new Microsoft.Data.SqlClient.SqlParameter("@SuccessMessage", SqlDbType.NVarChar, 500)
            {
                Direction = ParameterDirection.Output
            };
            cmd.Parameters.Add(pSuccess);
            await cmd.ExecuteNonQueryAsync();
            var errorMsg = pError.Value as string;
            var successMsg = pSuccess.Value as string;
            var isSuccess = string.IsNullOrEmpty(errorMsg);

            return (isSuccess, errorMsg, successMsg);
        }
        public async Task<(IEnumerable<ColorM> colorMs, string? ErrorMessage, string? SuccessMessage)> GetAllAsync()
        {
            var errorParam = new SqlParameter("@ErrorMessage", SqlDbType.NVarChar, 500) { Direction = ParameterDirection.Output };
            var successParam = new SqlParameter("@SuccessMessage", SqlDbType.NVarChar, 500) { Direction = ParameterDirection.Output };

            var color = await _context.ColorMs
                .FromSqlRaw("EXEC dbo.usp_ColorM_GetAll @ErrorMessage OUTPUT, @SuccessMessage OUTPUT",
                             errorParam, successParam)
                .ToListAsync();

            var errorMsg = errorParam.Value as string;
            var successMsg = successParam.Value as string;

            return (color, errorMsg, successMsg);
        }
        public async Task<(ColorM? Entity, string? ErrorMessage, string? SuccessMessage)> GetByKeyAsync(string ColorCode)
        {
            ColorM? entity = null;
            string? error = null,
            success = null;

            using var conn = _context.Database.GetDbConnection();
            using var cmd = conn.CreateCommand();
            cmd.CommandText = "usp_ShiftM_GetByCode";
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.Add(new SqlParameter("@ColorCode", ColorCode));

            var pError = new SqlParameter("@ErrorMessage", SqlDbType.NVarChar, 500) { Direction = ParameterDirection.Output };
            var pSuccess = new SqlParameter("@SuccessMessage", SqlDbType.NVarChar, 500) { Direction = ParameterDirection.Output };
            cmd.Parameters.Add(pError);
            cmd.Parameters.Add(pSuccess);

            if (conn.State != ConnectionState.Open)
                await conn.OpenAsync();

            using var reader = await cmd.ExecuteReaderAsync();
            if (await reader.ReadAsync())
            {
                entity = new ColorM
                {
                    ID = reader.GetInt32(reader.GetOrdinal("ID")),
                    ColorCode = reader.GetString(reader.GetOrdinal("ColorCode")),
                    ColorGridCode = reader.GetString(reader.GetOrdinal("CreatedBy")),
                    MasterColorCode = reader.GetString(reader.GetOrdinal("UpdatedBy")),
                    ColorName = reader.GetString(reader.GetOrdinal("StartTime")),
                    ColorDescription = reader.GetString(reader.GetOrdinal("EndTime")),
                    UpdatedDate = reader.GetDateTime(reader.GetOrdinal("UpdatedDate")),
                    CreatedDate = reader.GetDateTime(reader.GetOrdinal("CreatedDate")),
                    CreatedBy = reader.GetString(reader.GetOrdinal("CreatedBy")),
                    UpdatedBy = reader.GetString(reader.GetOrdinal("UpdatedBy")),
                };
            }
            reader.Close();

            error = pError.Value as string;
            success = pSuccess.Value as string;
            return (entity, error, success);
        }
        public async Task<(bool IsSuccess, string? ErrorMessage, string? SuccessMessage)> UpdateByKeyAsync(ColorMUpdateDto dto)
        {
            var conn = _context.Database.GetDbConnection();
            if (conn.State != ConnectionState.Open)
                await conn.OpenAsync();

            await using var cmd = conn.CreateCommand();
            cmd.CommandText = "usp_ShiftM_Update";
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.Add(new Microsoft.Data.SqlClient.SqlParameter("@ColorCode", dto.ColorCode));
            cmd.Parameters.Add(new Microsoft.Data.SqlClient.SqlParameter("@ColorGridCode", dto.ColorGridCode));
            cmd.Parameters.Add(new Microsoft.Data.SqlClient.SqlParameter("@MasterColorCode", dto.MasterColorCode));
            cmd.Parameters.Add(new Microsoft.Data.SqlClient.SqlParameter("@ColorName", dto.ColorName));
            cmd.Parameters.Add(new Microsoft.Data.SqlClient.SqlParameter("@ColorDescription", dto.ColorDescription));
            cmd.Parameters.Add(new Microsoft.Data.SqlClient.SqlParameter("@UpdatedBy", dto.UpdatedBy));

            var pError = new Microsoft.Data.SqlClient.SqlParameter("@ErrorMessage", SqlDbType.NVarChar, 500)
            {
                Direction = ParameterDirection.Output
            };
            cmd.Parameters.Add(pError);

            var pSuccess = new Microsoft.Data.SqlClient.SqlParameter("@SuccessMessage", SqlDbType.NVarChar, 500)
            {
                Direction = ParameterDirection.Output
            };
            cmd.Parameters.Add(pSuccess);
            await cmd.ExecuteNonQueryAsync();
            var errorMsg = pError.Value as string;
            var successMsg = pSuccess.Value as string;
            var isSuccess = string.IsNullOrEmpty(errorMsg);

            return (isSuccess, errorMsg, successMsg);
        }
    }
}
