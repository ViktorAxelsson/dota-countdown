import React from 'react';
import { secondsToString } from '../utils/timeutils';
import { Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap';

type IProps = {
  gameTime: number;
  image: string;
  interval: number;
};

type IState = {
};

export class RepeatingCountdown extends React.Component<IProps, IState> {
  divStyle = {
    opacity: '0.5',
    'box-shadow': '0px 0px 40px 20px #0ff',
  };

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  render() {
    let diff: number = this.props.gameTime % this.props.interval;

    this.divStyle = {opacity: this.props.gameTime % 100 + 50 + "%", 'box-shadow': '0px 0px 40px 20px #0ff'};

    return (
        <Card style={this.divStyle}>
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