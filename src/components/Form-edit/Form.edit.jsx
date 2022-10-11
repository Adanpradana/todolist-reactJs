import React, { useContext, useState } from "react";
import { MdClear, MdDone } from "react-icons/md";
import { AppContext } from "../../useContext/app-context";
function FormEdit() {
  const [form, setForm] = useState("");
  const [todoHandler, setTodoHandler] = useState({});
  const context = useContext(AppContext);

  const editHandler = (event) => {
    console.log(event);
  };
  return (
    <>
      <div className="control is-expanded input-control">
        <input type="text" placeholder="Edit todo.." className="input" value={context.name}  />
      </div>
      <div className="control">
        <button className="button">
          <MdDone />
        </button>
      </div>
      <div className="control">
        <button className="button">
          <MdClear />
        </button>
      </div>
    </>
  );
}

export default FormEdit;
