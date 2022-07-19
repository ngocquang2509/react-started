import React from "react";

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      essayValue: "",
      dropdownValue: "",
    };

    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeEssay = this.handleChangeEssay.bind(this);
    this.handleChangeDropdown = this.handleChangeDropdown.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeName(e) {
    this.setState({ value: e.target.value });
  }

  handleChangeEssay(e) {
    this.setState({ essayValue: e.target.essayValue });
  }

  handleChangeDropdown(e) {
    this.setState({ dropdownValue: e.target.dropdownValue });
  }

  handleSubmit(e) {
    alert("A new form was submitted");
    e.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChangeName}
          />
        </label>
        <label>
          Essay:
          <textarea
            value={this.state.essayValue}
            onChange={this.handleChangeEssay}
          />
        </label>
        <label>
          Choose a country:
          <select value={this.state.value} onChange={this.handleChangeDropdown}>
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

export default NameForm;
