import React from "react";
import NumberContext from "./NumberContext";
import ShowNumber from "./ShowNumber";
import UpdateNumber from "./UpdateNumber";


class ContextComponent extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            number: 0
        }
        this.updateNumber = this.updateNumber.bind(this)
    }

    updateNumber() {
        this.setState({
            number: Math.random()
        })
    }


    render() {
        return (
            <NumberContext.Provider value={{
                number: this.state.number,
                update: this.updateNumber
            }}>
                <NumberContext.Consumer>
                    {() => 
                        <>
                            <ShowNumber/>
                            <UpdateNumber/>
                        </>
                    }
                </NumberContext.Consumer>
            </NumberContext.Provider>
        )
    }
}

export default ContextComponent