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
    if (this.state.seconds != 300 && this.props.gameTime > 600) {
      this.setState({
        seconds: 300
      })
    }

    let diff: number = this.props.gameTime % this.state.seconds;
    
      return (
        <Card style={{}}>
          <CardImg variant="top" src="https://gamepedia.cursecdn.com/dota2_gamepedia/0/04/Outpost_Neutral_model.png" />
          <CardBody>
            <CardTitle>{secondsToString(this.state.seconds - diff)}</CardTitle>
            <CardText>
            </CardText>
          </CardBody>
        </Card>
      )
  }
}