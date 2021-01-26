import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';
import { FacebookSquare } from '@styled-icons/boxicons-logos/FacebookSquare';
import { Instagram } from '@styled-icons/boxicons-logos/Instagram';
import { Twitter } from '@styled-icons/boxicons-logos/Twitter';

import Form from '../components/form.component';
import { Button } from '../pages/homepage.component';

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100vw;
  height: 100vh;

  @media screen and (max-width: 800px) {
    // overflow: scroll;
    justify-content: flex-start;
  }
`;

const ContactContent = styled.div`
  width: 55%;
  margin-top: 30px;
  padding: 0 45px;
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
    width: 70%;
    margin-top: unset;
  }

  @media screen and (min-width: 1000px) {
    max-width: 675px;
  }
`;

const SocialsBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  padding: 25px;
`;

const FbIcon = styled(FacebookSquare)`
  height: 50%;
  width: 20%;
  color: #524f4a;

  :hover {
    color: #E1E1E0;
    cursor: pointer;
  }
`;

const IgIcon = styled(Instagram)`
  height: 50%;
  width: 20%;
  color: #524f4a;

  :hover {
    color: #E1E1E0;
    cursor: pointer;
  }
`;

const TwIcon = styled(Twitter)`
  height: 50%;
  width: 20%;
  color: #524f4a;

  :hover {
    color: #E1E1E0;
    cursor: pointer;
  }
`;

const MessageSentConfirm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;

  h1 {
    color: #524f4a;
    margin-bottom: 15px;
  }
`;

const ContactPage = () => {

  const [messageSent, setMessageSent] = useState(false);

  return (
    <ContactContainer>
      <ContactContent>
        {
          !messageSent ?
            <h2>Let's Get In Touch!</h2>
            :
            <span></span>
        }
        {
          messageSent ?
            <MessageSentConfirm>
              <h1>Thank you. I'll return your message ASAP!</h1>
              <Link to='/'><Button>Home</Button></Link>
            </MessageSentConfirm>
            :
            <Form
              setMessageSent={setMessageSent}
            />
        }
        <SocialsBox>
          <a href="https://www.facebook.com/bailey.santistevan" target="_blank" rel="noopener noreferrer">
            <FbIcon />
          </a>
          <a href="https://www.instagram.com/bbernadino/" target="_blank" rel="noopener noreferrer">
            <IgIcon />
          </a>
          <a href="https://twitter.com/Bbernadino1" target="_blank" rel="noopener noreferrer">
            <TwIcon />
          </a>
        </SocialsBox>
      </ContactContent>
    </ContactContainer>
  );
};

export default ContactPage;