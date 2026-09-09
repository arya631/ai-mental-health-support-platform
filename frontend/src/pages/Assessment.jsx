import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Assessment.css";

function Assessment() {
  const navigate = useNavigate();

  const questions = [
    {
      question: "How often do you feel stressed because of your studies?",
      options: [
        { text: "Rarely", score: 1 },
        { text: "Sometimes", score: 2 },
        { text: "Often", score: 3 },
      ],
    },
    {
      question: "How often do you find it difficult to concentrate on your studies?",
      options: [
        { text: "Rarely", score: 1 },
        { text: "Sometimes", score: 2 },
        { text: "Often", score: 3 },
      ],
    },
    {
      question: "How often do you feel worried or nervous?",
      options: [
        { text: "Rarely", score: 1 },
        { text: "Sometimes", score: 2 },
        { text: "Often", score: 3 },
      ],
    },
    {
      question: "How often do you have difficulty relaxing?",
      options: [
        { text: "Rarely", score: 1 },
        { text: "Sometimes", score: 2 },
        { text: "Often", score: 3 },
      ],
    },
    {
      question: "How often do you feel that your sleep is affected by stress?",
      options: [
        { text: "Rarely", score: 1 },
        { text: "Sometimes", score: 2 },
        { text: "Often", score: 3 },
      ],
    },
    {
      question: "How often do you feel overwhelmed by your responsibilities?",
      options: [
        { text: "Rarely", score: 1 },
        { text: "Sometimes", score: 2 },
        { text: "Often", score: 3 },
      ],
    },
    {
      question: "How often do you find it difficult to manage your emotions?",
      options: [
        { text: "Rarely", score: 1 },
        { text: "Sometimes", score: 2 },
        { text: "Often", score: 3 },
      ],
    },
    {
      question: "How often do you feel pressure during exams or assignments?",
      options: [
        { text: "Rarely", score: 1 },
        { text: "Sometimes", score: 2 },
        { text: "Often", score: 3 },
      ],
    },
    {
      question: "How often do you avoid talking to others when you are having a difficult day?",
      options: [
        { text: "Rarely", score: 1 },
        { text: "Sometimes", score: 2 },
        { text: "Often", score: 3 },
      ],
    },
    {
      question: "How often do you feel that you need some extra support?",
      options: [
        { text: "Rarely", score: 1 },
        { text: "Sometimes", score: 2 },
        { text: "Often", score: 3 },
      ],
    },
  ];

  const [answers, setAnswers] = useState(
    Array(questions.length).fill(null)
  );

  const [score, setScore] = useState(null);

  const handleAnswer = (questionIndex, value) => {
    const updatedAnswers = [...answers];
    updatedAnswers[questionIndex] = Number(value);
    setAnswers(updatedAnswers);
  };

  const calculateScore = () => {
    if (answers.includes(null)) {
      alert("Please answer all questions before submitting.");
      return;
    }

    const totalScore = answers.reduce(
      (total, currentScore) => total + currentScore,
      0
    );

    setScore(totalScore);

    // Save assessment score for Personalized Resources
    localStorage.setItem(
      "assessmentScore",
      totalScore
    );
  };

  const getResult = () => {
    if (score >= 10 && score <= 13) {
      return {
        title: "🌱 You are doing well",
        message:
          "Your responses suggest that you are managing many areas reasonably well. Continue taking care of your well-being and maintaining healthy habits.",
        className: "low-score",
      };
    }

    if (score >= 14 && score <= 22) {
      return {
        title: "💙 Some areas may need attention",
        message:
          "Your responses suggest that you may be experiencing some challenges. Exploring the recommended resources may help you develop healthy coping and study habits.",
        className: "medium-score",
      };
    }

    return {
      title: "🌼 Consider seeking additional support",
      message:
        "Your responses suggest that some areas may be affecting your well-being. Consider exploring the recommended resources and talking with a trusted person or qualified professional if you feel you need support.",
      className: "high-score",
    };
  };

  return (
    <div className="assessment-page">
      <div className="assessment-container">

        <div className="assessment-header">
          <div className="assessment-icon">🧠</div>

          <h1>Well-being Assessment</h1>

          <p>
            Answer the following questions honestly based
            on how you have been feeling recently.
          </p>
        </div>

        <div className="assessment-note">
          <strong>ℹ️ Please Note</strong>
          <p>
            This assessment is for self-reflection only.
            It is not a medical diagnosis.
          </p>
        </div>

        {!score && (
          <div className="questions-container">

            {questions.map((item, index) => (
              <div
                className="question-card"
                key={index}
              >
                <h3>
                  {index + 1}. {item.question}
                </h3>

                <div className="options">
                  {item.options.map((option) => (
                    <label
                      className="option"
                      key={option.score}
                    >
                      <input
                        type="radio"
                        name={`question-${index}`}
                        value={option.score}
                        checked={
                          answers[index] === option.score
                        }
                        onChange={(e) =>
                          handleAnswer(
                            index,
                            e.target.value
                          )
                        }
                      />

                      <span>{option.text}</span>
                    </label>
                  ))}
                </div>
              </div>
            ))}

            <button
              className="submit-assessment-btn"
              onClick={calculateScore}
            >
              Submit Assessment
            </button>

          </div>
        )}

        {score !== null && (
          <div className="result-section">

            <div className={`result-card ${getResult().className}`}>

              <div className="result-icon">
                ✨
              </div>

              <h2>
                Assessment Completed
              </h2>

              <div className="score-display">
                {score}
                <span>/30</span>
              </div>

              <h3>
                {getResult().title}
              </h3>

              <p>
                {getResult().message}
              </p>

            </div>

            <div className="result-actions">

              <button
                className="resource-btn"
                onClick={() =>
                  navigate("/resources")
                }
              >
                🌱 View Personalized Resources
              </button>

              <button
                className="appointment-btn"
                onClick={() =>
                  navigate("/appointment")
                }
              >
                📅 Book an Appointment
              </button>

            </div>

            <button
              className="retake-btn"
              onClick={() => {
                setAnswers(
                  Array(questions.length).fill(null)
                );
                setScore(null);
              }}
            >
              Retake Assessment
            </button>

          </div>
        )}

      </div>
    </div>
  );
}

export default Assessment;