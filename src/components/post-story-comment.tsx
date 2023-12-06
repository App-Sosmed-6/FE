import { 
    Avatar, 
    AvatarFallback, 
    AvatarImage 
  } from "@/components/ui/avatar";

import { Separator } from "@/components/ui/separator";

const postStoryComment = () => {
  return (
    <div>
      <div className="grid grid-cols-6">
        <div className="col-start-2 col-span-4">
          <p className="py-5">View more comments</p>
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
          <p className="w-64 text-base font-light py-2">
            Hola Madridistas! It is the proudest day of my life to join the greatest club in the history of the game.
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
          <h4 className="text-base font-bold">Jude Bellinghem</h4>
          <input
            type="text"
            placeholder="Add a comment..."
            className="text-black text-base font-light focus:outline-none focus:border-[desiredColor]"
          />
          <div className="pt-5">
            <Separator className="w-80"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default postStoryComment