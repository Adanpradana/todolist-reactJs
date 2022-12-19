import axios from "axios";
import { useState } from "react";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { Alert } from "../Alert";
import alert from "../alertData";
const Login = () => {
  const [eye, setEye] = useState("password");
  const eyeHandler = () => {
    eye === "name" ? setEye("password") : setEye("name");
  };
  const [user_name, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const userNameHandler = (userNameInput) => {
    setUserName(userNameInput);
  };
  const passwordHandler = (passwordInput) => {
    setPassword(passwordInput);
  };

  const navigate = useNavigate();
  const signInHandler = () => {
    const dataInput = {
      user_name,
      password,
    };
    axios({
      method: "POST",
      url: "http://localhost:3310/users/login",
      data: dataInput,
    })
      .then((res) => {
        localStorage.setItem("name", res.data.result.user_name);
        localStorage.setItem("id", res.data.result.id);
        navigate("/todolist");
      })
      .catch((error) => setErrorMsg(error.response.data.message))
      .catch(() => setError(true))
      .finally(() => setLoading(true));
  };
  return (
    <div className="xxl:container bg-neutral-400  px-10 m-auto flex justify-center items-center l h-screen ">
      <div className="container bg-white max-w-lg text-center p-10 rounded-xl ">
        <div className="pb-5">
          {error ? errorMsg : null}
          <h1 className="font-bold text-3xl pb-5">User Login</h1>
          <p className="leading-relaxed">
            Create something special today, we help you create new habbit
          </p>
        </div>
        <form action="">
          <label className="block">
            <input
              type="Username"
              placeholder="Input Username"
              className="block w-full px-3 py-2 bg-white border
               border-slate-300 rounded-lg text-sm shadow-sm
                placeholder-slate-400
              focus:outline-none focus:border-violet-500 focus:ring-1
              focus:ring-violet-500 invalid:border-pink-500 invalid:text-pink-600
           
                "
              onChange={(event) => userNameHandler(event.target.value)}
            />
          </label>
          <label className="block pt-3 relative">
            <input
              type={eye}
              placeholder="*****"
              className="block w-full px-3 py-2 bg-white border
              border-slate-300 rounded-lg text-sm shadow-sm
              placeholder-slate-400
              focus:outline-none focus:border-violet-500 focus:ring-1
              focus:ring-violet-500 invalid:border-pink-500 invalid:text-pink-600"
              onChange={(e) => passwordHandler(e.target.value)}
            />
            {eye === "name" ? (
              <BsEye
                className="absolute top-1/2 right-2 cursor-pointer z-10 text-slate-400"
                onClick={eyeHandler}
              />
            ) : (
              <i>
                <BsEyeSlash
                  className="absolute top-1/2 right-2 cursor-pointer z-10 text-slate-400"
                  onClick={eyeHandler}
                />
              </i>
            )}
          </label>
        </form>
        <div className="pt-3 pb-10">
          <p className="text-left text-sm hover:text-violet-600 cursor-pointer">
            having trouble sign in ?
          </p>
        </div>
        <div className="pt-15 bg-violet-500 rounded-md hover:bg-violet-600">
          <button
            className="py-3 text-md text-white font-semibold w-full"
            onClick={() => signInHandler()}
          >
            sign in
          </button>
        </div>
        <div className="pt-4">
          <p className="text-sm text-gray-700">
            Don't have account ?
            <Link to={"/register"}>
              <span className="font-bold cursor-pointer"> register now</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};
export default Login;
