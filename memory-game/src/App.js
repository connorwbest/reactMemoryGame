import React, { Component } from "react";
import GameCard from "./components/GameCard";
import Wrapper from "./components/Wrapper";
import characters from "./cards.json";
import "./App.css";

class App extends Component {
  state = {
    characters,
    score: 0,
    top: 0
  };

  resetCards = characters => {
    characters.forEach(function(character) {
      character.clicked = false;
      console.log(character);
      return characters;
    });
  };

  shuffleCards = characters => {
    for (let i = characters.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [characters[i], characters[j]] = [characters[j], characters[i]];
    }
    return characters;
  };

  handleScore = (id) => {
    let character = characters.filter(characters => characters.id === id);
    console.log(character)
    if (!character[0].clicked) {
      const characters = this.state.characters.filter(characters => characters.id !== id)
      character = character[0]
      character.clicked = true;
      characters.push(character)
      this.setState({ score: this.state.score + 1 });
      this.setState({ top: this.state.score + 1 });
      this.shuffleCards(this.state.characters);
      this.setState({
        characters: characters
      });
    } else {
      alert("already clicked");
      this.resetCards(characters);
      this.setState({
        characters: this.state.characters,
        score: 0,
        top: 0
      });
    }
  };

  render() {
    return (
      <Wrapper>
        <div className="jumbotron text-center">
          <h1 className="display-4">Attack on Titan Memory Game</h1>
          <p className="lead">
            Click on characters to increase your score but don't click on them
            more than once!
          </p>
          <p>
            Score: {this.state.score} | TopScore: {this.state.top}
          </p>
        </div>
        {this.state.characters.map(character => (
          <GameCard
            id={character.id}
            key={character.id}
            name={character.name}
            image={character.image}
            clicked={character.clicked}
            increment={this.handleScore}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
