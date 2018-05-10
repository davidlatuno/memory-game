import React, { Component } from "react";
import Wrapper from "./components/Wrapper";
import FriendCard from "./components/CharacterCard"
import Characters from "./characters.json"
import Header from "./components/Header"

class App extends Component {

    onClick = id => {
        alert(id);
    }

    render() {
        return (
            <div className="container">
            <Header />
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
