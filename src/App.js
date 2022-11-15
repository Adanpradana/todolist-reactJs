import "./components/index.css";
import "./components/empty-todo/emptyTodo.css";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./components/landing-page/landing-page";
import Todolist from "./Todolist";
import Login from "./components/landing-page/Login";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="login" element={<Login />} />

      {/* <Route path="/todolist" element={<Todolist />} /> */}
    </Routes>
  );
}

export default App;
