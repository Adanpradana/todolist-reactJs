import axios from "axios";
import { useState } from "react";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Login = () => {
  const [eye, setEye] = useState("password");
  const eyeHandler = () => {
    eye === "name" ? setEye("password") : setEye("name");
  };
  const [user_name, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [disableButton, setDisableButton] = useState(false);

  const userNameHandler = (userNameInput) => {
    setUserName(userNameInput);
  };
  const passwordHandler = (passwordInput) => {
    setPassword(passwordInput);
  };

  const navigate = useNavigate();
  const signInHandler = (e) => {
    e.preventDefault();
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
        setSuccess(res.data.message);
        localStorage.setItem("name", res.data.result.user_name);
        localStorage.setItem("id", res.data.result.id);
        if (res) {
          toast.success(res.data.message, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          navigate("/todolist");
        }
      })
      .catch((error) =>
        toast.error(error.response.data.message, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        })
      )
      .finally(() => setLoading(true));
  };
  return (
    <div className="xxl:container bg-neutral-400  px-10 m-auto flex justify-center items-center l h-screen ">
      <div>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </div>
      <div className="container bg-white max-w-lg text-center p-10 rounded-xl ">
        <div className="pb-5">
          <h1 className="font-bold text-3xl pb-5">User Login</h1>
          <p className="leading-relaxed">
            Create something special today, we help you create new habbit
          </p>
        </div>
        <form action="" onSubmit={(e) => signInHandler(e)}>
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
          <div className="pt-3 pb-10">
            <p className="text-left text-sm hover:text-violet-600 cursor-pointer">
              having trouble sign in ?
            </p>
          </div>
          <div className="pt-15  flex-col items-center justify-center">
            {user_name === "" || password === "" ? (
              <button
                disabled
                type="submit"
                className="py-3 text-md disabled:text-slate-400   font-semibold w-full disabled:bg-slate-300 rounded-lg "
              >
                sign in
              </button>
            ) : (
              <button
                type="submit"
                className="py-3 text-md text-white bg-violet-600 hover:bg-violet-400 font-semibold w-full rounded-lg "
              >
                sign in
              </button>
            )}
          </div>
        </form>
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
