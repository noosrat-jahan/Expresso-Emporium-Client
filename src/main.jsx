import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AddCoffee from './Components/AddCoffee.jsx';
import UpdateCoffee from './Components/UpdateCoffee.jsx';
import HomeLayout from './Layouts/HomeLayout.jsx';
import ErrorPage from './Components/ErrorPage.jsx';
import Signin from './Components/Signin.jsx';
import SignUp from './Components/SignUp.jsx';
import AuthProvider from './Provider/AuthProvider.jsx';
import SignedUsers from './Components/SignedUsers.jsx';
import ViewDetails from './Components/ViewDetails.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        path: "/",
        element: <App></App>,
        loader: () => fetch('https://coffee-store-server-rho-lilac.vercel.app/coffee')
      },
      {
        path: "addcoffee",
        element: <AddCoffee></AddCoffee>
      },
      {
        path: "viewDetails/:id",
        element: <ViewDetails></ViewDetails>,
        loader: ({params}) => fetch(`https://coffee-store-server-rho-lilac.vercel.app/coffee/${params.id}`)
      },
      {
        path: "updatecoffee/:id",
        element: <UpdateCoffee></UpdateCoffee>,
        loader: ({ params }) => fetch(`https://coffee-store-server-rho-lilac.vercel.app/coffee/${params.id}`)
      },
      {
        path: "*",
        element: <ErrorPage></ErrorPage>
      },
      {
        path: "signin",
        element: <Signin></Signin>
      },
      {
        path: "signup",
        element: <SignUp></SignUp>
      },
      {
        path: "users",
        element: <SignedUsers></SignedUsers>,
        loader: ()=>fetch('https://coffee-store-server-rho-lilac.vercel.app/users/')
      }
    ]
  },


]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
