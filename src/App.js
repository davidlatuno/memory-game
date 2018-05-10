import React from "react";
import Wrapper from "./components/Wrapper";
import FriendCard from "./components/FriendCard"
import friends from "./friends.json"

const App = () => (
    <Wrapper>
        {friends.map(
            input =>
                <FriendCard
                    name={input.name}
                    image={input.image}
                    occupation={input.occupation}
                    location={input.location}
                />)
        }
    </Wrapper>
);

export default App;
