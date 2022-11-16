import "./components/index.css";
import "./components/empty-todo/emptyTodo.css";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./components/landing-page/landing-page";
import Todolist from "./Todolist";
import Login from "./components/landing-page/Login";
import { AppContext } from "./useContext/app-context";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [list, setList] = useState([]);
  const [error, setEerror] = useState("");
  const [quotes, setQuotes] = useState("");
  //editState
  const [edit, setEdit] = useState("");
  const [editList, setEditList] = useState({});
  const [showEdit, setShowEdit] = useState(-1);
  const [hover, setHover] = useState(-1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios({
      method: "GET",
      url: `https://type.fit/api/quotes`,
    })
      .then((data) => {
        const rand = Math.floor(Math.random() * data.data.length);
        setQuotes(data.data[rand]);
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);

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
    if (!name) {
      return setEerror("todolist cannot be empty !");
    }
    setEerror("");
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

  const hoverHandler = (res) => {
    setHover(res.id);
  };
  const hoverleave = () => {
    setHover(-1);
  };
  const valueProvider = {
    hover,
    edit,
    editList,
    name,
    error,
    list,
    showEdit,
    quotes,
    loading,
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
    hoverHandler,
    hoverleave,
  };
  return (
    <AppContext.Provider value={valueProvider}>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="login" element={<Login />} />
        <Route path="todolist" element={<Todolist />} />
      </Routes>
    </AppContext.Provider>
  );
}

export default App;
