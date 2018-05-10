import React from "react";
import "./Header.css";

const Header = props =>
    <div className="jumbotron text-center">
        <h1 className="display-4">Memory Game</h1>
        <p>Score: {props.score}</p>
        <p>High Score: {props.highScore}</p>
        <p><h2>{props.message}</h2></p>
    </div>

export default Header;