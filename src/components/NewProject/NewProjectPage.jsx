import React, { useContext, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GitRepoInput } from "./GitRepoInput";
import { ProjectForm } from "./ProjectForm";
import { DeploymentProgress } from "./DeploymentProgress";
import "./styles/NewProjectPage.css";
import { ProjectContext } from "../../store/ProjectContext";

export function NewProjectPage() {
  const [repoUrl, setRepoUrl] = useState("");
  const { newProject, setNewProject } = useContext(ProjectContext);
  const [showForm, setShowForm] = useState(false);
  const [showProgress, setShowProgress] = useState(false);

  const handleConnect = () => {
    setShowForm(true);
  };

  const handleDeploy = () => {
    setShowProgress(true);
    console.log("hello");
    if (localStorage.getItem("newname")) {
      let obj = {
        id: "4",
        name: localStorage.getItem("newname"),
        description: "Backend API for a content management system",
        status: "online",
        lastDeployed: "Just now",
        url: "https://blog-api-example.vercel.app",
      };
      let arr = [...newProject];
      arr.push(obj);
      setNewProject(arr);
      localStorage.setItem("projects", JSON.stringify(arr));
    }
  };

  return (
    <div className="page-container">
      <div className="content-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="header"
        >
          <h1 className="page-title">Deploy Your Project</h1>
          <p className="page-subtitle">
            Get your application up and running in minutes
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <GitRepoInput
            onConnect={handleConnect}
            repoUrl={repoUrl}
            setRepoUrl={setRepoUrl}
          />
        </motion.div>

        <AnimatePresence>
          {!showProgress && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className={!showForm ? "opacity-50 pointer-events-none" : ""}
            >
              <ProjectForm onDeploy={handleDeploy} isActive={showForm} />
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {showProgress && (
            <div className="modal-overlay">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5 }}
                className="modal-content"
              >
                <DeploymentProgress />
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
