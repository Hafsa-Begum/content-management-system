import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../layout/Main.jsx";
import Contents from "../Pages/Main/Contents.jsx";
import Home from "../Pages/Main/Home.jsx";
  
const routes = createBrowserRouter([
    {
        path: '/',
        element: (<Main/>),
        children:[
            {
                path: "/",
                element: <Home/>,
              },
              {
                path: "contents",
                element: <Contents/>,
              },
        ]
    }
  ]);

  export default routes;