import React, { Component } from "react";
import Wrapper from "./components/Wrapper";
import FriendCard from "./components/CharacterCard"
import Characters from "./characters.json"
import Header from "./components/Header"

class App extends Component {

    state = {
        array: Characters,
        clicked: [],
        score: 0,
        highScore: 0,
        message: "Click On An Image to Begin"
    }

    shuffleArray(array) {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
    }

    onClick = input => {

        this.shuffleArray(this.state.array)

        if (this.state.score === Characters.length) {
            return this.setState({
                score: 0,
                clicked: [],
                message: "Yay You Win, Click An Image to Play Again"
            })
        }

        if (this.state.clicked.includes(input)) {
            this.setState({
                score: 0,
                clicked: [],
                message: "Image Clicked Twice, Try Again"
            })
        } else {

            if (this.state.score === this.state.highScore) {
                this.setState({
                    score: this.state.score + 1,
                    highScore: this.state.highScore + 1,
                    message: "Correct!"
                })
            } else {
                this.setState({
                    score: this.state.score + 1,
                    message: "Correct!"
                })
            }

        }
        this.state.clicked.push(input)

    }

    render() {
        if (this.state.score === Characters.length) {
            this.onClick();
        }
        return (
            <div className="container">
                <Header score={this.state.score} highScore={this.state.highScore} message={this.state.message} />
                <Wrapper>
                    {this.state.array.map(
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
