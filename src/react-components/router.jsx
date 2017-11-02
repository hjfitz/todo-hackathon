import React from "react";
import ReactDOM from "react-dom";
import Home from './home.jsx';

import { BrowserRouter, Switch, Route } from "react-router-dom";

const onUpdate = () => window.scrollTo(0, 0);




const Router = () => {
  return (
    <BrowserRouter onUpdate={onUpdate}>
      <Switch>
         <Route exact path='/' component={Home} />
      </Switch>
    </BrowserRouter>
  );
};

ReactDOM.render(<Router />, document.getElementById("react"));
