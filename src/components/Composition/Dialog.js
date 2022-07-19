import FancyBorder from "./FancyBorder/FancyBorder";

function Dialog(props) {
  return (
    <FancyBorder color="blue">
      <h1 className="Dialog-title">{props.title}</h1>
      <p className="Dialog-mess">{props.mess}</p>
    </FancyBorder>
  );
}

export default Dialog;
