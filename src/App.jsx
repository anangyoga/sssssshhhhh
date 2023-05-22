import { useState } from "react";
import Dashboard from "./components/Dashboard";
import Homepage from "./components/Homepage";
import Navbar from "./components/Navbar";
import Cookies from "universal-cookie";

const cookies = new Cookies();

const App = () => {
  const [isAuth, setIsAuth] = useState(cookies.get("authentication-token"));

  return (
    <main>
      <Navbar setIsAuth={setIsAuth} />
      {!isAuth ? <Homepage /> : <Dashboard />}
    </main>
  );
};

export default App;
