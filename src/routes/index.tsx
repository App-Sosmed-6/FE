import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "@/components/layout";
import LayoutHome from "@/components/layout-home";
 
export default function Router() {
  const router = createBrowserRouter([
    {
        path: "/",
        element: <LayoutHome />,
      },
  ]);
 
  return <RouterProvider router={router} />;
}