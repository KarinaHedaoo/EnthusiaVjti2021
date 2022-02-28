import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import "./App.css";
import About from "./pages/About";
import Events from "./pages/Events";
import Team from "./pages/Team";
import Navbar from "./UI/Navbar";
import Footer from "./UI/Footer";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Router>
      <Switch>
      <Route exact path="/" component={About} />
        <Route path="/about" component={About} />
        <Route path="/events" component={Events} />
        <Route path="/team" component={Team} />
      </Switch>
      </Router>
      
      <Footer />
    </div>
  );
}

export default App;
