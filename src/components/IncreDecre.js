import React from "react";

// class IncreDecre extends React.Component {
//   state = { counter: 0 };
//   handleIncrement = () => {
//     let value = this.state.counter + 1;
//     this.setState({ counter: value });
//   };

//   handleDecrement = () => {
//     let value = this.state.counter - 1;
//     this.setState({ counter: value });
//   };
//   handleChange = (e) => {
//     let value = e.target.value ? parseInt(e.target.value) : 0;

//     this.setState({ counter: value });
//   };
//   render() {
//     return (
//       <div>
//         <button onClick={this.handleDecrement}>-</button>
//         <input
//           type="text"
//           value={this.state.counter}
//           onChange={this.handleChange}
//         />
//         <button onClick={this.handleIncrement}>+</button>
//       </div>
//     );
//   }
// }

class IncreDecre extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
    this.handleIncre = this.handleIncre.bind(this);
    this.handleDecre = this.handleDecre.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleIncre() {
    let value = this.state.counter + 1;
    this.setState({ counter: value });
  }

  handleDecre() {
    let value = this.state.counter - 1;
    this.setState({ counter: value });
  }

  handleChange(e) {
    let value = e.target.value ? parseInt(e.target.value) : 0;
    this.setState({ counter: value });
  }

  render() {
    let status = "The current value is " + this.state.value;
    return (
      <div>
        <div>{status}</div>
        <button onClick={this.handleDecre}>-</button>
        <input onChange={this.handleChange} value={this.state.counter}></input>
        <button onClick={this.handleIncre}>+</button>
      </div>
    );
  }
}

export default IncreDecre;
