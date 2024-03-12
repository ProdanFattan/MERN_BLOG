import React from "react";
import { Button } from "flowbite-react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { Input } from "../components/index";

const SignupComponent = () => {
  const { register, handleSubmit } = useForm();
  return (
    <>
      <form>
        <div className="space-y-5">
          <Input
            label="Full Name: "
            placeholder="Enter your full name"
            {...register("name", {
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
          >
            Create Account
          </Button>
        </div>
      </form>
      <div className="mt-5 flex gap-2 text-sm">
        <span>Already have an account?</span>
        <Link to="/signin" className="text-blue-500 font-semibold">
          Sign In
        </Link>
      </div>
    </>
  );
};

export default SignupComponent;
