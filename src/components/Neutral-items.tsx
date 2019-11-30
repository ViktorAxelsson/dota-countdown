import React from 'react';
import { secondsToString } from '../utils/timeutils';
import { Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap';
import diff from 'jest-diff';
import image from '../images/neutralitems.png';


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
    return "Next tier: " + secondsToString(this.dropTimesMinutes[this.currentTier(this.props.gameTime)] * 60 - gameTime);
  }

  render() {
    return (
      <Card style={{ width: '18rem' }}>
        <CardImg variant="top" src={image} />
        <CardBody>
          <CardTitle>{this.timeTillNextTier(this.props.gameTime)}</CardTitle>
          <CardText>
            <h3>Current tier: {this.currentTier(this.props.gameTime)}</h3>
          </CardText>
        </CardBody>
      </Card>
    )
  }
}