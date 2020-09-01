import React from "react";
import { Route, Switch, Redirect, useRouteMatch } from "react-router-dom";
import { Orders } from "./Orders";

export const UserPage: React.FC = () => {
  let { path, url } = useRouteMatch();
  console.log({ path, url });
  return (
    <Switch>
      <Route exact path={"/user"} component={() => <h1>Orders</h1>} />
      <Route path={`/user/orders`} component={Orders} />
    </Switch>
  );
};

export default UserPage;
