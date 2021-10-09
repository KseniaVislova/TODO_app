import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import router from "./router";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

const config = {
  apiKey: "AIzaSyDju36AW4Iilq7HQCBTTHACK0XS5lS4Q_o",
  authDomain: "morning-app-vue.firebaseapp.com",
  projectId: "morning-app-vue",
  storageBucket: "morning-app-vue.appspot.com",
  messagingSenderId: "643434194954",
  appId: "1:643434194954:web:972084e0fdde639e5997f3",
  measurementId: "G-TENNEWV87P",
};

const firebaseApp = initializeApp(config);
export const db = getFirestore(firebaseApp);
export const usersCollection = collection(db, "users");
export const newsCollection = collection(db, "news");
export const todosCollection = collection(db, "todos");

export const auth = getAuth();

export const createUser = (email, password, name) => {
  return createUserWithEmailAndPassword(auth, email, password).then(
    function () {
      addDoc(usersCollection, {
        userId: new Date().getTime(),
        name,
        email,
        todos: [],
      });
      router.push({ path: "/login" });
    }
  );
};

export const signIn = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password).then(function () {
    router.push({ path: "/todos" });
  });
};
