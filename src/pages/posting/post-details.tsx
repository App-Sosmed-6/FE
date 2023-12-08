import {
    Avatar,
    AvatarFallback,
    AvatarImage,
  } from "@/components/ui/avatar";
  
  import { Separator } from "@/components/ui/separator";
  import { Button } from "../../components/ui/button";

const PostDetails = () => {

  return (
    <div className="w-full container bg-white h-72 flex items-center justify-center rounded-xl ">
        <div className="w-full mx-auto">
          <div className="flex pb-3">
            <Avatar>
              <AvatarImage src="#" />
              <AvatarFallback>JB</AvatarFallback>
            </Avatar>
            <input
              type="text"
              placeholder="What is happening..."
              className="ml-6 text text-xl font-light border-transparent focus:outline-none focus:border-[desiredColor]"
            />
          </div>

          <div className="py-2">
            <Separator />
          </div>

          <div className="flex justify-between items-center py-4">
            <div className="flex">
              <img src="src/assets/icon-footer-4.png" alt="icon select image" className="w-6 h-6"/>
              <p className="ml-6 whitespace-nowrap">Select image...</p>
            </div>
            <Button className="bg-[#57BAAB] w-28 h-9 rounded-3xl">Post</Button>
          </div>
        </div>
    </div>
  )
}

export default PostDetails;