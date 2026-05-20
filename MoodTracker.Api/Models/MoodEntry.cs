using System.ComponentModel.DataAnnotations;

namespace MoodTracker.Api.Models
{
    // Represents a mood entry stored in the database
    public class MoodEntry
    {
        // Primary key
        public int Id { get; set; }

        // Mood type:
        // happy, neutral, sad
        [Required]
        [MaxLength(20)]
        public string MoodType { get; set; } = string.Empty;

        // Optional user note
        [MaxLength(250)]
        public string? Note { get; set; }

        // UTC timestamp for consistency
        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
    }
}