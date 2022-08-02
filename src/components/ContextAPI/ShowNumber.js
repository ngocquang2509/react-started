import React from "react";
import NumberContext from "./NumberContext";

export default class ShowNumber extends React.Component{
    render() {
        return (
            <p>{this.context.number}</p>
        )
    }
}

ShowNumber.contextType = NumberContext