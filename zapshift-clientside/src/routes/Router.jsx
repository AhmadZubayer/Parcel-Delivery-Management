import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../pages/Home";
import Coverage from "../pages/Coverage";
import SignIn from "../pages/Auth/SignIn";
import Register from "../pages/Auth/Register";
import AuthLayout from "../layouts/AuthLayout";

export const Router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      { index: true, Component: Home},
      {path: 'coverage', Component: Coverage,
        loader: () => fetch('/public/data/serviceCenters.json')
        .then(res => res.json())
      }
    ]
},
{
  path: '/',
  Component: AuthLayout,
  children: [
    {
      path: 'signin', Component: SignIn
    },
    {
      path: 'register', Component: Register
    }
  ]
}
     
]);
