import Provider from "@/components/SignInProvider";
import { getProviders } from "next-auth/react";
import facebooklogo from "@/assets/facebooklogo.png";
import Image from "next/image";
import Link from "next/link";
import { getServerSession } from "next-auth";
import { FaceSmileIcon } from "@heroicons/react/24/outline";
import { ArrowDownIcon } from "@heroicons/react/24/solid";

interface ProviderProps {
  id: string;
  name: string;
  type: string;
  callbackUrl: string;
  signinUrl: string;
}

interface AuthProvidersProps {
  google: ProviderProps;
  facebook: ProviderProps;
}

async function SignInPage() {
  const authProviders: AuthProvidersProps | null = await getProviders();
  const session = await getServerSession();

  if (!authProviders) {
    // Handle the case where authProviders is null (no providers or an error)
    return <div className ='min-w-lg min-h-lg bg-black rounded-lg  flex flex-col justify-center p-5 text-white'>
    <h1 className="text-white text-center w-full underline">No Providers Available</h1>
    <div className ='*:text-white font-semibold text-lg'>Pls Contact <span className ='animate-bounce underline font-bold uppercase'>Adekola Adedeji</span> through 
    <p>Whatsapp: +234-91-455-2201</p> 
    <p>Email: adedejiadekola07@gmail.com</p>       
       </div>
       <h2>Thank You <FaceSmileIcon className ='w-9 h-9 text-white'/></h2>
      </div>;
  }

  // console.log(authProviders)
  const providersArray = Object.values(authProviders);

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-slate-800 relative">
      {session && (
        <h1 className="absolute min-w-full text-center left-1/2 -translate-x-1/2 transform top-10 text-white text-xs sm:text-sm font-normal">
          <Link href={"/"} className="underline cursor-pointer">
            Click here
          </Link>{" "}
          if you were not redirected to Facebook
        </h1>
      )}
      <h1 className="text-3xl sm:text-5xl whitespace-nowwap  text-blue-100 text-center font-semibold">
        Welcome to Facebook
      </h1>
      <p className="mt-2 max-w-md font-semibold text-blue-200  text-sm tracking-wider text-center">
        An online open-source communicating platform. Discover trending topics and happenings all around the world all in one place.
      </p>
      <Image
        src={facebooklogo}
        alt="Facebook"
        width={130}
        height={130}
        className="mt-2 object-contain hover:scale-105 duration-700 cursor-pointer hover:rotate-[360deg] ease-in-out transition-transform"
      />
      <h3 className ='mt-2 bg-gradient-to-r from-blue-300 font-medium text-base via-blue-600 to-blue-300 bg-clip-text text-transparent'><ArrowDownIcon  className ='text-blue-500 animate-bounce  h-5 w-5 inline-flex' /> Please sign in <ArrowDownIcon  className ='text-blue-500 animate-bounce  h-5 w-5 inline-flex' /></h3>
      <div className="flex items-center mt-3  w-full flex-col justify-center gap-3">
        {providersArray.map((provider) => (
          <Provider key={provider.id} id={provider.id} name={provider.name} />
        ))}
      </div>
      <h1 className="absolute bottom-10 left-1/2 -translate-x-1/2 transform bg-gradient-to-r from-blue-300 via-blue-500 to-blue-300 text-xl  text-transparent bg-clip-text font-bold">
        Adekola Adedeji
      </h1>
    </div>
  );
}

export default SignInPage;
