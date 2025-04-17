import React from "react";
import {
  Menu,
  Activity,
  Database,
  Clock,
  Server,
  Info,
  List,
  Settings,
} from "lucide-react";

const NavItem = ({ icon, text, active, onClick }) => (
  <button onClick={onClick} className={`nav-item ${active ? "active" : ""}`}>
    {React.cloneElement(icon, { size: 20 })}
    <span>{text}</span>
  </button>
);

const Sidebar = ({ activeSection, onSectionChange }) => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <Menu size={24} className="metric-icon" />
        <h1 className="sidebar-title">Monitor</h1>
      </div>

      <nav className="nav-list">
        <NavItem
          icon={<Activity />}
          text="Health Status"
          active={activeSection === "health"}
          onClick={() => onSectionChange("health")}
        />
        {/* <NavItem
          icon={<Clock />}
          text="Response Time"
          active={activeSection === "response"}
          onClick={() => onSectionChange("response")}
        /> */}
        <NavItem
          icon={<Database />}
          text="Resources"
          active={activeSection === "resources"}
          onClick={() => onSectionChange("resources")}
        />
        {/* <NavItem
          icon={<Server />}
          text="Ports"
          active={activeSection === "ports"}
          onClick={() => onSectionChange("ports")}
        />
        <NavItem
          icon={<Info />}
          text="Details"
          active={activeSection === "details"}
          onClick={() => onSectionChange("details")}
        />
        <NavItem
          icon={<List />}
          text="Logs"
          active={activeSection === "logs"}
          onClick={() => onSectionChange("logs")}
        /> */}
      </nav>
    </div>
  );
};

export default Sidebar;
