import React from "react";
import { Link } from "react-router-dom";
import { SignupComponent } from "../components/index";
const Signup = () => {
  return (
    <>
      <div className="min-h-min my-20">
        <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center">
          {/* left side */}
          <div className="flex-1">
            <Link to="/signup" className="text-4xl font-bold">
              <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
                READ
              </span>
              BLOGS
            </Link>
            <p className="mt-5 text-sm">
              Welcome to our blog app, where inspiration meets convenience.
            </p>
          </div>
          {/*  right side */}
          <div className="flex-1 md:mt-0 mt-5">
            <SignupComponent />
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
