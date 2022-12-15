import { useEffect, useState } from "react";
import { Routes, Route, Outlet, useNavigate } from "react-router-dom";
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

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="login" element={<Login />} />
      <Route path="todolist" element={<Todolist />} />
    </Routes>
  );
}

export default App;
