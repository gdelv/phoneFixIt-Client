import React from 'react'
import { Route, Switch } from "react-router-dom";
import { Home } from '../components/screens/Home';
import { About }   from '../components/screens/About';

export const Routes = (props) => {
    return (
        <Switch>
            <Route exact path='/'component={Home} />
            <Route exact path='/about'component={About} />
            {/* <Route path to='/services'component={} /> */}
            {/* <Route path to='/mail-in'component={} /> */}
            {/* <Route path to='/book-online'component={} /> */}
            {/* <Route path to='/shop'component={} /> */}
        </Switch>
    )
}