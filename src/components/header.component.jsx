import React from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';

import { ReactComponent as Logo } from '../assets/kettlebell-svgrepo-com.svg';

const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  background: rgba(36,25,9, 0.75);
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;

  @media screen and (max-width: 800px) {
    height: 60px;
    padding: 10px;
    margin-bottom: 20px;
    position: relative;
    top: unset;
    left: unset;
  }
`;

const LogoContainer = styled(Link)`
  height: 50px;
  width: 50px;
  padding-left: 10px;
  padding-top: 10px;

  
  @media screen and (max-width: 800px) {
    height: 60px;
    padding: 10px;
    margin-bottom: 20px;
  }
`;

const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media screen and (max-width: 800px) {
    width: 80%;
    margin-right: 25px;
  }
`;

const OptionLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
  font-weight: bold;
  color: #F7F7F7;

  &:hover {
    color: black;
  }
`;

const Header = () => {

  return (
    <HeaderContainer>
      <LogoContainer to='/'>
        <Logo />
      </LogoContainer>
      <OptionsContainer>
        <OptionLink to='/about'>
          About
        </OptionLink>
        <OptionLink to='/works'>
          Works
        </OptionLink>
        <OptionLink to='/contact'>
          Contact
        </OptionLink>
      </OptionsContainer>
    </HeaderContainer>
  );
};

export default Header;