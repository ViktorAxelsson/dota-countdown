import React from 'react';
import { secondsToString } from '../utils/timeutils';
import { Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap';
import image from '../images/bountyrune.jpg';

type IProps = {
  gameTime: number;
};

type IState = {
  seconds: number;
};
export class Bounties extends React.Component<IProps, IState> {
  state = {
    seconds: 300,
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  render() {
    let diff: number = this.props.gameTime % this.state.seconds;

    return (
        <Card style={{ width: '18rem' }}>
          <CardImg variant="top" src={image} />
          <CardBody>
            <CardTitle>{secondsToString(this.state.seconds - diff)}</CardTitle>
            <CardText>
            </CardText>
          </CardBody>
        </Card>
    )
  }
}