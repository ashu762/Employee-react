import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import FormScreen from "./screens/FormScreen";
import ThankYouScreen from "./screens/ThankYouScreen";
import PreviousDetailsScreen from "./screens/PreviousDetailsScreen";
import HomeScreen from "./screens/HomeScreen";
function App() {
  return (
    <Router>
      <div className="app">
        <Route path="/" component={HomeScreen} exact></Route>
        <Route path="/form" component={FormScreen} exact></Route>
        <Route path="/success" component={ThankYouScreen} exact></Route>
        <Route path="/previous" component={PreviousDetailsScreen}></Route>
      </div>
    </Router>
  );
}

export default App;
