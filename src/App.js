import React, {Component} from "react";
import "./App.css";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./pages/Home/Home";

class App extends Component {
render(){
  return(
    <Router>
    <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/register" component={Register}/>
    </Switch>
  </Router>
  );
}

}

export default App;