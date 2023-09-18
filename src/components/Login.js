import React from "react";
import Header from "./Header";

export default function Login() {
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
        //   onSubmit={(e) => e.preventDefault()}
      >
        <h2 className=" p-2 my-2 font-bold text-3xl">Sign In</h2>

        {/* {!signIn && ( */}
        <input
          // ref={fname}
          type="name"
          placeholder="Enter Your name"
          className="p-2 m-2 w-full bg-gray-700"
        />
        {/* )} */}

        <input
          //  ref={Email}
          type="email"
          placeholder="Enter Your Email"
          className="p-2 m-2 w-full bg-gray-700"
        />

        <input
          //  ref={Password}
          type="password"
          placeholder="Enter Your Password"
          className=" p-2 m-2 w-full bg-gray-700"
        />
        <p className="text-red-500 font-bold text-lg py-2 ml-3">
          {/* {errorMessage} */}
        </p>

        <button
          className="w-full bg-[#c11119] p-2 my-4 rounded-lg"
          //  onClick={validateData}
        >
          Sign In
        </button>
        <p
          className="ml-3 py-2 cursor-pointer"
          //   onClick={signInTogler}
        >
          New User
        </p>
      </form>
    </>
  );
}
