import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/error-page/error-page";
import App from "../app";
import Login from "../pages/login/login";
import PatientSearch from "../pages/patient-search/patient-search";
import PatientLanding from "../pages/patient-landing/patient-landing";
import Visits from "../pages/visits/visits";
import PatientDashboard from "../pages/patient-dashboard/patient-dashboard";
import ProgramEnrollment from "../pages/program-enrollment/program-enrollment";
import PatientInfo from "../components/patient-info/patient-info";

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
      path: 'patient-dashboard',
      element: <PatientDashboard />,
      loader: ({params})=>{
        return params;
      },
      children: [
        {
          path: ':uuid/dashboard',
          element: <PatientLanding/>,
          loader: ({params})=>{
              return params;
          }
        },
        {
          path: ':uuid/patient-info',
          element: <PatientInfo />,
          loader: ({params})=>{
              return params;
          }
        },
        {
          path: ':uuid/visits',
          element: <Visits/>,
          loader: ({params})=>{
              return params;
          }
        },
        {
          path: ':uuid/enrollments',
          element: <ProgramEnrollment/>,
          loader: ({params})=>{
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