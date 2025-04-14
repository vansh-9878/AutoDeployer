import React from "react";
import { ExternalLink, Settings } from "lucide-react";

export default function ProjectList({ projects }) {
  if (projects.length === 0) {
    return (
      <div className="empty-container">
        <div>
          <h3 className="empty-title">You are yet to deploy your projects</h3>
          <p className="empty-message">
            Create your first project to get started
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="project-wrapper">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}

function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <div className="">
        <div className="card-header">
          <div>
            <h3 className="project-title" style={{ color: "white" }}>
              {project.name}
            </h3>
            <p className="project-description">{project.repo_name}</p>
          </div>
          <StatusBadge status="yes" />
        </div>
      </div>
      <div className="card-bottom">
        <div className="card-info">
          <div className="deploy-time">Last deployed: 12 mins</div>
          <div className="button-group">
            <button
              className="button-primary button-flex"
              onClick={() =>
                (window.location.href = `/myproject/${project.id}`)
              }
            >
              <span className="icon-text">🔗</span> Visit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function StatusBadge({ status }) {
  const badgeClass =
    status === "online"
      ? "status-badge online"
      : status === "offline"
      ? "status-badge offline"
      : "status-badge error";

  const text =
    status === "online" ? "Online" : status === "offline" ? "Offline" : "Error";

  return <span className={badgeClass}>{text}</span>;
}

function PlusCircle(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M8 12h8" />
      <path d="M12 8v8" />
    </svg>
  );
}
