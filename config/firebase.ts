
import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAcZwoKB3lDjmDP9igW7NAaEWSs8LUfbGc",
  authDomain: "facebook-clone-build-7586b.firebaseapp.com",
  projectId: "facebook-clone-build-7586b",
  storageBucket: "facebook-clone-build-7586b.appspot.com",
  messagingSenderId: "1025951340309",
  appId: "1:1025951340309:web:92694a300c046173cd7b1c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const storage = getStorage(app)

export {storage, db}
export const PostsCollectionRef = collection(db, 'facebook-posts')