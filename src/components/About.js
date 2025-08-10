import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <h2>About the Competition</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget 
              ultricies tincidunt, nisl nisl aliquam nisl, eget ultricies nisl nisl eget nisl. 
              Nullam auctor, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, eget ultricies 
              nisl nisl eget nisl.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget 
              ultricies tincidunt, nisl nisl aliquam nisl, eget ultricies nisl nisl eget nisl. 
              Nullam auctor, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, eget ultricies 
              nisl nisl eget nisl.
            </p>
          </div>
          <div className="about-features">
            <div className="feature">
              <h3>Challenging Problems</h3>
              <p>Problems designed to test deep mathematical understanding and creative problem-solving skills.</p>
            </div>
            <div className="feature">
              <h3>Global Competition</h3>
              <p>Compete with talented students from around the world in a fair and challenging environment.</p>
            </div>
            <div className="feature">
              <h3>Recognition</h3>
              <p>Top performers receive certificates, prizes, and recognition from leading mathematicians.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
