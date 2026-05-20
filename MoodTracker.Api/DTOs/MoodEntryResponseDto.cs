namespace MoodTracker.Api.DTOs
{
    // Outgoing API response model
    public class MoodEntryResponseDto
    {
        public int Id { get; set; }

        public string MoodType { get; set; } = string.Empty;

        public string? Note { get; set; }

        public DateTime CreatedAt { get; set; }
    }
}