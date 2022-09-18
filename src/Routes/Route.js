import Game from "../pages/Game/Game";
import MainPage from "../pages/MainPage";
import Login from "../pages/Login/Login"
export const privateRoutes = [
    {path: "/games", element: <Game/>, exact: true},
    {path: "/", element: <MainPage/>, exact: true}
]
export const publicRoutes = [
    {path: "/login", element: <Login/>, exact: true},   
]
