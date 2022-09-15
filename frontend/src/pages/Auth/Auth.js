import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginuser } from "../../Reducers/userSlice";

function Auth() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const temp = {
    email: email,
    password: password,
  };

  const loginHandler = (e) => {
    e.preventDefault();
    // console.log(temp);
    dispatch(loginuser(temp));
  };

  return (
    <div className="absolute top-1/3 left-1/3">
      <form
        onSubmit={loginHandler}
        className="flex flex-col h-fit md:bg-slate-700 w-[24em] rounded-md shadow-2xl tracking-wider"
      >
        <div className="flex flex-col p-7 mt-10">
          <label htmlFor="login-email" className="text-slate-200 ml-1 ">
            Email
          </label>
          <input
            required
            type="email"
            id="login-email"
            placeholder="johndoe@example.com"
            value={email}
            className="bg-slate-500 rounded-md h-12 p-2 my-2"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="flex flex-col px-7 ">
          <label htmlFor="login-password" className="text-slate-200 ml-1">
            Password
          </label>
          <input
            type="password"
            required
            minLength="6"
            id="login-password"
            placeholder="A strong one please"
            value={password}
            className="bg-slate-500 rounded-md h-12 p-2 my-2"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="flex flex-col px-7 mt-7">
          <button
            type="submit"
            className="flex justify-center content-center bg-slate-800 h-12 text-slate-200 rounded-md pt-2 text-xl mb-10"
          >
            Login / Register
          </button>
        </div>
      </form>
    </div>
  );
}

export default Auth;
