import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {
  doc,
  enableIndexedDbPersistence,
  getDoc,
  getFirestore,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCIUDfBCyPaKQVsv6Fp2CNhT1RLS8ia-N8",
  authDomain: "dolarve-755d1.firebaseapp.com",
  projectId: "dolarve-755d1",
  storageBucket: "dolarve-755d1.appspot.com",
  messagingSenderId: "450610095535",
  appId: "1:450610095535:web:f1b40d8848628c0c233b5a",
  measurementId: "G-684VWVS9DC",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

enableIndexedDbPersistence(db).catch((err) => {
  if (err.code === "failed-precondition") {
    console.log(err.code);
    // Multiple tabs open, persistence can only be enabled
    // in one tab at a a time.
    // ...
  } else if (err.code === "unimplemented") {
    console.log(err.code);
    // The current browser does not support all of the
    // features required to enable persistence
    // ...
  }
});

export async function getDocSnap(uid) {
  const docRef = doc(db, "users", uid);
  const docSnap = await getDoc(docRef);

  return { docRef, docSnap };
}

// Subsequent queries will use persistence, if it was enabled successfully

export default app;
