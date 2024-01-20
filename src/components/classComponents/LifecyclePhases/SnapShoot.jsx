import React from 'react';

export class Snapshoot extends React.Component {
  constructor(props) {
    super(props);
    this.state = { favoritefood: "rice" };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ favoritefood: "pizza" })
    }, 1000)
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    return document.getElementById("div1").innerHTML =
      "Before the update, the favorite was " + prevState.favoritefood;
  }
  componentDidUpdate() {
    document.getElementById("div2").innerHTML =
      "The updated favorite food is " + this.state.favoritefood;
  }

  render() {
    return (
      <div>
        <h1>My Favorite Food is {this.state.favoritefood}</h1>
        <div id="div1"></div>
        <div id="div2"></div>
      </div>
    );
  }
}
