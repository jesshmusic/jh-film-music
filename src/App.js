import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Pages from "./data-pages";
import Page from "./pages/Page";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import ContactForm from "./components/Contact";

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes />
      <ContactForm />
      <Footer />
    </Router>
  );
}

const Routes = () => {
  return (
    <Switch>
      <Route path="/about">
        <Page pageData={Pages.aboutPage} />
      </Route>
      <Route path="/">
        <Page pageData={Pages.homePage} />
      </Route>
    </Switch>
  );
}

export default App;
