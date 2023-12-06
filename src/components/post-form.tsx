import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";

import { Separator } from "@/components/ui/separator";
import { Button } from "./ui/button";

const postForm = () => {
  return (
    <div>
      <div>
        <p className="text-center py-3 text-base font-medium border-b border-gray-300">
          For you
        </p>
      </div>

      <div className="mx-auto flex container p-5 w-full border-b border-gray-300">
        <div className="w-full">
          <div className="flex pb-3">
            <Avatar>
              <AvatarImage src="#" />
              <AvatarFallback>JB</AvatarFallback>
            </Avatar>
            <input
              type="text"
              placeholder="What is happening..."
              className="ml-6 text text-xl font-lightborder-transparent focus:outline-none focus:border-[desiredColor]"
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
          <Button className="bg-[#57BAAB] w-20 h-9 rounded-3xl">Post</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default postForm;