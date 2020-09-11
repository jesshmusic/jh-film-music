import React from 'react';
import PropTypes from 'prop-types';
import styles from './Page.module.scss';
import VideoPlayer from "../components/VideoPlayer";
import ContainerFluid from "../components/ContainerFluid";

const Page = ({post, posts}) => (
  <ContainerFluid posts={posts}>
    <div className={styles.page}>
      <div className={styles.banner} style={{backgroundImage: `url('${post.featuredImage}')`}}>
        <h1><span dangerouslySetInnerHTML={{__html: post.title.rendered}} /> <small>{post.subtitle}</small></h1>
      </div>
      <div className={styles.content} dangerouslySetInnerHTML={{__html: post.content.rendered}} />
        {
          post.videos.length > 0 ? (
            <div>
              <h2>Videos</h2>
              <div className={styles.videos}>
              { post.videos.map((video, index) => (
                <div key={index} className={styles.videoColumn}>
                  <h3>{video.title}</h3>
                  <h4>{video.subtitle}</h4>
                  <VideoPlayer posterImage={video.posterImage} videoSourceURL={video.sourceURL} />
                </div>
              )) }
              </div>
            </div>
          ) : null
        }
    </div>
  </ContainerFluid>
);

Page.propTypes = {
  post: PropTypes.object.isRequired,
  posts: PropTypes.array.isRequired,
}

export default Page;
