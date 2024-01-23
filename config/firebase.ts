
import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const apiKey = process.env.FIREBASE_API_KEY!
const appId = process.env.FIREBASE_APP_ID!

const firebaseConfig = {
  apiKey,
  authDomain: "instagram---facebook---twitter.firebaseapp.com",
  projectId: "instagram---facebook---twitter",
  storageBucket: "instagram---facebook---twitter.appspot.com",
  messagingSenderId: "544640961165",
  appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const storage = getStorage(app)

export {storage, db}
export const PostsCollectionRef = collection(db, 'facebook-posts')