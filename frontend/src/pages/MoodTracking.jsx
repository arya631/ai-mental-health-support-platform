import { useState } from "react";
import "./MoodTracking.css";

function MoodTracking() {
  const moods = [
    {
      name: "Very Happy",
      emoji: "😄",
      value: 5,
    },
    {
      name: "Happy",
      emoji: "🙂",
      value: 4,
    },
    {
      name: "Okay",
      emoji: "😐",
      value: 3,
    },
    {
      name: "Sad",
      emoji: "😔",
      value: 2,
    },
    {
      name: "Very Sad",
      emoji: "😞",
      value: 1,
    },
  ];

  const [selectedMood, setSelectedMood] = useState("");
  const [note, setNote] = useState("");

  const [moodHistory, setMoodHistory] = useState(() => {
    const savedMoods = localStorage.getItem("moodHistory");

    return savedMoods ? JSON.parse(savedMoods) : [];
  });

  const handleSaveMood = (e) => {
    e.preventDefault();

    if (!selectedMood) {
      alert("Please select your mood.");
      return;
    }

    const mood = moods.find(
      (item) => item.name === selectedMood
    );

    const newEntry = {
      id: Date.now(),
      mood: mood.name,
      emoji: mood.emoji,
      value: mood.value,
      note: note.trim(),
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    const updatedHistory = [
      newEntry,
      ...moodHistory,
    ];

    setMoodHistory(updatedHistory);

    localStorage.setItem(
      "moodHistory",
      JSON.stringify(updatedHistory)
    );

    setSelectedMood("");
    setNote("");

    alert("Your mood has been recorded successfully! 💙");
  };

  const deleteMood = (id) => {
    const updatedHistory = moodHistory.filter(
      (entry) => entry.id !== id
    );

    setMoodHistory(updatedHistory);

    localStorage.setItem(
      "moodHistory",
      JSON.stringify(updatedHistory)
    );
  };

  const getMoodMessage = () => {
    if (moodHistory.length === 0) {
      return "Start tracking your mood to understand your emotional patterns.";
    }

    const average =
      moodHistory.reduce(
        (total, entry) => total + entry.value,
        0
      ) / moodHistory.length;

    if (average >= 4) {
      return "Your recent mood entries look generally positive. Keep taking care of yourself! 🌱";
    }

    if (average >= 3) {
      return "Your recent mood entries are mixed. Remember to take breaks and do things that help you feel comfortable.";
    }

    return "Your recent entries show some difficult moods. Consider talking to someone you trust if you feel you need support. 💙";
  };

  return (
    <div className="mood-page">

      <div className="mood-container">

        {/* Header */}

        <div className="mood-header">

          <div className="mood-icon">
            🌈
          </div>

          <h1>Mood Tracker</h1>

          <p>
            Take a moment to check in with yourself.
          </p>

        </div>

        {/* Mood Form */}

        <div className="mood-card">

          <h2>How are you feeling today?</h2>

          <p className="mood-subtitle">
            Select the mood that best describes how you feel.
          </p>

          <form onSubmit={handleSaveMood}>

            <div className="mood-options">

              {moods.map((mood) => (
                <button
                  type="button"
                  key={mood.name}
                  className={`mood-option ${
                    selectedMood === mood.name
                      ? "selected"
                      : ""
                  }`}
                  onClick={() =>
                    setSelectedMood(mood.name)
                  }
                >
                  <span className="mood-emoji">
                    {mood.emoji}
                  </span>

                  <span className="mood-name">
                    {mood.name}
                  </span>
                </button>
              ))}

            </div>

            {/* Note */}

            <div className="note-section">

              <label>
                Add a note <span>(optional)</span>
              </label>

              <textarea
                value={note}
                onChange={(e) =>
                  setNote(e.target.value)
                }
                placeholder="What made you feel this way today?"
                maxLength="300"
                rows="4"
              ></textarea>

              <small>
                {note.length}/300 characters
              </small>

            </div>

            <button
              type="submit"
              className="save-mood-btn"
            >
              💾 Save Mood
            </button>

          </form>

        </div>

        {/* Mood Summary */}

        <div className="summary-card">

          <div className="summary-icon">
            💙
          </div>

          <div>
            <h3>Mood Summary</h3>

            <p>
              {getMoodMessage()}
            </p>
          </div>

        </div>

        {/* Mood History */}

        <div className="history-card">

          <div className="history-header">

            <div>
              <h2>Mood History</h2>

              <p>
                Your previous mood entries
              </p>
            </div>

            <span className="entry-count">
              {moodHistory.length} entries
            </span>

          </div>

          {moodHistory.length === 0 ? (

            <div className="empty-history">

              <div>📊</div>

              <h3>No mood entries yet</h3>

              <p>
                Your saved moods will appear here.
              </p>

            </div>

          ) : (

            <div className="history-list">

              {moodHistory.map((entry) => (

                <div
                  className="history-item"
                  key={entry.id}
                >

                  <div className="history-mood">

                    <span className="history-emoji">
                      {entry.emoji}
                    </span>

                    <div>
                      <h3>{entry.mood}</h3>

                      <p>
                        {entry.date} • {entry.time}
                      </p>
                    </div>

                  </div>

                  {entry.note && (
                    <div className="history-note">
                      <strong>Note:</strong>{" "}
                      {entry.note}
                    </div>
                  )}

                  <button
                    className="delete-btn"
                    onClick={() =>
                      deleteMood(entry.id)
                    }
                  >
                    🗑️
                  </button>

                </div>

              ))}

            </div>

          )}

        </div>

      </div>

    </div>
  );
}

export default MoodTracking;