import React from "react";
import "./CharacterCard.css";

const CharacterCard = props => (
    <div className="card">
        <div className="img-container" >
            <img
                id={props.id}
                alt={props.name}
                src={props.image}
                onClick={() => props.onClick(props.id)}
            />
        </div>
    </div>
);

export default CharacterCard;
