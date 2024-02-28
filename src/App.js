import "./style.css";
import Post from "./components/Post";
import { useState } from "react";
function App() {
  const [id, setId] = useState(1);
  return (
    <>
      <button onClick={() => setId(Math.floor(Math.random() * 100))}>
        Change Post
      </button>
      <Post id={id} />
    </>
  );
}

export default App;
