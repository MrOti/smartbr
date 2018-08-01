import React, { Component } from 'react';
import './App.css';
import Navigation from './Components/Navigation/Navigation.js';
import Logo from './Components/Logo/Logo.js';
import ImageLinkForm from './Components/ImageLinkForm/ImageLinkForm.js';
import Rank from './Components/Rank/Rank.js';
import Particles from './Components/Particles/Particles.js';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm />
      <Particles />
      {/*
      <FaceRecognition />
      */}
      </div>
    );
  }
}

export default App;
