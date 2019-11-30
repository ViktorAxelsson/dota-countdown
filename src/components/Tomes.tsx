import React from 'react';
import { secondsToString } from '../utils/timeutils';

type IProps = {
  interval: number;
};

type IState = {
  seconds: number;
};
export class Tomes extends React.Component<IProps, IState> {
  state = {
      seconds: 600,
  }
  myInterval: any;

  componentDidMount() {
      this.myInterval = setInterval(() => {
        this.setState(({ seconds }) => ({
            seconds: seconds - 1
        }));
      }, this.props.interval)
  }

  componentWillUnmount() {
      clearInterval(this.myInterval)
  }

  render() {
      return (
          <div>
            <h1>Tomes: { secondsToString(this.state.seconds) }</h1>
          </div>
      )
  }
}