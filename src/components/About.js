import React from 'react';
import EditableHeading from './EditableHeading';

const About = () => {
  return (
    <section id="about" className="about section-padding">


      <div className="container">
        <h2>About Me</h2>
        <EditableHeading initialText="          I am a tech enthusiast and B.Tech IT undergraduate with extensive experience in web and app development technologies such as Django and Flutter. I aim to secure a challenging role in a reputed organization where I can leverage my technical skills and innovative mindset.
" />
      </div>
    </section>
  );
};

export default About;
