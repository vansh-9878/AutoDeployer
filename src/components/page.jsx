import { useNavigate } from "react-router-dom";
import "./styles.css";
import ProjectList from "./project-list";
import Navbar from "./Navbar";
import CPUUsageGraph from "./Graph";

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
  const navigate = useNavigate();

  return (
    <div className="container-main">
      <Navbar/>
      <main className="main-container">
        <div className="content">
          <div className="project-section">
            <h2 className="section-title">Your Deployed Projects</h2>
            <ProjectList projects={dummyProjects} />
          </div>
          <div className="analytics-section">
            <div className="analytics-box">
              <h2 className="section-title">Analytics</h2>
              <div className="analytics-placeholder">
                <CPUUsageGraph/>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}