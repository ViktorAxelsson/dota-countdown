import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { DotaCountdown } from './dota-countdown';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}

        <DotaCountdown ></DotaCountdown>
      </header>
    </div>
  );
}

export default App;
