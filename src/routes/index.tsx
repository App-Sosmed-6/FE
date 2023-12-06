import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HeroSection from "@/pages/auth";
import HomePage from "@/pages/posting/home-page";
 
export default function Router() {
  const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/HeroSection",
        element: <HeroSection />,
      },
  ]);
 
  return <RouterProvider router={router} />;
}