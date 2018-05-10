import React, { Component } from "react";
import Wrapper from "./components/Wrapper";
import FriendCard from "./components/CharacterCard"
import Characters from "./characters.json"
import Header from "./components/Header"

class App extends Component {

    state = {
        clicked: 0,
        score: 0
    }

    onClick = input => {
        if (input === this.state.clicked) {
            this.setState({
                score: 0
            })
        } else {
            this.setState({
                score: this.state.score + 1
            })
        }
        this.setState ({
            clicked: input
        })
    }

    render() {
        return (
            <div className="container">
            <Header score={this.state.score}/>
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
