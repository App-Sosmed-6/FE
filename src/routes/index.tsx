import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "@/pages/posting/home-page";
import PostDetails from "@/components/post-details";
import StoryDetails from "@/components/story-details";
 
export default function Router() {
  const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
      },
    {
        path: "/post-details",
        element: <PostDetails />,
      },
    {
        path: "/story-details",
        element: <StoryDetails />,
      },
  ]);
 
  return <RouterProvider router={router} />;
}