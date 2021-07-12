import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,
  Route,Switch
 } from 'react-router-dom';


import Home from "./Home.js";
import Project from "./Project.js";
import Achievements from "./Achievements.js"
import Contact from "./Contact.js"
const routing=(
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/project" component={Project}/>
        <Route path="/achievements" component={Achievements}/>
        <Route path="/contact" component={Contact}/>
     </Switch> 
    </div>
  </Router>
);
ReactDOM.render(routing, document.getElementById('root'));


