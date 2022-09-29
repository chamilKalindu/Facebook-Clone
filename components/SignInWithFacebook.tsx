import React from "react";
import LockPersonIcon from "@mui/icons-material/LockPerson";
import { useSignInWithFacebook } from "react-firebase-hooks/auth";
import { auth } from "../firebase/firebase";

type SignInWithFacebookProps = {};

const SignInWithFacebook: React.FC<SignInWithFacebookProps> = () => {
  const [signInWithFacebook, user, loading, error] =
    useSignInWithFacebook(auth);

  return (
    <>
      <button
        onClick={() => signInWithFacebook()}
        className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-xl font-medium rounded-md text-white bg-blue-600 hover:bg-blue-300 hover:text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-50"
      >
        <LockPersonIcon className="mr-auto mt-auto mb-auto" />
        <img
          className="w-6 h-6 mt-auto mb-auto mr-5"
          src="https://crackberry.com/sites/crackberry.com/files/styles/large/public/topic_images/2013/facebook-logo-3.png?itok=Qp_qZi2a"
          alt=""
        />
        <p className="mr-auto">Sign with Facebook</p>
      </button>
    </>
  );
};
export default SignInWithFacebook;
