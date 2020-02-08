import React from 'react';
import "../css/characters.css";

const Character = props => {

    const handleChoice = () => {
        props.handleChoice(props.character.name);
    }

    return (
        <div className="character">
            <img src={props.character.image} alt={props.character.name} onClick={handleChoice} />
        </div>
    )
}

export default Character;