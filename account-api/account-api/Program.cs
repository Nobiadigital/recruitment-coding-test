using MagnetTradeAccountApi.Models.Transactions;
using Newtonsoft.Json;
using Serilog;
using Serilog.Events;
using Serilog.Formatting.Compact;
using Serilog.Formatting.Json;
using System.Reflection;

namespace MagnetTradeAccountApi
{
    public class Program
    {
        public static IConfiguration Configuration { get; } = new ConfigurationBuilder()
            .SetBasePath(Directory.GetCurrentDirectory())
            .AddJsonFile("appsettings.json", optional: true, reloadOnChange: true)
            .AddJsonFile($"appsettings.{Environment.GetEnvironmentVariable("ASPNETCORE_ENVIRONMENT") ?? "Production"}.json", optional: true)
            .AddEnvironmentVariables()
            .AddUserSecrets(Assembly.GetExecutingAssembly(), true, true)
            .Build();

        public static int Main(string[] args)
        {
            var paymentText = File.ReadAllText(@"C:\Users\dvitk\OneDrive\Desktop\NobiaDigital-Recruitment-coding-test\recruitment-coding-test\account\src\data\Payments.jsx");
            //var newPaymentText = Newtonsoft.Json.JsonConvert.DeserializeObject<TransactionMonth>(paymentText);

            Log.Logger = new LoggerConfiguration()
                .MinimumLevel.Override("System", LogEventLevel.Warning)
                .WriteTo.Console(new JsonFormatter())
                .CreateLogger();

            try
            {
                Log.Information("Starting application");

                var app = CreateWebHostBuilder(args).Build();

                app.Run();

                return 0;
            }
            catch (Exception ex)
            {
                Log.Fatal(ex, "Host terminated unexpectedly");
                return 1;
            }
            finally
            {
                Log.Information("Stopping application");
                Log.CloseAndFlush();
            }
        }

        private static IHostBuilder CreateWebHostBuilder(string[] args) =>
            Host.CreateDefaultBuilder(args)
                .UseSerilog((hostBuilderContext, services, loggerConfiguration) =>
                {
                    if ((Environment.GetEnvironmentVariable("ASPNETCORE_ENVIRONMENT") ?? string.Empty) != "local")
                    {
                        loggerConfiguration.MinimumLevel.Override("System", LogEventLevel.Warning).WriteTo.Console(new CompactJsonFormatter());
                    }
                    else
                    {
                        loggerConfiguration.MinimumLevel.Override("Microsoft.Hosting", LogEventLevel.Information).MinimumLevel.Override("Microsoft.AspNetCore.Hosting", LogEventLevel.Information).WriteTo.Console();
                    }

                    loggerConfiguration.MinimumLevel.Override("Microsoft", LogEventLevel.Warning).Enrich.FromLogContext();
                })
                .ConfigureWebHostDefaults(webBuilder => webBuilder
                .UseStartup<Startup>());
    }
}