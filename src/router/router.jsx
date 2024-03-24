import { createBrowserRouter } from "react-router-dom"
import Main from "../layouts/Main";
import Index from '../pages/Index'
import LogIn from './../pages/LogIn';
import Register from './../pages/Register';
import Home from './../pages/Home';
import EditProfile from './../pages/EditProfile';
import BudgetMaker from './../pages/BudgetMaker';
import BudgetView from './../pages/BudgetView';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        path: '/',
        element: <Index />
      },
      {
        path: '/login',
        element: <LogIn />
      },
      {
        path: '/register',
        element: <Register />
      },
      {
        path: '/editprofile',
        element: <EditProfile />
      },
      {
        path: '/home',
        element: <Home />
      },
      {
        path: '/budgetmaker',
        element: <BudgetMaker />
      },
      
      {
        path: '/budgetview',
        element: <BudgetView />
      },
    ]
  },
])

export default router;