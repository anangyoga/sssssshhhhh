import { auth, provider } from "../firebase-config";
import { signInWithPopup, signOut } from "firebase/auth";
import Cookies from "universal-cookie";
import { useNavigate } from "react-router-dom";

const cookies = new Cookies();

const Navbar = ({ isAuth, setIsAuth }) => {
  const navigate = useNavigate();

  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      cookies.set("authentication-token", result.user.refreshToken);
      setIsAuth(true);
      navigate("/admin");
    } catch (error) {
      console.log(error);
    }
  };

  const singOutAdmin = async () => {
    await signOut(auth);
    cookies.remove("authentication-token");
    setIsAuth(false);
    navigate("/");
  };

  return (
    <nav className="flex sm:justify-end justify-center bg-green-400 py-2">
      <div className="mr-10 flex gap-x-5 text-sm text-white font-semibold">
        {isAuth ? (
          <button onClick={singOutAdmin} className="bg-white/40 rounded-sm px-2 py-1 hover:opacity-80">
            Log Out
          </button>
        ) : (
          <button onClick={signInWithGoogle} className="bg-white/40 rounded-sm px-2 py-1 hover:opacity-80">
            Log In
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
