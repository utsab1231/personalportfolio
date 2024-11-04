import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RouterList from "./RouterList";
function RouterProviderComponent() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RouterList.AppLayout />,
      children: [
        {
          path: "/",
          element: <>{<RouterList.Home />}</>,
        },
        {
          path: "/services",
          element: <>{<RouterList.Services />}</>,
        },
        {
          path: "/resume",
          element: <>{<RouterList.Resume />}</>,
        },
        {
          path: "/contact",
          element: <>{<RouterList.Contact />}</>,
        },
        {
          path: "/work",
          element: <>{<RouterList.Work />}</>,
        },
        {
          path:"*",
          element:<>{<RouterList.NotFound />}</>
        }
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}
export default RouterProviderComponent;
