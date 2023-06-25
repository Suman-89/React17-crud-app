import React from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import HomePage from "./component/applicationPages/HomePage";
import AboutPage from "./component/applicationPages/AboutPage";
import ContactPage from "./component/applicationPages/ContactPage";
import NavPage from "./component/otherpages/NavPage";
import { BrowserRouter as Router, Switch,Route } from "react-router-dom";
import NotFound from "./component/otherpages/NotFound";

function App() {
  return (
    <div className="p-3 mb-2 bg-warning-subtle text-emphasis-warning">
    <Router>
      <div className="App">
      <NavPage/>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/about' component={AboutPage}/>
        <Route exact path='/contact' component={ContactPage}/>
        <Route component={NotFound}/>
      </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;
