import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/todoSlice";
import './todoForm.css';

export const AddTodoForm = () => {
  const [value, setValue] = useState("");

  const dispatch = useDispatch();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(addTodo({ title: value }));
    setValue("");
  };

  return (
      <div className="TodoForm">
        <form onSubmit={onSubmitHandler} className="TodoForm__form">
          <h1>Task Organizer</h1>
          <input
              type="text"
              className="TodoForm__form-input"
              value={value}
              onChange={(e) => setValue(e.target.value)}
          />
          <button type="submit" className="TodoForm__button">
            Add
          </button>
        </form>
      </div>
  );
};