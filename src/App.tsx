import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import FormScreen from "./screens/FormScreen";
import ThankYouScreen from "./screens/ThankYouScreen";
function App() {
  return (
    <Router>
      <div className="app">
        <Route path="/" component={FormScreen} exact></Route>
        <Route path="/success" component={ThankYouScreen} exact></Route>
      </div>
    </Router>
  );
}

export default App;
