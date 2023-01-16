import { Alert } from "antd";
import { useContext } from "react";
import { AppContext } from "../../useContext/app-context";

const Add = () => {
  const context = useContext(AppContext);

  return (
    <div className="box content">
      <h1>Add Username</h1>
      <form action="" onSubmit={context.updateUsername}>
        <div className="field">
          <label className="label">Username</label>
          <div className="field  has-addons">
            <div className="control is-expanded ">
              <input
                type="text"
                className="input"
                placeholder="add new user"
                onChange={context.getValueForm}
                value={context.name}
              />
            </div>
            <div className="control">
              <button className="button is-info">Submit</button>
            </div>
          </div>
          {context.error ? (
            <div>
              <Alert message="Error Text" type="error" />
            </div>
          ) : (
            <></>
          )}
        </div>
      </form>
    </div>
  );
};

export default Add;
