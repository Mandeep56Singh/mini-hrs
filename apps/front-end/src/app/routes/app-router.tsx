import { createBrowserRouter } from 'react-router-dom';
import ErrorPage from '../pages/error-page/error-page';
import App from '../app';
import Login from '../pages/login/login';
import PatientSearch from '../pages/patient-search/patient-search';
import PatientLanding from '../pages/patient-landing/patient-landing';
import Visits from '../pages/visits/visits';
import PatientDashboard from '../pages/patient-dashboard/patient-dashboard';
import ProgramEnrollment from '../pages/program-enrollment/program-enrollment';
import PatientInfo from '../components/patient-info/patient-info';
import SignUpPage from '../pages/sign-up/sign-up';
import EncounterForm from '../components/encounters/encounter-form';
import FormDashboard from '../pages/form-dashboard/form-dashboard';
import Questions from '../pages/questions/questions';
import AnswerType from '../pages/answer-type/answer-type';
import Forms from '../pages/forms/forms';
import FormBuilder from '../components/forms/form-builder/form-builder';

export const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'patient-search',
        element: <PatientSearch />,
      },
    ],
  },
  {
    path: 'patient-dashboard',
    element: <PatientDashboard />,
    loader: ({ params }) => {
      return params;
    },
    children: [
      {
        path: ':uuid/dashboard',
        element: <PatientLanding />,
        loader: ({ params }) => {
          return params;
        },
      },
      {
        path: ':uuid/patient-info',
        element: <PatientInfo />,
        loader: ({ params }) => {
          return params;
        },
      },
      {
        path: ':uuid/visits',
        element: <Visits />,
        loader: ({ params }) => {
          return params;
        },
      },
      {
        path: ':uuid/enrollments',
        element: <ProgramEnrollment />,
        loader: ({ params }) => {
          return params;
        },
      },
      {
        path: ':uuid/visits/:visitUuid/encounter/:encounterUuid/encounter-form/:encounterTypeUuid',
        element: <EncounterForm />,
        loader: ({ params }) => {
          return params;
        },
      },
    ],
  },
  {
    path: 'form-dashboard',
    element: <FormDashboard />,
    children: [
      {
        path: 'questions',
        element: <Questions />,
      },
      {
        path: 'answer-type',
        element: <AnswerType />,
      },
      {
        path: 'forms',
        element: <Forms />,
      },
      {
        path: 'forms/:formUuid',
        element: <FormBuilder />,
        loader: ({ params }) => {
          console.log('params', params);
          return params;
        },
      },
    ],
  },
  {
    path: 'login',
    element: <Login />,
  },
  {
    path: 'sign-up',
    element: <SignUpPage />,
  },
]);
