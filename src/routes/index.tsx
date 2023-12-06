import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "@/components/layout";
import HeroSection from "@/pages/auth";
 
export default function Router() {
  const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
      },
      {
        path: "/HeroSection",
        element: <HeroSection />,
      },
  ]);
 
  return <RouterProvider router={router} />;
}