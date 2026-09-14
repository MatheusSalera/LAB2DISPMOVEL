import { useState } from "react";
import "./Calculadora.css";

const BUTTONS = [
  ["C", "±", "%", "÷"],
  ["7", "8", "9", "×"],
  ["4", "5", "6", "−"],
  ["1", "2", "3", "+"],
  ["0", ".", "="],
];

function calculate(a, b, op) {
  const x = parseFloat(a);
  const y = parseFloat(b);
  switch (op) {
    case "+":
      return x + y;
    case "−":
      return x - y;
    case "×":
      return x * y;
    case "÷":
      return y === 0 ? "Erro" : x / y;
    default:
      return y;
  }
}

function formatDisplay(value) {
  if (value === "Erro") return value;
  const num = Number(value);
  if (Number.isNaN(num)) return "0";
  const str = num.toString();
  return str.length > 12 ? num.toPrecision(8).replace(/\.?0+$/, "") : str;
}

export default function Calculator() {
  const [display, setDisplay] = useState("0");
  const [stored, setStored] = useState(null);
  const [operator, setOperator] = useState(null);
  const [overwrite, setOverwrite] = useState(true);

  function pressDigit(digit) {
    if (display === "Erro") {
      setDisplay(digit === "." ? "0." : digit);
      setOverwrite(false);
      return;
    }
    if (overwrite) {
      setDisplay(digit === "." ? "0." : digit);
      setOverwrite(false);
      return;
    }
    if (digit === "." && display.includes(".")) return;
    setDisplay(display + digit);
  }

  function pressOperator(op) {
    if (display === "Erro") return;

    if (op === "C"){
      setDisplay("0");
      setStored(null);
      setOperator(null);
      setOverwrite(true);
      return;
    }

    if (op === "±") {
      setDisplay((parseFloat(display) * -1).toString());
      return;
    }

    if (op === "%") {
      setDisplay((parseFloat(display) / 100).toString());
      setOverwrite(true);
      return;
    }

    if (op === "=") {
      if (operator === null || stored === null) return;
      const result = calculate(stored, display, operator);
      setDisplay(formatDisplay(result));
      setStored(null);
      setOperator(null);
      setOverwrite(true);
      return;
    }

    // +, −, ×, ÷
    if (operator && !overwrite) {
      const result = calculate(stored, display, operator);
      setStored(formatDisplay(result));
      setDisplay(formatDisplay(result));
    } else {
      setStored(display);
    }
    setOperator(op);
    setOverwrite(true);
  }

  function handlePress(key) {
    if ("0123456789.".includes(key)) {
      pressDigit(key);
    } else {
      pressOperator(key);
    }
  }

  const isOperatorActive = (key) =>
    operator === key && overwrite && key !== "C" && key !== "±" && key !== "%";

  return (
    <div className="calc-wrapper">
      <div className="calc-body">
        <div className="calc-screen">
          <span className="calc-screen-text">{formatDisplay(display)}</span>
        </div>

        <div className="calc-pad">
          {BUTTONS.map((row, i) => (
            <div key={i} className="calc-row">
              {row.map((key) => {
                const isZero = key === "0";
                const isTop = i === 0;
                const isOperator = ["÷", "×", "−", "+", "="].includes(key);
                const classes = [
                  "calc-button",
                  isZero && "calc-button--wide",
                  isTop && "calc-button--top",
                  isOperator && "calc-button--operator",
                  isOperatorActive(key) && "calc-button--active",
                ]
                  .filter(Boolean)
                  .join(" ");

                return (
                  <button key={key} onClick={() => handlePress(key)} className={classes}>
                    {key}
                  </button>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
