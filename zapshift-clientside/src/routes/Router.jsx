import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../pages/Home";

export const Router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      { index: true, Component: Home}
    ]
}
     
]);
