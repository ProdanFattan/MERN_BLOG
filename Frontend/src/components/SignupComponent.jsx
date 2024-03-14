import React, { useState } from "react";
import { Alert, Button, Spinner } from "flowbite-react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { Input } from "../components/index";

const SignupComponent = () => {
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const createAccount = async (formData) => {
    try {
      setError("");
      setLoading(true);
      const res = await fetch("/api/v1/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        return setError(data.message);
      } else {
        navigate("/");
      }
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
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
