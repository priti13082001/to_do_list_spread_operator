import React, { useState } from "react";

function App() {
  const [item, setItem] = useState("");
  const [items, setitems] = useState([]);

  function handlechange(event) {
    setItem(event.target.value);
  }
  function addItem() {
    setitems((prevItem) => {
      return [...prevItem, item];
    });
    setItem(" ");
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handlechange} type="text" value={item} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((todoItem) => {
            return <li>{todoItem}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
