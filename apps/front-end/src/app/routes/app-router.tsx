import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/error-page/error-page";
import App from "../app";
import Login from "../pages/login/login";
import PatientSearch from "../pages/patient-search/patient-search";
import PatientLanding from "../pages/patient-landing/patient-landing";
import Visits from "../pages/visits/visits";

export const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage/>,
      children:[
        {
        path: 'patient-search',
        element: <PatientSearch/>
        },
        {
          path: 'patient/:uuid',
          element: <PatientLanding/>,
          loader: ({params})=>{
              return params;
          }
        },
        {
          path: 'patient/:uuid/visits',
          element: <Visits/>,
          loader: ({params})=>{
              console.log('params',params);
              return params;
          }
        }
      ]
    },
    {
      path: 'login',
      element: <Login/>
    }
]);