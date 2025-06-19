using iMAPX.API.Data;
using iMAPX.API.Interfaces;
using iMAPX.API.Models.DTOs;
using iMAPX.API.Models.Entities;
using Microsoft.Data.SqlClient;
using Microsoft.EntityFrameworkCore;
using System.Data;

namespace iMAPX.API.Repositories
{
    public class SizeGridRepository : ISizeGridRepository
    {
        private readonly AppDbContext _context;

        public SizeGridRepository(AppDbContext context)
        {
            _context = context;
        }

        public async Task<(bool IsSuccess, string? ErrorMessage, string? SuccessMessage)> CreateAsync(SizeGridCreateDto dto)
        {
            var conn = _context.Database.GetDbConnection();
            if (conn.State != ConnectionState.Open)
                await conn.OpenAsync();

            await using var cmd = conn.CreateCommand();
            cmd.CommandText = "usp_SizeGrid_Create";
            cmd.CommandType = CommandType.StoredProcedure;

            cmd.Parameters.Add(new Microsoft.Data.SqlClient.SqlParameter("@SizeGridCode", dto.SizeGridCode));
            cmd.Parameters.Add(new Microsoft.Data.SqlClient.SqlParameter("@SizeGridName", dto.SizeGridName));
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

        public async Task<(IEnumerable<SizeGrid> SizeGrids, string? ErrorMessage, string? SuccessMessage)> GetAllAsync()
        {
            var errorParam = new SqlParameter("@ErrorMessage", SqlDbType.NVarChar, 500) { Direction = ParameterDirection.Output };
            var successParam = new SqlParameter("@SuccessMessage", SqlDbType.NVarChar, 500) { Direction = ParameterDirection.Output };

            var sizeGrid = await _context.SizeGrids
                .FromSqlRaw("EXEC dbo.usp_SizeGrid_GetAll @ErrorMessage OUTPUT, @SuccessMessage OUTPUT",
                             errorParam, successParam)
                .ToListAsync();

            var errorMsg = errorParam.Value as string;
            var successMsg = successParam.Value as string;

            return (sizeGrid, errorMsg, successMsg);
        }

        public async Task<(SizeGrid? Entity, string? ErrorMessage, string? SuccessMessage)> GetByKeyAsync(string SizeGridCode)
        {
            SizeGrid? entity = null;
            string? error = null,
            success = null;

            using var conn = _context.Database.GetDbConnection();
            using var cmd = conn.CreateCommand();
            cmd.CommandText = "usp_SizeGrid_GetByCode";
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.Add(new SqlParameter("@SizeGridCode", SizeGridCode));

            var pError = new SqlParameter("@ErrorMessage", SqlDbType.NVarChar, 500) { Direction = ParameterDirection.Output };
            var pSuccess = new SqlParameter("@SuccessMessage", SqlDbType.NVarChar, 500) { Direction = ParameterDirection.Output };
            cmd.Parameters.Add(pError);
            cmd.Parameters.Add(pSuccess);

            if (conn.State != ConnectionState.Open)
                await conn.OpenAsync();

            using var reader = await cmd.ExecuteReaderAsync();
            if (await reader.ReadAsync())
            {
                entity = new SizeGrid
                {
                    ID = reader.GetInt32(reader.GetOrdinal("ID")),
                    SizeGridCode = reader.GetString(reader.GetOrdinal("SizeGridCode")),
                    SizeGridName = reader.GetString(reader.GetOrdinal("SizeGridName")),
                    CreatedBy = reader.GetString(reader.GetOrdinal("CreatedBy")),
                    UpdatedBy = reader.GetString(reader.GetOrdinal("UpdatedBy")),
                    UpdatedDate = reader.GetDateTime(reader.GetOrdinal("UpdatedDate")),
                    CreatedDate = reader.GetDateTime(reader.GetOrdinal("CreatedDate")),                  
                };
            }
            reader.Close();

            error = pError.Value as string;
            success = pSuccess.Value as string;
            return (entity, error, success);
        }

        public async Task<(bool IsSuccess, string? ErrorMessage, string? SuccessMessage)> UpdateByKeyAsync(SizeGridUpdateDto dto)
        {
            var conn = _context.Database.GetDbConnection();
            if (conn.State != ConnectionState.Open)
                await conn.OpenAsync();

            await using var cmd = conn.CreateCommand();
            cmd.CommandText = "usp_SizeGrid_Update";
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.Add(new Microsoft.Data.SqlClient.SqlParameter("@ID", dto.ID));
            cmd.Parameters.Add(new Microsoft.Data.SqlClient.SqlParameter("@SizeGridName", dto.SizeGridName));
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
