import React from 'react';
import { secondsToString } from '../utils/timeutils';
import { Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap';

type IProps = {
  gameTime: number;
  image: string;
  interval: number;
  firstInterval?: number;
};

type IState = {
}


export class RepeatingCountdown extends React.Component<IProps, IState> {
  componentClasses: string[] = [];


  updateStyle(interval: number, remaining: number) {
    this.componentClasses = [];
    // start fading up last minute of countdown
    if(interval - remaining < 15) {
      this.componentClasses.push("moreFlashyStuff opacityfull");
    } else if(interval - remaining < 30) {
      this.componentClasses.push("flashyStuff opacityfull");
    } else if(interval - remaining < 60) {
      this.componentClasses.push("opacityfull");
    } else {
      this.componentClasses.push("opacitylow");
    }
  }

  render() {
    let interval = this.props.interval;

    if (this.props.firstInterval !== undefined && this.props.gameTime < this.props.firstInterval) {
      interval = this.props.firstInterval;            
    }


    let diff: number = this.props.gameTime % interval;

    this.updateStyle(interval, diff);

    return (
        <Card className={this.componentClasses.join(" ")}>
            <CardImg variant="top" src={this.props.image} />
          <CardBody>
            <CardTitle>{secondsToString(interval - diff)}</CardTitle>
            <CardText>
            </CardText>
          </CardBody>
        </Card>
    )
  }
}