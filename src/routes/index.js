import React from "react";
import { Route, Switch } from "react-router-dom";


import { Home } from "../components/screens/Home";
import { MailInRepair } from "../components/screens/MailInRepair";
import { FAQ } from '../components/screens/FAQ/FAQ'
import { About }   from '../components/screens/About';
import { scheduler } from '../components/screens/WeComeToYou/'

export const Routes = props => {
  return (
    <Switch>
        <Route exact path="/" component={Home} />
      {/* <Route path to='/services'component={} /> */}
        <Route exact path="/mail-in-repair" component={MailInRepair} />
      {/* <Route path to='/book-online'component={} /> */}
        <Route exact path='/about'component={About} />
      {/* <Route path to='/shop'component={} /> */}
        <Route exact path='/FAQ' component={FAQ}/>

    </Switch>
  );
};