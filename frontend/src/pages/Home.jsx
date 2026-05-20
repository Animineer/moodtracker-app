import { useState } from "react";

import MoodSelector from "../components/MoodSelector/MoodSelector";

import Timeline from "../components/Timeline/Timeline";

import { useMoodEntries } from "../hooks/useMoodEntries";

import TimelineSkeleton from "../components/Timeline/TimelineSkeleton";

function Home() {
    const {
        entries,
        loading,
        error,
        createEntry,
    } = useMoodEntries();

    const [selectedMood, setSelectedMood] =
        useState("");

    const [note, setNote] = useState("");

    const handleSubmit = async () => {
        if (!selectedMood) return;

        await createEntry({
            moodType: selectedMood,
            note,
        });

        // Reset form after submit
        setSelectedMood("");
        setNote("");
    };

    return (
        <div className="home-page">
            <div className="hero-section">
                <h1>Mood Tracker</h1>

                <p>
                    Capture how you feel today and
                    revisit your emotional timeline.
                </p>
            </div>
            {error && (
                <div className="error">
                    {error}
                </div>
            )}

            <MoodSelector
                selectedMood={selectedMood}
                onSelectMood={setSelectedMood}
                onSubmit={handleSubmit}
            />

            <textarea
                placeholder="Optional note..."
                value={note}
                onChange={(e) =>
                    setNote(e.target.value)
                }
            />

            {loading ? (
                <TimelineSkeleton />
            ) : (
                <Timeline entries={entries} />
            )}
        </div>
    );
}

export default Home;