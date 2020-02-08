import React from 'react';
import { Container } from "reactstrap";
import Character from "./Character";
import "../css/characters.css";



const CharacterContainer = props => {

    const handleChoice = character => {
        props.handleChoice(character);
    }

    const renderCharacters = props.characters.map((character, i) => <Character character={character} handleChoice={handleChoice} key={i} />);


    return (
        <Container>
            <div className="characterContainer">
                {renderCharacters}
            </div>
        </Container>
    )
}

export default CharacterContainer;