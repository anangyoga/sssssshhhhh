/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useContext, useEffect, useState } from "react";
import Cookies from "universal-cookie";
import { auth } from "../firebase-config";
import { onAuthStateChanged } from "firebase/auth";
import { db } from "../firebase-config";
import { collection, addDoc, serverTimestamp, query, orderBy, onSnapshot } from "firebase/firestore";

const DataContext = createContext();

const cookies = new Cookies();

export const DataProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(cookies.get("authentication-token"));
  const [isUserLoggedIn, setIsUserLoggedIn] = useState({});
  const [dataMessages, setDataMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");

  const databaseRef = collection(db, "messages");

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setIsUserLoggedIn(currentUser);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const queryDatabase = query(databaseRef, orderBy("createdAt", "desc"));
    const unsubscribe = onSnapshot(queryDatabase, (snapshot) => {
      let messages = [];
      snapshot.forEach((doc) => messages.push({ ...doc.data(), id: doc.id }));
      setDataMessages(messages);
    });
    return () => unsubscribe();
  }, []);

  const handleInput = async (e) => {
    e.preventDefault();

    if (inputMessage === "") return;

    try {
      setInputMessage("");

      await addDoc(databaseRef, {
        message: inputMessage.trim(),
        createdAt: serverTimestamp(),
      });
    } catch (error) {
      console.error(error);
    }
  };

  return <DataContext.Provider value={{ isAuth, setIsAuth, isUserLoggedIn, handleInput, dataMessages, inputMessage, setInputMessage }}>{children}</DataContext.Provider>;
};

export const StoreContext = () => {
  return useContext(DataContext);
};
