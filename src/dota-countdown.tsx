import React from 'react';
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

    customTime(event: React.KeyboardEvent<HTMLInputElement>): void {
        if (event.key === 'Enter') {
            let value = (event.target as HTMLInputElement).value;
            let parts = value.split(":");

            if (parts.length === 2 && !isNaN(+parts[0])  && !isNaN(+parts[1])) {
                let seconds = +parts[0] * 60 + +parts[1];
                if (+parts[0] === 0 && value[0] === "-") {
                    seconds = seconds * -1;
                }

                this.startTimer(seconds);
            }
        }
    }

    render() {
        return (
            <div id="main">
                <h1>Game Time: {secondsToString(this.state.seconds)}</h1>

                {(this.state.gameStarted) ? (
                    <div className="buttonContainer">
                        <Button onClick={() => this.resetTimer()}>Reset</Button>
                        <Button onClick={() => this.pauseTime()}>{this.state.timePaused ? "Resume" : "Pause"}</Button>
                    </div>
                ) : (
                        <div className="buttonContainer">
                            <Button onClick={() => this.startTimer(-60)}>Start gametime -1:00</Button>
                            <Button onClick={() => this.startTimer(-40)}>Start gametime -0:40</Button>
                            <Button onClick={() => this.startTimer(-20)}>Start gametime -0:20</Button>
                            <Button onClick={() => this.startTimer(0)}>Start gametime 0:00</Button>
                            <div>
                                <label>Start at custom time (start with Enter):</label>
                                <input className="form-control" type="text" placeholder="13:37" onKeyUp={(e) => this.customTime(e)}></input>
                            </div>
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