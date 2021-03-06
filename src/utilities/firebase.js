import { initializeApp } from "firebase/app";
import { getDatabase, onValue, ref, set } from "firebase/database";
import { useEffect, useState } from "react";
import {
  getAuth,
  GoogleAuthProvider,
  onIdTokenChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCZQ92pl4UHQsFbwy1mOTjLDeADZOwNANY",
  authDomain: "scheduler-1a96e.firebaseapp.com",
  databaseURL: "https://scheduler-1a96e-default-rtdb.firebaseio.com",
  projectId: "scheduler-1a96e",
  storageBucket: "scheduler-1a96e.appspot.com",
  messagingSenderId: "839408942325",
  appId: "1:839408942325:web:ffcfce84340e66a556d9bc",
  measurementId: "G-0ZV13BEJ7S",
};

const firebase = initializeApp(firebaseConfig);
const database = getDatabase(firebase);

const useData = (path, transform) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    const dbRef = ref(database, path);
    return onValue(
      dbRef,
      (snapshot) => {
        const val = snapshot.val();
        setData(transform ? transform(val) : val);
        setLoading(false);
        setError(null);
      },
      (error) => {
        setData(null);
        setLoading(false);
        setError(error);
      }
    );
  }, [path, transform]);

  return [data, loading, error];
};

const setData = (path, value) => set(ref(database, path), value);

const signInWithGoogle = () => {
  signInWithPopup(getAuth(firebase), new GoogleAuthProvider());
};

const signOutWithGoogle = () => {
  signOut(getAuth());
};

const useUserState = () => {
  const [user, setUser] = useState();

  useEffect(() => {
    onIdTokenChanged(getAuth(firebase), setUser);
  }, []);

  return [user];
};

export { signOutWithGoogle, signInWithGoogle, setData, useData, useUserState };
