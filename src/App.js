import React from "react";
import PizzaForm from "./PizzaForm";
import Home from "./Home";
import { Route, Switch } from "react-router-dom";
import ContactUs from "./ContactUs";
import Header from "./Header";
import Footer from "./Footer";

const App = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/pizza">
          <PizzaForm />
        </Route>
        <Route path="/contact-us">
          <ContactUs />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
      <Footer children="footer" />
    </>
  );
};
export default App;
