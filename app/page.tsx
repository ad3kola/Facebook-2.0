import Header from "@/components/Header";
import MainFeedSection from "@/components/MainFeedSection";
import Sidebar from "@/components/Sidebar";
import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";
import SignInPage from "@/components/SignInPage";
import CreatePostModal from "@/components/CreatePostModal";
import { Toaster } from "react-hot-toast";
import Widgets from "@/components/Widgets";
import { PostsCollectionRef } from "@/config/firebase";
import { getDocs, orderBy, query } from "firebase/firestore";

interface PostData {
  id: string;
  inputmessage: string;
  name: string;
  email: string;
  profileimage: string;
  postimage: string;
  createdAt: any;
}


export default async function Home() {
  const session = await getServerSession();

  return (
    <>
      {session ? (
        <main className="flex relative bg-gray-100 overflow-hidden h-screen flex-col">
          <Header />
          <div className="w-full mt-12 overflow-hidden flex justify-between md:px-2 relative">
            <Sidebar />
            <MainFeedSection  />
          <Widgets />
          </div>
          <CreatePostModal />
          <Toaster />        
          </main>
      ) : (
        <SignInPage />
      )}
    </>
  );
}
