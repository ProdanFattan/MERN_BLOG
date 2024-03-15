import { Button } from "flowbite-react";
import React from "react";
import { FaGoogle } from "react-icons/fa";
import { GoogleAuthProvider, signInWithPopup, getAuth } from "firebase/auth";
import { app } from "../FIREBASE/firebase.config";
import { signInFailure, signInStart, signInSuccess } from "../redux/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const GoogleOauth = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleGooleClick = async () => {
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({ prompt: "select_account" });
    try {
      const resultsFromGoogle = await signInWithPopup(auth, provider);
      const res = await fetch("/api/v1/auth/google", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: resultsFromGoogle.user?.displayName || "",
          email: resultsFromGoogle.user?.email || "",
          googlePhotoUrl: resultsFromGoogle.user?.photoURL || "",
        }),
      });
      const data = await res.json();
      if (data.success === false) {
        dispatch(signInFailure(data.message));
      } else {
        dispatch(signInSuccess(data));
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Button
        type="button"
        gradientDuoTone="pinkToOrange"
        outline
        className="w-full"
        onClick={handleGooleClick}
      >
        <FaGoogle className="w-4 h-4 mr-2 text-black dark:text-white" />
        <span>Continue with Google</span>
      </Button>
    </>
  );
};

export default GoogleOauth;
