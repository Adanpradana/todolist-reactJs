import { useContext } from "react";
import { AppContext } from "../../useContext/app-context";
import { Skeleton, Spin } from "antd";
import { Bars } from "react-loader-spinner";
const EmptyTodo = () => {
  const context = useContext(AppContext);

  return (
    <div className="empty-todo">
      {context.loading ? (
        <Bars height="40" width="40" color="#929292" ariaLabel="bars-loading" wrapperStyle={{}} wrapperClass="" visible={true} />
      ) : (
        <div className="wrapper-empty">
          <p className="create">Create something awesome today</p>
          <p>"{context.quotes.text}"</p>
          <p className="author">
            <i>{context.quotes.author}</i>
          </p>
        </div>
      )}
    </div>
  );
};
export default EmptyTodo;
