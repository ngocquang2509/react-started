import React from "react";
import Clock from "./components/Clock";


class ColorChange extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favoritecolor: 'red'
    }
    this.changeColor = this.changeColor.bind(this)
  }

  shouldComponentUpdate() {
    return false
  }

  // static getDerivedStateFromProps(props, state) {
  //   return {favoritecolor: props.favCol}
  // }

  changeColor() {
    this.setState({favoritecolor: 'blue'})
    console.log('The color changed to Blue')
  }

  render() {
    return (
      <div>
        <h1>My favorite color is: {this.state.favoritecolor}</h1>
        <button type="button" onClick={this.changeColor}>Change Color</button>
      </div>
    )
  }
}

function App() {
  return (
    <div>
      <Clock />
      <ColorChange/>
    </div>
  );
}

export default App;
