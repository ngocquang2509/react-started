import React, { useState, useEffect } from "react";

function Example() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <p>You have clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

function ManyStates() {
  const [age, setAge] = useState(22);
  const [fruit, setFruit] = useState("apple");
  const [todos, setTodos] = useState([{ text: "Learn Hook" }]);

  const updateAge = (e) => {
    setAge(e.target.value);
  };

  return (
    <div>
      <p>Your age is {age}</p>
      <input type="number" onChange={updateAge} value={age}></input>
    </div>
  );
}

export default Example;
