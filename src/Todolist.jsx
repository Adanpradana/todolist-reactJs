import Add from "./components/Add.username";
import Show from "./components/Show.username";
import "./components/index.css";
import "./components/empty-todo/emptyTodo.css";
import { BiPlus, BiPencil, BiTrash } from "react-icons/bi";
import { AppContext } from "./useContext/app-context";
import { useContext } from "react";
const Todolist = () => {
  const context = useContext(AppContext);

  return (
    <div className="container bg-slate-50 mx-auto w-full p-8 text-center">
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
        <form action="" className="flex">
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
        <div>
          <h1 className="text-lg">ACTIVITY </h1>
        </div>
        <div className=" mt-2 rounded-lg bg-gray-100">
          <div className="flex justify-between px-2">
            <div className=" flex self-center p-2 gap-3">
              <div className="flex">
                <input type="checkbox" name="isodne" id="" />
              </div>
              <div className="flex self-center">
                <p>test</p>
              </div>
              <div className="p-2">
                <i className="text-lg">
                  <BiPencil />
                </i>
              </div>
            </div>
            <div className="p-2 rounded-lg bg-red-200 flex self-center">
              <i className="text-lg text-red-600">
                <BiTrash />
              </i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Todolist;
