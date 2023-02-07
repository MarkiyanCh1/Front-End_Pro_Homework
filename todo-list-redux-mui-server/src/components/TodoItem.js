import React from "react";
import { useDispatch } from "react-redux";
import { statusTodo, deleteFetchTodo } from "../redux/todoSlice";
import { Box, Button, List, Checkbox } from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutlined";


import "../index.css";

export const TodoItem = ({ id, title, completed }) => {
  const dispatch = useDispatch();

  const handleCompleteClick = () => {
    dispatch(statusTodo(id));
  };

  const handleDeleteTodo = () => {
    dispatch(deleteFetchTodo(id));
  };

  return (
    <List sx={{ minWidth: "500px", display: "flex", ml: "100px", marginX: "0"}}>
      <Box
        sx={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            border: "1px solid grey",
            borderRadius: "5px",
            color: "#e2e7e3",
        }}
        className={completed ? "complete" : "in_process"}
      >
        <Box sx={{ marginX: "5px", marginY: "10px" }}>
            <h3>{title}</h3>
        </Box>
        <Box sx={{ marginY: "auto" }}>
          <Button onClick={handleDeleteTodo} sx={{color: "#e2e7e3", paddingX: "0", minWidth: "20px"}}>
              <DeleteOutlineIcon />
          </Button>
          <Checkbox
            sx={{
                border: "none",
                color: "#e2e7e3",
            }}
            checked={completed}
            onChange={handleCompleteClick}
          ></Checkbox>
        </Box>
      </Box>
    </List>
  );
};
