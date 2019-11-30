import React from 'react';
import { secondsToString } from '../utils/timeutils';

type IProps = {
  gameTime: number;
};

type IState = {
  seconds: number;
};
export class Tomes extends React.Component<IProps, IState> {
  state = {
      seconds: 600,
  }

  componentDidMount() {

  }

  componentWillUnmount() {
  }

  render() {
    let diff: number = this.props.gameTime % this.state.seconds;

      return (
          <div>
            <h1>Tomes: { secondsToString(this.state.seconds - diff) }</h1>
          </div>
      )
  }
}