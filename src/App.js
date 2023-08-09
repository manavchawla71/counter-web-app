import { useState } from "react";
import "./styles.css";

export default function App() {
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);
  const [special, setSpecial] = useState(0);
  const [darkMode, setDarkMode] = useState(false);
  const { text, setText } = useState("Dark Mode");
  const Rectangle = ({ children }) => {
    return <div className="app-content">{children}</div>;
  };

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    const wordArray = inputValue.match(/\S+/g) || [];
    const letterCount = inputValue.replace(/\s+/g, "").length;
    setCount(wordArray.length);
    setCount1(letterCount);

    const specialCount = inputValue.replace(/[^\W_]/g, "").length;
    setSpecial(specialCount);
  };

  const handleToggle = () => {
    setDarkMode(!darkMode);
    // setText("Light Mode");
  };

  return (
    <div className={`App ${darkMode ? "dark" : ""}`}>
      <Rectangle>
        <p>Counter App</p>
      </Rectangle>
      <div>
        <button onClick={handleToggle} className="toggle">
          Dark Mode
        </button>
      </div>
      <input onChange={handleInputChange} className="area" />
      <p>Word Count: {count}</p>
      <p>Letter Count: {count1}</p>
      <p>Special Characters: {special}</p>
    </div>
  );
}
