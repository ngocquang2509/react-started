import React from "react";
import TempInput from "./TempInput";

function Boiling(props) {
  if (props.celsius >= 100) {
    return <p>The water would boil</p>;
  }
  return <p>The water would not boil</p>;
}

function toCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}

function toFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

function convertTemp(temperature, convert) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return "";
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}

class Calulator extends React.Component {
  constructor(props) {
    super(props);
    this.handleChangeC = this.handleChangeC.bind(this);
    this.handleChangeF = this.handleChangeF.bind(this);
    this.state = { temperature: "", scale: "c" };
  }

  handleChangeC(temperature) {
    this.setState({ scale: "c", temperature });
  }

  handleChangeF(temperature) {
    this.setState({ scale: "f", temperature });
  }

  render() {
    const scale = this.state.scale;
    const temperature = this.state.temperature;
    const celsius =
      scale === "f" ? convertTemp(temperature, toCelsius) : temperature;
    const fahrenheit =
      scale === "c" ? convertTemp(temperature, toFahrenheit) : temperature;
    return (
      <div>
        <TempInput
          scale="c"
          temperature={celsius}
          onTemperatureChange={this.handleChangeC}
        />
        <TempInput
          scale="f"
          temperature={fahrenheit}
          onTemperatureChange={this.handleChangeF}
        />
        <Boiling celsius={parseFloat(celsius)} />
      </div>
    );
  }
}

export default Calulator;
