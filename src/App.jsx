import { useState } from "react";
import Dashboard from "./components/Dashboard";
import Homepage from "./components/Homepage";
import Navbar from "./components/Navbar";
import { auth, provider } from "./firebase-config";
import { signInWithPopup } from "firebase/auth";
import Cookies from "universal-cookie";

const cookies = new Cookies();

const App = () => {
  const [isAuth, setIsAuth] = useState(cookies.get("authentication-token"));

  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      cookies.set("authentication-token", result.user.refreshToken);
      setIsAuth(true);

      console.log("clicked log");
    } catch (error) {
      console.log(error);
    }
  };

  const signOut = async () => {
    await signOut(auth);
    console.log("clicked?");
    cookies.remove("authentication-token");
  };

  return (
    <main>
      <Navbar signInWithGoogle={signInWithGoogle} signOut={signOut} setIsAuth={setIsAuth} />
      {!isAuth ? <Homepage /> : <Dashboard />}
    </main>
  );
};

export default App;
