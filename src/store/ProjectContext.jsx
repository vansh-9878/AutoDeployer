import { createContext, useState } from "react";

export const ProjectContext = createContext({
  newProject: [],
  setNewProject: () => {},
});

export const ProjectContextProvider = ({ children }) => {
  const [newProject, setNewProject] = useState([]);

  return (
    <ProjectContext.Provider value={{ newProject, setNewProject }}>
      {children}
    </ProjectContext.Provider>
  );
};
