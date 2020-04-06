import React from "react";
import { Route, Switch } from "react-router-dom";

import { Home } from "../components/screens/Home";
import { MailInRepair } from "../components/screens/MailInRepair";
import { FAQ } from '../components/screens/FAQ/FAQ'

export const Routes = props => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      {/* <Route path to='/services'component={} /> */}
      <Route exact path="/mail-in-repair" component={MailInRepair} />
      {/* <Route path to='/book-online'component={} /> */}
      {/* <Route path to='/about'component={} /> */}
      {/* <Route path to='/shop'component={} /> */}
        <Route exact path='/FAQ' component={FAQ}/>

    </Switch>
  );
};
