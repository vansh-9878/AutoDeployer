import React from "react"
import { ExternalLink, Settings } from "lucide-react"



export default function ProjectList({ projects }) {
  // If there are no projects, display a message
  if (projects.length === 0) {
    return (
      <div className="empty-state">
        <div>
          <h3 className="text-lg font-medium text-gray-700 mb-2">You are yet to deploy your projects</h3>
          <p className="text-gray-500 mb-6">Create your first project to get started</p>
          <button className="btn btn-primary">
            <PlusCircle className="mr-2 h-5 w-5" />
            Create New Project
          </button>
        </div>
      </div>
    )
  }

  // Display the list of projects
  return (
    <div className="project-list">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  )
}

function ProjectCard({ project }) {
  return (
    <div className="card">
      <div className="card-header">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="card-title">{project.name}</h3>
            <p className="card-description">{project.description}</p>
          </div>
          <StatusBadge status={project.status} />
        </div>
      </div>
      <div className="card-content">
        <div className="flex justify-between items-center">
          <div className="text-sm text-gray-500">Last deployed: {project.lastDeployed}</div>
          <div className="flex gap-2">
            <button className="btn btn-sm btn-outline">
              <Settings className="h-4 w-4 mr-1" />
              Settings
            </button>
            <button className="btn btn-sm btn-primary">
              <ExternalLink className="h-4 w-4 mr-1" />
              Visit
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

function StatusBadge({ status }) {
  const badgeClass =
    status === "online" ? "badge badge-online" : status === "offline" ? "badge badge-offline" : "badge badge-error"

  const text = status === "online" ? "Online" : status === "offline" ? "Offline" : "Error"

  return <span className={badgeClass}>{text}</span>
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
  )
}

