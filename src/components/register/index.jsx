import { BsEye, BsEyeSlash } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ThreeDots } from "react-loader-spinner";

const Register = () => {
  const [eye, setEye] = useState("password");
  const eyeHandler = () => {
    eye === "name" ? setEye("password") : setEye("name");
  };
  const [user_name, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const userNameHandler = (userNameInput) => {
    setUserName(userNameInput);
  };
  const passwordHandler = (passwordInput) => {
    setPassword(passwordInput);
  };
  const emailHandler = (emailInput) => {
    setEmail(emailInput);
  };

  const registerHandler = async (e) => {
    setLoading(true);
    e.preventDefault();
    const dataInput = {
      user_name,
      email,
      password,
    };
    await axios({
      method: "POST",
      url: `${process.env.REACT_APP_BASEURL}/users`,
      data: dataInput,
    })
      .then((res) => {
        if (res.status === 200) {
          toast.success(`${res.data.message}, please login to continue`, {
            position: "top-center",
            autoClose: 1100,
            hideProgressBar: true,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: false,
            progress: undefined,
            theme: "colored",
          });
        }
      })
      .catch((error) => {
        console.log(error.message);
      })
      .finally(() => {
        setUserName("");
        setEmail("");
        setPassword("");
        setLoading(false);
      });
  };
  return (
    <div className="xxl:container bg-neutral-400  px-10 m-auto flex justify-center items-center l h-screen ">
      <div className="container bg-white max-w-lg text-center p-10 rounded-xl ">
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
        />
        <div className="pb-5">
          <h1 className="font-bold text-3xl pb-5">Register</h1>
          <p className="leading-relaxed">Create account to reach todolist</p>
          <p className="text-[0.7rem] text-red-400">
            please use your fake email acc and enjoy !
          </p>
        </div>
        <form action="" onSubmit={(e) => registerHandler(e)}>
          <label className="block">
            <input
              type="Username"
              placeholder="Username"
              className="block w-full px-3 py-2 bg-white border
                   border-slate-300 rounded-lg text-sm shadow-sm
                    placeholder-slate-400
                  focus:outline-none focus:border-violet-500 focus:ring-1
                  focus:ring-violet-500 invalid:border-pink-500 invalid:text-pink-600
                  focus:invalid:border-pink-500 focus:invalid:ring-pink-500
                    "
              onChange={(event) => userNameHandler(event.target.value)}
              value={user_name}
              required
            />
          </label>
          <label className="block pt-3">
            <input
              type="Email"
              placeholder="Email"
              className="block w-full px-3 py-2 bg-white border
                   border-slate-300 rounded-lg text-sm shadow-sm
                    placeholder-slate-400
                  focus:outline-none focus:border-violet-500 focus:ring-1
                  focus:ring-violet-500 invalid:border-pink-500 invalid:text-pink-600
                  focus:invalid:border-pink-500 focus:invalid:ring-pink-500
                    "
              onChange={(event) => emailHandler(event.target.value)}
              value={email}
              required
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
                  focus:ring-violet-500 invalid:border-pink-500 invalid:text-pink-600
                  focus:invalid:border-pink-500 focus:invalid:ring-pink-500
                  "
              required
              onChange={(e) => passwordHandler(e.target.value)}
              value={password}
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
            <p className="text-left text-sm  ">
              having trouble register ?
              <span className="font-bold cursor-pointer hover:text-violet-600 ">
                contact us
              </span>
            </p>
          </div>
          <div className="pt-15 bg-violet-500 rounded-lg hover:bg-violet-600">
            <div>
              <button
                type="submit"
                className="h-[48px] flex items-center disabled:text-slate-400 disabled:bg-slate-300 justify-center py-3 text-md text-white bg-violet-500 hover:bg-violet-600 font-semibold w-full rounded-lg "
                disabled={user_name === "" && email === "" && password === ""}
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
                  "register"
                )}
              </button>
            </div>
          </div>
        </form>
        <div className="pt-4">
          <p className="text-sm text-gray-700">
            <Link to={"/login"}>
              go to{" "}
              <span className="font-bold cursor-pointer hover:text-violet-500">
                Login{" "}
              </span>
            </Link>
            page
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
