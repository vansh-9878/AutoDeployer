import { User, Package, Activity, GitBranch, ArrowRight } from "lucide-react"

export default function ProfilePage() {
  return (
    <div className="profile-container">
      <div className="container">
        <div className="profile-header">
          <img src="https://github.com/identicons/app/oauth_app/1234" alt="Profile" className="profile-avatar" />
          <h1 className="profile-name">John Doe</h1>
          <p className="profile-username">@johndoe</p>

          <div className="profile-stats">
            <div className="profile-stat">
              <span className="profile-stat-value">12</span>
              <span className="profile-stat-label">Projects</span>
            </div>
            <div className="profile-stat">
              <span className="profile-stat-value">48</span>
              <span className="profile-stat-label">Deployments</span>
            </div>
            <div className="profile-stat">
              <span className="profile-stat-value">3</span>
              <span className="profile-stat-label">Teams</span>
            </div>
          </div>

          <button className="btn btn-primary">
            <Package className="w-5 h-5" />
            New Project
          </button>
        </div>

        <div className="profile-content">
          <div>
            <div className="profile-section">
              <h2 className="profile-section-title">
                <Package className="w-5 h-5" />
                Recent Projects
              </h2>

              <div className="profile-project">
                <div className="profile-project-icon">
                  <GitBranch className="w-5 h-5 text-white" />
                </div>
                <div className="profile-project-info">
                  <h3 className="profile-project-name">E-commerce Website</h3>
                  <p className="profile-project-description">
                    Online store with product catalog and payment integration
                  </p>
                </div>
                <span className="profile-project-status">Online</span>
              </div>

              <div className="profile-project">
                <div className="profile-project-icon">
                  <GitBranch className="w-5 h-5 text-white" />
                </div>
                <div className="profile-project-info">
                  <h3 className="profile-project-name">Portfolio Site</h3>
                  <p className="profile-project-description">Personal portfolio showcasing projects and skills</p>
                </div>
                <span className="profile-project-status">Online</span>
              </div>

              <div className="profile-project">
                <div className="profile-project-icon">
                  <GitBranch className="w-5 h-5 text-white" />
                </div>
                <div className="profile-project-info">
                  <h3 className="profile-project-name">Blog API</h3>
                  <p className="profile-project-description">Backend API for a content management system</p>
                </div>
                <span
                  className="profile-project-status"
                  style={{ backgroundColor: "rgba(239, 68, 68, 0.2)", color: "#ef4444" }}
                >
                  Error
                </span>
              </div>

              <button className="btn btn-outline" style={{ width: "100%", marginTop: "1rem" }}>
                View All Projects
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>
          </div>

          <div>
            <div className="profile-section">
              <h2 className="profile-section-title">
                <Activity className="w-5 h-5" />
                Recent Activity
              </h2>

              <div className="profile-activity">
                <div className="profile-activity-dot"></div>
                <div className="profile-activity-content">
                  <p className="profile-activity-text">
                    Deployed <strong>E-commerce Website</strong>
                  </p>
                  <p className="profile-activity-time">2 hours ago</p>
                </div>
              </div>

              <div className="profile-activity">
                <div className="profile-activity-dot"></div>
                <div className="profile-activity-content">
                  <p className="profile-activity-text">
                    Updated environment variables for <strong>Blog API</strong>
                  </p>
                  <p className="profile-activity-time">1 day ago</p>
                </div>
              </div>

              <div className="profile-activity">
                <div className="profile-activity-dot"></div>
                <div className="profile-activity-content">
                  <p className="profile-activity-text">
                    Created new project <strong>Portfolio Site</strong>
                  </p>
                  <p className="profile-activity-time">3 days ago</p>
                </div>
              </div>

              <div className="profile-activity">
                <div className="profile-activity-dot"></div>
                <div className="profile-activity-content">
                  <p className="profile-activity-text">Joined Auto Deployer</p>
                  <p className="profile-activity-time">1 week ago</p>
                </div>
              </div>
            </div>

            <div className="profile-section" style={{ marginTop: "1.5rem" }}>
              <h2 className="profile-section-title">
                <User className="w-5 h-5" />
                Account Settings
              </h2>

              <button className="btn btn-outline" style={{ width: "100%", marginBottom: "0.75rem" }}>
                Edit Profile
              </button>

              <button className="btn btn-outline" style={{ width: "100%", marginBottom: "0.75rem" }}>
                API Keys
              </button>

              <button
                className="btn btn-outline"
                style={{
                  width: "100%",
                  backgroundColor: "rgba(239, 68, 68, 0.1)",
                  color: "#ef4444",
                  borderColor: "rgba(239, 68, 68, 0.2)",
                }}
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

