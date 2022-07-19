import React from "react";

class DropDown extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "Select a country" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  handleSubmit(e) {
    alert("A country was selected: " + this.state.value);
    e.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Choose a country:
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="us">United States</option>
            <option value="uk">United Kingdom</option>
            <option value="vn">Vietnam</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default DropDown;
