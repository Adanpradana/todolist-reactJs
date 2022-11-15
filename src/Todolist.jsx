import Add from "./components/Add.username";
import Show from "./components/Show.username";
import "./components/index.css";
import "./components/empty-todo/emptyTodo.css";

const Todolist = () => {
  return (
    <div className="container">
      <Add />
      <Show />
    </div>
  );
};

export default Todolist;
