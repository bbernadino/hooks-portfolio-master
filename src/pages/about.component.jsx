import React from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';

import aboutImg from '../assets/IMG-6147.jpg';
import resume from '../assets/Bailey-web-dev-resume.pdf';

import { Button } from '../pages/homepage.component';

const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100vw;
  height: 100vh;

  @media screen and (max-width: 800px) {
    justify-content: flex-start;
  }
`;

const AboutContent = styled.div`
  width: 65%;
  padding-bottom: 15px;
  background: #cbc3ba;
  box-shadow: 8px 4px 12px rgba(105, 6, 38, 0.25);
  border: 5px solid #524f4a;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: justify;
  transition: 320ms ease;

  :hover {
    transform: scale(1.05);
  }

  h2, h3, p {
    color: #524f4a;
  }

  h3 {
    margin: 10px 0;
  }

  p {
    padding: 15px;
    width: 80%;
    margin: 10px 0;
  }

  @media screen and (max-width: 800px) {
    width: 85%;
  }

  @media screen and (min-width: 1200px) {
    max-width: 917px;
  }
`;

const AboutImg = styled.div`
  width: 180px;
  height: 180px;
  background-image: url(${aboutImg});
  background-size: cover;
  border-radius: 50%;
  margin-bottom: 25px;
  border: 3px solid #524f4a;
  box-shadow: 0px 10px 33px 0px rgba(0,0,0,0.43);
`;

const AboutButtonBox = styled.div`
  width: 50%;
  padding: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
`;

const AboutPage = () => {

  return (
    <AboutContainer>
      <AboutContent>
        <h2>About Me...</h2>
        <AboutImg />
        <h3>I'm Bailey Santistevan.</h3>
        <p>Javascript is my main focus in my quest
        to learn how to build engaging, exciting, and
        user friendly experiences from the ground up. Web and
        Software design/development, kettlebells, and coffee are
        some of the things that I enjoy most.
        </p>
        <AboutButtonBox>
          <a href={resume}><Button>My Resumé</Button></a>
          <Link to='/contact'><Button>Hire me!</Button></Link>
        </AboutButtonBox>
      </AboutContent>
    </AboutContainer>
  );
};

export default AboutPage;