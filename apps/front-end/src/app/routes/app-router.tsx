import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/error-page/error-page";
import App from "../app";
import Login from "../pages/login/login";
import PatientSearch from "../pages/patient-search/patient-search";

export const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage/>,
      children:[
        {
        path: 'patient-search',
        element: <PatientSearch/>
        }
      ]
    },
    {
      path: 'login',
      element: <Login/>
    }
]);