using Microsoft.EntityFrameworkCore;
using MoodTracker.Api.Models;

namespace MoodTracker.Api.Data
{
    // Main EF Core database context
    public class AppDbContext : DbContext
    {
        // Constructor required by EF Core
        public AppDbContext(DbContextOptions<AppDbContext> options)
            : base(options)
        {
        }

        // Represents MoodEntries table
        public DbSet<MoodEntry> MoodEntries => Set<MoodEntry>();

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            // Additional database constraints/configuration
            modelBuilder.Entity<MoodEntry>()
                .Property(m => m.MoodType)
                .IsRequired();

            // Index improves sorting/filter performance
            modelBuilder.Entity<MoodEntry>()
                .HasIndex(m => m.CreatedAt);
        }
    }
}