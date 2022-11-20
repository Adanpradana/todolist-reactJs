import { FcHighPriority, FcCheckmark } from "react-icons/fc";
const alert = {
  success: {
    color:
      "shadow-sm w-[280px]  bg-green-200 rounded-sm mx-auto flex self-center py-3 border-l-8 border-green-400 text-green-700",
    message: {
      add: "Todolist created !",
      edit: "Todolist Updated",
      delete: "Todolist deleted",
    },
    icons: <FcCheckmark />,
  },

  warning: {
    color:
      "shadow-sm w-[280px]  bg-red-200 rounded-sm mx-auto flex self-center py-3 border-l-8 border-red-400 text-red-700",
    message: {
      add: "Todolist cannot be empty !",
      edit: "Failed edit data !",
    },
    icons: <FcHighPriority />,
  },
};

export default alert;
