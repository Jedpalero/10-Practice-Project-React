// USING MAP AND FILTER TO CREATE TODO LIST
// import React, { useState } from "react";
// import "./style.css";

// const Todo = () => {
//   const [todos, setTodos] = useState([]);
//   const [input, setInput] = useState("");

//   const handleChange = (e) => {
//     setInput(e.target.value);
//   };

//   const handleSubmit = () => {
//     setTodos((todos) => todos.concat({ text: input, id: Math.random() }));
//     setInput("");
//   };

//   const removeTodo = (id) => {
//     setTodos((todos) => todos.filter((t) => t.id !== id));
//   };

//   return (
//     <>
//       <div className="container">
//         <input
//           type="text"
//           value={input}
//           onChange={handleChange}
//           placeholder="Add Todo"
//         />
//         <button onClick={handleSubmit}>submit</button>
//         <ul className="todos-list">
//           {todos.map(({ text, id }) => (
//             <li className="todo" key={id}>
//               <span>{text}</span>
//               <button className="close" onClick={() => removeTodo(id)}>
//                 X
//               </button>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </>
//   );
// };

// export default Todo;

import React, { useState } from "react";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (todo) => {
    const newTask = {
      text: todo,
      id: Math.random(),
    };
    setTodos([...todos, newTask]);
    setInput("");
  };

  const removeTodo = (id) => {
    const newList = todos.filter((todo) => todo.id !== id);

    setTodos(newList);
    // setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <>
      <div className="Todo">
        <h1>My To-Do List</h1>
        <div className="Top">
          <input
            className="input"
            type="text"
            value={input}
            onChange={handleChange}
            placeholder="Add Todo"
          />
          <button className="btn" onClick={() => handleSubmit(input)}>
            ADD
          </button>
        </div>
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>
              <span>{todo.text}</span>
              <button onClick={() => removeTodo(todo.id)}>X</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Todo;
