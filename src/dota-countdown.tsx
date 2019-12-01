import React from 'react';
import { Outposts } from './components/outposts';
import { NeutralItems } from './components/neutral-items';
import { secondsToString } from './utils/timeutils';
import { Button } from 'reactstrap';
import { RepeatingCountdown } from './components/repeating-countdown';
import bountyImage from './images/bountyrune.jpg';
import powerruneImage from './images/powerrune.png';
import tomeImage from './images/tome.png';
import outpostsImage from './images/outpost.png';

type IProps = {
};

type IState = {
    seconds: number;
    timePaused: boolean;
    gameStarted: boolean;
};
export class DotaCountdown extends React.Component<IProps, IState> {
    state = {
        seconds: 0,
        timePaused: true,
        gameStarted: false
    }
    myInterval: any;

    interval: number = 1000;

    componentDidMount() {
        this.myInterval = setInterval(() => {
            if (!this.state.timePaused) {
                this.setState(({ seconds }) => ({
                    seconds: seconds + 1
                }));
            }
        }, this.interval)
    }

    componentWillUnmount() {
        clearInterval(this.myInterval)
    }

    startTimer = (sec: number) => {
        this.setState({
            seconds: sec,
            gameStarted: true,
            timePaused: false
        })
    }

    resetTimer(): void {
        this.setState({
            seconds: 0,
            gameStarted: false,
            timePaused: true
        })
    }

    pauseTime() {
        this.setState({
            timePaused: !this.state.timePaused
        })
        console.log(this.state.timePaused);
    }

    render() {
        return (
            <div>
                <h1>Game Time: {secondsToString(this.state.seconds)}</h1>

                {(this.state.gameStarted) ? (
                    <div>
                        <Button onClick={() => this.resetTimer()}>Reset</Button>
                        <Button onClick={() => this.pauseTime()}>{this.state.timePaused ? "Resume" : "Pause"}</Button>
                    </div>
                ) : (
                        <div>
                            <Button onClick={() => this.startTimer(-80)}>Start gametime -1:20</Button>
                            <Button onClick={() => this.startTimer(-60)}>Start gametime -1:00</Button>
                            <Button onClick={() => this.startTimer(-40)}>Start gametime -0:40</Button>
                            <Button onClick={() => this.startTimer(-20)}>Start gametime -0:20</Button>
                            <Button onClick={() => this.startTimer(0)}>Start gametime 0:00</Button>
                        </div>
                    )
                }

                <div>
                    <RepeatingCountdown interval={300} image={bountyImage} gameTime={this.state.seconds}></RepeatingCountdown>

                    <RepeatingCountdown interval={120} image={powerruneImage} gameTime={this.state.seconds}></RepeatingCountdown>

                    <RepeatingCountdown interval={600} image={tomeImage} gameTime={this.state.seconds}></RepeatingCountdown>

                    <RepeatingCountdown interval={300} firstInterval={600} image={outpostsImage} gameTime={this.state.seconds}></RepeatingCountdown>
                    
                    <NeutralItems gameTime={this.state.seconds} ></NeutralItems>
                </div>
            </div>
        )
    }
}