import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyCEGIe11FwyEvTKdloujF4gP9r4ikzaODw",
  authDomain: "clone-3290d.firebaseapp.com",
  projectId: "clone-3290d",
  storageBucket: "clone-3290d.appspot.com",
  messagingSenderId: "989152616142",
  appId: "1:989152616142:web:7dde3d1315e0878c33fa9f",
  measurementId: "G-NKXVXCXED9",
};
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth();
const storage = getStorage(firebaseApp);
//const provider= new GoogleAuthProvider();
export { db, auth, storage };
