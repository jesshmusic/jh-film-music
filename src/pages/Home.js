import React from 'react';
import Container from "../components/Container";
import jessPortrait from '../assets/images/JHendricksPortrait.jpg';
import DemoReel1Cover from '../assets/images/DemoReel01Cover.jpg';
import DemoReel2Cover from '../assets/images/DemoReel02Cover.jpg';
import styles from './Home.module.scss';
import VideoPlayer from "../components/VideoPlayer";

const Home = () => {

  return (
    <Container>
      <div className={styles.home}>
        <h1>Jess Hendricks <small>Composer for film, games, and media</small></h1>
        <VideoPlayer posterImage={DemoReel1Cover} videoSourceURL={'https://jh-demo-reels.s3.amazonaws.com/JHDemoReel1.mp4'} />
        <VideoPlayer posterImage={DemoReel2Cover} videoSourceURL={'https://jh-demo-reels.s3.amazonaws.com/Exodus.mp4'} />
        <img src={jessPortrait} alt={'Jess Hendricks'} />
      </div>
    </Container>
  );
}

export default Home;
