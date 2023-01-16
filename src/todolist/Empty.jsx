import empty from "../assets/empty-todo.png";

const EmptyTodo = () => {
  return (
    <div className="text-center flex flex-col justify-center">
      <div className=" flex justify-center">
        <img src={empty} alt="" className="w-1/2 lg:w-1/4" />
      </div>
      <div className="pt-5 font-semibold text-xl">
        <h1>Todolist is Empty</h1>
      </div>
    </div>
  );
};

export default EmptyTodo;
