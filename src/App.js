import React, { useEffect } from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { ReactQueryDevtools } from 'react-query/devtools'
import Page from "./pages/Page";
import Footer from "./components/Footer";
import ContactForm from "./components/Contact";
import BackgroundImage from './assets/images/topography.svg';

import styles from './App.module.scss';
import './styles/default.scss';
import PropTypes from "prop-types";
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'

const restApiUrl = 'https://existentialmusic.com/wp-json/wp/v2/film_music_page';
// const restApiUrl = 'https://existentialmusic.local.com/wp-json/wp/v2/film_music_page';

const queryClient = new QueryClient()

const App = () => {

  return (
    <QueryClientProvider client={queryClient}>
      <Pages />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

const Pages = () => {

  // Queries
  const query = useQuery('posts', async () => {
    const response = await fetch(restApiUrl);
    return response.json();
  });
  if (query.isLoading) {
    return <span>Loading...</span>
  }

  if (query.isError) {
    return <span>Error: {query.error.message}</span>
  }

  return (
    <>
      <ScrollToTop />
      <div className={styles.app}>
        <div className={styles.appSideBG}>
          <div style={{backgroundImage: `url(${BackgroundImage})`}} className={styles.appWrapper}>
            <BrowserRouter>
              <Routes>
                {query.data.map(post =>
                  post.status === 'publish' ? (
                    <Route exact
                           path={post.relativeRoute}
                           key={post.id}
                           element={<Page post={post} posts={query.data} />} />
                  ) : null
                )}
              </Routes>
            </BrowserRouter>
            <ContactForm />
            <Footer />
          </div>
        </div>
      </div>
    </>
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
