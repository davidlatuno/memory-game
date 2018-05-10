import React, { Component } from "react";
import Wrapper from "./components/Wrapper";
import FriendCard from "./components/CharacterCard"
import Characters from "./characters.json"
import Header from "./components/Header"

class App extends Component {

    state = {
        clicked: [],
        score: 0,
        highScore: 0
    }

    onClick = input => {
        if (this.state.clicked.includes(input) || this.state.score === Characters.length) {
            this.setState({
                score: 0,
                clicked: []
            })
        } else {

            if (this.state.score === this.state.highScore) {
                this.setState({
                    score: this.state.score + 1,
                    highScore: this.state.highScore + 1
                })
            } else {
                this.setState({
                    score: this.state.score + 1
                })
            }

        }
        this.state.clicked.push(input)

    }

    render() {
        if (this.state.score === Characters.length) {
            alert("YAY");
            this.onClick();
        }
        return (
            <div className="container">
                <Header score={this.state.score} highScore={this.state.highScore} />
                <Wrapper>
                    {Characters.map(
                        input =>
                            <FriendCard
                                key={input.id}
                                id={input.id}
                                image={input.image}
                                onClick={this.onClick}
                            />)
                    }
                </Wrapper>
            </div>)
    }

};

export default App;
