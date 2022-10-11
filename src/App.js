import Add from "./components/Add.username";
import Show from "./components/Show.username";
import { AppContext } from "./useContext/app-context";
import { useState } from "react";
function App() {
  const [name, setName] = useState("");
  const [list, setList] = useState([]);
  const [edit, setEdit] = useState({});
  const [error, setEerror] = useState("");

  const updateUsername = (event) => {
    event.preventDefault();
    const showTodo = [
      ...list,
      {
        id: getId(),
        name,
      },
    ];
    setList(showTodo);
    setName("");
  };
  const getId = () => {
    list.map((item, id) => (item.id = id + 1));
  };

  const removeId = (todoId) => {
    const remove = list.filter((todo) => todo.id !== todoId);
    setList(remove);
  };
  const getValueForm = (event) => setName(event.target.value);

  const editHandler = (list) => {
    
    console.log(list, "oke");
  };
  const valueProvider = {
    error,
    name,
    list,
    edit,
    editHandler,
    updateUsername,
    getValueForm,
    removeId,
  };

  return (
    <div className="container">
      <AppContext.Provider value={valueProvider}>
        <h3>henlo</h3>
        <Add />
        <Show />
      </AppContext.Provider>
    </div>
  );
}

export default App;
