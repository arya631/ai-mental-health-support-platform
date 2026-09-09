
import { Link } from "react-router-dom";
import "./Dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard-page">

      {/* Navbar */}
      <nav className="dashboard-navbar">
        <div className="dashboard-logo">
          MindCare AI
        </div>

        <div className="dashboard-nav-links">
          <Link to="/dashboard" className="active">
            Dashboard
          </Link>

          <Link to="/chat">
            AI Chat
          </Link>

          <Link to="/assessment">
            Assessment
          </Link>

          <Link to="/mood">
            Mood
          </Link>

          <Link to="/resources">
            Resources
          </Link>

          <Link to="/profile">
            Profile
          </Link>
        </div>
      </nav>

      {/* Main Content */}
      <main className="dashboard-content">

        {/* Welcome Section */}
        <section className="welcome-section">
          <div>
            <p className="welcome-small">
              Welcome back 👋
            </p>

            <h1>
              Take care of your mind,
              <br />
              one day at a time.
            </h1>

            <p>
              MindCare AI is here to support you through your
              student journey.
            </p>
          </div>

          <div className="welcome-icon">
            🌿
          </div>
        </section>

        {/* Quick Actions */}
        <section className="dashboard-section">

          <h2>How are you feeling today?</h2>

          <div className="quick-actions">

            <Link to="/mood" className="dashboard-card">
              <div className="card-icon">
                😊
              </div>

              <h3>Track Your Mood</h3>

              <p>
                Record how you're feeling today.
              </p>

              <span>
                Check in →
              </span>
            </Link>

            <Link to="/chat" className="dashboard-card">
              <div className="card-icon">
                💬
              </div>

              <h3>Talk to AI</h3>

              <p>
                Have a supportive conversation with MindCare AI.
              </p>

              <span>
                Start Chat →
              </span>
            </Link>

            <Link to="/assessment" className="dashboard-card">
              <div className="card-icon">
                📝
              </div>

              <h3>Take Assessment</h3>

              <p>
                Understand your current well-being.
              </p>

              <span>
                Start Assessment →
              </span>
            </Link>

          </div>
        </section>

        {/* Dashboard Grid */}
        <section className="dashboard-grid">

          {/* Today's Check-in */}
          <div className="info-card">

            <div className="card-heading">
              <h2>Today's Check-in</h2>
              <span>🌱</span>
            </div>

            <p className="card-subtitle">
              A small check-in can help you understand
              yourself better.
            </p>

            <div className="mood-options">
              <button>😄</button>
              <button>🙂</button>
              <button>😐</button>
              <button>😔</button>
              <button>😟</button>
            </div>

            <Link to="/mood" className="text-link">
              Record today's mood →
            </Link>

          </div>

          {/* Recent Activity */}
          <div className="info-card">

            <div className="card-heading">
              <h2>Recent Activity</h2>
              <span>📈</span>
            </div>

            <div className="activity-item">
              <span className="activity-icon">
                📝
              </span>

              <div>
                <strong>
                  Well-being Assessment
                </strong>

                <p>
                  Take an assessment to check in with yourself.
                </p>
              </div>
            </div>

            <div className="activity-item">
              <span className="activity-icon">
                😊
              </span>

              <div>
                <strong>
                  Mood Tracking
                </strong>

                <p>
                  Keep track of your daily mood.
                </p>
              </div>
            </div>

            <Link to="/resources" className="text-link">
              Explore resources →
            </Link>

          </div>

        </section>

        {/* Support Section */}
        <section className="support-section">

          <div>
            <h2>
              Need someone to talk to?
            </h2>

            <p>
              You can use our AI support chat to express
              what's on your mind in a safe and supportive space.
            </p>
          </div>

          <Link to="/chat" className="support-btn">
            Talk to MindCare AI →
          </Link>

        </section>

      </main>

    </div>
  );
}

export default Dashboard;
