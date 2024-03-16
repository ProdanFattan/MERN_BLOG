import React from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { Input } from "../index";
import { Button } from "flowbite-react";

const DashProfile = () => {
  const { register, handleSubmit, errors } = useForm();
  const { currentUser } = useSelector((state) => state.user);
  return (
    <>
      <div className="max-w-lg mx-auto p-3 w-full">
        <h1 className="my-7 text-center font-semibold text-3xl">Profile</h1>
        <form className="flex flex-col gap-4">
          <div className="w-32 h-32 self-center cursor-pointer shadow-md overflow-hidden rounded-full">
            <img
              src={currentUser.profilePicture}
              alt="user"
              className="rounded-full w-full h-full object-cover border-8 border-[lightgray]"
            />
          </div>
          <Input
            label="Full Name: "
            placeholder="Enter your full name"
            defaultValue={currentUser.username}
            {...register("username", {
              required: true,
            })}
          />
          <Input
            label="Email: "
            placeholder="name@company.com"
            type="email"
            defaultValue={currentUser.email}
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
          <Button type="submit" gradientDuoTone="purpleToBlue" outline>
            Update
          </Button>
        </form>
        <div className="text-red-500 flex justify-between mt-4">
          <span className="cursor-pointer">Delete Account</span>
          <span className="cursor-pointer">Sign Out</span>
        </div>
      </div>
    </>
  );
};

export default DashProfile;
