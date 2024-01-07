"use client";
import { useEffect, useState } from "react";
import { onSnapshot, orderBy, query } from "firebase/firestore";
import { PostsCollectionRef } from "@/config/firebase";
import Post from "./Post";
import Skeleton from "./Skeleton";

interface PostData {
  id: string;
  inputmessage: string;
  name: string;
  email: string;
  profileimage: string;
  postimage: string;
  createdAt: any;
}

function PostsSection() {
  const [posts, setPosts] = useState<PostData[]>([]);

  useEffect(() => {
    onSnapshot(
      query(PostsCollectionRef, orderBy("createdAt", "desc")),
      (snapshot) =>
        setPosts(
          snapshot.docs.map(
            (doc) => ({ id: doc.id, ...doc.data() } as PostData)
          )
        )
    );
  }, []);

  return (
    <section className="w-full h-full mt-1">
      {posts.length == 0 ? (
        <div className ='flex flex-col w-full gap-4 mt-3'>
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
        </div>
      ) : (
        <div className="flex flex-col items-center py-2 gap-3">
          {posts.map((post, indx) => (
            <Post
              key={indx}
              id={post.id}
              message={post.inputmessage}
              username={post.name}
              useremail={post.email}
              userprofileimage={post.profileimage}
              postimage={post.postimage}
              createdAt={post.createdAt}
            />
          ))}
        </div>
      )}
    </section>
  );
}

export default PostsSection;
