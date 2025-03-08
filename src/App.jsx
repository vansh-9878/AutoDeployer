import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/page";
import { NewProjectPage } from "./components/NewProject/NewProjectPage.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/new-project" element={<NewProjectPage />} />
      </Routes>
    </Router>
  );
}

export default App;
