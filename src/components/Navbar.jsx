import { auth, provider } from "../firebase-config";
import { signInWithPopup } from "firebase/auth";
import Cookies from "universal-cookie";

const cookies = new Cookies();

const Navbar = ({ setIsAuth }) => {
  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      cookies.set("authentication-token", result.user.refreshToken);
      setIsAuth(true);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <nav className="flex sm:justify-end justify-center bg-green-400 py-2">
      <div className="mr-10 flex gap-x-5 text-sm text-white font-semibold">
        <button onClick={signInWithGoogle} className="bg-white/40 rounded-sm px-2 py-1 hover:opacity-80">
          Log In
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
