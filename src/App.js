import React, { Component } from "react";
import Wrapper from "./components/Wrapper";
import FriendCard from "./components/CharacterCard"
import Characters from "./characters.json"
import Header from "./components/Header"

class App extends Component {

    state = {
        clicked: [],
        score: 0
    }

    onClick = input => {
        if (this.state.clicked.includes(input)) {
            this.setState({
                score: 0,
                clicked:[]
            })
        } else {
            this.setState({
                score: this.state.score + 1
            })
        }
        this.state.clicked.push(input)
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
