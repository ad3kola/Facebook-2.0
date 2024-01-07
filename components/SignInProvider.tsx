'use client'
import facebookSignIn from "@/assets/facebook-sign-in.png";
import googleSignIn from "@/assets/google-sign-in.png";
import { signIn } from "next-auth/react";
import Image from "next/image";

function SignInProvider({id, name }: { id:string, name: string }) {

    const handleSignIn = () => {
       signIn(id.toLowerCase()); // Use lowercase for case-insensitivity
    };

  return (

        <div onClick={handleSignIn} className="cursor-pointer hover:scale-105 duration-100 w-80 py-5 rounded-md bg-white text-slate-900 font-medium text-xl flex items-center space-x-5 px-5 justify-center">
        {name.toLowerCase() === "google" && (
          <Image
            src={googleSignIn}
            alt={name}
            width={30}
            height={30}
            className="object-cover"
          />
        )}
        {name.toLowerCase() === "facebook" && (
          <Image
            src={facebookSignIn}
            alt={name}
            width={15}
            height={15}
            className="object-contain"
          />
        )}
          <h2>Continue with {name}</h2>
        </div>
  );
}

export default SignInProvider;
