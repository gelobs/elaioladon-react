import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MainSection from "./sections/MainSection";
import Details from "./components/Details";
import Modal from "./components/Modal";
import Default from "./components/Default";
import Cart from "./components/Cart/";
import StripeCheckout from "./components/Cart/Stripe/StripeCheckout";

function App() {
  return (
    <React.Fragment>
      <Switch>
        <Route exact path="/" component={MainSection} />
        <Route path="/details" component={Details} />
        <Route path="/cart" component={Cart} />
        <Route path="/stripecheckout" component={StripeCheckout} />
        <Route component={Default} />
      </Switch>
      <Modal />
    </React.Fragment>
  );
}

export default App;
