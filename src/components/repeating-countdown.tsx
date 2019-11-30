import React from 'react';
import { secondsToString } from '../utils/timeutils';
import { Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap';

type IProps = {
  gameTime: number;
  image: string;
  interval: number;
  className: string;
};

type IState = {
};

export class RepeatingCountdown extends React.Component<IProps, IState> {
  divStyle = {
    opacity: '0.2',
    boxShadow: '0px 0px 40px 20px #0ff',
  };

  updateStyle(remaining: number) {
    let shadow: string = "0px 0px 40px 20px #0ff";
    let opacity: string = '0.2';

    // start fading up last minute of countdown
    if(this.props.interval - remaining < 60) {
      opacity = (1.2 - (this.props.interval - remaining) / 60).toString();

      console.log(this.props.interval - remaining );
    }

    // flash last 30 seconds of countdown
    if(this.props.interval - remaining < 30) {
      if((this.props.interval - remaining) % 2 === 0) {
        shadow = "0px 0px 0px 0px #0ff";
      } else {
        shadow = "0px 0px 40px 20px #0ff";
      }
    }

    this.divStyle = {
      opacity: opacity,
      boxShadow: shadow
    }
  }

  render() {
    let diff: number = this.props.gameTime % this.props.interval;

    this.updateStyle(diff);

    return (
        <Card className={"flashyStuff"} style={this.divStyle}>
            <CardImg variant="top" src={this.props.image} />
          <CardBody>
            <CardTitle>{secondsToString(this.props.interval - diff)}</CardTitle>
            <CardText>
            </CardText>
          </CardBody>
        </Card>
    )
  }
}