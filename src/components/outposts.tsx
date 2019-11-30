import React from 'react';
import { secondsToString } from '../utils/timeutils';

type IProps = {
  gameTime: number;
};

type IState = {
  seconds: number;
};
export class Outposts extends React.Component<IProps, IState> {
  state = {
      seconds: 600,
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
            <h1>Outposts: { secondsToString(this.state.seconds - diff) }</h1>
          </div>
      )
  }
}