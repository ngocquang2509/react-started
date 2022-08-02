import React from "react"
import NumberContext from "./NumberContext"


export default class UpdateNumber extends React.Component{
    render() {
        return(
            <button onClick={() => {
                console.log(this.context.update())    
            }}>
                UpdateNumber
            </button>
        )
    }
}

UpdateNumber.contextType = NumberContext