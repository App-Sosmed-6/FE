import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "@/pages/posting/home-page";
 
export default function Router() {
  const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
      },
  ]);
 
  return <RouterProvider router={router} />;
}