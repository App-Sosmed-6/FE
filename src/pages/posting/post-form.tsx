import {useState} from "react";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";

import { Separator } from "@/components/ui/separator";
import { Button } from "../../components/ui/button";

const PostForm = () => {
  const [description, setDescription] = useState("");


  function handlePostDetails(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const body = {
      description: description
    };
  }
  
  return (
    <div>
      <p className="text-center py-3 text-base font-medium border-b border-gray-300">
          For you
      </p>

      <div className="mx-auto flex p-5 w-full border-b border-gray-300">
        <form className="w-full" onSubmit={(e => handlePostDetails(e))}>
          <div className="flex pb-3">
            <Avatar>
              <AvatarImage src="#" />
              <AvatarFallback>JB</AvatarFallback>
            </Avatar>
            <input
              type="text"
              placeholder="What is happening..."
              className="ml-6 text text-xl font-light border-transparent focus:outline-none focus:border-[desiredColor]"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
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
            <Button type="submit" className="bg-[#57BAAB] w-20 h-9 rounded-3xl">Post</Button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default PostForm;