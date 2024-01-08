import Header from "@/components/Header";
import MainFeedSection from "@/components/MainFeedSection";
import Sidebar from "@/components/Sidebar";
import CreatePostModal from "@/components/CreatePostModal";
import { Toaster } from "react-hot-toast";
import Widgets from "@/components/Widgets";

function Facebook() {
  return (
    <main className="flex relative bg-gray-100 overflow-hidden h-screen flex-col">
      <Header />
      <div className="w-full mt-12 overflow-hidden flex justify-between md:px-2 relative">
        <Sidebar />
        <MainFeedSection />
        <Widgets />
      </div>
      <CreatePostModal />
      <Toaster />
    </main>
  );
}

export default Facebook;
