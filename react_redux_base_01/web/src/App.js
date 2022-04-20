import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//import styled from "styled-components";
import MainLayout from 'layouts/MainLayout';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" component={MainLayout}>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;


