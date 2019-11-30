import React from 'react';
import { secondsToString } from '../utils/timeutils';
// import { number } from 'prop-types';

type IProps = {
  gameTime: number;
};

type IState = {
  seconds: number;
};
export class NeutralItems extends React.Component<IProps, IState> {
  state = {
      seconds: 0,
  }
  myInterval: any;

  dropTimesMinutes: number[] = [
    5, 
    15, 
    25, 
    40, 
    70
  ];

  componentDidMount() {

  }

  componentWillUnmount() {
      clearInterval(this.myInterval)
  }

  currentTier(gameTime: number) {
    let value = 0;
    for (let i = 0; i <= this.dropTimesMinutes.length; i++) {
      if (gameTime > this.dropTimesMinutes[i] * 60) {
        value = i + 1;
      }
    }
    return value;
  }

  timeTillNextTier(gameTime: number): string {
    if (this.currentTier(this.props.gameTime) === this.dropTimesMinutes.length) {
      return "Max tier reached";
    }
    return secondsToString(this.dropTimesMinutes[this.currentTier(this.props.gameTime)] * 60 - gameTime);
  }

  render() {
      return (
          <div>
            {/* <h1>Neutral items: { secondsToString(this.state.seconds) }</h1> */}
            <h2>Current tier: { this.currentTier(this.props.gameTime) }</h2>
            <h2>Next tier in: { this.timeTillNextTier(this.props.gameTime) }</h2> 
          </div>
      )
  }
}