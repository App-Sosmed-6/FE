import LeftSidebar from "@/components/left-sidebar";
import RightSidebar from "@/components/right-sidebar";
import PostForm from "@/pages/posting/post-form";
import StoryForm from "@/pages/posting/story-form";
import CommentForm from "@/pages/posting/comment-form";

const HomePage = () => {
  return (
    <div className="container w-full h-screen grid grid-cols-12 bg-[#FAFAFA] font-poppins">
      <LeftSidebar/>

      <div className="col-start-4 col-span-6 bg-white overflow-y-auto">
        <PostForm/>
        <StoryForm/>
        <CommentForm/>
      </div>

      <RightSidebar/>
    </div>
  )
}

export default HomePage;