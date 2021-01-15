import Typing from 'react-typing-animation';
import React from "react";
import "./Welcome.css"

export default function Welcome() {

    return (
        <div className={"center-welcome"}>
            <Typing className={"center-text"} speed={300}>
                <h2>TERVETULOA</h2>
                <Typing.Speed ms={20}/>
                <h3> "I have not failed.
                    I've just found 10,000 ways that won't work."
                    Thomas A. Edison.  </h3>
            </Typing>
        </div>
    );
}





