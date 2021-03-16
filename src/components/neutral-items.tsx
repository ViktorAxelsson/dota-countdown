import React from 'react';
import { secondsToString } from '../utils/timeutils';
import { Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap';
import image from '../images/neutralitems.png';
import configData from './../config.json';


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

  dropTimesMinutes: number[] = configData.NEUTRAL_ITEM_INTERVALS;

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
      <Card style={{}}>
        <div>
          <CardImg variant="top" src={image} />
        </div>
        <CardBody>
          <CardTitle>{this.timeTillNextTier(this.props.gameTime)}</CardTitle>
          <CardText>
            Current tier: {this.currentTier(this.props.gameTime)}
          </CardText>
        </CardBody>
      </Card>
    )
  }
}