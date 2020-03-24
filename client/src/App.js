import React, { useState, useCallback } from "react";
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import NavbarPage from "./components/navbar";
import HomePage from "./pages/home";
import AboutPage from "./pages/about";
import WorkPage from "./pages/work";
import ContactPage from "./pages/contact";
import LoginPage from "./pages/login";
import Projects from "./pages/projects";
import Dashboard from "./pages/dashboard";
import AuthContext from './components/context/authContext';

function App() {
  const [isLogin, setIsLogin] = useState(false)

  const login = useCallback(() => {
    setIsLogin(true)
  }, []);

  const logout = useCallback(() => {
    setIsLogin(false)
  }, []);


  return (
    <AuthContext.Provider
      value={{ isLogin: isLogin, login: login, logout: logout }}>
      <Router>
        <NavbarPage />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/work" component={WorkPage} />
          <Route path="/projects" component={Projects} />
          <Route path="/contact" component={ContactPage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/dashboard" component={Dashboard} />
          <Redirect to="/" />
        </Switch>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
