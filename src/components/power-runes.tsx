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
        <Card style={{ width: '18rem' }}>
          <CardImg variant="top" src="https://oyster.ignimgs.com/mediawiki/apis.ign.com/dota-2/a/ac/Rune_of_Double_Damage.png?width=1280" />
          <CardBody>
            <CardTitle>{secondsToString(this.state.seconds - diff)}</CardTitle>
            <CardText>
              <p></p>
            </CardText>
          </CardBody>
        </Card>
      )
  }
}