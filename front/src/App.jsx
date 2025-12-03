import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import Contact from "./pages/Contact.jsx";
import Projects from "./pages/Projects.jsx";
import Profil from "./pages/Profil.jsx";
import Admin from "./pages/Admin.jsx";
import ProfilAdmin from "./pages/ProfilAdmin.jsx";
import ProjectsAdmin from "./pages/ProjectsAdmin.jsx";

function App() {
  const [profil, setProfil] = useState([]);
  const [projects, setProjects] = useState([]);

  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/profil" element={<Profil sections={profil} />} />
            <Route path="/projets" element={<Projects sections={projects} />} />
            <Route path="/admin" element={<Admin />} />

            <Route
              path="/admin/profilform"
              element={
                <ProfilAdmin sections={profil} setSections={setProfil} />
              }
            />
            <Route
              path="/admin/projectform"
              element={
                <ProjectsAdmin sections={projects} setSections={setProjects} />
              }
            />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
