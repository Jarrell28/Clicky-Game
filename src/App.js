import React, { Component } from 'react';
import MainNavbar from "./components/Navbar";
import CharacterContainer from "./components/CharacterContainer";

import barbara from "./images/barbara.png";
import bonnie from "./images/bonnie.png";
import brian from "./images/brian.jpg";
import cleveland from "./images/cleveland.jpg";
import joe from "./images/joe.png";
import lois from "./images/lois.jpg";
import chicken from "./images/chicken.png";
import quagmire from "./images/quagmire.png";
import rupert from "./images/rupert.png";
import stewie from "./images/stewie.png";
import peter from "./images/peter.png";
import meg from "./images/meg.png";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: [],
      characters: [
        {
          name: "peter",
          image: peter
        },
        {
          name: "stewie",
          image: stewie
        },
        {
          name: "rupert",
          image: rupert
        },
        {
          name: "quagmire",
          image: quagmire
        },
        {
          name: "chicken",
          image: chicken
        },
        {
          name: "lois",
          image: lois
        },
        {
          name: "joe",
          image: joe
        },
        {
          name: "cleveland",
          image: cleveland
        },
        {
          name: "brian",
          image: brian
        },
        {
          name: "bonnie",
          image: bonnie
        },
        {
          name: "barbara",
          image: barbara
        },
        {
          name: "meg",
          image: meg
        }
      ],
      score: 0,
      topScore: 0,
      message: ""
    }
  }

  handleChoice = selection => {
    if (this.state.selected.includes(selection)) {

      if (this.state.score > this.state.topScore) {
        this.setState({ selected: [], score: 0, topScore: this.state.score, message: `Selected Wrong! Your Score was ${this.state.score}` })
      } else {
        this.setState({ selected: [], score: 0, message: `Selected Wrong! Your Score was ${this.state.score}` })

      }
    } else if (this.state.score === 12) {
      this.setState({ selected: [], score: 0, message: "You Won! Play Again!" });
    } else {
      this.setState({ selected: [...this.state.selected, selection], score: this.state.score + 1, message: "" })
    }
  }

  shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = a[i];
      a[i] = a[j];
      a[j] = x;
    }
    return a;
  }

  render() {
    return (
      <div className="App">
        <MainNavbar score={this.state.score} topScore={this.state.topScore} message={this.state.message} />
        <CharacterContainer characters={this.shuffle(this.state.characters)} handleChoice={this.handleChoice} />
      </div>
    );
  }

}

export default App;
