import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Page from "./pages/Page";
import Footer from "./components/Footer";
import ContactForm from "./components/Contact";
import BackgroundImage from './assets/images/topography.svg';
import SideBarImage from './assets/images/SidebarImage.png';

import styles from './App.module.scss';
import PropTypes from "prop-types";

const restApiUrl = 'https://existentialmusic.com/wp-json/wp/v2/film_music_page';

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
      <ScrollToTop />
      <div className={styles.app}>
        <div className={styles.appSideBG}>
          <div style={{backgroundImage: `url(${BackgroundImage})`}} className={styles.appWrapper}>
            <Routes posts={posts} />
            <ContactForm />
            <Footer />
          </div>
        </div>
      </div>
    </Router>
  );
}

const Routes = ({posts}) => {
  return (
    <Switch>
      {posts.map(post =>
        post.status === 'publish' ? (
          <Route exact
                 path={post.relativeRoute}
                 key={post.id}
                 render={() => <Page post={post} posts={posts} /> } />
        ) : null
      )}
    </Switch>
  );
}

const ScrollToTop = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}

Routes.propTypes = {
  posts: PropTypes.array,
}

export default App;
