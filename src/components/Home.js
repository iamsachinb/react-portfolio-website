import React from 'react';
import sachin from '../assets/sachin.jpeg';

const Home = () => {
  return (
    <section id="home" className="hero">
      <div className="container text-center">
        <img src={sachin} alt="Sachin B" className="profile-img" />
        <h1>Sachin B</h1>
        <p>B.Tech IT Undergraduate | Web & App Developer</p>
        <a href="#about" className="btn btn-primary">Learn More</a>
      </div>
    </section>
  );
};

export default Home;
