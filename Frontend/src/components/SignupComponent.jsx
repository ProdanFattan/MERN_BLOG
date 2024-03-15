import React, { useState } from "react";
import { Alert, Button, Spinner } from "flowbite-react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { Input, GoogleOauth } from "../components/index";
import { signInFailure, signInStart, signInSuccess } from "../redux/userSlice";
import { useDispatch, useSelector } from "react-redux";

const SignupComponent = () => {
  const { register, handleSubmit } = useForm();
  const { loading, error } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const createAccount = async (formData) => {
    try {
      dispatch(signInStart());
      const res = await fetch("/api/v1/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        dispatch(signInFailure(data.message));
      } else {
        dispatch(signInSuccess(data));
        navigate("/Signin");
      }
    } catch (error) {
      dispatch(signInFailure(data.message));
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit(createAccount)}>
        <div className="space-y-5">
          <Input
            label="Full Name: "
            placeholder="Enter your full name"
            {...register("username", {
              required: true,
            })}
          />
          <Input
            label="Email: "
            placeholder="name@company.com"
            type="email"
            {...register("email", {
              required: true,
              validate: {
                matchPatern: (value) =>
                  /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                  "Email address must be a valid address",
              },
            })}
          />
          <Input
            label="Password: "
            type="password"
            placeholder="Password"
            {...register("password", {
              required: true,
            })}
          />
          <Button
            type="submit"
            className="w-full"
            gradientDuoTone="purpleToPink"
            disabled={loading}
          >
            {loading ? (
              <>
                <Spinner size="sm" />
                <span className="pl-3">Creating Account</span>
              </>
            ) : (
              "Create Account"
            )}
          </Button>
          <GoogleOauth />
        </div>
      </form>
      <div className="mt-5 flex gap-2 text-sm">
        <span>Already have an account?</span>
        <Link to="/signin" className="text-blue-500 font-semibold">
          Sign In
        </Link>
      </div>
      {error && (
        <Alert className="mt-5" color="failure">
          {error}
        </Alert>
      )}
    </>
  );
};

export default SignupComponent;
