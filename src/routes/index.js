import React from 'react'
import { Route, Switch } from "react-router-dom";
import { Home } from '../screens/Home';

export const Routes = (props) => {
    return (
        <Switch>
            <Route path to='/'component={Home} />
            {/* <Route path to='/services'component={} /> */}
            {/* <Route path to='/mail-in'component={} /> */}
            {/* <Route path to='/book-online'component={} /> */}
            {/* <Route path to='/about'component={} /> */}
            {/* <Route path to='/shop'component={} /> */}
        </Switch>
    )
}