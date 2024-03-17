import { useState } from "react";

const Main = () => {
  const [inputValue, setInputValue] = useState<string>("");

  function display(value: string) {
    setInputValue(inputValue + value);
  }

  // function calculate() {
  //   // eslint-disable-next-line
  //   let answers = eval(inputValue);
  //   setInputValue(answers);
  // }

  function calculate() {
    // eslint-disable-next-line
    let answers = Function("return " + inputValue)();
    setInputValue(answers);
  }

  function clear() {
    setInputValue("");
  }

  return (
    <div>
      <form name="calc" className="calculator">
        <input type="text" className="value" value={inputValue} />
        <span className="num clear" onClick={() => clear()}>
          C
        </span>
        <span onClick={() => display("/")}>/</span>
        <span onClick={() => display("*")}>*</span>
        <span onClick={() => display("7")}>7</span>
        <span onClick={() => display("8")}>8</span>
        <span onClick={() => display("9")}>9</span>
        <span onClick={() => display("-")}>-</span>
        <span onClick={() => display("4")}>4</span>
        <span onClick={() => display("5")}>5</span>
        <span onClick={() => display("6")}>6</span>
        <span className="plus" onClick={() => display("+")}>
          +
        </span>
        <span onClick={() => display("1")}>1</span>
        <span onClick={() => display("2")}>2</span>
        <span onClick={() => display("3")}>3</span>
        <span onClick={() => display("0")}>0</span>
        <span onClick={() => display("00")}>00</span>
        <span onClick={() => display(".")}>.</span>
        <span className="num equal" onClick={() => calculate()}>
          =
        </span>
      </form>
    </div>
  );
};

export default Main;
