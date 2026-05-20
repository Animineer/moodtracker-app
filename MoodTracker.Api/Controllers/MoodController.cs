using Microsoft.AspNetCore.Mvc;
using MoodTracker.Api.DTOs;
using MoodTracker.Api.Models;
using MoodTracker.Api.Services;
using MoodTracker.Api.Validators;

namespace MoodTracker.Api.Controllers
{
    // Base route:
    // /api/mood
    [ApiController]
    [Route("api/[controller]")]
    public class MoodController : ControllerBase
    {
        private readonly MoodService _moodService;

        // Dependency injection
        public MoodController(MoodService moodService)
        {
            _moodService = moodService;
        }

        // POST: /api/mood
        [HttpPost]
        public async Task<IActionResult> CreateMood(
            [FromBody] CreateMoodEntryDto dto
        )
        {
            try
            {
                // Validate model annotations
                if (!ModelState.IsValid)
                {
                    return BadRequest(ModelState);
                }

                // Validate allowed moods
                if (!MoodValidator.IsValidMood(dto.MoodType))
                {
                    return BadRequest(new
                    {
                        message = "Invalid mood type."
                    });
                }

                // Map DTO -> Entity
                var moodEntry = new MoodEntry
                {
                    MoodType = dto.MoodType.ToLower(),
                    Note = dto.Note,
                    CreatedAt = DateTime.UtcNow
                };

                // Save entry
                var createdEntry =
                    await _moodService.CreateMoodAsync(moodEntry);

                // Map Entity -> Response DTO
                var response = new MoodEntryResponseDto
                {
                    Id = createdEntry.Id,
                    MoodType = createdEntry.MoodType,
                    Note = createdEntry.Note,
                    CreatedAt = createdEntry.CreatedAt
                };

                // Return HTTP 201 Created
                return Created("", response);
            }
            catch (Exception ex)
            {
                // Log later using ILogger

                return StatusCode(500, new
                {
                    message = "Internal server error.",
                    error = ex.Message
                });
            }
        }

        // GET: /api/mood
        [HttpGet]
        public async Task<IActionResult> GetLatestMoods()
        {
            try
            {
                var moods =
                    await _moodService.GetLatestMoodsAsync();

                // Convert entities -> DTOs
                var response = moods.Select(m => new MoodEntryResponseDto
                {
                    Id = m.Id,
                    MoodType = m.MoodType,
                    Note = m.Note,
                    CreatedAt = m.CreatedAt
                });

                return Ok(response);
            }
            catch (Exception ex)
            {
                return StatusCode(500, new
                {
                    message = "Internal server error.",
                    error = ex.Message
                });
            }
        }
    }
}