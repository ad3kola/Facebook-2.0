import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";
import Facebook from "@/components/Facebook";

export default async function Home() {
  const session = await getServerSession();
  
  if (!session) {
    redirect('api/auth/signin')
  }

  return <><Facebook /> 
  </>;
}
