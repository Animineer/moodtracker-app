import { useState } from "react";

import MoodFace from "../MoodFace/MoodFace";

import { moods } from "../../constants/moods";

function Timeline({ entries }) {
    // Track currently animated card
    const [activeId, setActiveId] =
        useState(null);

    const getMoodColor = (moodType) => {
        return moods.find(
            (m) => m.type === moodType
        )?.color;
    };
   
    const handleCardClick = (id) => {
        // Trigger animation
        setActiveId(id);

        // Reset animation state
        setTimeout(() => {
            setActiveId(null);
        }, 700);
    };

    return (
        <div className="timeline-container">
        {entries.length<0 &&<div className="empty-state">
                                <h3>No mood entries yet</h3>

                                <p>
                                    Start tracking your emotions
                                    by selecting a mood above.
                                </p>
                            </div>}
            <h2>Past 7 Entries</h2>

            <div className="timeline-scroll">
                {entries.map((entry) => {
                    const isActive =
                        activeId === entry.id;

                    return (
                        <div
                            key={entry.id}
                            role="button"
                            tabIndex={0}
                            onClick={() =>
                                handleCardClick(entry.id)
                            }

                            onKeyDown={(e) => {
                                if (e.key === "Enter") {
                                    handleCardClick(entry.id);
                                }
                            }}
                            className={
                                isActive
                                    ? "timeline-card active"
                                    : "timeline-card"
                            }
                            style={{
                                borderTop: `6px solid ${getMoodColor(
                                    entry.moodType
                                )}`,
                            }}
                        >
                            {/* Animated SVG face */}
                            <MoodFace
                                mood={entry.moodType}
                                size={80}
                                animated={isActive}
                            />

                            


                            <div className="timeline-date">
                                {new Date(
                                    entry.createdAt
                                ).toLocaleDateString()}
                            </div>

                            {entry.note && (
                                <p>{entry.note}</p>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Timeline;