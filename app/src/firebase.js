  import { initializeApp } from "firebase/app";
  /*import { getFirestore, collection, addDoc } from "firebase/firestore";*/
  import router from "./router";
  import { getAuth, signInWithEmailAndPassword, /*signOut, */createUserWithEmailAndPassword } from "firebase/auth";

 const config = {
    apiKey: "AIzaSyDju36AW4Iilq7HQCBTTHACK0XS5lS4Q_o",
    authDomain: "morning-app-vue.firebaseapp.com",
    projectId: "morning-app-vue",
    storageBucket: "morning-app-vue.appspot.com",
    messagingSenderId: "643434194954",
    appId: "1:643434194954:web:972084e0fdde639e5997f3",
    measurementId: "G-TENNEWV87P"
  };

  initializeApp(config)
  /*const db = getFirestore(firebaseApp);
  const usersCollection = collection(db, 'users');*/

  const auth = getAuth();
  /*const user = auth.currentUser;
  if (user !== null) {
    const displayName = user.displayName;
  }*/

  export const createUser = (email, password) =>{
    return createUserWithEmailAndPassword(auth, email, password)
    .then(
      function() {
        router.push({ path: '/login' })
      })
  } 

  export const signIn = (email, password) =>{
    return signInWithEmailAndPassword(auth, email, password)
    .then(
      function() {
        router.push({ path: '/' })
      })
  } 

  /*.then((userCredential) => {
    const user = userCredential.user;
    router.push({ path: '/' });
  })
  .catch((error) => {
    console.log(error + ' ошибка при входе')
  });*/

  /*export const createUser = user => {
    router.push({ path: '/' });
    return addDoc(usersCollection, user)
  }-*

  const auth = getAuth();

  /*signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
    const user = userCredential.user;
  })
  .catch((error) => {
    console.log('ошибка при входе')
  });

  signOut(auth).then(() => {
    console.log('logout done')
  }).catch((error) => {
    console.log('ошибка при выходе')
  });*/