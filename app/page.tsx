import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";
import SignInPage from "@/components/SignInPage";
import Facebook from "@/components/Facebook";

export default async function Home() {
  const session = await getServerSession();
  
  if (!session) {
    redirect('/auth/signin')
  }

  return <><Facebook /> 
  {/* : <SignInPage /> */}
  </>;
}
