import React, { useReducer, useState } from "react";
import "../App.css";
export default function Calculator() {
  let actions = {
    Division: ":",
    Multiplication: "X",
    Substraction: "-",
    Addition: "+",
  };
  function reducer(state, action) {
    switch (action.type) {
      case "ADD_NUMBER":
        return {
          ...state,
          current:
            state.current === "0"
              ? action.payload
              : state.current + action.payload,
        };

      case "CHOOSE_OPERATION":
        return {
          ...state,
          operation: action.payload,
          previous: state.current,
          current: "0",
        };

      case "CLEAR":
        return {
          current: "0",
          previous: null,
          operation: null,
        };

      case "EQUALS":
        let result;
        const prev = parseFloat(state.previous);
        const current = parseFloat(state.current);

        if (state.operation === "+") result = prev + current;
        if (state.operation === "-") result = prev - current;
        if (state.operation === "X") result = prev * current;
        if (state.operation === ":") result = prev / current;

        return {
          current: String(result),
          previous: null,
          operation: null,
        };

      default:
        return state;
    }
  }
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [state, action] = useReducer(reducer, initialState);
  return (
    <>
      <main className="Calculator">
        <article>
          <table border="1">
            <tbody>
              <tr style={{ backgroundColor: "gray" }}>
                <td colSpan={4}>
                  {num1} {num2}
                </td>
              </tr>
              <tr>
                <td onClick={() => dispatch({ type: "CLEAR" })}>AC</td>
                <td>+/-</td>
                <td>%</td>
                <td
                  className="last"
                  onClick={() =>
                    dispatch({ type: "CHOOSE_OPERATION", payload: "/" })
                  }
                >
                  /
                </td>
              </tr>
              <tr>
                <td
                  onClick={() => dispatch({ type: "ADD_NUMBER", payload: "7" })}
                >
                  7
                </td>
                <td
                  onClick={() => dispatch({ type: "ADD_NUMBER", payload: "8" })}
                >
                  8
                </td>
                <td
                  onClick={() => dispatch({ type: "ADD_NUMBER", payload: "9" })}
                >
                  9
                </td>
                <td
                  className="last"
                  onClick={() =>
                    dispatch({ type: "CHOOSE_OPERATION", payload: "*" })
                  }
                >
                  *
                </td>
              </tr>
              <tr>
                <td
                  onClick={() => dispatch({ type: "ADD_NUMBER", payload: "7" })}
                >
                  4
                </td>
                <td
                  onClick={() => dispatch({ type: "ADD_NUMBER", payload: "7" })}
                >
                  5
                </td>
                <td
                  onClick={() => dispatch({ type: "ADD_NUMBER", payload: "7" })}
                >
                  6
                </td>
                <td
                  className="last"
                  onClick={() =>
                    dispatch({ type: "CHOOSE_OPERATION", payload: "-" })
                  }
                >
                  -
                </td>
              </tr>
              <tr>
                <td
                  onClick={() => dispatch({ type: "ADD_NUMBER", payload: "7" })}
                >
                  1
                </td>
                <td
                  onClick={() => dispatch({ type: "ADD_NUMBER", payload: "7" })}
                >
                  2
                </td>
                <td
                  onClick={() => dispatch({ type: "ADD_NUMBER", payload: "7" })}
                >
                  3
                </td>
                <td
                  className="last"
                  onClick={() =>
                    dispatch({ type: "CHOOSE_OPERATION", payload: "+" })
                  }
                >
                  +
                </td>
              </tr>
              <tr>
                <td
                  colSpan={2}
                  onClick={() => dispatch({ type: "ADD_NUMBER", payload: "7" })}
                >
                  0
                </td>

                <td>.</td>
                <td
                  className="last"
                  onClick={() => dispatch({ type: "EQUALS" })}
                >
                  =
                </td>
              </tr>
            </tbody>
          </table>
        </article>
      </main>
    </>
  );
}
