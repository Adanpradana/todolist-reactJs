import "./components/index.css";
import "./components/empty-todo/emptyTodo.css";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./components/landing-page/landing-page";
import Todolist from "./Todolist";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      {/* <Route path="/todolist" element={<Todolist />} /> */}
    </Routes>
  );
}

export default App;
