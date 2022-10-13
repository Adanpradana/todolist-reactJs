import Add from "./components/Add.username";
import Show from "./components/Show.username";
import { AppContext } from "./useContext/app-context";
import { useState } from "react";
function App() {
  //addState
  const [name, setName] = useState("");
  const [list, setList] = useState([]);
  // const [error, setEerror] = useState("");

  //editState
  const [edit, setEdit] = useState("");
  // const [todo, setTodo] = useState([]);
  const [editList, setEditList] = useState({});
  const [showEdit, setShowEdit] = useState(-1);

  const saveEdit = (event) => {
    event.preventDefault();
    const editedTodo = {
      id: editList.id,
      name: edit,
    };
    const index = list.findIndex((todo) => {
      return todo.id === editList.id;
    });

    list[index] = editedTodo; //ini kunci edit object di array

    setShowEdit(edit.id);
  };
  const cancelEdit = () => {
    setEditList({});
    setEdit("");
    setShowEdit(showEdit !== editList.id);
  };
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
  const getId = () => Date.now();

  const removeId = (todoId) => {
    const remove = list.filter((todo) => todo.id !== todoId);
    setList(remove);
  };
  const getValueForm = (event) => setName(event.target.value);

  //edit handler form
  const showEditHandler = (item) => {
    setEdit(item.name);
    setShowEdit(item.id);
    setEditList(item);
  };
  const editHandler = (event) => setEdit(event.target.value);
  //end edit handler
  const valueProvider = {
    edit,
    editList,
    name,
    list,
    showEdit,
    cancelEdit,
    setName,
    updateUsername,
    getValueForm,
    getId,
    removeId,
    setEdit,
    setEditList,
    showEditHandler,
    editHandler,
    saveEdit,
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
