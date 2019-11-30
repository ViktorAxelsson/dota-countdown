import React from 'react';
import { secondsToString } from '../utils/timeutils';

type IProps = {
  interval: number;
};

type IState = {
  seconds: number;
};
export class Bounties extends React.Component<IProps, IState> {
  state = {
    seconds: 30,
  }
  myInterval: any;

  componentDidMount() {
    this.myInterval = setInterval(() => {
      this.setState(({ seconds }) => ({
        seconds: seconds - 1
      }));

      if (this.state.seconds === -30) {
        this.setState({
          seconds: 270
        });
      }
    }, this.props.interval);
  }

  componentWillUnmount() {
    clearInterval(this.myInterval)
  }

  render() {
    return (
      <div>
        <h1>Bounties: {secondsToString(this.state.seconds)}</h1>
      </div>
    )
  }
}