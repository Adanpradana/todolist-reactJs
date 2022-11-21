import Add from "./components/Add.username";
import Show from "./components/Show.username";
import "./components/index.css";
import "./components/empty-todo/emptyTodo.css";
import { BiPlus, BiPencil, BiTrash } from "react-icons/bi";
import { AppContext } from "./useContext/app-context";
import React, { Children, useContext, useState } from "react";
import EmptyTodo from "./components/Empty";
import { Alert } from "./components/Alert";
import alert from "./components/alertData";
import Edit from "./Edit";
import ReactTooltip from "react-tooltip";

const Todolist = () => {
  const context = useContext(AppContext);
  const list = context.list;

  return (
    <div className="xxl:container bg-slate-50 mx-auto w-full p-8 text-center xxl:m-0 xxl:w-full">
      {context.error ? (
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
      <div>
        <h1>Hello Name</h1>
        <p>Create your main focus today</p>
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
        <form action="" className="flex" onSubmit={context.updateUsername}>
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
              onChange={context.getValueForm}
              value={context.name}
            />
          </label>
          <button className="bg-violet-400 text-white px-4 rounded-r-lg">
            create
          </button>
        </form>
      </div>
      {/* <Add /> */}
      {/* <Show /> */}
      <div className="pt-20 text-left">
        <div className="pb-4">
          <h1 className="text-lg">ACTIVITY </h1>
        </div>
        {list.length > 0 ? (
          Children.toArray(
            list.map((res) => {
              return (
                <div
                  className=" rounded-md hover:bg-violet-50 "
                  onMouseEnter={context.hoverHandler.bind(this, res)}
                  onMouseLeave={context.hoverleave.bind(this, -1)}
                >
                  {context.showEdit === res.id ? (
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
                          <p>{res.name}</p>
                        </div>
                        <div
                          className={
                            context.hover === res.id
                              ? "p-2 hover:bg-violet-200 rounded-md cursor-pointer"
                              : "p-2 hover:bg-violet-200  rounded-md cursor-pointer hidden"
                          }
                          onClick={() => context.showEditHandler(res)}
                        >
                          <i className="text-xl  text-gray-500">
                            <BiPencil />
                          </i>
                        </div>
                      </div>
                      <button onClick={context.removeId.bind(this, res.id)}>
                        <div className="p-2 rounded-md hover:bg-red-200 flex self-center">
                          <i
                            className={
                              context.hover === res.id
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
  );
};

export default Todolist;
