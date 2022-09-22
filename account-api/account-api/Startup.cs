using MagnetTradeAccountApi.Injected;
using Microsoft.OpenApi.Models;
using Swashbuckle.AspNetCore.SwaggerUI;

namespace MagnetTradeAccountApi
{
    public class Startup
    {
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddControllers();
            services.AddHttpContextAccessor();

            /* Solution 3: Register service for DI */
            services.AddSingleton<IThisIsInjected, ThisIsInjected>();

            services.AddSingleton<ITransactionService, TransactionService>();

            services.AddCors(options =>
            {
                options.AddPolicy("AllowAllOrigins", builder =>
                {
                    builder.AllowAnyOrigin()
                            .AllowAnyHeader()
                            .AllowAnyMethod();
                });
            });

            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo
                {
                    Title = "Magnet Trade Account API",
                    Version = "v1",
                });
            });
        }

        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            app.UseRouting();
            app.UseCors("AllowAllOrigins");
            app.UseAuthentication();
            app.UseAuthorization();

            app.UseEndpoints(configure =>
            {
                configure.MapControllers();
                configure.MapGet("/api/healthcheck", () => "OK");
                configure.MapGet("/", async context => await context.Response.WriteAsync($"magnet-trade-account-api {env.EnvironmentName}"));
            });

            app.UseSwagger();
            app.UseSwaggerUI(c =>
            {
                c.ConfigObject.DocExpansion = DocExpansion.None;
                c.ConfigObject.DeepLinking = true;
                c.SwaggerEndpoint("/swagger/v1/swagger.json", "Magnet Trade Account API V1");
            });
        }
    }
}