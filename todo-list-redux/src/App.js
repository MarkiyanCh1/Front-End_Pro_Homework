import { AddTodoForm } from "./components/todoForm";
import './App.css';
import { TodoList } from "./components/TodoList";


function App() {
  return (
    <div className="App">
      <AddTodoForm />
      <TodoList />
    </div>
  );
}

export default App;
