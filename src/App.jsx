import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/page";
import { NewProjectPage } from "./components/NewProject/NewProjectPage.jsx";
import Project from "./components/ProjectPage/Project.jsx";
import ProfilePage from "./components/auth/profile.jsx";
import LoginPage from "./components/auth/login.jsx";
import GithubOAuthHandle from "./utils/oauth/github.jsx";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/new-project" element={<NewProjectPage />} />
          <Route path="/myproject/:id" element={<Project />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/login" element={<LoginPage />} />
          {/* OAuth Routes */}
          <Route
            path="/oauth/callback/github"
            element={<GithubOAuthHandle />}
          />
        </Routes>
      </Router>
      <Toaster />
    </>
  );
}

export default App;
