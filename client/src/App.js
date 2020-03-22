import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavbarPage from "./components/navbar";
import HomePage from "./pages/home";
import AboutPage from "./pages/about";
import WorkPage from "./pages/work";
import ContactPage from "./pages/contact";
import LoginPage from "./pages/login";
import Projects from "./pages/projects";
import Dashboard from "./pages/dashboard";

function App() {
  return (
    <Router>
      <div>
        <NavbarPage />
        <Route path="/" exact component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/work" component={WorkPage} />
        <Route path="/projects" component={Projects} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/dashboard" component={Dashboard} />
      </div>
    </Router>
  );
}

export default App;
