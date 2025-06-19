using iMAPX.API.Interfaces;
using iMAPX.API.Repositories;
using iMAPX.API.Services;

namespace iMAPX.API.Infrastructure.DependencyInjection
{
    public static class ServiceCollectionExtensions
    {
        /// <summary>
        /// Registers all application repositories here.
        /// </summary>
        public static IServiceCollection AddRepositories(this IServiceCollection repositories)
        {
            repositories.AddScoped<ISizeRepository, SizeRepository>();

            return repositories;
        }

        /// <summary>
        /// Registers all application services here.
        /// </summary>
        public static IServiceCollection AddServices(this IServiceCollection services)
        {
            services.AddScoped<ISizeService, SizeService>();

            return services;
        }
    }
}
