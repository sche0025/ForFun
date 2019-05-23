import React from 'react';
import logo from './logo.svg';
import './App.css';
import ReactAudioPlayer from 'react-audio-player';
import yezi from './assets/yezi.mp3'
import cuiacuia from './assets/cuiacuia.png'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={cuiacuia} className="App-logo" alt="logo" />
        <p>
            <audio controls>

                    <source src={yezi} type="audio/mpeg" />
            </audio>
        </p>


      </header>
    </div>
  );
}

export default App;
