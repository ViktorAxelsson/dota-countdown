import React from 'react';
import { secondsToString } from '../utils/timeutils';

type IProps = {
  interval: number;
};

type IState = {
  seconds: number;
};
export class PowerRunes extends React.Component<IProps, IState> {
  state = {
      seconds: 120,
  }
  myInterval: any;

  componentDidMount() {
      this.myInterval = setInterval(() => {
        this.setState(({ seconds }) => ({
            seconds: seconds - 1
        }));

        if (this.state.seconds === -30) {
          this.setState({
            seconds: 90
          });
        }
      }, this.props.interval)
  }

  componentWillUnmount() {
      clearInterval(this.myInterval)
  }

  render() {
      return (
          <div>
            <h1>Power runes: {  secondsToString(this.state.seconds) }</h1>
          </div>
      )
  }
}