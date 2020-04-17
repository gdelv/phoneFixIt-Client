import React from "react";
import { Route, Switch } from "react-router-dom";
import { Home } from "../components/screens/Home/Home";
import { MailInRepair } from "../components/screens/MailInRepair/MailInRepair";
import { FAQ } from '../components/screens/FAQ/FAQ'
import { About }   from '../components/screens/About/About';
import Details from '../components/screens/Details/Details'
import Default from "../components/screens/Default";
import ProductList from "../components/screens/Store/ProductList";
import Cart from '../components/screens/Cart/Cart'
import Modal from '../components/screens/Cart/Modal'
import weCome from '../components/screens/WeComeToYou/weCome'
import ServiceList from "../components/screens/Services/ServiceList";
import SingleService from "../components/screens/Services/SingleService";
import ComputerRepair from "../components/screens/Services/ComputerRepair";
import Contact from "../components/screens/Contact/Contact";

export const Routes = props => {
  return (
    <>
      <Switch>
        {/* Home Route (/) */}
          <Route exact path="/" component={Home} />

        {/* Services Route (/services) */}
          <Route path='/services'component={ServiceList} />
        
        {/* Single Service Route (/service) */}
        <Route path='/service' component={SingleService} />

        {/* Computer Repair Router (/computer) */}
        <Route path='/computer' component={ComputerRepair} />

        {/* Mail In Repair Route (/mail-in-repair) */}
          <Route path="/mail-in-repair" component={MailInRepair} />

        {/* Contant Route (/contact) */}
        <Route path='/contact' component={Contact} />

        {/* We Come To You Page (/book-online) /> */}
          <Route path='/book-online' component={weCome}/>

        {/* About Route (/about) */}
          <Route path='/about'component={About} />

        {/* FAQ Route (/FAQ) */}
          <Route path='/FAQ' component={FAQ}/>

        {/* Store Route (/store) */}
          <Route path='/store' component={ProductList} />

        {/* Details Route (/details) */}
        <Route path='/details' component={Details} />

        {/* Cart Route (/cart) */}
        <Route path='/cart' component={Cart} />

        {/* Route Not Found (none) */}
        <Route component={Default} />

      </Switch>
      <Modal/>
    </>
  );
};