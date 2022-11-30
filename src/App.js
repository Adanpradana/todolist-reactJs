import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { AppContext } from "./useContext/app-context";
import LandingPage from "./components/landing-page/landing-page";
import alertData from "./components/alertData";
import Todolist from "./Todolist";
import Login from "./components/landing-page/Login";
import axios from "axios";
import "./components/index.css";
import "./components/empty-todo/emptyTodo.css";
function App() {
  const [error, setEerror] = useState(false);
  const [quotes, setQuotes] = useState("");
  //editState
  const [edit, setEdit] = useState("");
  const [editList, setEditList] = useState({});
  const [showEdit, setShowEdit] = useState(-1);
  const [hover, setHover] = useState(-1);
  const [loading, setLoading] = useState(true);
  const [idTodo, setIdTodo] = useState();
  //database handling state
  const [users, setUsers] = useState([]);
  const [todolists, setTodolists] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [handler, setHandler] = useState(false);
  const [notif, setNotif] = useState(false);
  const idStore = localStorage.getItem("id");
  useEffect(() => {
    // if (!localStorage.getItem("name") && !localStorage.getItem("uuid")) {
    //   window.location.replace(<Outlet />);
    // }
    const nameStore = localStorage.getItem("name");

    axios({
      method: "GET",
      url: `http://localhost:3310/users/${nameStore}/todolist`,
    }).then((res) => setUsers(res.data.users));
    axios({
      method: "GET",
      url: `http://localhost:3310/users/${nameStore}/todolist`,
    }).then((res) => setTodolists(res.data.users[0].todolist));
  }, [handler]);

  const addHandler = (e) => {
    setNewTodo(e.target.value);
  };

  const addTodo = (e) => {
    e.preventDefault();
    if (!newTodo) {
      setEerror(true);
      setTimeout(() => {
        setEerror(false);
      }, 1500);
      return;
    }
    setEerror(false);
    const addData = {
      todolist: newTodo,
      userId: idStore,
    };
    axios({
      method: "POST",
      url: "http://localhost:3310/users/todolist",
      data: addData,
    }).then(() => setHandler(!handler));
    setNewTodo("");
  };

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
    const getData = {
      id,
      todolist: edit,
      userId: localStorage.getItem("id"),
    };
    axios({
      method: "PUT",
      url: "http://localhost:3310/users/todolist",
      data: getData,
    }).then(() => setHandler(!handler));
    setShowEdit(-1);
  };

  const cancelEdit = () => {
    setEditList({});
    setEdit("");
    setShowEdit(showEdit !== editList.id);
  };

  //edit handler form
  const showEditHandler = (res) => {
    setEdit(res.name);
    setShowEdit(res.id);
    setEditList(res);
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

    error,

    showEdit,
    quotes,
    loading,
    cancelEdit,

    setEdit,
    setEditList,
    showEditHandler,
    editHandler,
    saveEdit,
    hoverHandler,
    hoverleave,
    alertData,
    setShowEdit,

    //database handler
    users,
    addTodo,
    addHandler,
    newTodo,
    todolists,
    setHandler,
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
