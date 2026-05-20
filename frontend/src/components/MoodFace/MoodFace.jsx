function MoodFace({
    mood,
    size = 100,
    animated = false,
}) {
    // Shared face styles
    const faceColors = {
        happy: "#FFD93D",
        neutral: "#74C0FC",
        sad: "#748FFC",
    };

    // SVG dimensions
    const center = size / 2;

    // Default geometry
    let mouth;
    let eyebrows;

    // Expression geometry
    switch (mood) {
        case "happy":
            // Upward smile curve
            mouth = (
                <path
                    d="
            M 30 60
            Q 50 80 70 60
          "
                    stroke="#222"
                    strokeWidth="4"
                    fill="transparent"
                    strokeLinecap="round"
                />
            );

            eyebrows = (
                <>
                    <line
                        x1="25"
                        y1="28"
                        x2="38"
                        y2="24"
                        stroke="#222"
                        strokeWidth="3"
                        strokeLinecap="round"
                    />

                    <line
                        x1="62"
                        y1="24"
                        x2="75"
                        y2="28"
                        stroke="#222"
                        strokeWidth="3"
                        strokeLinecap="round"
                    />
                </>
            );

            break;

        case "sad":
            // Downward mouth curve
            mouth = (
                <path
                    d="
            M 30 72
            Q 50 50 70 72
          "
                    stroke="#222"
                    strokeWidth="4"
                    fill="transparent"
                    strokeLinecap="round"
                />
            );

            eyebrows = (
                <>
                    <line
                        x1="24"
                        y1="26"
                        x2="40"
                        y2="32"
                        stroke="#222"
                        strokeWidth="3"
                        strokeLinecap="round"
                    />

                    <line
                        x1="60"
                        y1="32"
                        x2="76"
                        y2="26"
                        stroke="#222"
                        strokeWidth="3"
                        strokeLinecap="round"
                    />
                </>
            );

            break;

        default:
            // Neutral straight mouth
            mouth = (
                <line
                    x1="35"
                    y1="65"
                    x2="65"
                    y2="65"
                    stroke="#222"
                    strokeWidth="4"
                    strokeLinecap="round"
                />
            );

            eyebrows = (
                <>
                    <line
                        x1="25"
                        y1="26"
                        x2="40"
                        y2="26"
                        stroke="#222"
                        strokeWidth="3"
                        strokeLinecap="round"
                    />

                    <line
                        x1="60"
                        y1="26"
                        x2="75"
                        y2="26"
                        stroke="#222"
                        strokeWidth="3"
                        strokeLinecap="round"
                    />
                </>
            );
    }

    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 100 100"
            className={
                animated
                    ? `mood-face animated ${mood}`
                    : "mood-face"
            }
        >
            {/* Face circle */}
            <circle
                cx={center}
                cy={center}
                r="45"
                fill={faceColors[mood]}
            />

            {/* Eyebrows */}
            {eyebrows}

            {/* Left eye */}
            <circle
                cx="35"
                cy="42"
                r="5"
                fill="#222"
            />

            {/* Right eye */}
            <circle
                cx="65"
                cy="42"
                r="5"
                fill="#222"
            />

            {/* Mouth */}
            {mouth}
        </svg>
    );
}

export default MoodFace;