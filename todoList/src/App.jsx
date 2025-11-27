import { useState } from "react";

import "./App.css";

function App() {
  const [input, Setinput] = useState("");
  const [todolist, Settodolist] = useState([]);

  const addtodoItem = () => {
    if (input.trim() === "") return;
    const item = {
      id: todolist.length + 1,
      text: input.trim(),
      complected: true,
    };
    Settodolist((prev) => [...prev, item]);
    Setinput("");
  };

  // const togglecomplected=(id)=>{
  //   Settodolist(
  //     todolist.map((t=>{
  //       if(t.id === id){
  //         return{
  //           ...t,
  //           complected:!t.complected
  //         }
  //       }else{
  //         return t;
  //       }
  //     }
  //   ))
  //   )
  // }

  const togglecomplected = (id) => {
    Settodolist(
      todolist.map((t) =>
        t.id === id ? { ...t, complected: !t.complected } : t
      )
    );
  };

  const deletetodo = (id) => {
    Settodolist(todolist.filter((t) => t.id !== id));
  };

  return (
    <>
      <div>
        <input
          type="text"
          placeholder="Add a new todo"
          value={input}
          onChange={(e) => Setinput(e.target.value)}
        />{" "}
        &nbsp;
        <button onClick={() => addtodoItem()}>Add</button>
        
        <ul>
          {todolist.map((t) => (
            <li key={t.id}>
              <input
                type="checkbox"
                checked={t.complected}
                onChange={() => togglecomplected(t.id)}
              />
              <span className={t.complected ? "strike-through" : ""}>
                {t.text}
              </span>
              <button onClick={() => deletetodo(t.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
