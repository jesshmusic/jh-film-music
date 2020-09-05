import React from 'react';
import Container from "../components/Container";
import jessPortrait from '../assets/images/JHendricksPortrait.jpg';

const Home = () => {
  return (
    <Container>
      <div>
        <h1>Jess Hendricks <small>Composer for film, games, and media</small></h1>
        <img src={jessPortrait} />
      </div>
    </Container>
  );
}

export default Home;
