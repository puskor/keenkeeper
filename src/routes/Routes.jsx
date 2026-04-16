import { createBrowserRouter } from "react-router";
import HomePage from "../pages/HomePage";
import MainLayout from "../layout/MainLayout";
import Details from "../components/details/Details";
import TimeLine from "../pages/TimeLine";
import StatusPage from "../pages/StatusPage";
import Error from "../components/error/Error";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
    children:[
        {
            index:true,
            element:<HomePage/>
        },
        {
            path:"/:friendId",
            element:<Details/>,
            loader:()=>fetch("/data.json")
        },
        {
            path:"/timeline",
            element:<TimeLine/>
        },
        {
            path:"/status",
            element:<StatusPage/>
        }
    ],
    errorElement:<Error/>
  },
]);
