import React, { useState } from 'react';

import styled from 'styled-components';
import crwn from '../assets/crwn.jpg';
import amazon from '../assets/amazon.png'
import discord from '../assets/discord.png'
import memories from '../assets/memories.png'
import burgerbuilder from '../assets/burgerbuilder.jpg';
import forkify from '../assets/forkify.jpg';
import cisco from '../assets/cisco.png';
import mtntravel from '../assets/mtntravel.jpg';
import riverside from '../assets/riverside.jpg';
import uhost from '../assets/uhost.jpg';
import gravesite from '../assets/gravesite.jpg';

import { Button } from '../pages/homepage.component';

const WorksContainer = styled.div`
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

const WorksContent = styled.div`
  width: 70%;
  height: 70%;
  margin-top: 50px;
  padding-bottom: 15px;
  background: #cbc3ba;
  box-shadow: 8px 4px 12px rgba(105, 6, 38, 0.25);
  border: 5px solid #524f4a;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  transition: 320ms ease;

  h2 {
    color: #524f4a;
  }

  @media screen and (max-width: 800px) {
    margin-top: unset;
    overflow: scroll;
    width: 90%;
    height: 90%
  }

  @media screen and (min-width: 1200px) {
    max-width: 970px;
  }
`;

const WorksSections = styled.div`
  width: 100%;
  height: 100%;
  padding: 5px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
  overflow: hidden;

  @media screen and (max-width: 800px) {
    flex-direction: column;
    justify-content: flex-start;
    flex-wrap: nowrap;
    overflow: unset;
    overflow-y: scroll;
  }
`;

const WorksCardsContainer = styled.div`
  width: 45%;
  height: 100%;
  padding: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  overflow-y: scroll;

  h2 {
    margin: 5px;
  }

  @media screen and (max-width: 800px) {
    width: 95%;
    overflow: unset;
    height: unset;
    display: block;
  }
`;

const WorksCard = styled.div`
  width: 85%;
  margin: 10px 0;
  display: flex;
  flex-direction column;
  justify-content: center;
  align-items: center;
  text-align: center;
  border: 5px solid #524f4a;
  border-radius: 4px;
  transition: 320ms ease;

  img {
    max-width: 100%;
    height: auto;
    border-bottom: 3px solid #524f4a;
  }

  :hover {
    transform: scale(1.02);
  }

  @media screen and (max-width: 800px) {
    width: 90%;
    margin: 15px auto;
  }
`;

const WorksCardInfo = styled.div`
  height: auto; 
  width: 100%;
  background: #cbc3ba;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h4 {
    color: #524f4a;
    width: 90%;
    margin: 5px;
  }
`;

const WorksPage = () => {

  const [webItems, setWebItems] = useState([
    {
      title: 'Cisco Heating',
      imageUrl: cisco,
      description: 'Website for local HVAC Contractor built with React',
      linkUrl: 'https://ciscoheatingut.netlify.app/'
    },
    {
      title: 'Mtn Travel',
      imageUrl: mtntravel,
      description: 'Web design project built with pure HTML and CSS',
      linkUrl: 'https://bbernadino.github.io/mtn-travel/'
    },
    {
      title: 'uHost',
      imageUrl: uhost,
      description: 'Responsive hosting service site built with pure HTML and CSS',
      linkUrl: 'https://bbernadino.github.io/css-class-final/'
    },
    {
      title: 'Riverside Inn',
      imageUrl: riverside,
      description: 'Restaurant site design example using Bootstrap',
      linkUrl: 'https://bbernadino.github.io/responsive-design-final/'
    },
    {
      title: 'The Gravesite',
      imageUrl: gravesite,
      description: 'Full stack app using HTML, CSS, PHP, and mySQL',
      linkUrl: 'https://github.com/bbernadino/gravesite'
    }
  ]);

  const [jsItems, setjsItems] = useState([
    {
      title: 'Crwn Clothing',
      imageUrl: crwn,
      description: 'E-commerce site built with React, Redux, and Firebase',
      linkUrl: 'http://crwn-bbern-live.herokuapp.com/'
    },
    {
      title: 'Amazon Clone',
      imageUrl: amazon,
      description: 'Amazon UI, e-commerce clone built with React and Firebase',
      linkUrl: 'https://clone-feb1e.firebaseapp.com/'
    },
    {
      title: 'Memories App',
      imageUrl: memories,
      description: 'MERN fullstack social media application with Mongo Cloud Atlas',
      linkUrl: 'https://memories-mernproject.netlify.app/'
    },
    {
      title: 'Discord Clone',
      imageUrl: discord,
      description: 'Firebase Google Auth, chatroom functionality',
      linkUrl: 'https://discord-clone-d1c4d.firebaseapp.com/'
    },
    {
      title: 'Forkify App',
      imageUrl: forkify,
      description: 'Recipe database search app built with pure es6 JS',
      linkUrl: 'https://bbernadino.github.io/Forkify-App/'
    },
    {
      title: 'Burger Builder',
      imageUrl: burgerbuilder,
      description: 'Custom burger ordering app built with React',
      linkUrl: 'https://github.com/bbernadino/burger-builder-reupload'
    }
  ]);

  console.log(setWebItems, setjsItems);

  return (
    <WorksContainer>
      <WorksContent>
        <h2>My Services...</h2>
        <WorksSections>
          <WorksCardsContainer>
            <h2>Front-End web design</h2>
            {
              webItems.map((item, index) => (
                <WorksCard
                  key={index}
                  index={index}
                  item={item}
                >
                  <img alt={item.title} src={item.imageUrl} />
                  <WorksCardInfo>
                    <h4>{item.description}</h4>
                    <a
                      href={item.linkUrl}
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <Button>{item.title}</Button>
                    </a>
                  </WorksCardInfo>
                </WorksCard>
              ))
            }
          </WorksCardsContainer>
          <WorksCardsContainer>
            <h2>JavaScript Development</h2>
            {
              jsItems.map((item, index) => (
                <WorksCard
                  key={index}
                  index={index}
                  item={item}
                >
                  <img alt={item.title} src={item.imageUrl} />
                  <WorksCardInfo>
                    <h4>{item.description}</h4>
                    <a
                      href={item.linkUrl}
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <Button>{item.title}</Button>
                    </a>
                  </WorksCardInfo>
                </WorksCard>
              ))
            }
          </WorksCardsContainer>
        </WorksSections>
      </WorksContent>
    </WorksContainer>
  );
};

export default WorksPage;