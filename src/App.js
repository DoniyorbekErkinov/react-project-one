import MainPage from "./pages/MainPage";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Game from "./pages/Game/Game";
import Page404 from "./pages/error/page404";
import Navbar from "./pages/NavBar/Navbar";
export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Game />}></Route>
        <Route path="posts" element={<MainPage />}></Route>
        <Route path='404' element={<Page404/>} ></Route>
          <Route path="*" element={<Navigate to="404" replace={true}/>} />
      </Routes>
    </Router>
  );
}
