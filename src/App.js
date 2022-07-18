import Game from "./components/Game";
import Clock from "./components/Clock";
import NumberList from "./components/List";
import NameForm from "./components/Forms";
import TextArea from "./components/TextArea";
import DropDown from "./components/DropDown";

function App() {
  const numbers = [1, 2, 3, 4, 5];
  return (
    <div>
      <Clock />
      <h2>React started</h2>
      <h3>Tic-tac-toe Game</h3>
      <Game />
      <h3>List in React</h3>
      <NumberList numbers={numbers} />
      <h3>Form in React</h3>
      <NameForm />
      <br />
      <TextArea />
      <h3>Drop-down menu in React</h3>
      <DropDown />
    </div>
  );
}

export default App;
