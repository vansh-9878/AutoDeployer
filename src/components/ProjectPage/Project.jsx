import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Dashboard from "./Tables"

function Project() {
  const [activeSection, setActiveSection] = useState("health");
  return (
    <div className="app-container">
      <Sidebar
        activeSection={activeSection}
        onSectionChange={setActiveSection}
      />
      <div className="main-content">
        <Dashboard activeSection={activeSection} />
      </div>
    </div>
  );
}

export default Project;
