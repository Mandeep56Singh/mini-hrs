import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/error-page/error-page";
import App from "../app";
import Login from "../pages/login/login";

export const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage/>,
      children:[
        
      ]
    },
    {
      path: 'login',
      element: <Login/>
    }
]);