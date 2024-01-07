import Provider from "@/components/SignInProvider";
import { getProviders } from "next-auth/react";
import facebooklogo from "@/assets/facebooklogo.png";
import Image from "next/image";

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

  if (!authProviders) {
    // Handle the case where authProviders is null (no providers or an error)
    return <div>No providers available</div>;
  }

  // console.log(authProviders)
  const providersArray = Object.values(authProviders);

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-slate-800 relative">
      <h1 className="text-5xl text-white text-center font-bold">
        Welcome to Facebook
      </h1>
      <p className="font-semibold text-white text-sm">
        An online open-source communicating platform.
      </p>
      <Image
        src={facebooklogo}
        alt="Facebook"
        width={150}
        height={150}
        className="mt-2 object-contain"
      />
      <div className="flex items-center mt-3  w-full flex-col justify-center gap-3">
        {providersArray.map((provider) => (
          <Provider key={provider.id} id={provider.id} name={provider.name} />
        ))}
      </div>
      <h1 className ='absolute bottom-10 left-1/2 -translate-x-1/2 transform bg-gradient-to-r from-blue-300 via-blue-500 to-blue-300 text-xl  text-transparent bg-clip-text font-bold'>Adekola Adedeji</h1>
    </div>
  );
}

export default SignInPage;
