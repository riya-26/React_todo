import "./styles.css";
import React, { useState } from "react";

export const App = () => {
  const [incomoleteTodos, setIncompleteTodos] = useState(["rrr", "iii"]);
  const [comoleteTodos, setcompleteTodos] = useState(["sss", "iii"]);

  return (
    <>
      <div className="input-area">
        <input placeholder="todoを入力" />
        <button>追加</button>
      </div>

      <div className="incomplete-area">
        <p className="title">未完了のtodo</p>
        <ul>
          {incomoleteTodos.map((todo) => {
            return (
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button>完了</button>
                <button>削除</button>
              </div>
            );
          })}
        </ul>
      </div>

      <div className="complete-area">
        <p className="title">完了のtodo</p>
        <ul>
          {comoleteTodos.map((todo) => {
            return (
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button>戻す</button>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
};
