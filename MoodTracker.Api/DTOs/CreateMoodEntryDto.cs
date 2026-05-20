using System.ComponentModel.DataAnnotations;

namespace MoodTracker.Api.DTOs
{
    // Incoming request payload from frontend
    public class CreateMoodEntryDto
    {
        [Required]
        [MaxLength(20)]
        public string MoodType { get; set; } = string.Empty;

        [MaxLength(250)]
        public string? Note { get; set; }
    }
}