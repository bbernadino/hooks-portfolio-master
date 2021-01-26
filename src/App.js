import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './components/header.component';
import HomePage from './pages/homepage.component';
import AboutPage from './pages/about.component';
import WorksPage from './pages/workspage.component';
import ContactPage from './pages/contactpage.component';

import GlobalStyle from './global.styles';

function App() {
  return (
    <div>     
      <GlobalStyle />    
      <Header />    
      <Switch>     
        <Route exact path='/' component={HomePage} />
        <Route path='/about' component={AboutPage} />
        <Route path='/works' component={WorksPage} />
        <Route path='/contact' component={ContactPage} />
      </Switch>      
    </div>
  );
}

export default App;
