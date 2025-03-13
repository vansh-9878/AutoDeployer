import { useNavigate } from "react-router-dom";
import "./styles.css";
import ProjectList from "./project-list";
import Navbar from "./Navbar";
import CPUUsageGraph from "./Graph";
import { useContext } from "react";
import { ProjectContext } from "../store/ProjectContext";

export default function HomePage() {
  const navigate = useNavigate();
  const { newProject, setNewProject } = useContext(ProjectContext);

  let dummyProjects = newProject;
  if (localStorage.getItem("projects")) {
    dummyProjects = JSON.parse(localStorage.getItem("projects"));
  }

  return (
    <>
    <div className="container-main">
      <Navbar />
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
                <CPUUsageGraph />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
    <footer>
    &copy; 2025 Auto Deployer. All rights reserved.
    </footer>
    </>
  );
}
