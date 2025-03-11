import { createContext, useState } from "react";

export const ProjectContext = createContext({
  newProject: [],
  setNewProject: () => {},
});

export const ProjectContextProvider = ({ children }) => {
  const [newProject, setNewProject] = useState(() => {
    const savedProjects = localStorage.getItem("projects");
    return savedProjects
      ? JSON.parse(savedProjects)
      : [
          {
            id: "1",
            name: "E-commerce Website",
            description:
              "Online store with product catalog and payment integration",
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
  });

  // Save newProject to localStorage whenever it changes
  const updateProjects = (projects) => {
    setNewProject(projects);
    localStorage.setItem("projects", JSON.stringify(projects));
  };

  return (
    <ProjectContext.Provider
      value={{ newProject, setNewProject: updateProjects }}
    >
      {children}
    </ProjectContext.Provider>
  );
};
