import React from 'react';
import { Bounties } from './components/bounties'
import { PowerRunes } from './components/power-runes';
import { Outposts } from './components/outposts';
import { NeutralItems } from './components/neutral-items';
import { secondsToString } from './utils/timeutils';
import { Button } from 'reactstrap';
import { Tomes } from './components/Tomes';
import { RepeatingCountdown } from './components/repeating-countdown';
import bountyImage from './images/bountyrune.jpg';
import powerruneImage from './images/powerrune.png';
import tomeImage from './images/tome.png';

type IProps = {
};

type IState = {
    seconds: number;
};
export class DotaCountdown extends React.Component<IProps, IState> {
    state = {
        seconds: 0,
    }
    myInterval: any;
    timePaused: boolean = true;

    constructor(props: any) {
        super(props);
    }

    interval: number = 100;

    componentDidMount() {
        this.myInterval = setInterval(() => {
            if (!this.timePaused) {
                this.setState(({ seconds }) => ({
                    seconds: seconds + 1
                }));
            }
        }, this.interval)
    }

    componentWillUnmount() {
        clearInterval(this.myInterval)
    }

    clickStart = (sec: number) => {
        this.setState({
            seconds: sec
        });
        this.timePaused = false;
    }

    pauseTime() {
        this.timePaused = !this.timePaused;
    }

    render() {

        return (
            <div>
                <h1>Game Time: {secondsToString(this.state.seconds)}</h1>
                <Button onClick={() => this.clickStart(0)}>Start gametime</Button>
                {/* <Button onClick={() => this.clickStart(-10)}>Start -10</Button>
                <Button onClick={() => this.clickStart(-20)}>Start -20</Button>
                <Button onClick={() => this.clickStart(-30)}>Start -30</Button> */}

                <Button onClick={() => this.pauseTime()}>Pause</Button>

                <div>
                    <RepeatingCountdown interval={300} image={bountyImage} gameTime={this.state.seconds}></RepeatingCountdown>

                    <RepeatingCountdown interval={120} image={powerruneImage} gameTime={this.state.seconds}></RepeatingCountdown>

                    <Outposts gameTime={this.state.seconds} ></Outposts>

                    <NeutralItems gameTime={this.state.seconds} ></NeutralItems>

                    <RepeatingCountdown interval={600} image={tomeImage} gameTime={this.state.seconds}></RepeatingCountdown>
                </div>
            </div>
        )
    }
}