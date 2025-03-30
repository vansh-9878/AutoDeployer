import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  Trash2,
  Wand2,
  Package,
  Terminal,
  GitBranch,
  Variable,
  Pocket as Docker,
  FileText,
  Command,
} from "lucide-react";
import "./styles/ProjectForm.css";

export function ProjectForm({ onDeploy, isActive, branches }) {
  const [formData, setFormData] = useState({
    name: "",
    branch: "main",
    deploymentType: "",
    language: "",
    dockerCompose: {
      location: "",
    },
    dockerfile: {
      location: "",
      hostPort: "",
      containerPort: "",
      hostPath: "",
      containerPath: "",
      networkMode: "bridge",
      networkName: "",
    },
    shellScript: {
      location: "",
    },
    singleCommand: {
      command: "",
      language: "Python 3",
    },
  });

  if (formData.name) {
    localStorage.setItem("newname", formData.name);
  }

  const [envVars, setEnvVars] = useState([]);
  const [showLanguageSelect, setShowLanguageSelect] = useState(false);

  const addEnvVar = () => {
    setEnvVars([...envVars, { name: "", value: "" }]);
  };

  const removeEnvVar = (index) => {
    setEnvVars(envVars.filter((_, i) => i !== index));
  };

  const updateEnvVar = (index, field, value) => {
    const newEnvVars = [...envVars];
    newEnvVars[index] = { ...newEnvVars[index], [field]: value };
    setEnvVars(newEnvVars);
  };

  const importEnvFile = async () => {
    try {
      const input = document.createElement("input");
      input.type = "file";
      input.accept = ".env";

      input.onchange = async (e) => {
        const file = e.target.files[0];
        if (file) {
          const text = await file.text();
          const vars = text
            .split("\n")
            .filter((line) => line.trim() && !line.startsWith("#"))
            .map((line) => {
              const [name, ...valueParts] = line.split("=");
              return {
                name: name.trim(),
                value: valueParts.join("=").trim(),
              };
            });
          setEnvVars([...envVars, ...vars]);
        }
      };

      input.click();
    } catch (error) {
      console.error("Error importing .env file:", error);
    }
  };

  const deploymentOptions = [
    { id: "dockerCompose", label: "Docker Compose", icon: Docker },
    { id: "dockerfile", label: "Dockerfile", icon: Docker },
    { id: "shellScript", label: "Shell Script", icon: FileText },
    { id: "singleCommand", label: "Single Command", icon: Command },
  ];

  return (
    <motion.div
      className={`form-container ${!isActive ? "inactive" : ""}`}
      initial={false}
      animate={isActive ? { y: 0, opacity: 1 } : { y: 20, opacity: 0.5 }}
      transition={{ duration: 0.4 }}
    >
      <motion.h2
        className="form-title"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Configure Your Web Service
      </motion.h2>
      <motion.p
        className="form-description"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        We've detected Python in your repository. Let's set up your deployment
        configuration.
      </motion.p>

      <div className="space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <label className="input-label">Project Name</label>
          <div className="input-wrapper">
            <Package className="input-icon" />
            <input
              type="text"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              placeholder="my-awesome-project"
              className="text-input"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <label className="input-label">Branch</label>
          <div className="input-wrapper">
            <GitBranch className="input-icon" />
            <select
              value={formData.branch}
              onChange={(e) =>
                setFormData({ ...formData, branch: e.target.value })
              }
              className="select-input with-icon"
            >
              {branches.map((branch) => (
                <option key={branch} value={branch}>
                  {branch}
                </option>
              ))}

              {/* <option value="main">main</option>
              <option value="develop">develop</option>
              <option value="staging">staging</option>
              <option value="production">production</option> */}
            </select>
            <ChevronDown className="select-icon" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <label className="input-label">Deployment Type</label>
          <div className="deployment-options">
            {deploymentOptions.map((option) => (
              <label
                key={option.id}
                className={`deployment-option ${
                  formData.deploymentType === option.id ? "selected" : ""
                }`}
              >
                <input
                  type="radio"
                  name="deploymentType"
                  value={option.id}
                  checked={formData.deploymentType === option.id}
                  onChange={(e) => {
                    setFormData({
                      ...formData,
                      deploymentType: e.target.value,
                    });
                    if (e.target.value === "singleCommand") {
                      setShowLanguageSelect(true);
                    }
                  }}
                />
                <option.icon className="deployment-icon" />
                <span>{option.label}</span>
              </label>
            ))}
          </div>
        </motion.div>

        {formData.deploymentType === "dockerCompose" && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="deployment-config"
          >
            <label className="input-label">Docker Compose Location</label>
            <div className="input-wrapper">
              <input
                type="text"
                value={formData.dockerCompose.location}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    dockerCompose: {
                      ...formData.dockerCompose,
                      location: e.target.value,
                    },
                  })
                }
                placeholder="./docker-compose.yml"
                className="text-input"
              />
            </div>
          </motion.div>
        )}

        {formData.deploymentType === "dockerfile" && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="deployment-config space-y-4"
          >
            <div>
              <label className="input-label">Dockerfile Location</label>
              <div className="input-wrapper">
                <input
                  type="text"
                  value={formData.dockerfile.location}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      dockerfile: {
                        ...formData.dockerfile,
                        location: e.target.value,
                      },
                    })
                  }
                  placeholder="./Dockerfile"
                  className="text-input"
                />
              </div>
            </div>

            <div>
              <label className="input-label">Ports</label>
              <div className="flex-row-inputs">
                <input
                  type="text"
                  value={formData.dockerfile.hostPort}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      dockerfile: {
                        ...formData.dockerfile,
                        hostPort: e.target.value,
                      },
                    })
                  }
                  placeholder="Host Port (e.g., 2000)"
                  className="text-input"
                />
                <input
                  type="text"
                  value={formData.dockerfile.containerPort}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      dockerfile: {
                        ...formData.dockerfile,
                        containerPort: e.target.value,
                      },
                    })
                  }
                  placeholder="Container Port (e.g., 1300)"
                  className="text-input"
                />
              </div>
            </div>

            <div>
              <label className="input-label">Volumes</label>
              <div className="flex-row-inputs">
                <input
                  type="text"
                  value={formData.dockerfile.hostPath}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      dockerfile: {
                        ...formData.dockerfile,
                        hostPath: e.target.value,
                      },
                    })
                  }
                  placeholder="Host Path"
                  className="text-input"
                />
                <input
                  type="text"
                  value={formData.dockerfile.containerPath}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      dockerfile: {
                        ...formData.dockerfile,
                        containerPath: e.target.value,
                      },
                    })
                  }
                  placeholder="Container Path"
                  className="text-input"
                />
              </div>
            </div>

            <div>
              <label className="input-label">Network Configuration</label>
              <div className="network-config">
                <div className="network-mode">
                  <label className="radio-label">
                    <input
                      type="radio"
                      name="networkMode"
                      value="host"
                      checked={formData.dockerfile.networkMode === "host"}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          dockerfile: {
                            ...formData.dockerfile,
                            networkMode: e.target.value,
                          },
                        })
                      }
                    />
                    Host
                  </label>
                  <label className="radio-label">
                    <input
                      type="radio"
                      name="networkMode"
                      value="bridge"
                      checked={formData.dockerfile.networkMode === "bridge"}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          dockerfile: {
                            ...formData.dockerfile,
                            networkMode: e.target.value,
                          },
                        })
                      }
                    />
                    Bridge
                  </label>
                </div>
                <input
                  type="text"
                  value={formData.dockerfile.networkName}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      dockerfile: {
                        ...formData.dockerfile,
                        networkName: e.target.value,
                      },
                    })
                  }
                  placeholder="Network Name"
                  className="text-input"
                />
              </div>
            </div>
          </motion.div>
        )}

        {formData.deploymentType === "shellScript" && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="deployment-config"
          >
            <label className="input-label">Shell Script Location</label>
            <div className="input-wrapper">
              <input
                type="text"
                value={formData.shellScript.location}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    shellScript: {
                      ...formData.shellScript,
                      location: e.target.value,
                    },
                  })
                }
                placeholder="./deploy.sh"
                className="text-input"
              />
            </div>
          </motion.div>
        )}

        {formData.deploymentType === "singleCommand" && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="deployment-config space-y-4"
          >
            <div>
              <label className="input-label">Language</label>
              <div className="input-wrapper">
                <select
                  value={formData.singleCommand.language}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      singleCommand: {
                        ...formData.singleCommand,
                        language: e.target.value,
                      },
                    })
                  }
                  className="select-input"
                >
                  <option value="Python 3">Python 3</option>
                  <option value="Node">Node.js</option>
                  <option value="Rust">Rust</option>
                </select>
                <ChevronDown className="select-icon" />
              </div>
            </div>
            <div>
              <label className="input-label">Command</label>
              <div className="input-wrapper">
                <input
                  type="text"
                  value={formData.singleCommand.command}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      singleCommand: {
                        ...formData.singleCommand,
                        command: e.target.value,
                      },
                    })
                  }
                  placeholder="python app.py"
                  className="text-input"
                />
              </div>
            </div>
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="space-y-4"
        >
          <div className="env-vars-header">
            <div className="env-vars-title">
              <Variable className="w-5 h-5" />
              <h3>Environment Variables</h3>
            </div>
            <div className="env-vars-buttons">
              <motion.button
                onClick={addEnvVar}
                className="env-var-button primary"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Add Variable
              </motion.button>
              <motion.button
                onClick={importEnvFile}
                className="env-var-button secondary"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Import .env
              </motion.button>
            </div>
          </div>

          <motion.div className="space-y-4">
            {envVars.map((envVar, index) => (
              <motion.div
                key={index}
                className="env-var-row"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
              >
                <input
                  type="text"
                  value={envVar.name}
                  onChange={(e) => updateEnvVar(index, "name", e.target.value)}
                  placeholder="NAME_OF_VARIABLE"
                  className="env-var-input"
                />
                <div className="input-wrapper">
                  <input
                    type="text"
                    value={envVar.value}
                    onChange={(e) =>
                      updateEnvVar(index, "value", e.target.value)
                    }
                    placeholder="value"
                    className="env-var-input"
                  />
                  <div className="env-var-actions">
                    <motion.button
                      className="env-var-action generate"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Wand2 className="w-4 h-4" />
                    </motion.button>
                    <motion.button
                      onClick={() => removeEnvVar(index)}
                      className="env-var-action delete"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Trash2 className="w-4 h-4" />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
        >
          <motion.button
            onClick={onDeploy}
            disabled={!formData.name || !formData.deploymentType}
            className={`deploy-button ${
              formData.name && formData.deploymentType ? "enabled" : "disabled"
            }`}
            whileHover={
              formData.name && formData.deploymentType ? { scale: 1.02 } : {}
            }
            whileTap={
              formData.name && formData.deploymentType ? { scale: 0.98 } : {}
            }
          >
            Deploy Web Service
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default ProjectForm;
