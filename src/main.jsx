import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ProjectContextProvider } from "./store/ProjectContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ProjectContextProvider>
      <App />
    </ProjectContextProvider>
  </StrictMode>
);
