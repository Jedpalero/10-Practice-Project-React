import Accordion from "./Accordion";
import "./style.css";
import { accordionData } from "./utils/content";

function App() {
  return (
    <div>
      <div className="accordion">
        {accordionData.map(({ title, content }) => (
          // Destructure
          <Accordion
            title={title}
            content={content}
            key={Math.random() * 100}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
