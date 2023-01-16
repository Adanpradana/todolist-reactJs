import { Routes, Route } from "react-router-dom";
import LandingPage from "./components/landing-page/";
import Register from "./components/register";
import Todolist from "./components/todolist";
import Login from "./components/login";
import "./components/empty-todo/emptyTodo.css";
import "./components/index.css";

function App() {
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
