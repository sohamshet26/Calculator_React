import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import Standard from "./Standard";
import Form from "./Form"
import Projectpoc from "./projectpoc";
// const route=createBrowserRouter([
//   {
//     path:"/",
//     element:<App/>,
//     errorElement:<h1>no found </h1>,
//     children:[
//       {
//         path:"/standard/",
//         element:<Standard/>,
//         errorElement:<h1>no found</h1>
//       },
//     ]
//   }
// ]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* <RouterProvider router={route}/> */}
        {/* <Form/> */}
        <Projectpoc/>
  </StrictMode>
);
