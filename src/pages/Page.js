import React from 'react';
import PropTypes from 'prop-types';
import Container from "../components/Container";
import styles from './Page.module.scss';
import VideoPlayer from "../components/VideoPlayer";

const Page = ({pageData}) => {
  console.log(pageData)
  return (
    <Container>
      <div className={styles.page}>
        <div className={styles.banner} style={{backgroundImage: `url('${pageData.featureImage.imageUrl}')`}}>
          <h1>{pageData.title} <small>{pageData.subtitle}</small></h1>
        </div>
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
