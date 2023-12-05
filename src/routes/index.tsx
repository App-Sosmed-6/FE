import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "@/components/layout";
 
export default function Router() {
  const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
      },
  ]);
 
  return <RouterProvider router={router} />;
}