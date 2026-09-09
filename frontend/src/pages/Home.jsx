import { Link } from "react-router-dom";
import "../App.css";

function Home() {
  return (
    <div className="app">

      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">
          MindCare AI
        </div>

        <div className="nav-links">

          {/* Home */}
          <a href="#home">
            Home
          </a>

          {/* Features */}
          <a href="#features">
            Features
          </a>

          {/* About */}
          <a href="#about">
            About
          </a>

          {/* Login */}
          <Link to="/login" className="login-btn">
            Login
          </Link>

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

            {/* Start Your Journey → Assessment */}
            <Link to="/assessment" className="primary-btn">
              Start Your Journey
            </Link>

            {/* Learn More → About Section */}
            <a href="#about" className="secondary-btn">
              Learn More
            </a>

          </div>

        </div>


        {/* AI Support Card */}
        <div className="hero-card">

          <div className="card-icon">
            💙
          </div>

          <h3>
            You're not alone.
          </h3>

          <p>
            Talk about how you're feeling and
            receive supportive guidance.
          </p>

          {/* Talk to AI → Chat */}
          <Link to="/chat" className="chat-btn">
            Talk to AI Support →
          </Link>

        </div>

      </section>


      {/* Features */}
      <section className="features" id="features">

        <h2>
          How MindCare AI Can Help
        </h2>

        <p className="section-description">
          Simple tools designed to support your
          emotional well-being.
        </p>


        <div className="feature-grid">

          {/* AI Support */}
          <div className="feature-card">

            <div className="feature-icon">
              💬
            </div>

            <h3>
              AI Support
            </h3>

            <p>
              Receive supportive responses through
              an AI-powered conversational assistant.
            </p>

            <Link to="/chat">
              Explore AI Support →
            </Link>

          </div>


          {/* Well-being Assessment */}
          <div className="feature-card">

            <div className="feature-icon">
              🧠
            </div>

            <h3>
              Well-being Assessment
            </h3>

            <p>
              Reflect on your current emotional
              well-being through simple assessments.
            </p>

            <Link to="/assessment">
              Take Assessment →
            </Link>

          </div>


          {/* Mood Tracking */}
          <div className="feature-card">

            <div className="feature-icon">
              😊
            </div>

            <h3>
              Mood Tracking
            </h3>

            <p>
              Record your mood and observe changes
              in your well-being over time.
            </p>

            <Link to="/mood">
              Track Your Mood →
            </Link>

          </div>


          {/* Personalized Resources */}
          <div className="feature-card">

            <div className="feature-icon">
              📚
            </div>

            <h3>
              Personalized Resources
            </h3>

            <p>
              Discover helpful self-care resources
              based on your needs.
            </p>

            <Link to="/resources">
              Explore Resources →
            </Link>

          </div>

        </div>

      </section>


      {/* About */}
      <section className="about" id="about">

        <div>

          <h2>
            Support when you need it.
          </h2>

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

        <h3>
          MindCare AI
        </h3>

        <p>
          AI-enabled mental well-being support platform
        </p>

      </footer>

    </div>
  );
}

export default Home;

