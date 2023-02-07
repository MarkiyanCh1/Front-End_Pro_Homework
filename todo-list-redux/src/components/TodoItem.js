import React from "react";
import { useDispatch } from "react-redux";
import { toggleComplete, deleteTodo } from "../redux/todoSlice";
import './TodoItem.css';



export const TodoItem = ({ id, title, completed }) => {
  const dispatch = useDispatch();

  const handleCompleteClick = () => {
    dispatch(toggleComplete({ id: id, completed: !completed }));
  };

  const handleDeleteTodo = () => {
    dispatch(deleteTodo({ id: id }));
  };

  return (
    <li
      className={
        completed
          ? "ListItem Done"
          : "ListItem InProgress"
      }
    >
      <div className="Task">
        <p className="Task_name">{title}</p>
        <span>
          <input
            type="checkbox"
            className="Task_checkbox"
            checked={completed}
            onChange={handleCompleteClick}
          ></input>
          <button className="Task_button" onClick={handleDeleteTodo}>
            <img src="https://icons.iconarchive.com/icons/custom-icon-design/pretty-office-8/128/Trash-can-icon.png" width="27" height="33" alt={"trash bin"}/>
          </button>
        </span>
      </div>
    </li>
  );
};
