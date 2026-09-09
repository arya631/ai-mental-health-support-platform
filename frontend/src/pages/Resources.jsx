import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Resources.css";

function Resources() {
  const navigate = useNavigate();

  const [score, setScore] = useState(null);
  const [level, setLevel] = useState("");
  const [selectedCategory, setSelectedCategory] =
    useState("All");

  const allResources = [
    {
      id: 1,
      title: "Managing Study Stress",
      category: "Study Stress",
      icon: "📚",
      description:
        "Simple strategies to manage academic pressure, organize your studies and take healthy breaks.",
      type: "Guide",
      levels: ["medium", "high"],
    },
    {
      id: 2,
      title: "Understanding Anxiety",
      category: "Anxiety",
      icon: "😟",
      description:
        "Learn about common feelings of worry and explore simple ways to manage stressful moments.",
      type: "Article",
      levels: ["medium", "high"],
    },
    {
      id: 3,
      title: "Better Sleep Habits",
      category: "Sleep",
      icon: "😴",
      description:
        "Explore healthy sleep habits and create a relaxing routine before bedtime.",
      type: "Guide",
      levels: ["medium", "high"],
    },
    {
      id: 4,
      title: "Mindfulness Basics",
      category: "Mindfulness",
      icon: "🧘",
      description:
        "Learn simple mindfulness techniques that can help you pause, breathe and focus on the present.",
      type: "Activity",
      levels: ["low", "medium", "high"],
    },
    {
      id: 5,
      title: "Understanding Your Emotions",
      category: "Emotional Well-being",
      icon: "💙",
      description:
        "Learn how to recognize your emotions and express them in healthy ways.",
      type: "Article",
      levels: ["low", "medium", "high"],
    },
    {
      id: 6,
      title: "Building Healthy Connections",
      category: "Relationships",
      icon: "🤝",
      description:
        "Tips for communicating with friends, classmates and people you trust.",
      type: "Guide",
      levels: ["low", "medium"],
    },
    {
      id: 7,
      title: "Relaxation Techniques",
      category: "Mindfulness",
      icon: "🌿",
      description:
        "Try simple relaxation activities that can help you create a calm moment during a busy day.",
      type: "Activity",
      levels: ["low", "medium", "high"],
    },
    {
      id: 8,
      title: "Handling Exam Pressure",
      category: "Study Stress",
      icon: "📝",
      description:
        "Practical ideas for planning revision, managing exam pressure and maintaining balance.",
      type: "Guide",
      levels: ["medium", "high"],
    },
  ];

  useEffect(() => {
    const savedScore =
      localStorage.getItem("assessmentScore");

    if (savedScore) {
      const numericScore = Number(savedScore);

      setScore(numericScore);

      if (numericScore >= 10 && numericScore <= 13) {
        setLevel("low");
      } else if (
        numericScore >= 14 &&
        numericScore <= 22
      ) {
        setLevel("medium");
      } else if (
        numericScore >= 23 &&
        numericScore <= 30
      ) {
        setLevel("high");
      }
    }
  }, []);

  const getLevelTitle = () => {
    if (level === "low") {
      return "🌱 Resources for Maintaining Your Well-being";
    }

    if (level === "medium") {
      return "💙 Resources Based on Your Assessment";
    }

    if (level === "high") {
      return "🌼 Resources That May Support You";
    }

    return "🌱 Recommended Resources";
  };

  const getLevelMessage = () => {
    if (level === "low") {
      return "Your responses suggest that you are managing many areas reasonably well. These resources can help you maintain healthy habits and continue supporting your well-being.";
    }

    if (level === "medium") {
      return "Your responses suggest that some areas may need attention. We have highlighted resources related to common student challenges that may be useful to explore.";
    }

    if (level === "high") {
      return "Your responses suggest that you may benefit from additional support. Explore these educational resources and consider talking with a trusted person or qualified professional if you need support.";
    }

    return "Complete the assessment to receive resources selected according to your responses.";
  };

  const recommendedResources = level
    ? allResources.filter((resource) =>
        resource.levels.includes(level)
      )
    : allResources;

  const filteredResources =
    selectedCategory === "All"
      ? recommendedResources
      : recommendedResources.filter(
          (resource) =>
            resource.category === selectedCategory
        );

  const categories = [
    "All",
    ...new Set(
      recommendedResources.map(
        (resource) => resource.category
      )
    ),
  ];

  return (
    <div className="resources-page">

      <div className="resources-container">

        {/* Header */}
        <div className="resources-header">

          <div className="resources-icon">
            🌱
          </div>

          <h1>Personalized Resources</h1>

          <p>
            Resources selected based on your
            well-being assessment.
          </p>

        </div>

        {/* Assessment Information */}
        <div className="personalized-box">

          <div className="personalized-icon">
            ✨
          </div>

          <div>

            <h2>
              {getLevelTitle()}
            </h2>

            <p>
              {getLevelMessage()}
            </p>

            {score !== null && (
              <div className="score-info">
                Assessment Score:{" "}
                <strong>{score}/30</strong>
              </div>
            )}

          </div>

        </div>

        {/* No Assessment */}
        {score === null && (
          <div className="assessment-reminder">

            <div>📝</div>

            <h2>
              Complete Your Assessment
            </h2>

            <p>
              Complete the well-being assessment
              first to receive more personalized
              resource recommendations.
            </p>

            <button
              onClick={() =>
                navigate("/assessment")
              }
            >
              Take Assessment →
            </button>

          </div>
        )}

        {/* Categories */}
        <div className="category-section">

          <h2>
            Explore Recommended Topics
          </h2>

          <div className="category-buttons">

            {categories.map((category) => (
              <button
                key={category}
                className={
                  selectedCategory === category
                    ? "category-btn active"
                    : "category-btn"
                }
                onClick={() =>
                  setSelectedCategory(category)
                }
              >
                {category}
              </button>
            ))}

          </div>

        </div>

        {/* Resource Heading */}
        <div className="resource-heading">

          <div>

            <h2>
              {selectedCategory === "All"
                ? "Recommended for You"
                : selectedCategory}
            </h2>

            <p>
              {filteredResources.length} resources
              available
            </p>

          </div>

        </div>

        {/* Resources */}
        <div className="resources-grid">

          {filteredResources.map((resource) => (

            <div
              className="resource-card"
              key={resource.id}
            >

              <div className="resource-top">

                <div className="resource-emoji">
                  {resource.icon}
                </div>

                <span className="resource-type">
                  {resource.type}
                </span>

              </div>

              <h3>
                {resource.title}
              </h3>

              <p>
                {resource.description}
              </p>

              <button
                className="read-btn"
                onClick={() =>
                  navigate(
                    `/resources/${resource.id}`
                  )
                }
              >
                Explore Resource →
              </button>

            </div>

          ))}

        </div>

        {/* Empty */}
        {filteredResources.length === 0 && (

          <div className="empty-resources">

            <div>🌱</div>

            <h3>
              No resources found
            </h3>

            <p>
              Try selecting another category.
            </p>

          </div>

        )}

        {/* Support Message */}
        <div className="support-box">

          <span>💙</span>

          <div>

            <strong>
              Remember
            </strong>

            <p>
              These resources are for general
              education and self-care. An assessment
              score does not provide a diagnosis. If
              something is affecting your daily life,
              consider talking with a trusted person
              or qualified professional.
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Resources;