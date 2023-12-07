import LeftSidebar from "@/components/left-sidebar";
import RightSidebar from "@/components/right-sidebar";
import EditProfile from "./edit-profile";
import ProfileStoryForm from "./profile-story-form";
import ProfileCommentForm from "./profile-comment-form";

const ProfileUser = () => {
  return (
    <div>
      <div className="container w-full h-screen grid grid-cols-12 bg-[#FAFAFA] font-poppins">
        <LeftSidebar/>

        <div className="col-start-4 col-span-6 bg-white overflow-y-auto">
          <EditProfile/>
          <div className="border-b border-gray-300 pb-3">
          <ProfileStoryForm/>
          <ProfileCommentForm/>
          </div>
        </div>

        <RightSidebar/>
      </div>
    </div>
  )
}

export default ProfileUser;