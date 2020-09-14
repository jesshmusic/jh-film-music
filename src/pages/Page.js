import React from 'react';
import PropTypes from 'prop-types';
import styles from './Page.module.scss';
import VideoPlayer from "../components/VideoPlayer";
import ContainerFluid from "../components/ContainerFluid";
import { Link, animateScroll as scroll } from "react-scroll";

class Page extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    scroll.scrollToTop();
  }

  render() {
    return(
      <ContainerFluid posts={ this.props.posts }>
        <div className={ styles.page }>
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
                      <h3>{ video.title }</h3>
                      <h4>{ video.subtitle }</h4>
                      <VideoPlayer posterImage={ video.posterImage } videoSourceURL={ video.sourceURL }/>
                    </div>
                  ) ) }
                </div>
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
