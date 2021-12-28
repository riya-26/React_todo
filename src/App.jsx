import "./styles.css";
import React, { useState } from "react";
import { InputTodo } from "./components/InputTodo";
import { IncompleteTodos } from "./components/IncompleteTodos";
import { CompleteTodos } from "./components/CompleteTodos";

export const App = () => {
  const [incomoleteTodos, setIncompleteTodos] = useState([]);
  const [completeTodos, setcompleteTodos] = useState([]);
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
    const newCompleteTodos = [...completeTodos, incomoleteTodos[index]];
    setIncompleteTodos(newIncompleteTodos);
    setcompleteTodos(newCompleteTodos);
  };

  const onClickBack = (index) => {
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index, 1);
    const newIncompleteTodos = [...incomoleteTodos, completeTodos[index]];
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
      <IncompleteTodos
        todos={incomoleteTodos}
        onClickComplete={onClickComplete}
        onClickDelete={onClickDelete}
      />
      <CompleteTodos todos={completeTodos} onClickBack={onClickBack} />
    </>
  );
};
