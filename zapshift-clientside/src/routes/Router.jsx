import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Coverage from "../pages/Coverage";
import SignIn from "../pages/Auth/SignIn";
import Register from "../pages/Auth/Register";
import AuthLayout from "../layouts/AuthLayout";
import SendAParcel from "../pages/SendAParcel";
import PrivateRoute from "./PrivateRoute";
import DashboardLayout from "../layouts/DashboardLayout";
import MyParcels from "../pages/Dashboard/MyParcels";
import Payment from "../components/payment/Payment";
import PaymentHistory from "../components/payment/PaymentHistory";
import PaymentSuccess from "../components/payment/PaymentSuccess";
import PaymentCancelled from "../components/payment/PaymentCancelled";

export const Router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      { index: true, Component: Home},
      {path: 'coverage', Component: Coverage,
        loader: () => fetch('/public/data/serviceCenters.json')
        .then(res => res.json())
      },
      {path: 'send-parcel', element:<PrivateRoute><SendAParcel></SendAParcel></PrivateRoute>,
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
},
{
  path: 'dashboard',
  element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
  children: [
    {
      path: 'my-parcels', Component:MyParcels
    },
    {

      path: 'payment/:parcelId',
      Component: Payment
    },
    {
      path: 'payment-history',
      Component: PaymentHistory
    },
    {
      path: 'payment-success',
      Component: PaymentSuccess
    },
    {
      path: 'payment-cancelled',
      Component: PaymentCancelled
    }
  ]

}
     
]);
