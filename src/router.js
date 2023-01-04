import { createBrowserRouter } from "react-router-dom";

import Home from './pages/Home';
import SignIn from './pages/SignIn';
import NotFound from './pages/NotFound';
import DashboardUsers from "./pages/DashboardUsers";
import DashboardReports from "./pages/DashboardReports";


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    children: [
      {
        path: '/users',
        element: <DashboardUsers />,
      },
      {
        path: '/reports',
        element: <DashboardReports />
      },
    ],
  },
  {
    path: '/signin',
    element: <SignIn />,
  },
  {
    path: '*',
    element: <NotFound />,
  }
]);


export default router;
