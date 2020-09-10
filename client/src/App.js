import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import NavBar from "./components/Nav";
import Footer from "./components/Footer";

function App() {



  return (
    <Router>

        <NavBar />

        <Switch>
                <Route exact path={["", "/"]} component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/portfolio" component={Portfolio} />
                <Route exact path="/contact" component={Contact} />
                
        </Switch>

        <Footer />

    </Router>
  )
}

export default App;
