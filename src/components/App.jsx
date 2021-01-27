import React, { useState } from "react";

function App() {
  let [li, setLI] = useState("");
  let [listItem, setListItem] = useState([]);

  function handleChange(event) {
    let newItem = event.target.value;

    setLI(newItem);
  }

  function handleItem(item) {
    return <li>{item}</li>;
  }

  function addItem() {
    setListItem((prevItme) => {
      return [...prevItme, li];
    });
    setLI("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={li} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>{listItem.map(handleItem)}</ul>
      </div>
    </div>
  );
}

export default App;
