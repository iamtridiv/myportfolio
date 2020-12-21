import React from "react"
import Nav from './Nav';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';

function App() {
  return ( 
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/about" component={About}/>
          <Route path="/skills" component={Skills}/>
          <Route path="/projects" component={Projects}/>
          <Route path="/contact" component={Contact}/>
        </Switch>
      </div>
    </Router>
  );
}

const Home = () => (
  <div>
    <h1 className="heading1">Hi, Welcome to my webpage</h1>
  </div>
);

export default App;
