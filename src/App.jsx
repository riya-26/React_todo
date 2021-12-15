import "./styles.css";
import React, { useState } from "react";
import { InputTodo } from "./components/InputTodo";

export const App = () => {
  const [incomoleteTodos, setIncompleteTodos] = useState([]);
  const [comoleteTodos, setcompleteTodos] = useState([]);
  const [todoText, setTodoText] = useState("");

  //todoの変更
  const onChangeTodoText = (e) => {
    setTodoText(e.target.value);
  };

  //追加button
  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodos = [...incomoleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodoText("");
  };

  //削除button
  const onClickDelete = (index) => {
    const newTodos = [...incomoleteTodos];
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
  };

  const onClickComplete = (index) => {
    const newIncompleteTodos = [...incomoleteTodos];
    newIncompleteTodos.splice(index, 1);
    const newCompleteTodos = [...comoleteTodos, incomoleteTodos[index]];
    setIncompleteTodos(newIncompleteTodos);
    setcompleteTodos(newCompleteTodos);
  };

  const onClickBack = (index) => {
    const newCompleteTodos = [...comoleteTodos];
    newCompleteTodos.splice(index, 1);
    const newIncompleteTodos = [...incomoleteTodos, comoleteTodos[index]];
    setcompleteTodos(newCompleteTodos);
    setIncompleteTodos(newIncompleteTodos);
  };

  return (
    <>
      <InputTodo
        todoText={todoText}
        onChange={onChangeTodoText}
        onClick={onClickAdd}
      />
      <div className="incomplete-area">
        <p className="title">未完了のtodo</p>
        <ul>
          {incomoleteTodos.map((todo, index) => {
            return (
              <div key={index} className="list-row">
                <li>{todo}</li>
                <button
                  onClick={() => {
                    onClickComplete(index);
                  }}
                >
                  完了
                </button>
                <button onClick={() => onClickDelete(index)}>削除</button>
              </div>
            );
          })}
        </ul>
      </div>
      　
      <div className="complete-area">
        <p className="title">完了のtodo</p>
        <ul>
          {comoleteTodos.map((todo, index) => {
            return (
              <div key={index} className="list-row">
                <li>{todo}</li>
                <button
                  onClick={() => {
                    onClickBack(index);
                  }}
                >
                  戻す
                </button>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
};
