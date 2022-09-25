import Vides from "../pages/VideosList/VideosList";
import AddVideos from "../pages/VideosList/AddVideos";
import MainPage from "../pages/MainPage";
import Login from "../pages/Login/Login"
export const privateRoutes = [
    {path: "/videos", element: <Vides/>, exact: true},
    {path: "/add-videos", element: <AddVideos/>, exact: true},
    {path: "/", element: <MainPage/>, exact: true}
]
export const publicRoutes = [
    {path: "/login", element: <Login/>, exact: true},
]
