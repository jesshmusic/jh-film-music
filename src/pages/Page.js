import React from 'react';
import PropTypes from 'prop-types';
import styles from './Page.module.scss';
import VideoPlayer from "../components/VideoPlayer";
import ContainerFluid from "../components/ContainerFluid";
import { Link, animateScroll as scroll } from "react-scroll";

class Page extends React.Component {
  componentDidMount() {
    scroll.scrollToTop();
    console.log(this.props.post)
  }

  render() {
    return(
      <ContainerFluid posts={ this.props.posts }>
        <div className={ styles.page } id={'pageTop'}>
          <div className={ styles.banner } style={ { backgroundImage: `url('${ this.props.post.featuredImage }')` } }>
            <h1>
              <span dangerouslySetInnerHTML={ { __html: this.props.post.title.rendered } }/> <small>{ this.props.post.subtitle }</small>
            </h1>
            <div className={styles.contactLink}>
              <Link to={ 'contactForm' } smooth={true}>Get In Touch</Link>
            </div>
          </div>
          <div className={ styles.content } dangerouslySetInnerHTML={ { __html: this.props.post.content.rendered } }/>
          {
            this.props.post.videos.length > 0 ? (
              <div>
                <h2 className={ styles.videoHeading }>Videos</h2>
                <div className={ styles.videos }>
                  { this.props.post.videos.map( ( video, index ) => (
                    <div key={ index } className={ styles.videoColumn }>
                      <div className={styles.videoSubheading}>
                        <h3>{ video.title }</h3>
                        <h4>{ video.subtitle }</h4>
                      </div>
                      <VideoPlayer posterImage={ video.posterImage } videoSourceURL={ video.sourceURL }/>
                    </div>
                  ) ) }
                </div>
              </div>
            ) : null
          }
          {
            this.props.post.recordings && this.props.post.recordings.length > 0 ? (
              <div className={styles.recordingContainer}>
                <h2>Recordings</h2>
                { this.props.post.recordings.map( ( recording, index ) => (
                  <div key={ index } className={styles.recording}>
                    <div className={styles.recordingTitle}>
                      <h3>{ recording.album_title }</h3>
                    </div>
                    {recording.bandcamp_embed ? (
                      <div className={styles.recordingEmbedColumn}>
                        <h4>BandCamp</h4>
                        <div dangerouslySetInnerHTML={ { __html: recording.bandcamp_embed }}/>
                      </div>
                    ) : null}
                    {recording.apple_music_embed ? (
                      <div className={styles.recordingEmbedColumn}>
                        <h4>Apple Music</h4>
                        <div dangerouslySetInnerHTML={ { __html: recording.apple_music_embed }}/>
                      </div>
                    ) : null}
                    {recording.spotify_embed ? (
                      <div className={styles.recordingEmbedColumn}>
                        <h4>Spotify</h4>
                        <div dangerouslySetInnerHTML={ { __html: recording.spotify_embed }}/>
                      </div>
                    ) : null}
                  </div>
                ) ) }
              </div>
            ) : null
          }
        </div>
      </ContainerFluid>
    )
      ;
  }
}

Page.propTypes = {
  post: PropTypes.object.isRequired,
  posts: PropTypes.array.isRequired,
}

export default Page;
