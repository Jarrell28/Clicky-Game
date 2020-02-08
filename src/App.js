import React, { Component } from 'react';
import MainNavbar from "./components/Navbar";
import CharacterContainer from "./components/CharacterContainer";

import barbara from "./images/barbara.png";
import bonnie from "./images/bonnie.png";
import brian from "./images/brian.jpg";
import cleveland from "./images/cleveland.jpg";
import joe from "./images/joe.png";
import lois from "./images/lois.jpg";
import carter from "./images/carter.jpg";
import quagmire from "./images/quagmire.png";
import rupert from "./images/rupert.png";
import stewie from "./images/stewie.png";
import peter from "./images/peter.jpg";
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
          name: "carter",
          image: carter
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
      message: ""
    }
  }

  handleChoice = selection => {
    if (this.state.selected.includes(selection)) {
      this.setState({ selected: [], score: 0, message: "Selected Wrong! Play Again!" })
    } else {
      this.setState({ selected: [...this.state.selected, selection], score: this.state.score + 1 })
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
        <MainNavbar score={this.state.score} />
        {this.state.message ? <h1 className="text-center">{this.state.message}</h1> : ""}
        <CharacterContainer characters={this.shuffle(this.state.characters)} handleChoice={this.handleChoice} />
      </div>
    );
  }

}

export default App;
