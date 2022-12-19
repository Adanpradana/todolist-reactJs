import { BsEye, BsEyeSlash } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Alert } from "./Alert";
import axios from "axios";
const Register = () => {
  const [eye, setEye] = useState("password");
  const eyeHandler = () => {
    eye === "name" ? setEye("password") : setEye("name");
  };
  const [user_name, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [role, setrole] = useState("");
  const [alertMessage, setAlertMessage] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const userNameHandler = (userNameInput) => {
    setUserName(userNameInput);
  };
  const passwordHandler = (passwordInput) => {
    setPassword(passwordInput);
  };
  const emailHandler = (emailInput) => {
    setEmail(emailInput);
  };
  const roleHandler = (roleInput) => {
    setrole(roleInput);
  };

  const registerHandler = () => {
    const dataInput = {
      user_name,
      email,
      role,
      password,
    };
    axios({
      method: "POST",
      url: "http://localhost:3310/users",
      data: dataInput,
    }).then((res) => setAlertMessage(res.data.message));

    if (alertMessage) {
      setShowAlert(true);
      setTimeout(() => {
        setShowAlert(false);
      }, 1500);
      return;
    }
  };
  return (
    <div className="xxl:container bg-neutral-400  px-10 m-auto flex justify-center items-center l h-screen ">
      <div className="container bg-white max-w-lg text-center p-10 rounded-xl ">
        <div className="pb-5">
          <h1 className="font-bold text-3xl pb-5">Register</h1>
          <p className="leading-relaxed">Create account to reach todolist</p>
        </div>
        <form action="" onSubmit={() => registerHandler()}>
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
            />
          </label>
          <label className="block pt-3">
            <input
              type="Role"
              placeholder="Role"
              className="block w-full px-3 py-2 bg-white border
                   border-slate-300 rounded-lg text-sm shadow-sm
                    placeholder-slate-400
                  focus:outline-none focus:border-violet-500 focus:ring-1
                  focus:ring-violet-500 invalid:border-pink-500 invalid:text-pink-600
                  focus:invalid:border-pink-500 focus:invalid:ring-pink-500
                    "
              onChange={(event) => roleHandler(event.target.value)}
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
          <p className="text-left text-sm  ">
            having trouble register ?
            <span className="font-bold cursor-pointer hover:text-violet-600 ">
              contact us
            </span>
          </p>
        </div>
        <div className="pt-15 bg-violet-500 rounded-md hover:bg-violet-600">
          <button className="py-3 text-md text-white font-semibold w-full">
            register now
          </button>
        </div>
        <div className="pt-4">
          <p className="text-sm text-gray-700">
            please
            <Link to={"/login"}>
              <span className="font-bold cursor-pointer hover:text-violet-500">
                {" "}
                Login{" "}
              </span>
            </Link>
            to continue
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
