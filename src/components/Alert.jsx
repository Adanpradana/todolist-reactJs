import { useContext } from "react";
import { AppContext } from "../useContext/app-context";

export const Alert = ({ color, message, icon }) => {
  const context = useContext(AppContext);
  return (
    <div
      className={
        context.error
          ? "mt-4 absolute top-0  right-[50%] translate-x-[50%] -translate-y-0 transition-all"
          : "mt-4 absolute top-0  right-[50%] translate-x-[50%] -translate-y-[4.5rem] transition-all"
      }
    >
      <div className={color}>
        <div className="flex self-center ml-3 text-2xl">{icon}</div>
        <div className="flex self-center justify-center w-full">
          <h1 className="text-center text-lg">{message}</h1>
        </div>
      </div>
    </div>
  );
};
