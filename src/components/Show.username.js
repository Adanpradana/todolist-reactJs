import { Children, useContext, useState } from "react";
import { AppContext } from "../useContext/app-context";
import "./index.css";
import { FaEdit } from "react-icons/fa";
import FormEdit from "./Form-edit/Form.edit";

const Show = () => {
  const context = useContext(AppContext);
  const list = context.list;
  const [isHover, setIsHover] = useState(-1);
  const [showEdit, setShowEdit] = useState(-1);

  return (
    <div className="box content">
      <h1>Show user</h1>
      {Children.toArray(
        list.map((item, i) =>
          showEdit === item.id ? (
            <div className="field is-grouped">
              <div
                onMouseEnter={(event) => {
                  setIsHover(item.id);
                  event.stopPropagation();
                }}
                onMouseLeave={(event) => {
                  setIsHover(-1);
                  event.stopPropagation();
                }}
                className="control is-expanded flex"
              >
                <div className="wrapper">
                  <div className="control is-expanded p-control">
                    <p>{item.name}</p>
                  </div>
                  <div className={isHover === item.id ? "button-hover-active" : "button-hover"} onClick={() => setShowEdit(item.id)}>
                    <div className="logo-wrapper">
                      <span>
                        <FaEdit />
                      </span>
                    </div>
                  </div>
                </div>
                <FormEdit />
              </div>
            </div>
          ) : (
            <div className="field is-grouped">
              <div
                onMouseEnter={(event) => {
                  setIsHover(item.id);
                  event.stopPropagation();
                }}
                onMouseLeave={(event) => {
                  setIsHover(-1);
                  event.stopPropagation();
                }}
                className="control is-expanded flex"
              >
                <div className="wrapper">
                  <div className="control is-expanded p-control">
                    <p>{item.name}</p>
                  </div>
                  <div className={isHover === item.id ? "button-hover-active" : "button-hover"} onClick={() => setShowEdit(item.id)}>
                    <div className="logo-wrapper">
                      <span>
                        <FaEdit />
                      </span>
                    </div>
                  </div>
                </div>
                {/* <FormEdit /> */}
              </div>
              <div className="control control-button">
                <button className="button is-danger" onClick={context.removeId.bind(this, item.id)}>
                  delete
                </button>
              </div>
            </div>
          )
        )
      )}

      <p>email</p>
    </div>
  );
};
export default Show;
