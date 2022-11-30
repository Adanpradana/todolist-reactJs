import axios from "axios";
import { useState } from "react";
import { useContext } from "react";
import { BiCheck, BiX } from "react-icons/bi";
import { AppContext } from "./useContext/app-context";

const Edit = () => {
  const context = useContext(AppContext);

  return (
    <form
      action=""
      className="flex w-full self-center"
      onSubmit={(e) => context.editHandler(e)}
    >
      <label htmlFor="" className="w-full flex">
        <input
          type="text"
          placeholder="Edit todo.."
          className=" w-full px-3 py-2 bg-white border
         border-slate-300 rounded-l-lg text-sm shadow-sm
          placeholder-slate-400
        focus:outline-none focus:border-violet-500 focus:ring-1
        focus:ring-violet-500 invalid:border-pink-500 invalid:text-pink-600
        focus:invalid:border-pink-500 focus:invalid:ring-pink-500
        "
          onChange={(e) => context.setEdit(e.target.value)}
          value={context.edit}
        />
      </label>
      <div className="flex pl-3 gap-1">
        <button
          className="bg-violet-400 text-white px-2 rounded-lg text-2xl font-semibold"
          // onClick={(e) => editHandler(e)}
        >
          <BiCheck />
        </button>
        <button
          className="bg-red-400 text-white px-2 rounded-lg text-2xl font-semibold"
          onClick={context.cancelEdit}
        >
          <BiX />
        </button>
      </div>
    </form>
  );
};
export default Edit;
