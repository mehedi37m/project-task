import {
    createBrowserRouter,
   
  } from "react-router-dom";
import Home from "../Components/Home/Home";
import Main from "../Main/Main";
import SingleUser from "../Components/SingleUser/SingleUser";
import From from "../Components/From/From";
import ErrorPage from "../Components/ErrorPage/ErrorPage";

  const Router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
          path: "/",
          element:<Home></Home>
        },
        {
          path: "/users/:id",
          element:<SingleUser></SingleUser>,
          
        },
        {
          path: "/addUser",
          element:<From></From>
          
        },
      ]
    },
  ]);

export default Router;