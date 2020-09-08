import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Page from "./pages/Page";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import ContactForm from "./components/Contact";
import BackgroundImage from './assets/images/topography.svg';

import styles from './App.module.scss';
import PropTypes from "prop-types";

const restApiUrl = process.env.NODE_ENV === 'development' ? 'https://existentialmusic.local.com/wp-json/wp/v2/film_music_page' : 'https://existentialmusic.com/wp-json/wp/v2/film_music_page'

const App = () => {
  const [ posts, setPosts ] = useState([]);
  useEffect(() => {
    async function loadPosts() {
      const response = await fetch(restApiUrl);
      if(!response.ok) {
        // oups! something went wrong
        return;
      }

      const posts = await response.json();
      setPosts(posts);
    }

    loadPosts();
  }, []);

  return (
    <Router>
      <div className={styles.app}>
        <div style={{backgroundImage: `url(${BackgroundImage})`}} className={styles.appWrapper}>
          <NavBar posts={posts} />
          <Routes posts={posts} />
          <ContactForm />
          <Footer />
        </div>
      </div>
    </Router>
  );
}

const Routes = ({posts}) => {
  console.log(posts);
  return (
    <Switch>
      {posts.map(post =>
        <Route exact
               path={post.relativeRoute}
               key={post.id}
               render={() => <Page pageData={post} /> } />
      )}
    </Switch>
  );
}

Routes.propTypes = {
  posts: PropTypes.array,
}

export default App;
