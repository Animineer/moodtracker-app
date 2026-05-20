namespace MoodTracker.Api.Validators
{
    public static class MoodValidator
    {
        private static readonly string[]
            ValidMoods =
        {
            "happy",
            "neutral",
            "sad"
        };

        public static bool IsValidMood(
            string mood
        )
        {
            if (string.IsNullOrWhiteSpace(mood))
            {
                return false;
            }

            return ValidMoods.Contains(
                mood.Trim().ToLower()
            );
        }
    }
}