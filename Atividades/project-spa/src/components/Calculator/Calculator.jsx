import React, { useState } from "react";
import "./Calculator.css";
import Container from "@mui/material/Container";
import { Box } from "@mui/system";

export function Calculator() {
  const [num, setNum] = useState(0);
  const [oldnum, setOldNum] = useState(0);
  const [operator, setOperator] = useState();

  function inputNum(e) {
    var input = e.target.value;
    if (num === 0) {
      setNum(input);
    } else {
      setNum(num + input);
    }
  }

  function clear() {
    setNum(0);
  }

  function porcentage() {
    setNum(num / 100);
  }

  function changeSign() {
    if (num > 0) {
      setNum(-num);
    } else {
      setNum(Math.abs(num));
    }
  }

  function operatorHandler(e) {
    var operatorInput = e.target.value;
    setOperator(operatorInput);
    setOldNum(num);
    setNum(0);
  }

  function calculate() {
    if (operator === "/") {
      setNum(parseFloat(oldnum) / parseFloat(num));
    } else if (operator === "X") {
      setNum(parseFloat(oldnum) * parseFloat(num));
    } else if (operator === "-") {
        console.log(oldnum)
        console.log(num)
        console.log(oldnum-num)
      setNum(parseFloat(oldnum) - parseFloat(num));
    } else if (operator === "+") {
      setNum(parseFloat(oldnum) + parseFloat(num));
    }
  }

  return (
    <div>
      <div>
      <p>Calculadora em React</p>
      </div>
      <Box m={.5} />
      <Container maxWidth="xs">
        <div className="wrapper">
          <Box m={3} />
          <h1 className="result">{num}</h1>
          <button id="btn" onClick={clear}>AC</button>
          <button id="btn" onClick={changeSign}>+/-</button>
          <button id="btn" onClick={porcentage}>%</button>
          <button id="btn" className="purple" onClick={operatorHandler} value="/">
            /
          </button>
          <button id="btn" className="gray" onClick={inputNum} value={7}>
            7
          </button>
          <button id="btn" className="gray" onClick={inputNum} value={8}>
            8
          </button>
          <button id="btn" className="gray" onClick={inputNum} value={9}>
            9
          </button>
          <button id="btn" className="purple" onClick={operatorHandler} value="X">
            x
          </button>
          <button id="btn" className="gray" onClick={inputNum} value={4}>
            4
          </button>
          <button id="btn" className="gray" onClick={inputNum} value={5}>
            5
          </button>
          <button id="btn" className="gray" onClick={inputNum} value={6}>
            6
          </button>
          <button id="btn" className="purple" onClick={operatorHandler} value="-">
            -
          </button>
          <button id="btn" className="gray" onClick={inputNum} value={1}>
            1
          </button>
          <button id="btn" className="gray" onClick={inputNum} value={2}>
            2
          </button>
          <button id="btn" className="gray" onClick={inputNum} value={3}>
            3
          </button>
          <button id="btn" className="purple" onClick={operatorHandler} value="+">
            +
          </button>
          <button id="btn" className="gray" onClick={inputNum} value={0}>
            0
          </button>
          <button id="btn" className="gray" onClick={inputNum} value={"."}>
            ,
          </button>
          <button id="btn" className="gray" style={{ visibility: "hidden" }}>
            ,
          </button>
          <button id="btn" className="purple" onClick={calculate}>
            =
          </button>
        </div>
      </Container>
    </div>
  );
}
