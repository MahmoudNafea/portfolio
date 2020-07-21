import React from "react";
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import NavbarPage from "./components/navbar";
import HomePage from "./pages/home";
import AboutPage from "./pages/about";
import WorkPage from "./pages/work";
import ContactPage from "./pages/contact";
import Projects from "./pages/projects";

function App() {

  return (
    <Router>
      <NavbarPage />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/work" component={WorkPage} />
        <Route path="/projects" component={Projects} />
        <Route path="/contact" component={ContactPage} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;
