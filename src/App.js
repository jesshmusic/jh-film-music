import React from 'react';
import { PlayState, Tween } from "react-gsap";
import styles from './App.module.scss';
import navStyles from './styles/components/NavBar.module.scss';
import footerStyles from './styles/components/Footer.module.scss';
import cx from 'classnames';
import {
  TransitionGroup,
  CSSTransition
} from "react-transition-group";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function App() {
  return (
      <Router>
        <NavBar />
        <Routes />
      </Router>
  );
}

const NavBar = () => {
  return (
    <div className={navStyles.navbarContainer}>
      <nav className={navStyles.navbarMain}>
        <Link to="/" className='nav-link'>Home</Link>
        <Link to="/about" className="nav-link">About</Link>
      </nav>
    </div>
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

const Container = ({ children }) => {
  return (
    <div>
      <Tween from={{ x: '-500', opacity: 0, boxShadow: '0 0 0 rgba(0, 0, 0, 0)'}} duration={2} ease={'power2.out'}>
        <div className={styles.app}>
          { children }
        </div>
      </Tween>
      <Footer />
    </div>
  );
}

const Footer = () => {
  return (
    <footer className={footerStyles.footer}>
      &copy; {new Date().getFullYear()} Jess Hendricks. All rights reserved.
    </footer>
  );
}

const Home = () => {
  return (
    <Container>
      <div>
        <h1>Jess Hendricks <small>Composer for film, games, and media</small></h1>
      </div>
    </Container>
  );
}

const About = () => {
  return (
    <Container>
      <div>
        <h1>About</h1>
      </div>
    </Container>
  );
}
