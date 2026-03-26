import React from "react";
import "../App.css";
export default function Calculator() {
  return (
    <>
      <main className="Calculator">
        <article>
          <table border="1">
            <tbody>
              <tr style={{ backgroundColor: "gray" }}>
                <td colSpan={4}></td>
              </tr>
              <tr>
                <td>AC</td>
                <td>+/-</td>
                <td>%</td>
                <td className="last">:</td>
              </tr>
              <tr>
                <td>7</td>
                <td>8</td>
                <td>9</td>
                <td className="last">X</td>
              </tr>
              <tr>
                <td>4</td>
                <td>5</td>
                <td>6</td>
                <td className="last">-</td>
              </tr>
              <tr>
                <td>1</td>
                <td>2</td>
                <td>3</td>
                <td className="last">+</td>
              </tr>
              <tr>
                <td colSpan={2}>0</td>
                <td>.</td>
                <td className="last">=</td>
              </tr>
            </tbody>
          </table>
        </article>
      </main>
    </>
  );
}
