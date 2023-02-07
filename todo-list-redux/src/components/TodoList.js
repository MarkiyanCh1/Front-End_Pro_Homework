import React from "react";
import { TodoItem } from "./TodoItem";
import { useSelector } from "react-redux";
import './TodoList.css';


export const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  console.log(todos);

  return todos.length ? (
    <div className="TodoList">
      <ul className="ListGroup">
        {todos.map((todo) => (
          <TodoItem
            id={todo.id}
            title={todo.title}
            completed={todo.completed}
            key={todo.id}
          />
        ))}
      </ul>
    </div>
  ) : (
    <div className="DefaultMessage">There aren't todos</div>
  );
};
