import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      clicks: 0,
    }

    this.nextQuote = this.nextQuote.bind(this);
  }

  nextQuote() {
    this.setState({
      clicks: this.state.clicks + 1
    });
  }

  render() {
    let quoteList = ["Never let anyone treat you like a yellow StarBurst", "You are a pink Starburst", "Drink lots of Covfefe", "Opportunity does not knock, it presents itself when you beat down the door.", 
    "A diamond is merely a lump of coal that did well under pressure"];
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Take some advice</h2>
        </div>
        <p className="App-intro">
          {quoteList[this.state.clicks % quoteList.length]}
        </p>
        <button onClick={this.nextQuote} >
          Next
        </button>
      </div>
    );
  }
}

export default App;
