import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
} from "react-router-dom";
import { AuthContext } from "./context";

import Navbar from "./pages/NavBar/Navbar";
import RouterApp from "./Routes/RouterApp";
export default function App() {
  const [isAuth, setIsAuth] = useState(false)
  useEffect(() => {
    if (localStorage.getItem('user')) {
      setIsAuth(true)
    }
  })
  return (
    <AuthContext.Provider value={{isAuth, setIsAuth}}>
    <Router>
      <Navbar />
      <RouterApp/>
    </Router>
    </AuthContext.Provider>
  );
}
