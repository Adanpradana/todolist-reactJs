import React, { Children, useContext, useEffect, useState } from "react";
import { BiPlus, BiPencil, BiTrash } from "react-icons/bi";
import { BsPersonCircle } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { AppContext } from "./useContext/app-context";
import { Alert } from "./components/Alert";
import ReactTooltip from "react-tooltip";
import EmptyTodo from "./components/Empty";
import alert from "./components/alertData";
import axios from "axios";
import Edit from "./Edit";
import "./components/index.css";
import "./components/empty-todo/emptyTodo.css";

const Todolist = () => {
  const context = useContext(AppContext);

  const [handler, setHandler] = useState(false);
  const [newTodo, setNewTodo] = useState("");
  const [users, setUsers] = useState([]);
  const [todolists, setTodolists] = useState([]);
  const [hover, setHover] = useState(-1);
  const [error, setEerror] = useState(false);
  const idStore = localStorage.getItem("id");
  const [edit, setEdit] = useState("");
  const [showEdit, setShowEdit] = useState(-1);

  const navigate = useNavigate();

  useEffect(() => {
    // if (!localStorage.getItem("name") && !localStorage.getItem("id")) {
    //   window.location.replace(<Outlet />);
    // }
    const nameStore = localStorage.getItem("name");
    axios({
      method: "GET",
      url: `http://localhost:3310/users/${nameStore}/todolist`,
    }).then((res) => setUsers(res.data.users));
    axios({
      method: "GET",
      url: `http://localhost:3310/users/${nameStore}/todolist`,
    }).then((res) => setTodolists(res.data.users[0].todolist));
  }, [handler]);

  const addHandler = (e) => {
    setNewTodo(e.target.value);
  };

  const addTodo = (e) => {
    e.preventDefault();
    if (!newTodo) {
      setEerror(true);
      setTimeout(() => {
        setEerror(false);
      }, 1500);
      return;
    }
    setEerror(false);
    const addData = {
      todolist: newTodo,
      userId: idStore,
    };
    axios({
      method: "POST",
      url: "http://localhost:3310/users/todolist",
      data: addData,
    }).then(() => setHandler(!handler));
    setNewTodo("");
  };
  const saveEdit = (e) => {
    e.preventDefault();
    const getData = {
      id: showEdit,
      todolist: edit,
      userId: idStore,
    };
    axios({
      method: "PUT",
      url: "http://localhost:3310/users/todolist",
      data: getData,
    }).then(() => setHandler(!handler));
    setShowEdit(-1);
    setEdit("");
  };
  const cancelEdit = (e) => {
    e.preventDefault();
    setEdit("");
    setShowEdit(showEdit !== showEdit.id);
  };

  const showEditHandler = (res) => {
    setEdit(res.todolist);
    setShowEdit(res.id);
  };

  const logOutHandler = () => {
    localStorage.clear();
    navigate("/");
  };

  const hoverHandler = (res) => {
    setHover(res.id);
  };
  const hoverleave = () => {
    setHover(-1);
  };
  const removeTodoList = (res, e) => {
    e.preventDefault();
    const data = {
      id: res.id,
      userId: idStore,
    };
    axios({
      method: "DELETE",
      url: "http://localhost:3310/users/todolist",
      data: data,
    })
      .then(() => setHandler(!handler))
      .then(() => setHover(!res.id));
  };
  const valueProvider = {
    saveEdit,
    cancelEdit,
    setEdit,
    edit,
    error,
    setEerror,
  };
  return (
    <AppContext.Provider value={valueProvider}>
      <div className="xxl:container bg-slate-50 mx-auto w-full text-center xxl:m-0 xxl:w-full">
        {error ? (
          <Alert
            color={alert.warning.color}
            message={alert.warning.message.add}
            icon={alert.warning.icons}
          />
        ) : (
          <Alert
            color={alert.warning.color}
            message="todolist cannot be empty !"
            icon={alert.warning.icons}
          />
        )}
        <div className="bg-red-200 flex px-10 md:px-20 justify-between">
          <div className="flex self-center gap-2">
            <div className="flex self-center">
              <span>
                <i className="text-4xl  text-gray-500">
                  <BsPersonCircle />
                </i>
              </span>
            </div>
            <div className="flex self-center">
              {Children.toArray(
                users.map((user) => <p>Hello {user.user_name}</p>)
              )}
            </div>
          </div>
          <div className="flex py-5">
            <div className="pt-15 bg-red-500 rounded-md hover:bg-red-400">
              <button
                className="py-2 px-3 text-md text-white font-normal w-full"
                onClick={() => logOutHandler()}
              >
                sign out
              </button>
            </div>
          </div>
        </div>
        <div className="py-10">
          <p className="text-4xl">Create your main focus today</p>
        </div>
        <div>
          <button className="py-2 px-4 bg-violet-400 rpunded-md">
            <div className="flex text-white">
              <div className="flex items-center">
                <BiPlus className="" />
              </div>
              <div className="pl-1">
                <p>add task</p>
              </div>
            </div>
          </button>
        </div>
        <div className="pt-10 w-full">
          <form action="" className="flex" onSubmit={(e) => addTodo(e)}>
            <label htmlFor="" className="w-full">
              <input
                type="todolist"
                placeholder="what will you do"
                className=" w-full px-3 py-2 bg-white border
               border-slate-300 rounded-l-lg text-sm shadow-sm
                placeholder-slate-400
              focus:outline-none focus:border-violet-500 focus:ring-1
              focus:ring-violet-500 invalid:border-pink-500 invalid:text-pink-600
              focus:invalid:border-pink-500 focus:invalid:ring-pink-500
              "
                onChange={(e) => addHandler(e)}
                value={newTodo}
              />
            </label>
            <button className="bg-violet-400 text-white px-4 rounded-r-lg">
              create
            </button>
          </form>
        </div>
        <div className="pt-20 text-left">
          <div className="pb-4">
            <h1 className="text-lg">ACTIVITY</h1>
          </div>
          {todolists.length > 0 ? (
            Children.toArray(
              todolists.map((res) => {
                return (
                  <div
                    className=" rounded-md hover:bg-violet-50 "
                    onMouseEnter={() => hoverHandler(res)}
                    onMouseLeave={() => hoverleave(-1)}
                  >
                    {showEdit === res.id ? (
                      <div className="h-[50px] flex px-3">
                        <Edit />
                      </div>
                    ) : (
                      <div
                        data-tip={res.name}
                        data-for="todolist"
                        className="flex  px-2 h-[50px] relative"
                      >
                        <ReactTooltip
                          id="todolist"
                          place="bottom"
                          effect="solid"
                          padding="5px"
                        />

                        <div className=" flex self-center w-full p-2 gap-3">
                          <div className="flex self-center  text-gray-700">
                            <p>{res.todolist}</p>
                          </div>
                          <div
                            className={
                              hover === res.id
                                ? "p-2 hover:bg-violet-200 rounded-md cursor-pointer"
                                : "p-2 hover:bg-violet-200  rounded-md cursor-pointer hidden"
                            }
                            onClick={() => showEditHandler(res)}
                          >
                            <i className="text-xl  text-gray-500">
                              <BiPencil />
                            </i>
                          </div>
                        </div>
                        <button onClick={(e) => removeTodoList(res, e)}>
                          <div className="p-2 rounded-md hover:bg-red-200 flex self-center">
                            <i
                              className={
                                hover === res.id
                                  ? "text-xl text-red-400"
                                  : "hidden"
                              }
                            >
                              <BiTrash />
                            </i>
                          </div>
                        </button>
                      </div>
                    )}
                  </div>
                );
              })
            )
          ) : (
            <EmptyTodo />
          )}
        </div>
      </div>
    </AppContext.Provider>
  );
};

export default Todolist;
