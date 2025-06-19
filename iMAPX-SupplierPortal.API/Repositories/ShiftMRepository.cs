using iMAPX.API.Data;
using iMAPX.API.Interfaces;
using iMAPX.API.Models.DTOs;
using iMAPX.API.Models.Entities;
using Microsoft.Data.SqlClient;
using Microsoft.EntityFrameworkCore;
using System.Data;
using System.Drawing;

namespace iMAPX.API.Repositories
{
    public class ShiftMRepository : IShiftMRepository
    {
        private readonly AppDbContext _context;

        public ShiftMRepository(AppDbContext context)
        {
            _context = context;
        }

        public async Task<(bool IsSuccess, string? ErrorMessage, string? SuccessMessage)> CreateAsync(ShiftMCreateDto dto)
        {
            var conn = _context.Database.GetDbConnection();
            if (conn.State != ConnectionState.Open)
                await conn.OpenAsync();

            await using var cmd = conn.CreateCommand();
            cmd.CommandText = "usp_ShiftM_Create";
            cmd.CommandType = CommandType.StoredProcedure;

            cmd.Parameters.Add(new Microsoft.Data.SqlClient.SqlParameter("@Shift", dto.Shift));
            cmd.Parameters.Add(new Microsoft.Data.SqlClient.SqlParameter("@TrnUser", dto.CreatedBy));
            cmd.Parameters.Add(new Microsoft.Data.SqlClient.SqlParameter("@StartTime", dto.StartTime));
            cmd.Parameters.Add(new Microsoft.Data.SqlClient.SqlParameter("@EndTime", dto.EndTime));

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

        public async Task<(IEnumerable<ShiftM> shiftMs, string? ErrorMessage, string? SuccessMessage)> GetAllAsync()
        {
            var errorParam = new SqlParameter("@ErrorMessage", SqlDbType.NVarChar, 500) { Direction = ParameterDirection.Output };
            var successParam = new SqlParameter("@SuccessMessage", SqlDbType.NVarChar, 500) { Direction = ParameterDirection.Output };

            var shift = await _context.ShiftMs
                .FromSqlRaw("EXEC dbo.usp_ShiftM_GetAll @ErrorMessage OUTPUT, @SuccessMessage OUTPUT",
                             errorParam, successParam)
                .ToListAsync();

            var errorMsg = errorParam.Value as string;
            var successMsg = successParam.Value as string;

            return (shift, errorMsg, successMsg);
        }

        public async Task<(ShiftM? Entity, string? ErrorMessage, string? SuccessMessage)> GetByKeyAsync(int ID)
        {
            ShiftM? entity = null;
            string? error = null, 
            success = null;

            using var conn = _context.Database.GetDbConnection();
            using var cmd = conn.CreateCommand();
            cmd.CommandText = "usp_ShiftM_GetByID";
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.Add(new SqlParameter("@ID", ID));

            var pError = new SqlParameter("@ErrorMessage", SqlDbType.NVarChar, 500) { Direction = ParameterDirection.Output };
            var pSuccess = new SqlParameter("@SuccessMessage", SqlDbType.NVarChar, 500) { Direction = ParameterDirection.Output };
            cmd.Parameters.Add(pError);
            cmd.Parameters.Add(pSuccess);

            if (conn.State != ConnectionState.Open)
                await conn.OpenAsync();

            using var reader = await cmd.ExecuteReaderAsync();
            if (await reader.ReadAsync())
            {
                entity = new ShiftM
                {
                    ID = reader.GetInt32(reader.GetOrdinal("ID")),
                    Shift = reader.GetString(reader.GetOrdinal("Shift")),
                    CreatedBy = reader.GetString(reader.GetOrdinal("CreatedBy")),
                    UpdatedBy = reader.GetString(reader.GetOrdinal("UpdatedBy")),           
                    StartTime = TimeOnly.FromTimeSpan((TimeSpan)reader.GetValue(reader.GetOrdinal("StartTime"))),
                    EndTime = TimeOnly.FromTimeSpan((TimeSpan)reader.GetValue(reader.GetOrdinal("EndTime"))),
                    UpdatedDate = reader.GetDateTime(reader.GetOrdinal("UpdatedDate")),
                    CreatedDate = reader.GetDateTime(reader.GetOrdinal("CreatedDate")),  
                    Active = reader.GetBoolean(reader.GetOrdinal("Active"))
                };
            }
            reader.Close();

            error = pError.Value as string;
            success = pSuccess.Value as string;
            return (entity, error, success);
        }

        public async Task<(bool IsSuccess, string? ErrorMessage, string? SuccessMessage)> UpdateByKeyAsync(ShiftMUpdateDto dto)
        {
            var conn = _context.Database.GetDbConnection();
            if (conn.State != ConnectionState.Open)
                await conn.OpenAsync();

            await using var cmd = conn.CreateCommand();
            cmd.CommandText = "usp_ShiftM_Update";
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.Add(new Microsoft.Data.SqlClient.SqlParameter("@ID", dto.ID));
            cmd.Parameters.Add(new Microsoft.Data.SqlClient.SqlParameter("@Shift", dto.Shift));
            cmd.Parameters.Add(new Microsoft.Data.SqlClient.SqlParameter("@UpdatedBy", dto.UpdatedBy));
            cmd.Parameters.Add(new Microsoft.Data.SqlClient.SqlParameter("@StartTime", dto.StartTime));
            cmd.Parameters.Add(new Microsoft.Data.SqlClient.SqlParameter("@EndTime", dto.EndTime));
            cmd.Parameters.Add(new Microsoft.Data.SqlClient.SqlParameter("@Active", dto.Active));

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
