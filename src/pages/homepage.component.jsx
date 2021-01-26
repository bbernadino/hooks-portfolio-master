import React from 'react';
import Particles from 'react-particles-js';
import { Link } from 'react-router-dom';

import styled from 'styled-components';

const HomePageContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;

  @media screen and (max-width: 800px) {
    justify-content: flex-start;
  }
`;

const HomePageContent = styled.div`
  width: 400px;
  height: 450px;
  background: #cbc3ba;
  box-shadow: 8px 4px 12px rgba(105, 6, 38, 0.25);
  border: 5px solid #524f4a;
  border-radius: 4px;
  padding: 16px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  transition: 320ms ease;

  :hover {
    transform: scale(1.08);
  }

  h2 {
    color: #524f4a;
    font-size: 32px;
    z-index: 2;
  }

  h3 {
    color: #524f4a;
    font-size: 24px;
    z-index: 2;
  }

  p {
    color: #524f4a;
    text-align: center;
    z-index: 2;
  }

  .particles {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
  }

  @media screen and (max-width: 800px) {
    height: 65%;
    width: 80%;
  }
`;

const ButtonBox = styled.div`
  width: 70%;
  display: flex;
  justify-content: space-between;
  padding: 15px;
  z-index: 2;
`;

export const Button = styled.button`
  width: 100px;
  height: 50px;
  border: 3px solid #cbc3ba;
  border-radius: 4px;
  font-weight: bold;
  color: #cbc3ba;
  background: #524f4a;
  margin: 5px;

  :hover {
    background: transparent;
    color: #524f4a;
    border: 3px solid #524f4a;
    border-radius: 4px;
    cursor: pointer;
  }
`;

const params = {
  particles: {
    number: {
      value: 100,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
};

const HomePage = () => {

  return (
    <HomePageContainer>
      <HomePageContent>
      <Particles className="particles" params={params} />
        <h2>
          Greetings!
        </h2>
        <h3>I'm Bailey Santistevan</h3>
        <p>
          Javascript Developer and Front End
          Web Designer.
        </p>
        <ButtonBox>
          <Link to='/works'><Button>See my works!</Button></Link>
          <Link to='/about'><Button>About me</Button></Link>
        </ButtonBox>
      </HomePageContent>
    </HomePageContainer>
  );
};

export default HomePage;