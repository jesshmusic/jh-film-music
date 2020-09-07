import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import "../node_modules/video-react/dist/video-react.css";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import About from "./pages/About";
import Footer from "./components/Footer";

const App = ({ store }) => {
  return (
    <Provider store={store}>
      <Router>
        <NavBar />
        <Routes />
        <Footer />
      </Router>
    </Provider>
  );
}

const Routes = () => {
  return (
    <Switch>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  );
}

App.propTypes = {
  store: PropTypes.object.isRequired
}

export default App;
