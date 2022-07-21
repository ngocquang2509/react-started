import Clock from "./components/Clock";
import FriendStatus from "./components/CustomHooks";
import Example from "./components/Example";
//import ManyStates from "./components/Example";

function App() {
  return (
    <div>
      <Clock />
      <Example />
      <FriendStatus />
    </div>
  );
}

export default App;
