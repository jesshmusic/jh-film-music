import React from 'react';
import PropTypes from 'prop-types';
import styles from './Page.module.scss';
import VideoPlayer from "../components/VideoPlayer";
import ContainerFluid from "../components/ContainerFluid";

const Page = ({post, posts}) => {


  return (
    <ContainerFluid posts={posts}>
      <div className={styles.page}>
        <div className={styles.banner} style={{backgroundImage: `url('${post.featuredImage}')`}}>
          <h1><span dangerouslySetInnerHTML={{__html: post.title.rendered}} /> <small>{post.subtitle}</small></h1>
        </div>
        <div className={styles.content} dangerouslySetInnerHTML={{__html: post.content.rendered}} />
        {
          post.videos.length > 0 ? (
            post.videos.map((video, index) => (
              <VideoPlayer key={index} posterImage={video.posterImage} videoSourceURL={video.sourceURL} />
            ))
          ) : null
        }

      </div>
    </ContainerFluid>
  );
}

Page.propTypes = {
  post: PropTypes.object.isRequired,
  posts: PropTypes.array.isRequired,
}

export default Page;
