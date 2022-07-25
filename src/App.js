import Clock from "./components/Clock";
import Context from "./components/Context";
import Example from "./components/Example";
import Counter from "./components/Ref";
//import ManyStates from "./components/Example";

function App() {
  return (
    <div>
      <Clock />
      <Example />
      <Context />
      <Counter />
    </div>
  );
}

export default App;
