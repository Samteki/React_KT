import React from 'react';


export class DidMountDerivedStateProps extends React.Component {
  constructor(props) {
    super(props);
    this.state = { favoritefood: "rice" };
  }

  componentDidMount() {
    setTimeout(() => {
    this.setState({ favoritefood: "pizza" })
    }, 1000)
  }

  static getDerivedStateFromProps(props, state) {
    return { favoritefood: props.favfod };
  }

  render() {
    return (
      <h1>My Favorite Food is {this.state.favoritefood}</h1>
    );
  }
}
