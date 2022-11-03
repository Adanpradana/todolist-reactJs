
import { useContext } from "react";
import { MdClear, MdDone } from "react-icons/md";
import { AppContext } from "../../useContext/app-context";

function FormEdit() {
  const context = useContext(AppContext);

  return (
    <>
      <div className="control is-expanded input-control">
        <input type="text" placeholder="Edit todo.." className="input" value={context.edit} onChange={context.editHandler} />
      </div>
      <div className="control">
        <button className="button" onClick={context.saveEdit}>
          <MdDone />
        </button>
      </div>
      <div className="control">
        <button className="button" onClick={context.cancelEdit}>
          <MdClear />
        </button>
      </div>
    </>
  );
}

export default FormEdit;
