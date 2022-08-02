import React from "react";


class Mouse extends React.Component {
    constructor(props){
        super(props);
        this.state = {x: 0, y: 0}
        this.handleMouseMove = this.handleMouseMove.bind(this)
    }

    handleMouseMove(e) {
        this.setState({
            x: e.clientX,
            y: e.clientY
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