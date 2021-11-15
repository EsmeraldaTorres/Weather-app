import React from "react";
import "./App.css";

import { BrowserRouter, Switch, Route } from "react-router-dom";

//Views
import Home from "./Pages/Home";
import Information from "./Pages/Information";

function App() {
  //JSX

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Home/>
        </Route>

        <Route path="/WeatherIn/:name" exact>
          <Information />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;