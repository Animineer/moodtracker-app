using Microsoft.EntityFrameworkCore;
using MoodTracker.Api.Data;
using MoodTracker.Api.Services;
using MoodTracker.Api.Middleware;

var builder = WebApplication.CreateBuilder(args);

// Add controller support
builder.Services.AddControllers();

// Register Swagger/OpenAPI
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// Register SQLite database context
builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseSqlite(
        builder.Configuration.GetConnectionString("DefaultConnection")
    )
);

//service registration
builder.Services.AddScoped<MoodService>();

// Enable CORS for React frontend
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowFrontend",
        policy =>
        {
            policy.AllowAnyOrigin()
                  .AllowAnyHeader()
                  .AllowAnyMethod();
        });
});

builder.Services.AddScoped<MoodService>();

builder.Logging.ClearProviders();

builder.Logging.AddConsole();

builder.Services.AddHealthChecks();



var app = builder.Build();

// Swagger middleware
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}
app.UseMiddleware<ExceptionMiddleware>();

app.UseHttpsRedirection();

app.UseCors("AllowFrontend");

app.UseAuthorization();

app.MapControllers();
app.MapHealthChecks("/health");

app.Run();