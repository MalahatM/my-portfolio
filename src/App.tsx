// App.tsx
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/projects";
import Resume from "./pages/Resume";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/Resume" element={<Resume />} />
    </Routes>
  );
}

export default App;
