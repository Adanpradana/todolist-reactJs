import { Routes, Route, Outlet, useNavigate } from "react-router-dom";
import LandingPage from "./components/landing-page/landing-page";
import Register from "./components/Register";
import Todolist from "./Todolist";
import Login from "./components/landing-page/Login";
import "./components/index.css";
import "./components/empty-todo/emptyTodo.css";

function App() {
  // useEffect(() => {
  //   axios({
  //     method: "GET",
  //     url: `https://type.fit/api/quotes`,
  //   })
  //     .then((data) => {
  //       const rand = Math.floor(Math.random() * data.data.length);
  //       setQuotes(data.data[rand]);
  //     })
  //     .catch((err) => console.log(err))
  //     .finally(() => setLoading(false));
  // }, []);

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="todolist" element={<Todolist />} />
    </Routes>
  );
}

export default App;
