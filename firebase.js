
import { initializeApp } from "firebase/app";
import { getFirestore , collection} from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDen43VNL6T_OKVjMnOxJ_xVOK0KQWYItA",
  authDomain: "realtime-database-80e2c.firebaseapp.com",
  databaseURL: "https://realtime-database-80e2c-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "realtime-database-80e2c",
  storageBucket: "realtime-database-80e2c.appspot.com",
  messagingSenderId: "333960745214",
  appId: "1:333960745214:web:e988e76df565f26f8455af"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const notesCollection = collection(db,"notes")