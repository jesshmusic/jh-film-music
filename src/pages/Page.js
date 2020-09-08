import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Container from "../components/Container";
import styles from './Page.module.scss';
import VideoPlayer from "../components/VideoPlayer";

const Page = ({pageData}) => {


  return (
    <Container>
      <div className={styles.page}>
        <div className={styles.banner} style={{backgroundImage: `url('${pageData.featuredImage}')`}}>
          <h1><span dangerouslySetInnerHTML={{__html: pageData.title.rendered}} /> <small>{pageData.subtitle}</small></h1>
        </div>
        <div className={styles.content} dangerouslySetInnerHTML={{__html: pageData.content.rendered}} />
        {
          pageData.videos.length > 0 ? (
            pageData.videos.map((video, index) => (
              <VideoPlayer key={index} posterImage={video.posterImage} videoSourceURL={video.sourceURL} />
            ))
          ) : null
        }

      </div>
    </Container>
  );
}

Page.propTypes = {
  pageData: PropTypes.object.isRequired,
}

export default Page;
