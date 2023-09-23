import React, { useEffect, useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";

export default function Login() {
  const [isSignInForm, setSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(true);

  const toggleSignInForm = () => {
    setSignInForm(!isSignInForm);
  };

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    //validation
    const message = checkValidData(
      name.current.value,
      email.current.value,
      password.current.value
    );
    setErrorMessage(message);
    //sign and sign up
  };

  return (
    <>
      <Header />
      <div className="fixed z-1 opacity-9">
        <img
          className="h-fit"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/dc1cf82d-97c9-409f-b7c8-6ac1718946d6/14a8fe85-b6f4-4c06-8eaf-eccf3276d557/IN-en-20230911-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="video-web"
        />
      </div>
      <form
        className=" fixed p-12 bg-gray-900 opacity-80 w-full md:w-3/12 my-32 mx-auto left-0 right-0 text-white"
        onSubmit={(e) => e.preventDefault()}
      >
        <h2 className=" p-2 my-2 font-bold text-3xl">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h2>

        {!isSignInForm && (
          <input
            ref={name}
            type="name"
            placeholder="Enter Your name"
            className="p-2 m-2 w-full bg-gray-700"
          />
        )}

        <input
          ref={email}
          type="email"
          placeholder="Enter Your Email"
          className="p-2 m-2 w-full bg-gray-700"
        />

        <input
          ref={password}
          type="password"
          placeholder="Enter Your Password"
          className=" p-2 m-2 w-full bg-gray-700"
        />
        <p className="text-red-500 font-bold text-lg py-2 ml-3">
          {errorMessage}
        </p>

        <button
          className="w-full bg-[#c11119] p-2 my-4 rounded-lg"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="ml-3 py-2 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New User? Sign Up Now"
            : "Already Registered? Sign In Now"}
        </p>
      </form>
    </>
  );
}
