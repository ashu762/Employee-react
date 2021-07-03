import React from 'react';
import './App.css';
import {BrowserRouter as Router,Route} from "react-router-dom";
import FormScreen from "./screens/FormScreen";
function App() {
  return (
      
        <Router>
          <div className="app">
            <Route path="/" component={FormScreen}></Route>
          </div>
        </Router>
      
  );
}

export default App;
