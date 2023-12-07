import StoryDetails from "./story-details";

import { 
    Avatar, 
    AvatarFallback, 
    AvatarImage 
  } from "@/components/ui/avatar";

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTrigger,
  } from "@/components/ui/dialog";



const CommentForm = () => {
  return (
    <div>
      <div className="grid grid-cols-6">
        <div className="col-start-2 col-span-4 py-5">
          <Dialog>
            <DialogTrigger>View more comments</DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogDescription>
                   <StoryDetails/>
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
          </Dialog>
        </div>
        <div className="col-start-2">
          <Avatar>
            <AvatarImage src="#" />
            <AvatarFallback>DN</AvatarFallback>
          </Avatar>
        </div>
          <div className="col-span-4 text-black">
            <h4 className="text-base font-bold">Darwin Nunez</h4>
            <p className="text-xs">05 Desember 2023 at 20.01</p>
            <p className="w-96 text-sm font-light py-2 pr-7">
            Kelas capt manyala ee! 
            </p>
          </div>
        </div>

        <div className="grid grid-cols-6 pb-60">
          <div className="col-start-2">
            <Avatar>
              <AvatarImage src="#" />
              <AvatarFallback>JB</AvatarFallback>
            </Avatar>
          </div>
          <div className="col-span-4 text-black">
            <h4 className="text-base font-bold">Jude Bellingham</h4>
            <input
              type="text"
              placeholder="Add a comment..."
              className="text-black text-base font-light focus:outline-none focus:border-[desiredColor]"
              />
            </div>
          </div>
      </div>
  )
}

export default CommentForm;