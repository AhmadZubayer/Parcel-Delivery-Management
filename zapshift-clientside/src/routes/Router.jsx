import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../pages/Home";
import Coverage from "../pages/Coverage";

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
}
     
]);
