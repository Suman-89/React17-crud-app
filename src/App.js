import React from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import HomePage from "./component/applicationPages/HomePage";
import AboutPage from "./component/applicationPages/AboutPage";
import ContactPage from "./component/applicationPages/ContactPage";
import NavPage from "./component/otherpages/NavPage";
import { BrowserRouter as Router, Switch,Route } from "react-router-dom";
import NotFound from "./component/otherpages/NotFound";
import AddNewPage from "./component/buttonPages/AddNewPage";
import EditPage from "./component/buttonPages/EditPage";
import ViewPage from "./component/buttonPages/ViewPage";

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
        <Route exact path='/addnew' component={AddNewPage}/>
        <Route exact path='/view' component={ViewPage}/>
        <Route exact path='/edit' component={EditPage}/>
        <Route component={NotFound}/>
      </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;
