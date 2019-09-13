import React from 'react';
import Header from './components/Header'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import About from './pages/About'
import Home from './pages/Home'
import Todos from './pages/Todos'
import Events from './pages/Events'
import Contacts from './pages/Contacts'

import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Header />

        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/todos" component={Todos} />
        <Route path="/events" component={Events} />
        <Route path="/contacts" component={Contacts} />

      </div>
    </Router>
  );
}

export default App;
