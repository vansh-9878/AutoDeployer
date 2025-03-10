import { PlusCircle, User } from "lucide-react";
import { useNavigate } from "react-router-dom";
import "./styles.css";
import ProjectList from "./project-list";

const dummyProjects = [
  {
    id: "1",
    name: "E-commerce Website",
    description: "Online store with product catalog and payment integration",
    status: "online",
    lastDeployed: "2 hours ago",
    url: "https://ecommerce-example.vercel.app",
  },
  {
    id: "2",
    name: "Portfolio Site",
    description: "Personal portfolio showcasing projects and skills",
    status: "online",
    lastDeployed: "3 days ago",
    url: "https://portfolio-example.vercel.app",
  },
  {
    id: "3",
    name: "Blog API",
    description: "Backend API for a content management system",
    status: "error",
    lastDeployed: "1 day ago",
    url: "https://blog-api-example.vercel.app",
  },
];

export default function HomePage() {
  const navigate = useNavigate(); // Initialize navigation

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="nav">
        <div className="container flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">Auto Deployer</h1>
          <div className="flex gap-4">
            <button
              onClick={() => navigate("/new-project")}
              className="btn btn-lg btn-primary"
            >
              <PlusCircle className="mr-2 h-5 w-5" />
              Create New Project
            </button>
            <button className="btn btn-lg btn-outline">
              <User className="mr-2 h-5 w-5" />
              Profile
            </button>
          </div>
        </div>
      </nav>

      <main className="main container">
        <div className="flex flex-col md-flex-row gap-6">
          <div className="md-w-3-5">
            <h2 className="text-xl font-semibold mb-4">
              Your Deployed Projects
            </h2>
            <ProjectList projects={dummyProjects} />
          </div>
          <div className="md-w-2-5">
            <div className="analytics sticky">
              <h2 className="text-xl font-semibold mb-4">Analytics</h2>
              <div className="analytics-placeholder">
                <p className="text-gray-500">Graph will appear here</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
