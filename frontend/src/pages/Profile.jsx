import { Link, useNavigate } from "react-router-dom";

function Profile() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/login");
  };

  return (
    <div className="profile-page">

      {/* Navbar */}
      <nav className="dashboard-navbar">
        <div className="logo">
          MindCare AI
        </div>

        <div className="dashboard-nav-links">
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/">Home</Link>
        </div>
      </nav>

      {/* Profile Content */}
      <main className="profile-content">

        <div className="profile-card">

          <div className="profile-avatar">
            👤
          </div>

          <h1>My Profile</h1>

          <p className="profile-subtitle">
            Manage your MindCare AI account
          </p>

          {/* User Information */}
          <div className="profile-info">

            <div className="profile-field">
              <label>Name</label>
              <p>Guest User</p>
            </div>

            <div className="profile-field">
              <label>Email</label>
              <p>user@example.com</p>
            </div>

          </div>

          {/* Preferences */}
          <div className="profile-section">

            <h2>Preferences</h2>

            <div className="preference-item">
              <span>💬 AI Support</span>
              <span>Enabled</span>
            </div>

            <div className="preference-item">
              <span>😊 Mood Tracking</span>
              <span>Enabled</span>
            </div>

            <div className="preference-item">
              <span>📚 Resource Recommendations</span>
              <span>Enabled</span>
            </div>

          </div>

          {/* Logout */}
          <button
            className="logout-btn"
            onClick={handleLogout}
          >
            Logout
          </button>

          <Link to="/dashboard" className="back-dashboard">
            ← Back to Dashboard
          </Link>

        </div>

      </main>

    </div>
  );
}

export default Profile;