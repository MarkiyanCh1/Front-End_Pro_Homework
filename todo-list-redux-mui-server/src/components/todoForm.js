import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import Box from "@mui/material/Box";
import { TextField } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import { Fab } from "@mui/material";
import { fetchTodos } from "../redux/todoSlice";
import { postTodo } from "../redux/todoSlice";


export const AddTodoForm = () => {
  const [value, setValue] = useState("");

  const dispatch = useDispatch();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(postTodo(value));
    setValue("");
  };

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  return (
    <Box
      component="form"
      onSubmit={onSubmitHandler}
      sx={{ mt: "20px", width: "350px", marginX: "auto", paddingY: "20px", borderRadius: "20px", display: "flex", flexWrap: "wrap", justifyContent: "center", backgroundColor: "rgb(6,130,210)" }}>
      <h1>Task Organizer</h1>
      <TextField
        sx={{
          backgroundColor: "#9be79d"
        }}
        type="text"
        label="Add todo..."
        variant="outlined"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        required
      />
      <Fab sx={{ ml: "10px" }} variant="extended" type="submit">
          <AddIcon />
      </Fab>
    </Box>
  );
};
