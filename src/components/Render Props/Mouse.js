import React from "react";


class Mouse extends React.Component {
    state = {x: 0, y: 0}

    handleMouseMove = (e) => {
        const {clientX, clientY} = e
        this.setState({
            x: clientX,
            y: clientY
        })
    }

    render() {
        return (
            <div style={{height: '100%'}} onMouseMove={this.handleMouseMove}>
                {this.props.render(this.state)}
            </div>
        )
    }
}

export default Mouse;