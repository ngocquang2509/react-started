import React from "react";
import Cat from "./Cat";
import Mouse from "./Mouse";

class MouseTracker extends React.Component{
    render() {
        return (
            <div>
                <h1>Move the mouse around</h1>
                //Props render la mot ham render component cat
                <Mouse render={mouse => {
                    <Cat mouse={mouse}/>
                }}/>
            </div>
        )
    }
}