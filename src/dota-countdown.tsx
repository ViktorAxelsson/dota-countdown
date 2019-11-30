import React from 'react';
import { Bounties } from './components/bounties'
import { PowerRunes } from './components/power-runes';
import { Outposts } from './components/outposts';
import { NeutralItems } from './components/Neutral-items';
import { secondsToString } from './utils/timeutils';

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

    constructor(props: any) {
        super(props);
    }

    interval: number = 10;

    componentDidMount() {
        this.myInterval = setInterval(() => {
            this.setState(({ seconds }) => ({
                seconds: seconds + 1
            }));
        }, this.interval)
    }

    componentWillUnmount() {
        clearInterval(this.myInterval)
    }

    clickStart = (sec: number) => {
        this.setState({
            seconds: sec
        });
    }

    render() {

        return (
            <div>
                <h1>Game Time: {secondsToString(this.state.seconds)}</h1>
                <button onClick={() => this.clickStart(0)}>Start 0</button>
                <button onClick={() => this.clickStart(-10)}>Start -10</button>
                <button onClick={() => this.clickStart(-20)}>Start -20</button>
                <button onClick={() => this.clickStart(-30)}>Start -30</button>

                <Bounties interval={this.interval}></Bounties>
                <PowerRunes interval={this.interval}></PowerRunes>
                <Outposts interval={this.interval}></Outposts>
                <NeutralItems interval={this.interval}></NeutralItems>
            </div>
        )
    }
}