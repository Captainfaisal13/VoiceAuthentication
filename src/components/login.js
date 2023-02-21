import React, { useContext } from "react";
import { BiUser } from "react-icons/bi";
import { MdOutlineMailOutline, MdLockOutline } from "react-icons/md";
import { AppContext } from "../context";

const Login = () => {
  const { isNewUser, setIsNewUser, setShowPopup } = useContext(AppContext);
  return (
    <div className="px-5 sm:px-10 lg:px-24 flex flex-col justify-center">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setShowPopup(true);
        }}
        className="flex flex-col gap-4"
      >
        <div className="flex flex-col gap-1">
          <label className="block text-sm font-semibold" htmlFor="username">
            Your Email
          </label>
          <div className=" relative overflow-hidden">
            <MdOutlineMailOutline
              size={18}
              className="absolute top-4 left-3 text-[#929298]"
            ></MdOutlineMailOutline>
            <input
              className=" border text-xs focus:outline-none w-full pl-9 py-4 rounded-md"
              type="email"
              placeholder="Enter your email"
            />
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <label className="block text-sm font-semibold" htmlFor="username">
            Password
          </label>
          <div className=" relative overflow-hidden">
            <MdLockOutline
              size={18}
              className="absolute top-4 left-3 text-[#929298]"
            ></MdLockOutline>
            <input
              className=" border text-xs focus:outline-none w-full pl-9 py-4 rounded-md"
              type="password"
              placeholder="Enter your name"
            />
          </div>
        </div>
        <div className="flex gap-2">
          <input type="checkbox" className="accent-[#F4098A]" name="" id="" />
          <p className="text-xs font-semibold text-[#929298]">
            I agree to the{" "}
            <a href="#" className="text-[#F4098A]">
              Terms and Conditions
            </a>
          </p>
        </div>
        <button className="bg-[#F4098A] hover:bg-[#f40992] ease-in-out text-xs py-4 rounded-md font-bold text-white mt-2">
          Record Voice
        </button>
        <div className="mt-4">
          <p className="text-xs font-semibold text-[#929298] text-center">
            new user ?{" "}
            <a
              href="#"
              onClick={() => setIsNewUser(!isNewUser)}
              className="text-[#F4098A] underline"
            >
              Create Account
            </a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
