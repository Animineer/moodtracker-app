using Microsoft.EntityFrameworkCore;
using MoodTracker.Api.Data;
using MoodTracker.Api.Models;

namespace MoodTracker.Api.Services
{
    public class MoodService
    {
        private readonly AppDbContext _context;

        public MoodService(AppDbContext context)
        {
            _context = context;
        }

        // Save new mood entry
        public async Task<MoodEntry> CreateMoodAsync(MoodEntry entry)
        {
            _context.MoodEntries.Add(entry);

            await _context.SaveChangesAsync();

            return entry;
        }

        // Fetch latest 7 moods
        public async Task<List<MoodEntry>> GetLatestMoodsAsync()
        {
            return await _context.MoodEntries
                .OrderByDescending(m => m.CreatedAt)
                .Take(7)
                .ToListAsync();
        }
    }
}