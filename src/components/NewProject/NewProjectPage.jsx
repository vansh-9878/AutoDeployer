import React, { useContext, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GitRepoInput } from "./GitRepoInput";
import { ProjectForm } from "./ProjectForm";
import { DeploymentProgress } from "./DeploymentProgress";
import "./styles/NewProjectPage.css";
import { ProjectContext } from "../../store/ProjectContext";
import toast from "react-hot-toast";
import client from "../../api/api";
import { stringify } from "postcss";

export function NewProjectPage() {
  const [repoUrl, setRepoUrl] = useState("");
  const { newProject, setNewProject } = useContext(ProjectContext);
  const [showForm, setShowForm] = useState(false);
  const [showProgress, setShowProgress] = useState(false);
  const [branches, setBranches] = useState([]);

  const handleConnect = () => {
    client
      .get("/repo/branches?url=" + repoUrl)
      .then((res) => {
        // let data = res.json();
        // console.log(res);
        if (res.error) {
          toast.error(res.error);
        } else {
          setBranches(res.data.branches);
          setShowForm(true);
        }
      })
      .catch((_) => {
        // window.location.href = "/login";
      });
    return;
  };

  const handleDeploy = () => {
    setShowProgress(true);
    let data = JSON.parse(localStorage.getItem("formData"));
    console.log(data);
    data.type = 2
    const nestedArray = data.items.map(({ key, value }) => [key, value]);
    let obj = {}
    if (data.type === 1) {
      obj = {
        "name": data.name,
        "branch": data.branch,
        "type": data.type,
        "deployment_info": {
          "file_location": data.dockerfile.location,
          "host_ports": data.dockerfile.hostPort,
          "container_ports": data.dockerfile.containerPort,
          "volumes": [
            [data.dockerfile.hostPath, data.dockerfile.containerPath]
          ],
          "network_mode": data.dockerfile.networkMode,
          "network_name": data.dockerfile.networkName,
        },
        "environment_variables": nestedArray,
      }
    } else {
      obj = {
        "name": data.name,
        "branch": data.branch,
        "type": data.type,
        "repo_url": repoUrl,
        "deployment_info": {
          "file_location": data.shellScript.location,
          "language": data.singleCommand.language
        },
        "environment_variables": nestedArray,
      };
    }

    console.log(obj);
    let arr = [...newProject];
    arr.push(obj);
    setNewProject(arr);
    localStorage.setItem("projects", JSON.stringify(arr));
    client
      .post("/project/new", data = obj)
      .then((res) => {
        if (res.error) {
          toast.error(res.error);
        } else {
          setBranches(res.data.branches);
          setShowForm(true);
        }
      })
      .catch((_) => {
        // window.location.href = "/login";
      });
    return;
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
              <ProjectForm
                onDeploy={handleDeploy}
                isActive={showForm}
                branches={branches}
              />
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
