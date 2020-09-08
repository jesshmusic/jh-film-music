import React, { useEffect, useState } from 'react';
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

const restApiUrl = process.env.NODE_ENV === 'development' ? 'https://existentialmusic.local.com/wp-json/wp/v2/film_music_page' : 'https://existentialmusic.com/wp-json/wp/v2/film_music_page'

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
    <Switch>
      {posts.map((post, index) => (
        <Route path={post.relativeRoute} key={index}>
          <Page pageData={post} />
        </Route>
      ))}
    </Switch>
  );
}

export default App;
