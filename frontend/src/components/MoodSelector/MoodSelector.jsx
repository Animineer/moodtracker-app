import { moods } from "../../constants/moods";

import MoodFace from "../MoodFace/MoodFace";

function MoodSelector({
  selectedMood,
  onSelectMood,
  onSubmit,
}) {
  return (
    <div className="mood-selector">
      <h2>Select Your Mood</h2>

      <div className="mood-options">
        {moods.map((mood) => (
          <button
            key={mood.type}
            onClick={() =>
              onSelectMood(mood.type)
            }
            className={
              selectedMood === mood.type
                ? "selected"
                : ""
            }
          >
            {/* Custom SVG face */}
            <MoodFace
              mood={mood.type}
              size={90}
            />

            <span>{mood.label}</span>
          </button>
        ))}
      </div>

      <button
        disabled={!selectedMood}
        onClick={onSubmit}
      >
        Save Mood
      </button>
    </div>
  );
}

export default MoodSelector;