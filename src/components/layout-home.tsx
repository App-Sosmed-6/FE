import LeftSidebar from "./left-sidebar";
import RightSidebar from "./right-sidebar";
import PostForm from "./post-form";
import StoryForm from "./story-form";
import CommentForm from "./comment-form";

const LayoutHome = () => {
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

export default LayoutHome;