using System.Data;
using Microsoft.EntityFrameworkCore;
using iMAPX.API.Models.Entities;
using iMAPX.API.Models.DTOs;
using iMAPX.API.Interfaces;
using Microsoft.Data.SqlClient;
using iMAPX.API.Data;

namespace iMAPX.API.Repositories
{
    public class SizeRepository : ISizeRepository
    {
        private readonly AppDbContext _context;

        public SizeRepository(AppDbContext context)
        {
            _context = context;
        }

        public async Task<(bool IsSuccess, string? ErrorMessage, string? SuccessMessage)> CreateAsync(SizeCreateDto dto)
        {
            // 1) Ensure the underlying connection is open
            var conn = _context.Database.GetDbConnection();
            if (conn.State != ConnectionState.Open)
                await conn.OpenAsync();

            await using var cmd = conn.CreateCommand();
            cmd.CommandText = "usp_Size_Create";
            cmd.CommandType = CommandType.StoredProcedure;

            // 2) Input parameters
            cmd.Parameters.Add(new Microsoft.Data.SqlClient.SqlParameter("@SizeGridCode", dto.SizeGridCode));
            cmd.Parameters.Add(new Microsoft.Data.SqlClient.SqlParameter("@Size", dto.Size1));
            cmd.Parameters.Add(new Microsoft.Data.SqlClient.SqlParameter("@SizeDescription", dto.SizeDescription));
            cmd.Parameters.Add(new Microsoft.Data.SqlClient.SqlParameter("@TrnUser", dto.CreatedBy));

            // 3) Output parameters
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

            // 4) Execute
            await cmd.ExecuteNonQueryAsync();

            // 5) Read outs
            var errorMsg = pError.Value as string;
            var successMsg = pSuccess.Value as string;
            var isSuccess = string.IsNullOrEmpty(errorMsg);

            return (isSuccess, errorMsg, successMsg);
        }

        public async Task<(IEnumerable<Size> Sizes, string? ErrorMessage, string? SuccessMessage)> GetAllAsync()
        {
            // Prepare output parameters
            var errorParam = new SqlParameter("@ErrorMessage", SqlDbType.NVarChar, 500) { Direction = ParameterDirection.Output };
            var successParam = new SqlParameter("@SuccessMessage", SqlDbType.NVarChar, 500) { Direction = ParameterDirection.Output };

            // Execute the stored procedure
            var sizes = await _context.Sizes
                .FromSqlRaw("EXEC dbo.usp_Size_GetAll @ErrorMessage OUTPUT, @SuccessMessage OUTPUT",
                             errorParam, successParam)
                .ToListAsync();

            // Read the output values
            var errorMsg = errorParam.Value as string;
            var successMsg = successParam.Value as string;

            return (sizes, errorMsg, successMsg);
        }

        public async Task<(Size? Entity, string? ErrorMessage, string? SuccessMessage)> GetByKeyAsync(string sizeGridCode, string size)
        {
            Size? entity = null;
            string? error = null, success = null;

            using var conn = _context.Database.GetDbConnection();
            using var cmd = conn.CreateCommand();
            cmd.CommandText = "usp_Size_GetByKey";
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.Add(new SqlParameter("@SizeGridCode", sizeGridCode));
            cmd.Parameters.Add(new SqlParameter("@Size", size));

            var pError = new SqlParameter("@ErrorMessage", SqlDbType.NVarChar, 500) { Direction = ParameterDirection.Output };
            var pSuccess = new SqlParameter("@SuccessMessage", SqlDbType.NVarChar, 500) { Direction = ParameterDirection.Output };
            cmd.Parameters.Add(pError);
            cmd.Parameters.Add(pSuccess);

            if (conn.State != ConnectionState.Open)
                await conn.OpenAsync();

            using var reader = await cmd.ExecuteReaderAsync();
            if (await reader.ReadAsync())
            {
                entity = new Size
                {
                    ID = reader.GetDecimal(reader.GetOrdinal("ID")),
                    SizeGridCode = reader.GetString(reader.GetOrdinal("SizeGridCode")),
                    Size1 = reader.GetString(reader.GetOrdinal("Size")),
                    SizeDescription = reader.GetString(reader.GetOrdinal("SizeDescription")),
                    CreatedDate = reader.GetDateTime(reader.GetOrdinal("CreatedDate")),
                    UpdatedDate = reader.GetDateTime(reader.GetOrdinal("UpdatedDate")),
                    CreatedBy = reader.GetString(reader.GetOrdinal("CreatedBy")),
                    UpdatedBy = reader.GetString(reader.GetOrdinal("UpdatedBy"))
                };
            }
            reader.Close();

            error = pError.Value as string;
            success = pSuccess.Value as string;
            return (entity, error, success);
        }
    }
}
