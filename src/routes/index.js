import React from "react";
import { Route, Switch } from "react-router-dom";


import { Home } from "../components/screens/Home";
import { MailInRepair } from "../components/screens/MailInRepair";
import { FAQ } from '../components/screens/FAQ/FAQ'
import { About }   from '../components/screens/About';
import Default from "../components/screens/Default";

export const Routes = props => {
  return (
    <Switch>
      {/* Home Route (/) */}
        <Route exact path="/" component={Home} />

      {/* Services Route (/services) */}
        {/* <Route path to='/services'component={} /> */}

      {/* Mail In Repair Route (/mail-in-repair) */}
        <Route exact path="/mail-in-repair" component={MailInRepair} />

      {/* <Route path to='/book-online'component={} /> */}
      {/* About Route (/about) */}
        <Route exact path='/about'component={About} />

      {/* FAQ Route (/FAQ) */}
        <Route exact path='/FAQ' component={FAQ}/>

      {/* Route Not Found (/) */}
      <Route component={Default} />

    </Switch>
  );
};