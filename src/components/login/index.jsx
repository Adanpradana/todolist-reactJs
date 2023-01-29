import { ToastContainer, toast } from "react-toastify";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";
import { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const Login = () => {
  const [user_name, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [eye, setEye] = useState("password");
  const navigate = useNavigate();

  const eyeHandler = () => {
    eye === "name" ? setEye("password") : setEye("name");
  };

  const userNameHandler = (userNameInput) => {
    setUserName(userNameInput);
  };

  const passwordHandler = (passwordInput) => {
    setPassword(passwordInput);
  };

  const signInHandler = async (e) => {
    setLoading(true);
    e.preventDefault();
    const dataInput = {
      user_name,
      password,
    };
    await axios({
      method: "POST",
      url: `${process.env.REACT_APP_BASEURL}/users/login`,
      data: dataInput,
    })
      .then((res) => {
        localStorage.setItem("name", res.data.result.user_name);
        localStorage.setItem("id", res.data.result.id);
        navigate("/todolist");
      })
      .catch((error) => {
        toast.error(error.response.data.message, {
          position: "top-center",
          autoClose: 1100,
          hideProgressBar: true,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: false,
          progress: undefined,
          theme: "colored",
        });
      })
      .finally(() => setLoading(false));
  };
  return (
    <div className="xxl:container bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-400  px-10 m-auto flex justify-center items-center l h-screen ">
      <div>
        <ToastContainer
          position="top-center"
          autoClose={1100}
          hideProgressBar
          newestOnTop
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable={false}
          pauseOnHover
          theme="colored"
          id
        />
      </div>
      <div className="container bg-white max-w-lg text-center p-10 rounded-xl shadow-lg">
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
            <div>
              <button
                type="submit"
                className="h-[48px] flex items-center disabled:bg-slate-300 disabled:text-slate-400 justify-center py-3 text-md text-white bg-violet-500 hover:bg-violet-600 font-semibold w-full rounded-lg "
                disabled={user_name === "" || password === ""}
              >
                {loading ? (
                  <ThreeDots
                    height="30"
                    width="40"
                    radius="9"
                    color="#ffffff"
                    ariaLabel="three-dots-loading"
                    wrapperStyle={{}}
                    wrapperClassName="p-0"
                    visible={true}
                  />
                ) : (
                  "sign in"
                )}
              </button>
            </div>
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
