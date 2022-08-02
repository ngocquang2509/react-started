import React from "react";
import Clock from "./components/Clock";


class ColorChange extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favoritecolor: 'red'
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({favoritecolor: "yellow"})
    }, 2000)
  }

  getSnapshotBeforeUpdate(preProps, preState) {
    document.getElementById('div1').innerHTML = 'The color before update was: ' + preState.favoritecolor
  }

  componentDidUpdate() {
    document.getElementById('div2').innerHTML = 'The color after update is ' + this.state.favoritecolor
  }

  render() {
    return (
      <div>
        <h1>My favorite color is: {this.state.favoritecolor}</h1>
        <div id="div1"></div>
        <div id="div2"></div>
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
