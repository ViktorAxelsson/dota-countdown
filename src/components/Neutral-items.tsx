import React from 'react';
import { secondsToString } from '../utils/timeutils';
// import { number } from 'prop-types';

type IProps = {
  interval: number;
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
      this.myInterval = setInterval(() => {
        this.setState(({ seconds }) => ({
            seconds: seconds + 1
        }));
      }, this.props.interval)
  }

  componentWillUnmount() {
      clearInterval(this.myInterval)
  }

  currentTier() {
    let value = 0;
    for (let i = 0; i <= this.dropTimesMinutes.length; i++) {
      if (this.state.seconds > this.dropTimesMinutes[i] * 60) {
        value = i + 1;
      }
    }
    return value;
  }

  timeTillNextTier() {
    return this.dropTimesMinutes[this.currentTier()] * 60 - this.state.seconds;
  }

  render() {
      return (
          <div>
            {/* <h1>Neutral items: { secondsToString(this.state.seconds) }</h1> */}
            <h2>Current tier: { this.currentTier() }</h2>
            <h2>Next tier in: { secondsToString(this.timeTillNextTier()) }</h2> 
          </div>
      )
  }
}