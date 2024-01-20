import React, { Component } from 'react';

export class ShouldUpdate extends Component {
  constructor(props) {
    super(props);
    this.state = { favoriteFood: 'rice', name: "Hello" };
  }

  shouldComponentUpdate(nextProps, nextState) {
    // Only re-render if the favoriteFood state has changed
    // console.log("shouldComponentUpdate")
    return (this.state.favoriteFood !== nextState.favoriteFood)
    //  || (this.state.name !== nextState.name);
  }

  changeFood = () => {
    this.setState({ favoriteFood: 'Pizza' });
  }
  
  changeName = () => {
    this.setState({ name: "Hello dost" });
  }

  render() {
    // console.log("render")
    return (
      <div>
        <h1>{this.state.name} My Favorite Food is {this.state.favoriteFood}</h1>
        <button type="button" onClick={this.changeFood}>Change food</button>
        <button type="button" onClick={this.changeName}>Change name</button>
      </div>
    );
  }
}
