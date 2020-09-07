import React from 'react';
import Container from "../components/Container";
import jessPortrait from '../assets/images/JHendricksPortrait.jpg';
import { Player } from 'video-react';
import DemoReel1 from '../assets/videos/JHDemoReel1.mp4';
import styles from './Home.module.scss';

const Home = () => {
  return (
    <Container>
      <div className={styles.home}>
        <h1>Jess Hendricks <small>Composer for film, games, and media</small></h1>
        <Player
          playsInline
          src={DemoReel1}
        />
        <img src={jessPortrait} alt={'Jess Hendricks'} />
      </div>
    </Container>
  );
}

export default Home;
