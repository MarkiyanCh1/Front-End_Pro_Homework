import { AddTodoForm } from "./components/todoForm";
import { TodoList } from "./components/TodoList";
import "./App.css"


import Container from "@mui/material/Container";

function App() {
  return (
    <Container maxWidth="md">
      <AddTodoForm />
      <TodoList />
    </Container>
  );
}

export default App;
