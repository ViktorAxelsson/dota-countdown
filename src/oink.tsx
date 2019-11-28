import React from 'react';

type IProps = {
  // using `interface` is also ok
  message: string;
};
type IState = {
  count: number; // like this
};
export class Oink extends React.Component<IProps, IState> {
  state: IState = {
    // optional second annotation for better type inference
    count: 0
  };
  render() {
    return (
      <div>
        {this.props.message} {this.state.count}
      </div>
    );
  }
}