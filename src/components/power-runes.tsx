import React from 'react';
import { secondsToString } from '../utils/timeutils';

type IProps = {
  gameTime: number;
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

  }

  componentWillUnmount() {
      clearInterval(this.myInterval)
  }

  render() {
    let diff: number = this.props.gameTime % this.state.seconds;

      return (
          <div>
            <h1>Power runes: {  secondsToString(this.state.seconds - diff) }</h1>
          </div>
      )
  }
}