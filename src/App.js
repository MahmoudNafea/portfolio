import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navbar from './components/ui/navbar';
import HomePage from './components/home';
import AboutPage from './components/about';
import WorkPage from './components/work';
import ContactPage from './components/contact';
import LoginPage from './components/login';




function App() {
  return (
    <Router>
      <div >
        <Navbar />
        <Route path='/' exact component={HomePage} />
        <Route path='/about' component={AboutPage} />
        <Route path='/work' component={WorkPage} />
        <Route path='/contact' component={ContactPage} />
        <Route path='/login' component={LoginPage} />
      </div>
    </Router>
  );
}

export default App;
