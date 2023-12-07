import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "@/pages/posting/home-page";
import PostDetails from "@/pages/posting/post-details";
import StoryDetails from "@/pages/posting/story-details";
import ProfileUser from "@/pages/user/profile";
 
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
    {
        path: "/profile",
        element: <ProfileUser />,
      },
  ]);
 
  return <RouterProvider router={router} />;
}