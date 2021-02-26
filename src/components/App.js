import React from "react";
import { Route, Switch } from "react-router-dom";

import routes from "../routes";
//import Container from "./UI/Container";

const App = () => {
  return (
    <Switch>
      {routes.map((route) => (
        <Route key={route.path} {...route} />
      ))}
      {/* <Route path={routes.homePage}></Route>
        <Route path={routes.counterPage}>
          <CounterView />
        </Route> */}
    </Switch>
  );
};

export default App;
