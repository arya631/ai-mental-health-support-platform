import "./App.css";

function App() {
  return (
    <div className="app">

      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">
          MindCare AI
        </div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#features">Features</a>
          <a href="#about">About</a>
          <button className="login-btn">Login</button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero" id="home">

        <div className="hero-content">

          <h1>
            Your Mental Well-being
            <span> Matters.</span>
          </h1>

          <p>
            A supportive AI-powered platform to help you
            understand your well-being, track your mood,
            and discover helpful resources.
          </p>

          <div className="hero-buttons">
            <button className="primary-btn">
              Start Your Journey
            </button>

            <button className="secondary-btn">
              Learn More
            </button>
          </div>

        </div>

        <div className="hero-card">

          <div className="card-icon">
            💙
          </div>

          <h3>You're not alone.</h3>

          <p>
            Talk about how you're feeling and
            receive supportive guidance.
          </p>

          <button className="chat-btn">
            Talk to AI Support →
          </button>

        </div>

      </section>

      {/* Features */}
      <section className="features" id="features">

        <h2>How MindCare AI Can Help</h2>

        <p className="section-description">
          Simple tools designed to support your
          emotional well-being.
        </p>

        <div className="feature-grid">

          <div className="feature-card">
            <div className="feature-icon">💬</div>
            <h3>AI Support</h3>
            <p>
              Receive supportive responses through
              an AI-powered conversational assistant.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🧠</div>
            <h3>Well-being Assessment</h3>
            <p>
              Reflect on your current emotional
              well-being through simple assessments.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">😊</div>
            <h3>Mood Tracking</h3>
            <p>
              Record your mood and observe changes
              in your well-being over time.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">📚</div>
            <h3>Personalized Resources</h3>
            <p>
              Discover helpful self-care resources
              based on your needs.
            </p>
          </div>

        </div>

      </section>

      {/* About */}
      <section className="about" id="about">

        <div>
          <h2>Support when you need it.</h2>

          <p>
            MindCare AI is designed to provide accessible
            emotional support and early awareness of
            well-being concerns.
          </p>

          <p>
            It is a supportive tool and does not replace
            qualified mental health professionals.
          </p>
        </div>

      </section>

      {/* Footer */}
      <footer>
        <h3>MindCare AI</h3>
        <p>
          AI-enabled mental well-being support platform
        </p>
      </footer>

    </div>
  );
}

export default App;