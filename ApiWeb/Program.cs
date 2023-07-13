using EntityFCore.Interfaces;
using LogicaNegocio.Logica;
using LogicaNegocio.Propiedades;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Hosting;
var builder = WebApplication.CreateBuilder(args);
// Add services to the container.
//configure services desde startup
builder.Services.AddDbContext<MyDbContext>(opt =>
{

    opt.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")
    );
});
builder.Services.AddTransient<IPersona, PersonaL>();
builder.Services.AddTransient<IDireccion, DireccionL>();
builder.Services.AddControllers();
builder.Services.AddCors(opt =>
{
    opt.AddPolicy("ReglaCors", rule =>
    {
        rule.AllowAnyHeader().AllowAnyMethod().WithOrigins("*");
    });
});
var app = builder.Build();
using (var scope = app.Services.CreateScope())
{
    var services = scope.ServiceProvider;
    var loggerFactory = services.GetRequiredService<ILoggerFactory>();
    try
    {
        var context = services.GetRequiredService<MyDbContext>();
        await context.Database.MigrateAsync();
    }
    catch (Exception e)
    {
        var logger = loggerFactory.CreateLogger<Program>();
        logger.LogError(e, "Errores de Migración");
    }
}
// Configure the HTTP request pipeline.
app.UseCors("ReglaCors");//2023
app.UseAuthorization();
app.MapControllers();
app.Run();