import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    height: 100vh;
    width: 100%;
    background: #F7F7F7;
    position: relative;
  }

  div {
    margin: 0;
    padding: 0;
    ::-webkit-scrollbar {
      width: 0px;
      background: transparent;
    }
    scrollbar-width: none;
  }

  a {
    text-decoration: none;
    color: rgb(171,229,208);
  }
`;

export default GlobalStyle;

//rgb(171,229,208) mint

//rgb(18,37,67) navy