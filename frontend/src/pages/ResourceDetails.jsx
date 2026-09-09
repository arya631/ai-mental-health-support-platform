import { useNavigate, useParams } from "react-router-dom";
import "./ResourceDetails.css";

function ResourceDetails() {
  const navigate = useNavigate();
  const { id } = useParams();

  const resources = {
    1: {
      title: "Managing Study Stress",
      icon: "📚",
      category: "Study Stress",
      introduction:
        "Academic work can sometimes feel overwhelming. Small changes in planning and study habits can make your daily routine easier to manage.",
      sections: [
        {
          heading: "Create a Simple Study Plan",
          content:
            "Break large topics into smaller tasks. Decide what you want to complete each day instead of trying to study everything at once.",
        },
        {
          heading: "Take Regular Breaks",
          content:
            "Short breaks between study sessions can help you refresh your mind and return to your work with better focus.",
        },
        {
          heading: "Avoid Last-Minute Studying",
          content:
            "Starting earlier and dividing your work across several days can reduce unnecessary academic pressure.",
        },
        {
          heading: "Ask for Academic Help",
          content:
            "If a topic is difficult, consider asking a teacher, classmate or another trusted person for help.",
        },
      ],
      activity:
        "Try writing down three study tasks for today. Start with the easiest one and work through them one at a time.",
    },

    2: {
      title: "Understanding Anxiety",
      icon: "😟",
      category: "Anxiety",
      introduction:
        "Feeling worried or nervous from time to time is common. Learning to recognize these feelings can help you respond to them in healthy ways.",
      sections: [
        {
          heading: "Recognize the Feeling",
          content:
            "Notice when you are feeling worried, nervous or uncomfortable. Naming the feeling can help you understand what is happening.",
        },
        {
          heading: "Pause and Breathe",
          content:
            "Take a quiet moment and focus on slow, comfortable breathing. Give yourself some time before responding to a stressful situation.",
        },
        {
          heading: "Focus on What You Can Control",
          content:
            "Instead of thinking about everything at once, identify one small thing you can do right now.",
        },
        {
          heading: "Talk to Someone You Trust",
          content:
            "If worry is becoming difficult to manage, consider talking with a trusted adult, teacher, counsellor or qualified professional.",
        },
      ],
      activity:
        "Take one quiet minute. Notice your surroundings, relax your shoulders and focus your attention on your breathing.",
    },

    3: {
      title: "Better Sleep Habits",
      icon: "😴",
      category: "Sleep",
      introduction:
        "Good sleep supports learning, concentration and everyday well-being. A consistent routine can make it easier to prepare for sleep.",
      sections: [
        {
          heading: "Keep a Regular Routine",
          content:
            "Try to maintain reasonably consistent times for going to bed and waking up.",
        },
        {
          heading: "Create a Calm Environment",
          content:
            "Keep your sleeping area comfortable, quiet and suitable for rest.",
        },
        {
          heading: "Take a Break from Screens",
          content:
            "Give yourself some screen-free time before going to bed and choose a calm activity instead.",
        },
        {
          heading: "Avoid Studying Until Very Late",
          content:
            "Plan your study sessions so that you have enough time to wind down before sleeping.",
        },
      ],
      activity:
        "Create a simple bedtime routine with three relaxing activities that you can repeat each evening.",
    },

    4: {
      title: "Mindfulness Basics",
      icon: "🧘",
      category: "Mindfulness",
      introduction:
        "Mindfulness means paying attention to the present moment without judging yourself. It can be practiced through simple everyday activities.",
      sections: [
        {
          heading: "Focus on Your Breathing",
          content:
            "Sit comfortably and notice your natural breathing. When your attention wanders, gently bring it back to your breath.",
        },
        {
          heading: "Notice Your Surroundings",
          content:
            "Pay attention to sounds, sights and sensations around you for a short period.",
        },
        {
          heading: "Practice During Everyday Activities",
          content:
            "You can practice mindfulness while walking, eating, studying or doing another normal activity.",
        },
      ],
      activity:
        "Look around and identify five things you can see, four things you can feel and three things you can hear.",
    },

    5: {
      title: "Understanding Your Emotions",
      icon: "💙",
      category: "Emotional Well-being",
      introduction:
        "Emotions are a normal part of everyday life. Understanding what you feel can help you communicate your needs and make thoughtful decisions.",
      sections: [
        {
          heading: "Name Your Emotion",
          content:
            "Try to identify whether you are feeling happy, worried, frustrated, disappointed, calm or another emotion.",
        },
        {
          heading: "Identify Possible Triggers",
          content:
            "Think about what happened before the emotion appeared. This can help you recognize patterns.",
        },
        {
          heading: "Express Yourself",
          content:
            "Talk with someone you trust or write your thoughts down when you need a safe way to express yourself.",
        },
        {
          heading: "Give Yourself Time",
          content:
            "You do not have to solve everything immediately. Taking a short pause can help you think more clearly.",
        },
      ],
      activity:
        "Write down one emotion you experienced today and one situation that may have contributed to it.",
    },

    6: {
      title: "Building Healthy Connections",
      icon: "🤝",
      category: "Relationships",
      introduction:
        "Supportive relationships with friends, classmates, teachers and family members can be an important part of student well-being.",
      sections: [
        {
          heading: "Communicate Clearly",
          content:
            "Try to express your thoughts and needs calmly and respectfully.",
        },
        {
          heading: "Listen to Others",
          content:
            "Give people your attention when they are speaking and try to understand their point of view.",
        },
        {
          heading: "Set Healthy Boundaries",
          content:
            "It is okay to communicate when something makes you uncomfortable or when you need personal space.",
        },
        {
          heading: "Stay Connected",
          content:
            "Spending positive time with people you trust can help you feel supported and connected.",
        },
      ],
      activity:
        "Think of one person you trust. Consider one positive thing you could talk about with them today.",
    },

    7: {
      title: "Relaxation Techniques",
      icon: "🌿",
      category: "Mindfulness",
      introduction:
        "Relaxation activities can provide a calm break during a busy day. Different activities work differently for different people.",
      sections: [
        {
          heading: "Slow Breathing",
          content:
            "Take slow, comfortable breaths and pay attention to the movement of your breathing.",
        },
        {
          heading: "Take a Quiet Break",
          content:
            "Move away from your study area for a few minutes and give yourself some quiet time.",
        },
        {
          heading: "Try Gentle Movement",
          content:
            "A short walk or gentle stretching can be a simple way to take a break from sitting and studying.",
        },
        {
          heading: "Listen to Something Calming",
          content:
            "Listening to calm music or spending a few quiet minutes in a comfortable environment may help you unwind.",
        },
      ],
      activity:
        "Take five quiet minutes away from your usual study activity and choose one relaxing activity that you enjoy.",
    },

    8: {
      title: "Handling Exam Pressure",
      icon: "📝",
      category: "Study Stress",
      introduction:
        "Exams can create pressure for many students. Planning ahead and maintaining a balanced routine can make preparation more manageable.",
      sections: [
        {
          heading: "Break Topics into Smaller Parts",
          content:
            "Divide large chapters or subjects into smaller topics and work through them step by step.",
        },
        {
          heading: "Create a Revision Schedule",
          content:
            "Set realistic daily goals and leave some time for revision and breaks.",
        },
        {
          heading: "Practice Regularly",
          content:
            "Reviewing material regularly can help you identify topics that need more attention.",
        },
        {
          heading: "Look After Yourself",
          content:
            "Remember to make time for sleep, meals, breaks and activities outside studying.",
        },
      ],
      activity:
        "Choose one subject and make a simple revision plan containing three topics you want to review.",
    },
  };

  const resource = resources[id];

  if (!resource) {
    return (
      <div className="resource-details-page">
        <div className="resource-details-container">
          <div className="not-found">
            <div>🌱</div>
            <h2>Resource Not Found</h2>
            <p>
              The resource you are looking for is not
              available.
            </p>

            <button
              onClick={() => navigate("/resources")}
            >
              ← Back to Resources
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="resource-details-page">

      <div className="resource-details-container">

        <button
          className="back-btn"
          onClick={() => navigate("/resources")}
        >
          ← Back to Resources
        </button>

        <div className="resource-details-header">

          <div className="details-icon">
            {resource.icon}
          </div>

          <span className="details-category">
            {resource.category}
          </span>

          <h1>{resource.title}</h1>

          <p>{resource.introduction}</p>

        </div>

        <div className="details-content">

          {resource.sections.map((section, index) => (

            <div
              className="details-section"
              key={index}
            >
              <div className="section-number">
                {index + 1}
              </div>

              <div>
                <h2>{section.heading}</h2>
                <p>{section.content}</p>
              </div>
            </div>

          ))}

        </div>

        <div className="activity-box">

          <div className="activity-icon">
            🌿
          </div>

          <div>
            <h2>Try This</h2>

            <p>
              {resource.activity}
            </p>
          </div>

        </div>

        <div className="details-footer">

          <p>
            💙 This resource is for general education
            and self-care. It is not a diagnosis or a
            replacement for professional support.
          </p>

          <button
            onClick={() => navigate("/resources")}
          >
            Explore More Resources →
          </button>

        </div>

      </div>

    </div>
  );
}

export default ResourceDetails;