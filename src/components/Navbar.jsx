import { PlusCircle, User } from "lucide-react";
import { useNavigate } from "react-router-dom";
import "./styles.css";

const Navbar = () => {
  const navigate = useNavigate(); // Initialize navigate function

  return (
    <nav className="nav-bar">
      <div className="nav-container">
        <h1 className="nav-title" style={{color:"white"}}>Auto Deployer</h1>
        <div className="nav-buttons">
          <button onClick={() => navigate("/new-project")} className="btn-primary">
            <PlusCircle className="icon" />
            Create New Project
          </button>
          <button className="btn-outline" onClick={() => navigate("/profile")}>
            <User className="icon" style={{color:"white"}}/>
            <span style={{color:"white"}}>Profile</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
