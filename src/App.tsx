import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { DotaCountdown } from './dota-countdown';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'reactstrap';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}

        <Button color="danger">Danger!</Button>
        <DotaCountdown ></DotaCountdown>
      </header>
    </div>
  );
}

export default App;
