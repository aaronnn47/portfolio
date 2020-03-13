import React, { Component } from 'react';
import './App.css';
import Main from './Views/Main/Main'
import Header from './Components/Header/Header'
import Skills from './Views/Skills/Skills'
import Projects from './Views/Projects/Projects'
import About from './Views/About/About'
import Contacts from './Views/Contacts/Contacts'


class App extends Component {

  render() {

    return (
      <div className='app'>
      <Header/>
      <Main/>
      <Skills/>
      <Projects/>
      <About/>
      <Contacts/>
      </div>
    );
  }
}

export default App;
