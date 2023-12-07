import { 
    Avatar, 
    AvatarFallback, 
    AvatarImage 
  } from "@/components/ui/avatar";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"

const ProfileStoryForm = () => {
  return (
  <div className="grid grid-cols-6 pt-7">
    <div className="flex justify-end pr-3">
      <Avatar>
        <AvatarImage src="#" />
        <AvatarFallback>JB</AvatarFallback>
      </Avatar>
    </div>
    <div className="col-span-5 text-black">

    <div className="flex justify-between items-center mr-12">
      <div>
        <h4 className="text-base font-bold">Jude Bellingham</h4>
        <p className="text-xs">05 Desember 2023 at 19.21</p>
      </div>
      <div>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <img src="src/assets/icon-8.png" alt="dropdown icon" />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="mr-24 mt-2">
            <DropdownMenuItem className="gap-3">
              <img src="src/assets/icon-10.png" alt="delete icon" />
              <p className="text-base font-medium text-black">Delete</p>
            </DropdownMenuItem>
            <DropdownMenuItem className="gap-2">
            <img src="src/assets/icon-9.png" alt="edit icon" />
              <p className="text-base font-medium text-black">Edit Post</p>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>

    <p className="w-full text-base font-light py-2">
        Hola Madridistas! It is the proudest day of my life to join the greatest club in the history of the game. I will give absolutely everything I have to help this team win. Thank you for the amazing welcome. HALA MADRID!!!
    </p>
    <img src="/src/assets/post-image.png" alt="post-image" className="pb-5 w-[475px] h-[338px]"/>
    </div>
  </div>
  )
}

export default ProfileStoryForm;